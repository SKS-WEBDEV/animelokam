export async function getHomePage() {
  const res = await fetch("https://hianime.lc/ajax/home", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://hianime.lc/home",
      "Accept": "application/json, text/plain, */*"
    }
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}