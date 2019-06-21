module.exports = function(result) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${result.title}</title>
    <style>
      html, body {
        padding: 0px;
        margin: 0px;
        color: #333333;
        background-color: #f8fafc;
      }
      article {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        font-size: 14px;
        overflow: hidden;
        line-height: 1.6;
      }
      article pre {
        width: 100%;
        overflow: auto;
      }
      article img {
        max-width: 100%;
      }
      .main {
        padding: 20px;
        box-sizing: border-box;
        margin: 0px auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 800px;
        border-radius: 6px;
        background-color: #ffffff;
      }
      header {
        padding-bottom: 10px;
        border-bottom: 1px solid #eeeeee;
      }
      header h1 {
        font-size: 24px;
      }
      header .olink {
        font-size: 12px;
        color: #a8a8a8;
      }
      header .olink a {
        color: #a8a8a8;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <header>
        <h1>${result.title}</h1>
        <span class="olink">原文地址：<a target="_blank" href="${result.olink}">${result.olink}</a></span>
      </header>
      <article>
        ${result.content}
      </article>
    </div>
  </body>
  </html>
  `;
};