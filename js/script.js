// Text Shadow Mouse Moving Effect
const myName = document.querySelector('.contact-info li:first-child')
const wrapper = document.querySelector('.wrapper')

function shadow(e) {
  console.log(e)
}

function resetShadow() {
  console.log('mouseout')
}

wrapper.addEventListener('mousemove', shadow)
wrapper.addEventListener('mouseout', resetShadow)
