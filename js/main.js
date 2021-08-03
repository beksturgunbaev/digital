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
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
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
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);