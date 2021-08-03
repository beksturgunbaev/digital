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
});

// Accordion:
const acc = document.getElementsByClassName("acc_btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
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