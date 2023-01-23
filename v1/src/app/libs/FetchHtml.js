/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
async function fetchHtmlAsText(url) {
  const response = await fetch(url);
  return await response.text();
}

export default async function loadHtml(element, file) {
  const content = document.querySelector(element);
  content.innerHTML = await fetchHtmlAsText(file);
}

// Example
// loadHtml('.content', 'views/file.html');