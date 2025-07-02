// tools/search-tool.ts

import { braveSearch } from '@/lib/brave-search';

export const searchTool = async ({ query }: { query: string }) => {
  const results = await braveSearch(query);

  // Format as plain text to inject into LLM context only
  const formatted = results
    .map((r, i) => `(${i + 1}) "${r.title}"\n${r.snippet}\n${r.url}`)
    .join('\n\n');

  return {
    text: `Recent web search results:\n\n${formatted}\n\n(These results are temporary and not stored.)`,
  };
};