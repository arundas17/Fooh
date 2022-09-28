// Multiple Product slider
$(".product-multi-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 2,
    slide: ".fooh-pro-slider__tile",
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

if( document.querySelector('.fooh-nav-btn')){
     document.querySelector('.fooh-nav-btn').addEventListener('click',()=>{
        const attr =  document.querySelector('.fooh-nav-btn').getAttribute('aria-expanded');
        document.querySelector('#bs-example-navbar-collapse-1').classList.remove('in');
        document.querySelector('.foohMenuNav').classList.add('collapsed');

        if(attr === "true"){
            document.querySelector('.foohMenuNav').classList.remove('foohMenuNav--hide');
            document.body.classList.remove('fooh-overflow');
            
        }else{
            document.body.classList.add('fooh-overflow');
            document.querySelector('.foohMenuNav').classList.add('foohMenuNav--hide');
            
        }
    })
}


if(document.querySelector('.foohMenuNav')){
    document.querySelector('.foohMenuNav').addEventListener('click',()=>{
        const attr = document.querySelector('.foohMenuNav').getAttribute('aria-expanded');
        document.querySelector('#bs-example-navbar-collapse-2').classList.remove('in');
        document.querySelector('.fooh-nav-btn').classList.add('collapsed');
        
        console.log(attr);
        if(attr === "false"){
            document.body.classList.add('fooh-overflow');

        }
        else{
            document.body.classList.remove('fooh-overflow');
        }
    })
}



function modelFade(){
    const modelOverlay = document.querySelector('.modal-backdrop.in');
    modelOverlay.style.opacity = '0';
    modelOverlay.style.pointerEvents = 'none';     
}

if(document.querySelector('.fh-my-profile__avatar')){
    document.querySelector('.fh-my-profile__avatar').addEventListener('click',()=>{
        document.querySelector('.fh-my-profile__box').classList.toggle('fh-my-profile__box--visible');
      });
}

if(document.querySelector('.tradewith')){
    document.querySelector('.virtualhead').classList.add('virtualhead--trade')
    document.querySelector('.dropdown-menu.multi-level').classList.add('fooh__trade-drop')
}

// File choose
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
      $(".file-upload").removeClass('active');
      $("#noFile").text("No file chosen..."); 
    }
    else {
      $(".file-upload").addClass('active');
      $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
    }
  });

  if(document.querySelector('#ctl23_divlogoutstyle')){
    document.querySelector('.fooh__home-categ').style.pointerEvents = 'none';
    document.querySelector('.fooh__home-categ .caret').style.display = 'none';
  }