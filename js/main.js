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
