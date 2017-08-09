// Text Shadow Mouse Moving Effect
const myName = document.querySelector('.contact-info li:first-child')
const body = document.querySelector('body')
const walk = 20;

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = body
  let {offsetX: x, offsetY: y} = e

  if(this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / width * walk) - (walk / 2))

  myName.style.textShadow = `
    ${yWalk}px ${xWalk}px 0 rgba(0, 0, 0, 0.3)
  `
}

function resetShadow() {
  myName.style.textShadow = `0 0 0 rgba(0,0,0,0.3)`
}

body.addEventListener('mousemove', shadow)
window.addEventListener('mouseout', resetShadow)
