// utils/brave-search.ts

export async function braveSearch(query: string) {
  const apiKey = process.env.BRAVE_API_KEY;

  const res = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=3`, {
    headers: {
      'Accept': 'application/json',
      'X-Subscription-Token': apiKey!,
    },
  });

  if (!res.ok) {
    throw new Error(`Brave Search API error: ${res.status}`);
  }

  const data = await res.json();

  const results = data.web?.results || [];
  return results.map((r: any) => ({
    title: r.title,
    url: r.url,
    snippet: r.description,
  }));
}