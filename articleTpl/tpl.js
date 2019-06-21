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
        padding: 40px;
        box-sizing: border-box;
        width: 100%;
        font-size: 16px;
        overflow: hidden;
        line-height: 1.6;
      }
      article pre {
        width: 100%;
        overflow: auto;
      }
      article img {
        max-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .main {
        padding: 20px;
        box-sizing: border-box;
        margin: 0px auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 900px;
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
      .rich-text img.small {
        cursor: url(//s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/zoomin_805e9d7.cur),pointer;
        cursor: -moz-zoom-in;
        cursor: zoom-in;
        max-width: 40%
    }
    
    .rich-text img.large {
        cursor: url(//s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/zoomout_e5f236b.cur),pointer;
        cursor: -moz-zoom-out;
        cursor: zoom-out
    }
    
    .rich-text h1,.rich-text h2,.rich-text blockquote {
        margin: .5em 0;
        *margin: 20px 0 0;
        line-height: 1.6
    }
    
    .rich-text p,.rich-text div {
        line-height: 28px;
        margin: 0;
        margin-bottom: 20px
    }
    
    .rich-text p>img,.rich-text div>img {
        margin-top: 10px
    }
    
    .rich-text h1,.rich-text h2 {
        font-weight: 700;
        line-height: 24px;
        padding-left: 12px;
        font-size: 18px;
        position: relative
    }
    
    .rich-text h1:empty,.rich-text h2:empty {
        display: none
    }
    
    .rich-text .video-hide {
        display: none
    }
    
    .rich-text p br:only-child,.rich-text div br:only-child,.rich-text span br:only-child {
        display: none
    }
    
    .rich-text b,.rich-text strong {
        font-weight: 700
    }
    
    .rich-text h1:after,.rich-text h2:after {
        content: "";
        width: 4px;
        height: 18px;
        background: #ed4040;
        top: 3px;
        position: absolute;
        left: 0
    }
    
    .rich-text blockquote {
        padding: 10px;
        color: #a8a8a8;
        background: #f0f0f0
    }
    
    .rich-text img {
        display: block;
        max-width: 100%;
        height: auto;
        margin-bottom: 10px
    }
    
    .rich-text p {
        word-wrap: break-word;
        display: block
    }
    
    .rich-text ul {
        margin-left: 20px;
        list-style: circle outside none;
        line-height: 1.6
    }
    
    .rich-text ul p {
        margin: 0
    }
    
    .rich-text ol {
        margin-left: 20px;
        list-style: decimal outside none;
        line-height: 1.6
    }
    
    .rich-text ol p {
        margin: 0
    }
    
    .rich-text .icon-img {
        color: #aaa;
        font-size: 16px;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        line-height: 16px
    }
    
    .rich-text .fold-btn {
        font-size: 16px;
        color: #666;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer
    }
    
    .rich-text .fold-btn i {
        margin-right: 6px;
        color: #aaa;
        font-size: 16px
    }
    
    .rich-text .fold-btn+br {
        display: none
    }
    </style>
  </head>
  <body>
    <div class="main">
      <header>
        <h1>${result.title}</h1>
        <span class="olink">原文地址：<a target="_blank" href="${result.olink}">${result.olink}</a></span>
      </header>
      <article class="rich-text">
        ${result.content}
      </article>
    </div>
  </body>
  </html>
  `;
};