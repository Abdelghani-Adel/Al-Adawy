// Declaring Variables
let tabs = document.querySelectorAll(".tabs li");           // Get all tabs
let tabsArray = Array.from(tabs);                           // Put all tabs into array to loop on them later
let divs = document.querySelectorAll(".content > div");     // Get all divs
let divsArray = Array.from(divs);                           // Put all divs into array to loop on them later



// looping on tabs 
tabsArray.forEach((tab) => {

  // Looping on tabs and adding click event attached to a function
    tab.addEventListener("click", function (e) {

    // Looping on all tabs to remove .active class from them
    tabsArray.forEach((tab) => {
        tab.classList.remove("active");
    });

    // Adding .active class to the current target or this tab we clicked on
    e.currentTarget.classList.add("active");

    // First, we hide all divs when we click
    divsArray.forEach((div) => {
        div.style.display = "none";
    });

    // Display the div which is attached to our clicked tab with custom HTML attribute
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});


$('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


let scrollBtn = document.querySelector(".scroll-btn i");

window.addEventListener("scroll", () => {
    window.pageYOffset > 300
      ? scrollBtn.classList.add("active-btn")
      : scrollBtn.classList.remove("active-btn");
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
});
