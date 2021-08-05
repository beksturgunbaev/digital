$(document).ready(function() {
    $('.cases_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        infinity: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });

    // Input mask:
    $('.phone_field').inputmask("phone", {
        placeholder: '#',
        showMaskOnHover: false,
    });
        
        Inputmask.extendAliases({
        my_phone: {
            alias: "abstractphone",
            phoneCodes: [{
            mask: "+7(###) ###-##-##",
            }],
        }
    });
    $('.phone_field').inputmask("my_phone");

    // Burger menu:
    $('.burger_menu').click(function() {
        $('.mobile_menu').toggleClass('show_menu');
        $('.line1').toggleClass('active');
        $('.line2').toggleClass('active');
        $('.line3').toggleClass('active');
        if($('.mobile_menu').hasClass('show_menu')) {
            $('html').css('overflow-y', 'hidden');
        } else {
            $('html').css('overflow-y', 'auto');
        }
    });

    // Open modal:
    $('.open_modal').click(function() {
        $('.form_modal').addClass('_show');
        $('html').css('overflow-y', 'hidden');
    });
    $('.close_modal').click(function() {
        $('.form_modal').removeClass('_show');
        $('.modal_content').removeClass('active');
        $('html').css('overflow-y', 'auto');
    });
    $('.open_modal_one').click(function() {
        $('.modal_one').addClass('active');
    });
    $('.open_modal_two').click(function() {
        $('.modal_two').addClass('active');
    });
    $('.open_modal_three').click(function() {
        $('.modal_three').addClass('active');
    });
    $('.open_modal_four').click(function() {
        $('.modal_four').addClass('active');
    });

    // Checkbox:
    $('.check_label').click(function() {
        $(this).toggleClass('active');
    });
});

// Show more button:
let moreBtn = document.querySelector('.show_more');
let moreBlocks = document.querySelector('.hidden_blocks');
let elemOpacity = document.querySelector('.third_block');
let svgLoad = document.querySelector('.load_svg');

moreBtn.onclick = function() {
    svgLoad.classList.add('active');
}

function showMore() {
    moreBlocks.style.display = 'block';
    moreBtn.classList.add('active');
    elemOpacity.classList.remove('opacity_show');
    elemOpacity.style.opacity = '1';
}

moreBtn.addEventListener('click', () => {
    setTimeout(showMore, 1000);
}); 


// Accordion:
const acc = document.getElementsByClassName("acc_btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        let icon = this.querySelector('span');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            icon.innerText = '+';

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            icon.innerText = '-';
        }
    });
}


// Получаем нужный элемент
var element = document.querySelector('._to_show_elem');

var Visible = function (target) {
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom &&
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
    
    // Counter animation:

    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
        
        const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 125);
            } else{
                counter.innerText = value;
            }
        }
    animate();
    });

    let line = document.querySelectorAll('.line_child');

    line.forEach( lines => {
        const widthAnimate = () => {
            lines.style.width = '100%';
        }
        widthAnimate();
    } )
  }
};

window.addEventListener('scroll', function() {
  Visible (element);
});



// ============ ANIMATION ===================

const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
    window.addEventListener('scroll', showAnimation);
    function showAnimation() {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];          
            const animItemHeight = animItem.offsetHeight; // Высота моего объекта
            const animItemOffset = offset(animItem).top;  // Позиция моего объекта
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active__class');    
            }
            else {
                if(!animItem.classList.contains('no-anim')) {
                    animItem.classList.remove('active__class');    
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
}

setTimeout(showAnimation, 800);

// Current date:

    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();

        return day+"."+month+"."+year+" ";
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('current_date').innerHTML = date_time();
    document.getElementById('current_date2').innerHTML = date_time();