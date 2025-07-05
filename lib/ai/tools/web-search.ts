import { tool } from 'ai';
import { z } from 'zod';

export const webSearch = tool({
  description: 'Search the web for relevant information',
  parameters: z.object({
    query: z.string().min(1).max(200).describe('The search query'),
  }),
  execute: async ({ query }) => {
    console.log('webSearch tool executed');
    const response = await fetch(
      `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          'Accept': 'application/json',
          'X-Subscription-Token': process.env.BRAVE_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Brave Search API error: ${response.statusText}`);
    }

    //const data = await response.json();

    //const results = data.web?.results || [];

    const results = await response.json();

    return results;
    
    /*
    return results.slice(0, 10).map((result: any) => ({
      title: result.title,
      url: result.url,
      content: result.description?.slice(0, 1000) || '',
      publishedDate: result.date || null, // Brave doesn't always return this
    }));
    */
  
  },
});