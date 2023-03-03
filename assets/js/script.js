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

const qty_value = document.querySelectorAll('.fooh-cart-card__qnty_input');
const qty_plus = document.querySelectorAll('.fooh-cart-card__qnty_btn--plus');
const qty_minus = document.querySelectorAll('.fooh-cart-card__qnty_btn--min');

if (qty_value || qty_plus || qty_minus) {
    for (let i = 0; i < qty_value.length; i++) {
        qty_plus[i].addEventListener('click', function () {
            qty_value[i].setAttribute('value', parseInt(qty_value[i].value) + 1);
        });
        qty_minus[i].addEventListener('click', function () {
            if (parseInt(qty_value[i].value) === 1) {
                qty_value[i].disabled = true;
            } else {
                qty_value[i].disabled = false;
                qty_value[i].setAttribute('value', parseInt(qty_value[i].value) - 1);
            }
        });
    }
}

//view order details section
let order_details_btn = document.querySelectorAll('.fooh-cart-card__wrapper .fooh-cart-card .fooh-cart-card__cnt-btns')

let order_details_section = document.querySelectorAll(
  ".fooh-cart-card__wrapper .fooh-view-ordrs__order-progress"
);

order_details_btn.forEach((e,index)  => {
    e.addEventListener('click', () => { 
        order_details_section[index].classList.toggle(
          "fooh-view-ordrs__order-progress--active"
        );
    });
});

const categoriesLink = document.querySelectorAll('.categories .submenu a');

categoriesLink.forEach((cate)=>{
    cate.addEventListener('click', e =>{
        const matchMedia = '(max-width: 600px)'
        if(window.matchMedia(matchMedia).matches){
            e.preventDefault();
            e.stopPropagation();
            console.log(cate.nextSibling);
        }
    });
});