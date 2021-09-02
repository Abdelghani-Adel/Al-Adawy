let socialIcon = $(".social-icon"),
    navLink = $('.navbar-light .navbar-nav .nav-item .nav-link'),
    heroButton = $('.heroWrap button'),
    serviceCard = $('.ourServices .card');

let prices = $('.pricing .priceWrapper');

// prices.mouseenter((event) => {
//     event.stopPropagation();
//     prices.addClass('dimt');
//     $(event.target).removeClass('dimt')
//     $(event.target).addClass('scaleup')
// })
// prices.mouseleave(() => {
//     prices.removeClass('dimt')
//     prices.removeClass('scaleup')
// })


// prices.hover(
//     (event) => {
//         event.stopPropagation();
//         prices.addClass('dimt');
//         $(event.target).addClass('scaleup');
//         $(event.target).removeClass('dimt');
//     } , () => {
//         prices.removeClass('dimt');
//         prices.removeClass('scaleup');
//     }
// )


prices.hover(
    (event) => {
        event.stopPropagation();
        prices.addClass('dimt');
        $(event.target).addClass('scaleup');
        $(event.target).removeClass('dimt');
    } , () => {
        prices.removeClass('dimt');
        prices.removeClass('scaleup');
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



// Counters
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




// let ourimages = document.querySelectorAll(".ourServices img")
// ourimages.forEach(img => {
//     img.addEventListener('click', (e) => {
//         let overlay = document.createElement("div");
//         overlay.className = 'popup-overlay';

//         let popupBox = document.createElement("div");
//         popupBox.className = 'popup-box';
//         let popupImage = document.createElement("img");
//         popupImage.src = img.src

//         document.body.appendChild(overlay);
//         popupBox.appendChild(popupImage);
//         overlay.appendChild(popupBox)

//         if (img.alt) {
//             let imgHeading = document.createElement('h2');
//             let imgText = document.createTextNode(img.alt);
//             imgHeading.appendChild(imgText);
//             popupBox.appendChild(imgHeading)
//         }

//         let closeButton = document.createElement('span');
//         let closeButtonText = document.createTextNode("x");
//         closeButton.appendChild(closeButtonText);
//         closeButton.className = 'close-button';
//         popupBox.appendChild(closeButton);
//     })
// })




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


let img = $(".ourServices img")
img.click(function (event) {
    // loadDoc();

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




document.addEventListener("click", function(e) {
    if (e.target.className == 'close-button' || e.target.className == 'popup-overlay') {
        document.querySelector('.popup-overlay').remove();
    }
})
