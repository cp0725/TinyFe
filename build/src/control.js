
function rebder(params) {
  params.styleList.map(item => {
    var tag = document.createElement(item.name)
    for (var key in item.attribs) {
      tag[key] = item.attribs[key]
    }
    document.getElementsByTagName('head')[0].appendChild(tag)
  })

  params.scriptList.map(item => {
    var tag = document.createElement(item.name)
    for (var key in item.attribs) {
      tag[key] = item.attribs[key]
    }
    document.getElementsByTagName('body')[0].appendChild(tag)
  })
}

function delApp() {
  const head = document.getElementsByTagName('head')[0]
  const linkListLength = head.getElementsByTagName('link').length
  for (var i = 0; i < linkListLength; i++) {
    const linkList = head.getElementsByTagName('link')
    head.removeChild(linkList[0])
  }
  const body = document.getElementsByTagName('body')[0]
  const scriptListLength = body.getElementsByTagName('script').length
  for (var i = 0; i < scriptListLength; i++) {
    const scriptList = body.getElementsByTagName('script')
    body.removeChild(scriptList[0])
  }

  document.getElementById('app').innerHTML = ''
}

window.hashChange = function (to, from, next) {

  const fromPath = from.path.slice(0, 5)
  const toPath = to.path.slice(0, 5)
  console.log(from.path)

  if (fromPath === '/app1' && toPath === '/app2') {
    delApp()
    rebder(demo2)
    getPreload(demo1.loadList)
  }
  if (fromPath === '/app2' && toPath === '/app1') {
    delApp()
    rebder(demo1)
    getPreload(demo2.loadList)
  }
}

// Preload 预加载一次加载全部不生效
function getPreload(loadList) {
  loadList.map(item => {
    var tag = document.createElement(item.name)
    for (var key in item.attribs) {
      tag[key] = item.attribs[key]
    }
    document.getElementsByTagName('head')[0].appendChild(tag)
  })  
}

if (location.hash.slice(1, 6) === '/app1'){
  rebder(demo1)
  getPreload(demo2.loadList)
}
if (location.hash.slice(1, 6) === '/app2'){
  rebder(demo2)
  getPreload(demo1.loadList)
}