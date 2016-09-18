(function () {
  $('#btnMenu').on('click', function () {
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  var time = 400
  var margin_top = $('#view-0').height()

  section('view-1')
  section('view-2')
  section('view-3')
  section('view-4')
  section('view-5')

  function section (section_div) {
    $('#a-' + section_div).on('click', function () {
      $('body,html').animate({
        scrollTop: $('#' + section_div).position().top - margin_top - 30
      }, time)
      $('#navbarMenu').toggleClass('header-menu-list-show')
    })
  }

  $('.menu-section').on('click', function () {
      $('.menu-section .menu-list').toggleClass('menu-list-show')
    })

  section2('view-2')
  section2('view-3')
  section2('view-4')
  section2('view-5')

  function section2 (section_div) {
    $('#b-' + section_div).on('click', function () {
      $('body,html').animate({
        scrollTop: $('#' + section_div).position().top - margin_top - 140 - 30
      }, time)
      //$('#navbarMenu').toggleClass('header-menu-list-show')
    })
  }

  var isShow = false;
  var heightShow = 100;

  $( window ).scroll(function() {
    //console.log($( document ).scrollTop())
    //console.log("hola")
    if ( $( document ).scrollTop() > heightShow && isShow ==false ) { 
      //$('.header').toggleClass('header-show')
      $('.header').addClass('header-show')
      isShow = true
    }
    if ( $( document ).scrollTop() < heightShow && isShow == true ) { 
      $('.header').removeClass('header-show')
      isShow = false
    }
  })

})()