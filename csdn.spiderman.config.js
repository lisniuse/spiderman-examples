const fs = require('fs-extra');

const htmlWarp = function(result) {
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
        width: 100%;
        font-size: 14px;
        overflow: hidden;
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
        border-bottom: 1px solid #eeeeee;
      }
      header h1 {
        font-size: 24px;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <header>
        <h1>${result.title}</h1>
      </header>
      <article>
        ${result.content}
      </article>
    </div>
  </body>
  </html>
  `;
}

module.exports = function (config = {}) {
  // 网站基地址，必填。
  config.baseUrl = 'https://blog.csdn.net'
  // 网站首页地址，不填写则默认取'/'。
  config.indexUrl = '/';
  // 参考文章url，一般为两个，不填写则自动搜寻。
  config.articleUrl = ['/qq_45096812/article/details/90633492', '/luodoudoudou/article/details/90634055'];
  // 网站域名，不填写则自动生成。
  config.domain = 'www.csdn.net';
  // 文章副标题，不填写则自动生成。
  config.articleSubTitle = ' - CSDN博客';
  // 爬取规则，可以填写内置分析器类型类自动获取数据
  config.rules = [{
    auto: config.AUTO.ARTICLE,
    url: 'https://blog.csdn.net/hejjunlin/article/details/92873179'
  }, {
    auto: config.AUTO.ARTICLE,
    url: 'https://blog.csdn.net/weixin_37914752/article/details/91884949'
  }];
  // config.rules = [{
  //   name: 'article',
  //   check: '.blog-content-box .article-header-box',
  //   fields: {
  //     title: '.blog-content-box .title-article',
  //     content: ['.blog-content-box #content_views', '.blog-content-box #js_content']
  //   }
  // }];
  // 设置最大存储url，设0或者不填写则不限制。
  config.maxUrl = 10000;
  // 爬取的内容输出目录，不填写则不输出。
  config.outDir = `./${config.domain}`;
  // 屏蔽的url，支持正则，不填写则不屏蔽。
  config.shieldsUrl = [];
  // 是否允许爬取站外链接，不填写则不允许。
  config.allowOutside = false;
  // 爬取数据回调，可以自定义存储。
  config.callback = function (result) {
    let filename = result.fields.title.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
    let filepath = `${__dirname}/${config.outDir}/${result.name}/${filename}.html`;
    if (!fs.existsSync(filepath)) {
      fs.outputFileSync(filepath, htmlWarp({
        title: result.fields.title,
        content: result.fields.content
      }));
    }
  }
}