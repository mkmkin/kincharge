import { tool } from 'ai';
import { z } from 'zod';
import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

export const webSearch = tool({
  description: 'Search the web for relevant information',
  parameters: z.object({
    query: z
      .string()
      .min(1)
      .max(200)
      .describe('The search query to look up on the web'),
  }),
  execute: async ({ query }) => {
    const searchResponse = await app.search(query, {
      limit: 10, // adjust based on how many results you want
    });

    if (!searchResponse.success) {
      throw new Error(`Search failed: ${searchResponse.error}`);
    }

    return searchResponse.data;

    /*
    return {
      type: 'tool-result',
      toolName: 'webSearch',
      content: searchResponse.data,
      experimental_hidden: true,
    };
    */
  },
});
