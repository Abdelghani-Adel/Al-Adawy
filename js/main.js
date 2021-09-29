


function hoverOnPrice(event) {
    prices.addClass('dimt');
    $(event.currentTarget).addClass('scaleup');
    $(event.currentTarget).removeClass('dimt');
}
function hoverOutPrice() {
    prices.removeClass('dimt scaleup')
}

// Hovering on price
let prices = $('.pricing .priceWrapper');
prices.hover(
    (event) => {
        hoverOnPrice(event)
    } , () => {
        hoverOutPrice();
    }
)


// Our Mission Section Tabs
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);
tabsArray.forEach((tab) => {  
    tab.addEventListener("click", function (e) {
        tabsArray.forEach((tab) => {
            tab.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});



// Navigate to to top "button"
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




// Function to get services data and put them into array
loadDoc()
let textArray;
function loadDoc() {
    let myXMLRequest = new XMLHttpRequest();
    myXMLRequest.open("GET", "data.json", true);
    myXMLRequest.send();
    myXMLRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let jsonObject = JSON.parse(this.responseText);
            textArray = jsonObject;
            console.log(textArray)
        };
    };
}

// Adding overlay div with service data when clicked on image
let img = $(".ourServices img")
img.click(function (event) {
    let current = event.currentTarget;
    let imgSource = current.src;
    let title = current.alt;
    let content = `<div class='popup-overlay'>
                        <div class="popup-box">
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-md-6'>
                                        <img src= ${imgSource} class='img-thumbnail h-100'>
                                    </div>
                                    <div class='col-md-6'>
                                        <h2 class='my-3 mainColorTXT text-center w-100'>${title}</h2>
                                        <p class='lead'>${textArray[current.dataset.txt]}</p>
                                    </div>
                                </div>
                            </div>
                            <span class="close-button">X</span>
                        </div>
                    </div>`
    $(document.body).append(content);
})

// Close button for the service image overlay
document.addEventListener("click", function(e) {
    if (e.target.className == 'close-button' || e.target.className == 'popup-overlay') {
        document.querySelector('.popup-overlay').remove();
    }
})
