/**
 * Инициализация функции маски для поля телефона
 * Документация: https://imask.js.org/guide.html
 */
function initPhoneMask() {
  $('input[type=tel]').each(function(index, element) {
    var mask = IMask(element, {
      mask: [
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '+7',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '7',
          country: 'Russia',
        },
        {
          mask: '0 (000) 000-00-00',
          startsWith: '8',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '',
          country: 'unknown',
        },
      ],
      dispatch: function(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function(m) {
          return number.indexOf(m.startsWith) === 0;
        });
      },
    });
    $(this).blur(function() {
      var maskValue = mask.unmaskedValue;
      var startWith = 10;
      if (maskValue.charAt(0) === '8') {
        startWith = 11;
      }
      if (maskValue.length < startWith) {
        mask.value = '';
      }
    });
  });
}

$(function() {
  objectFitImages();
  initPhoneMask();
});





$(".hamburger").on('click', function(){
  $('.navbar__dropdown').slideToggle('medium', function() {
  if ($(this).is(':visible')) {
      $(this).css('visibility','visible');
      
  }         
});
})


$('.hamburger').click(function(e){
  e.preventDefault();
  $(this).toggleClass('is-active');
});






  $('#owl-one').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:false,
          loop:false,
          margin: 0,
      }
  }
})


$('#owl-two').owlCarousel({
loop:true,
margin:10,
dots: false,
nav: false,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:false
    },
    1000:{
        items:6,
        nav:false,
        loop:false
    }
}
})



$('#owl-three').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:5,
          nav:false,
          loop:false
      }
  }
  })
  
