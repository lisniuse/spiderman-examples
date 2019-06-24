const fs = require('fs-extra');
const articleTpl = require('./articleTpl/tpl');
const articleIndex = require('./articleTpl/index');

module.exports = function (config = {}) {
  // 网站基地址，必填。
  config.baseUrl = 'https://xueqiu.com'
  // 网站域名，不填写则自动生成。
  config.domain = 'xueqiu.com';
  // 文章副标题，不填写则自动生成。
  config.articleSubTitle = ' - 雪球';
  // 爬取规则，可以填写内置分析器类型类自动获取数据
  config.rules = [{
    name: 'article',
    check: '.article__bd .article__bd__title',
    fields: {
      title: '.article__bd .article__bd__title',
      content: '.article__bd .article__bd__detail'
    }
  }];
  config.maxUrl = 10000;
  // 爬取的内容输出目录，不填写则不输出。
  config.outDir = `./${config.domain}`;
  const outDir = `${__dirname}/${config.outDir}`;

  // 生命周期开始
  config.started = function (data) {
    const indexPath = `${outDir}/index.html`;
    fs.copySync(`${__dirname}/articleTpl/lib`, `${outDir}/lib`);
    fs.copySync(`${__dirname}/articleTpl/data.js`, `${outDir}/data.js`);
    fs.outputFileSync(indexPath, articleIndex(data));
  };

  // 爬取数据回调，可以自定义存储。
  config.callback = function (result, url) {
    const filename = result.fields.title.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
    const htmlFileName = `/${filename}.html`;
    const filepath = `${outDir}/${result.name}${htmlFileName}`;
    const strCode = fs.readFileSync(`${outDir}/data.js`);
    let data = eval(`(${strCode})()`);
    if (!fs.existsSync(filepath)) {
      data.push({
        title: result.fields.title,
        link: `${result.name}${htmlFileName}`
      });
      let dataTpl = require(`${__dirname}/articleTpl/dataTpl.js`);
      fs.outputFileSync(`${outDir}/data.js`, dataTpl(JSON.stringify(data)));
      fs.outputFileSync(filepath, articleTpl({
        olink: url,
        title: result.fields.title,
        content: result.fields.content
      }));
    }
  };

}