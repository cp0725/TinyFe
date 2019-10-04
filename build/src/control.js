
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
  const linkListLength = document.getElementsByTagName('link').length
  for (var i = 0; i < linkListLength; i++) {
    const linkList = document.getElementsByTagName('link')
    document.getElementsByTagName('head')[0].removeChild(linkList[0])
  }

  const scriptListLength = document.getElementsByTagName('script').length
  for (var i = 0; i < scriptListLength; i++) {
    const scriptList = document.getElementsByTagName('script')
    document.getElementsByTagName('body')[0].removeChild(scriptList[0])
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
  }
  if (fromPath === '/app2' && toPath === '/app1') {
    delApp()
    rebder(demo1)
  }
}

location.hash.slice(1, 6) === '/app1' && rebder(demo1)
location.hash.slice(1, 6) === '/app2' && rebder(demo2)