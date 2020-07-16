function resize() {
  let rem = document.documentElement.clientWidth / 25;
  document.querySelector('html').style.fontSize = rem + 'px'
}
window.onload = function () {
  resize()
}
window.onresize = function () {
  resize()
}