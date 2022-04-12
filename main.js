let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");


menuBtn.addEventListener("click", () => {
        navbar.classList.toggle('active');
})


let icon1 = document.querySelector(".circls .icon1");
let icon2 = document.querySelector(".circls .icon2");
let icon3 = document.querySelector(".circls .icon3");
let imgSwap = document.querySelector(".about-box img");



icon1.addEventListener("click", () => {
        imgSwap.src = "images/about-img.png";
        icon1.classList.add("active");
        icon2.classList.remove("active");
        icon3.classList.remove("active");
});

icon3.addEventListener("click", () => {
        imgSwap.src = "images/dessert1.png";
        icon3.classList.add("active");
        icon1.classList.remove("active");
        icon2.classList.remove("active");
});


icon2.addEventListener("click", () => {
        imgSwap.src = "images/dessert2.png";
        icon2.classList.add("active");
        icon1.classList.remove("active");
        icon3.classList.remove("active");
});


// Reveal Animtaion Test 

function reveal() {
        let reveals = document.querySelectorAll(".reveal");
        reveals.forEach((reveal) => {
          let windowHeight = window.innerHeight,
              elementHeight = reveal.getBoundingClientRect().top;
          if (elementHeight < windowHeight) {
            reveal.classList.add("active");
          } else {
            reveal.classList.remove("active");
          }
        });
      }
      window.addEventListener("scroll", reveal);




// Scroll to Top 

let scroll = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
        // console.log(scrollY);
        if(scrollY >= 1040) {
                scroll.classList.add("show")
        } else {
                scroll.classList.remove("show")
        }
}); 

scroll.addEventListener("click", () => {
        window.scrollTo( {
                top: 0,
                behavior: "smooth",
        });
});



// Product Preview (Popup) 



let productBtn = document.querySelectorAll(".box-container .box button");
let previewContainer = document.querySelector(".product-preview");
let previewBox = document.querySelector(".preview1");


productBtn.forEach(productBtn => {
        productBtn.addEventListener("click", () => {
                previewContainer.style.display = "flex";
                previewBox.classList.add("appear-popup");
         })
})

// close btn to close the popup when click on it 

let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
        previewContainer.style.display = "none";
        previewBox.classList.remove("appear-popup");
})



// Plus n Minus Thing

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let numSpan = document.querySelector(".nums-span");



plus.addEventListener("click", () => {
        numSpan.innerHTML++;
        if(numSpan.innerHTML >= "1") {
                minus.style.display = "block";
        } 
}); 

minus.addEventListener("click", () => {
        numSpan.innerHTML--;
        if(numSpan.innerHTML <= "0") {
                minus.style.display = "none";
        }
}); 


// Counter (Count Down)

let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".counter");
let started = false;

window.onscroll = function() {
        if(window.scrollY >= 6750) {
                if(!started) {
                        nums.forEach((num) => {
                                startCount(num)
                        });
                }
                started = true;
        }
}

function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
                el.textContent++;
                if(el.textContent == goal) {
                        clearInterval(count);
                }
        }, 2000 / goal);
        
}



