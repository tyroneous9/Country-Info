const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9acbe30eb24f4bb79291bb97f9f06eb3');

// Query /v2/everything with sources and domains (valid combination)
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log("Everything Response:", response);
}).catch(error => console.error(error));

// Query sources with category, language, and country (without sources)
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log("Sources Response:", response);
}).catch(error => console.error(error));
