export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
    <script src="bundle.js"></script>
  </html>
`);
