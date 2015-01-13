export default (urls) => {
  var element = document.querySelector('#gifs')
  element.innerHTML = urls.map(url => `<img src="${url}">`).join('')
}
