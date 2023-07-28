import getUrls from 'get-urls'
import Parser from '@postlight/parser';
const l = console.log

const urls = getUrls(process.argv[2], { requireSchemeOrWww: true });

urls.forEach(url =>
        Parser.parse(url, { contentType: 'markdown' })
                .then(_ =>
`Title: ${_.title}
Author: ${_.author}
Content: ${_.content}`
                )
                .then(l)
                .catch(() => `ParserError: ${url}`)
)
