$(document).ready(function(e){
  $('.project h2 a').on('click', () => {
    event.preventDefault()

    let text = $(event.target).text();
    console.log(text)

    $('.project-view').css('left', '57%')
  })

  $('.exit').on('click', () => {
    $('.project-view').css('left', '100%')
  })
})
