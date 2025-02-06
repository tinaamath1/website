document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); 
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const hi = document.getElementById("hi");
    const im = document.getElementById("im");
    const tina = document.getElementById("tina");

    // Function to change color and opacity
    function changeColorAndOpacity() {
        setTimeout(() => {
            hi.style.opacity = "1";
            hi.style.color = "#D2042D";
        }, 500);

        setTimeout(() => {
            hi.style.color = "#5f4e34"; 
            im.style.opacity = "1";
            im.style.color = "#D2042D";
        }, 1500);

        setTimeout(() => {
            im.style.color = "#5f4e34"; 
            tina.style.opacity = "1";
            tina.style.color = "#D2042D";
        }, 2500);

        setTimeout(() => {
            tina.style.color = "#5f4e34"; 
        }, 4000);
    }
    changeColorAndOpacity();
});

function scrollToSection(){
    const section = document.getElementById("work-section"); 
    section.scrollIntoView({
        behavior: "smooth",
    })
    console.log("clicked")
}