const faqs = document.getElementsByClassName("faq")

for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', function () {
        hide();
        this.classList.toggle("active");
    })
}

function hide() {
    for (i = 0; i < faqs.length; i++) {
        faqs[i].classList.toggle("active", false);
    }
}