//Navigation Bar Effects On Scroll

window.addEventListener("scroll", function ()
{
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

/* SERVICE MODAL FULLSCREEN SHOW  */

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");


var modal = function(modalClick)
{
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () =>
    {
        modal(i);
    });
});



modalCloseBtns.forEach((modalCloseBtn) =>
{
    modalCloseBtn.addEventListener("click", () =>
    {
        serviceModals.forEach((moadlView) => 
        {
            moadlView.classList.remove("active");
        });
    });
});




/**
 * go top
 */

 const goTopBtn = document.querySelector("[data-go-top]");

 window.addEventListener("scroll", function () {
 
   if (window.scrollY >= 800) {
     goTopBtn.classList.add("active");
   } else {
     goTopBtn.classList.remove("active");
   }
 
 })





