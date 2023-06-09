$(document).ready(function () {  
  let myPopup = document.querySelector('.popup'),
    closeBtn = myPopup.querySelector('button'),
    oneDayCheck = document.querySelector('#nomore');

    function checkcookie(name){
        var cookies = document.cookie.split(';');
        var visited = false;

        for(ck of cookies){
            if(ck.indexOf(name) > -1){
                visited = true;
            }                
        }
        if(visited == true){
            myPopup.style.display = 'none';            
        }else{
            myPopup.style.display = 'block';        
        }
    }
    checkcookie('aeroK2');

    function setCookie(name,value,day){           
        var date = new Date();
        date.setDate(date.getDate()+day);

        var myCookie = '';
        myCookie = `${name}=${value};Expires=${date.toUTCString()}`;            
        document.cookie = myCookie;
    }//setcookie

    function deleteCookie(name,value){                
        var date = new Date();            
        date.setDate(date.getDate()-1);

        var myCookie = '';
        myCookie = `${name}=${value};Expires=${date.toUTCString()}`;   
        document.cookie = myCookie;
    }

    closeBtn.addEventListener('click',()=>{
        if(!oneDayCheck.checked){ 
            deleteCookie('aeroK2','home');
        }else{
            setCookie('aeroK2','home',1);
        }
    myPopup.style.display = 'none';
    });
  //최재석
  mainSwipe(); 
  function scrollActionBanner() {
    $(window).on('scroll', function () {
      const boxOffset = $('.letter_box').offset().top;
      const y = $(window).height() / 3;
      const x = $(window).scrollTop();

      //console.log(x+y, boxOffset)
      if (x + y > boxOffset) {
        $('.letter_box')
          .stop()
          .animate({ backgroundSize: `${100 + parseInt(x / 100, 0)}%` }, 400);
        $('.letter_box p')
          .stop()
          .animate({ fontSize: parseInt(x / 180, 0) }, 400);
      } else {
        $('.letter_box')
          .stop()
          .animate({ backgroundSize: `${100 + parseInt(x / 200, 0)}%` }, 400);
      }
    });
  }

  function mainSwipe() {
    const swiper1 = new Swiper('.main-swiper', {
      slidesPerView: 'auto',
      loop: true,
      effect: 'creative',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      creativeEffect: {
        prev: {
          translate: ['0%', 0, -1]
        },
        next: {
          translate: ['100%', 1, 0]
        }
      },
      on: {
        // init: function () {
        //   $('.swiper-pagination-current').text('01');
        //   $('.swiper-pagination-total').text('04');
        // },
        slideChange: function () {
          let currentNum = $('.swiper-pagination-current').text();
          let totalNum = $('.swiper-pagination-total').text();
          $('.swiper-pagination-current').text('0' + currentNum);
          $('.swiper-pagination-total').text('0' + totalNum);
        }
      }
    });
  } //swipe

  function subSwipe() {
    
    const swiper2 = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      on: {        
        slideChange: function () {
          if(swiper2.activeIndex < 4){ 
            $("select[name=recommend] option:eq(0)").prop("selected", true);
          }
          if(swiper2.activeIndex > 3 && swiper2.activeIndex < 8){ 
            $("select[name=recommend] option:eq(1)").prop("selected", true);
          }
          if(swiper2.activeIndex > 7 && swiper2.activeIndex < 12){ 
            $("select[name=recommend] option:eq(2)").prop("selected", true);
          }
        }
      }
    });
    
    $('select[name=recommend]').change(function () {      
      const val = $(this).val();
      const option = $(this)
        .find($('option[value=' + val + ']'))
        .attr('class');        
      if(option == 'hotel'){
        swiper2.slideTo(8, 1000, false)
      }else if ((option == 'activity')){
        swiper2.slideTo(4, 1000, false)
      }else {
        swiper2.slideTo(0, 1000, false)
      }            
    });  
  } //subswipe

  function selectBox() {
    $('select[name=recommend]').change(function () {
      const val = $(this).val();
      const option = $(this)
        .find($('option[value=' + val + ']'))
        .attr('class');
      $('#' + option)
        .addClass('active')
        .siblings()
        .removeClass('active');
    });   
  } //selectBox

  $('.btn_replace').click(function (e) {
    e.preventDefault;
    const selection = $('.location_box div');        
    selection.toggleClass('orderTo')    
  });
 
  
  subSwipe();  
  scrollActionBanner();  

  // 박은교
}); //document.ready
window.onload = function() {
  $('.swiper-pagination-current').text('01');
  $('.swiper-pagination-total').text('04');
}