function openTab(event,url) {
  var target = event.currentTarget
  var iframe = target.parentElement.querySelector(".content")
  var tabs = target.parentElement.getElementsByClassName("tab")

  iframe.src = url
  for (i in tabs) {
    tabs[i].style["border-bottom-color"] = "#cccccc"
  }

  console.log(target)
  target.style["border-bottom-color"] = "white"
}

window.test = 3