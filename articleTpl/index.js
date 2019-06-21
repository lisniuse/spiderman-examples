module.exports = function(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${data.title}</title>
    <script src="./lib/vue.min.js"></script>
    <script src="./data.js"></script>
    <style>
      html, body {
        padding: 0px;
        margin: 0px;
        color: #333333;
        background-color: #f8fafc;
      }
      .article-list ol li {
        padding: 5px;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        color: gray;
      }
      .article-list ol li a {
        font-size: 14px;
        color: #575757;
        text-decoration: none;
        transition: all 0.3s;
      }
      .article-list ol li a:hover {
        color: #000;
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
        <h1>${data.title}</h1>
      </header>
      <div class="article-list">
        <ol>
          <li v-for="(item, index) in data" :key="index"><a :href="item.link">{{item.title}}</a></li>
        </ol>
      </div>
    </div>
    <script src="./lib/init.js">
    </script>
  </body>
  </html>
  `;
};