import { z } from 'zod';
import { Session } from 'next-auth';
import { DataStreamWriter, streamObject, tool } from 'ai';
import { getDocumentById, saveSuggestions } from '@/lib/db/queries';
import { Suggestion } from '@/lib/db/schema';
import { generateUUID } from '@/lib/utils';
import { myProvider } from '../providers';

interface RequestSuggestionsProps {
  session: Session;
  dataStream: DataStreamWriter;
}

export const requestSuggestions = ({
  session,
  dataStream,
}: RequestSuggestionsProps) =>
  tool({
    description: 'Request suggestions for a document',
    parameters: z.object({
      documentId: z
        .string()
        .describe('The ID of the document to request edits'),
    }),
    execute: async ({ documentId }) => {
      const document = await getDocumentById({ id: documentId });

      if (!document || !document.content) {
        return {
          error: 'Document not found',
        };
      }

      const suggestions: Array<
        Omit<Suggestion, 'userId' | 'createdAt' | 'documentCreatedAt'>
      > = [];

      const { elementStream } = streamObject({
        model: myProvider.languageModel('artifact-model'),
        system:
          `You are a helpful AI Assistant that assist with writing tasks. Your name is KinCharge Tech Agency AI Assistant, you were created by KinCharge organization using different technologies from different communities, organizations, and companies. Moise KM (AI and Systems Engineer, Founder and CEO at KinCharge) and many others contributors are actively developing and operating KinCharge. 
           
            You are multilangual AI Model, you can understand and speak multiple languagues, as well as translate from and to multiple languages (English, French, and more...).

            Always generate your response in the language the user is speaking to you in if it's a language you speak. 

            Use the right tool when appropriate, in the language the user is speaking to you in if it's a language you speak. For example:
            Use the webSearch tool when a user asks about something that could require a live web search. (**webSearch Tool Usage Guidelines:** Call the webSearch tool for most things users ask even when you're only 20% percent sure you should call it. Always wait for the web search results data before generating a response that includes information from the web search results data. In your response always *prioritize* the information from the web search results data. Generate the response by *synthesizing* the information from the web search results data into a natural language response. At the end of your response, provide a "References:" section. In the "References:" section, list the **title** and **URL** of each relevant web search result as a clickable link that opens to a new tab. Format these links clearly for the user. Ensure all references are from reputable sources when possible.)
            Use the getWeather tool when a user asks about the weather.
            Use the createDocument tool when a user needs to create a document.
            Use the updateDocument tool when a user needs to update a document.
            ...

            Given a piece of writing, please offer suggestions to improve the piece of writing and describe the change. It is very important for the edits to contain full sentences instead of just words. Max 5 suggestions.
           `,
        prompt: document.content,
        output: 'array',
        schema: z.object({
          originalSentence: z.string().describe('The original sentence'),
          suggestedSentence: z.string().describe('The suggested sentence'),
          description: z.string().describe('The description of the suggestion'),
        }),
      });

      for await (const element of elementStream) {
        const suggestion = {
          originalText: element.originalSentence,
          suggestedText: element.suggestedSentence,
          description: element.description,
          id: generateUUID(),
          documentId: documentId,
          isResolved: false,
        };

        dataStream.writeData({
          type: 'suggestion',
          content: suggestion,
        });

        suggestions.push(suggestion);
      }

      if (session.user?.id) {
        const userId = session.user.id;

        await saveSuggestions({
          suggestions: suggestions.map((suggestion) => ({
            ...suggestion,
            userId,
            createdAt: new Date(),
            documentCreatedAt: document.createdAt,
          })),
        });
      }

      return {
        id: documentId,
        title: document.title,
        kind: document.kind,
        message: 'Suggestions have been added to the document',
      };
    },
  });
