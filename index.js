import getUrls from 'get-urls';
import Parser from '@postlight/parser';
const l = console.log;

const urls = getUrls(process.argv[2], { requireSchemeOrWww: true });

const headers = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
};

urls.forEach(url => {
  Parser.parse(url, { contentType: 'markdown', headers: headers })
    .then(_ =>
      `Title: ${_.title}
Author: ${_.author}
Url: ${_.url}
Content: ${_.content}`
    )
    .then(l)
    .catch(() => `ParserError: ${url}`);
});
