async function fetchHtmlAsText(t) {
  const e = await fetch(t);
  return await e.text();
}

export default async function loadHtml(t, e) {
  document.querySelector(t).innerHTML = await fetchHtmlAsText(e);
}