btn = document.querySelector('.search-btn')
search = document.querySelector('.search')





btn.onclick = () => {
  if (search.classList.contains('active')) {
    searchTxt = document.querySelector('.search-text').value
    console.log(searchTxt)
    if (searchTxt == "anime girls") {
      search.style.marginBottom = "400px";
    }
    else if (searchTxt != "") {
      window.location = `https://www.google.com/search?q=${searchTxt}`;
    }
    search.classList.remove('active')
  }
  else {
    search.classList.add('active')
  }
}

loadTxt = document.querySelector('.load-text')
blur = document.querySelector('.blur')
let load = 0

const int = setInterval(() => {
  load++
  loadTxt.innerText = `${load}%`
  blur.style.backdropFilter = `blur(${scale(load, 0, 100, 40, 0)}px)`
  loadTxt.style.opacity = `${scale(load, 0, 100, 1, 0)}`

  if (load == 100) {
    clearInterval(int)
    blur.remove()
    loadTxt.remove()
  }
}, 10)

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}