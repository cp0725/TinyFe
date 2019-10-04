const fs = require('fs')
const cheerio = require('cheerio')

// cheerio 只可以获取到 head 和 body 里的一级元素
function getStatic(htmlConfig){
  let tagList = []
  htmlConfig.map((i, item) => {
    tagList.push({
      type: item.type,
      data: item.data,
      name: item.name,
      attribs: item.attribs
    })
  })

  // 去掉 https 和 script
  const loadList = tagList.filter(item => item.name === 'link' && item.attribs.rel === 'preload')
  const styleList = tagList.filter(item => item.name === 'link' && item.attribs.rel === 'stylesheet')
  const scriptList = tagList.filter(item => item.name === 'script')
  return { loadList, styleList, scriptList }
}

const demo1_html = fs.readFileSync('../dist/demo1.html', 'utf-8')
const demo2_html = fs.readFileSync('../dist/demo2.html', 'utf-8')
const demo1_Config = cheerio(demo1_html)
const demo2_Config = cheerio(demo2_html)

const demo1 = getStatic(demo1_Config)
const demo2 = getStatic(demo2_Config)
const jsStr = `
  var demo1 = ${JSON.stringify(demo1)}
  var demo2 = ${JSON.stringify(demo2)}
`
fs.writeFileSync('../dist/tiny/config.js', jsStr)

const controlJs = fs.readFileSync('./src/control.js', 'utf-8')
fs.writeFileSync('../dist/tiny/control.js', controlJs)