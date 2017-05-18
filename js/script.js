$(document).ready(function(){
  $('.project h2 a').on('click', () => {
    event.preventDefault()

    let text = $(event.target).text();
    console.log(text)

    $('.project-view').css('left', '100%')
  })

  $('.exit').on('click', () => {
    $('.project-view').css('right', 0)
  })

})
