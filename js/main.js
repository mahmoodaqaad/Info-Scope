

// media 
{
    document.querySelector(".toggle-menu").onclick = () => {
        document.querySelector(".landing-page .header-area .container-manu").classList.toggle("active")
    }


    document.addEventListener('click', function (event) {
        const target = event.target;
        // اذا العنصر الذي تم النقر عليه ليس جزء من القائمة، اغلق القائمة
        if (!document.querySelector(".toggle-menu").contains(target) && target != document.querySelector(".landing-page .header-area .container-manu ul")) {
            document.querySelector(".landing-page .header-area .container-manu").classList.remove("active")
        }
    });

}

// start click of setting
document.querySelector(".setting-box .toggle-setting").onclick = function () {
    // if (settingEneble) {
    document.querySelector(".setting-box").classList.toggle("active")
    // }
    // else {
    //     document.querySelector(".setting-box").classList.remove("active")
    // }
}
document.onkeyup = (e) => {

    if (e.key == "Escape") {
        document.querySelector(".setting-box").classList.toggle("active")

    }
}
// احصل على العنصر الذي يمثل القائمة
const menu = document.querySelector(".setting-box")

// اضف مستمع حدث للنقر على الوثيقة
document.addEventListener('click', function (event) {
    const target = event.target;

    // اذا العنصر الذي تم النقر عليه ليس جزء من القائمة، اغلق القائمة
    if (!menu.contains(target)) {
        document.querySelector(".setting-box").classList.remove("active")
    }
});
// end click of setting
// window.localStorage.clear()
// start change color of setting

let colorsli = document.querySelectorAll(".setting-container .colors-list li")
if (window.localStorage.getItem("rootColor")) {
    document.documentElement.style.setProperty("--seccound-color", window.localStorage.getItem("rootColor"))

    //chaeck for active class 
    colorsli.forEach(li => {
        li.classList.remove("active")

        if (`#${li.dataset.color}` === window.localStorage.getItem("rootColor"))

            li.classList.add("active")

    })
    // add active class  with localStorage
}
colorsli.forEach(li => {


    li.onclick = (e) => {
        removeAndAddActive(colorsli, e)

        // set color on root 
        document.documentElement.style.setProperty("--seccound-color", `#${e.target.dataset.color}`)
        window.localStorage.setItem("rootColor", `#${e.target.dataset.color}`)


        document.querySelectorAll(".about-us .image-box img").forEach(img => {


            if (e.target.dataset.color === img.dataset.images) {
                document.querySelectorAll(".about-us .image-box img").forEach(img => {
                    img.style.display = "none"
                })
                img.style.display = "block";
                window.localStorage.setItem("imagecoloraboutUs", img.dataset.images)
            }


        })

    }

})
if (window.localStorage.getItem("imagecoloraboutUs")) {
    document.querySelectorAll(".about-us .image-box img").forEach(img => {


        if (window.localStorage.getItem("imagecoloraboutUs") === img.dataset.images) {
            document.querySelectorAll(".about-us .image-box img").forEach(img => {
                img.style.display = "none"
            })
            img.style.display = "block";
            window.localStorage.setItem("imagecoloraboutUs", img.dataset.images)
        }


    })

}

// end change color of setting 

// strat show or hedding bullets 
let bulletsSpans = document.querySelectorAll(".option-box.bullets span");



if (window.localStorage.getItem("bulletsshow")) {
    bulletsSpans.forEach(span => {
        span.classList.remove("active")

    })
    if (window.localStorage.getItem("bulletsshow") == "yes") {
        document.querySelector(".nav-bullets").classList.add("active")
        document.querySelector(".option-box.bullets span.yes").classList.add("active")
    }
    if (window.localStorage.getItem("bulletsshow") == "no") {
        document.querySelector(".nav-bullets").classList.remove("active")
        document.querySelector(".option-box.bullets span.no").classList.add("active")

    }
}



bulletsSpans.forEach(span => {
    span.onclick = (e) => {

        removeAndAddActive(bulletsSpans, e)
        if (e.target.dataset.show == "yes") {
            document.querySelector(".nav-bullets").classList.add("active")
            window.localStorage.setItem("bulletsshow", "yes")
        }
        else if (e.target.dataset.show == "no") {
            document.querySelector(".nav-bullets").classList.remove("active")
            window.localStorage.setItem("bulletsshow", "no")
        }

    }

})
// End show or hedding bullets 
// start shoose font 
let fonts = document.querySelectorAll(".option-box.font ul li")

if (window.localStorage.getItem("font")) {
    console.log(window.localStorage.getItem("font"))

    fonts.forEach(e => {
        e.classList.remove("active")
        if (window.localStorage.getItem("font") === e.dataset.font) {
            e.classList.add("active")
        }

    })

    document.body.style.fontFamily = window.localStorage.getItem("font")

}

fonts.forEach(font => {
    font.onclick = e => {
        removeAndAddActive(fonts, e)

        document.body.style.fontFamily = e.target.dataset.font

        window.localStorage.setItem("font", e.target.dataset.font)
    }

})
// end shoose font 
document.querySelector(".restart").onclick = () => {
    setTimeout(() => {
        window.localStorage.clear()
        location.reload()
        // url(../imgs/landing3.jpg)
    }, 500);
}
// start popup right 
{

    let allBullits = Array.from(document.querySelectorAll(".nav-bullets .bullet"));

    allBullits.forEach(bullite => {
        bullite.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.secion).scrollIntoView({
                behavior: "smooth"
            })

        })
    })

}
// End popup right 

//*==========================================================================================================

// start change background color 
{
    // start swich backgroundclor 
    let durctionbackground = 10000;
    let backgroundswitchAllspan = document.querySelectorAll(".setting-container .option-box.background span")

    // select landing page element 
    let landing_page = document.querySelector(".landing-page");
    //Get Array Of Imges
    let imgesArray = ["imgs/landing1.jpg", "imgs/landing2.jpg", "imgs/landing3.jpg", "imgs/landing4.jpg", "imgs/landing5.jpg"]

    // background option 
    let backgroundOption = true

    // variblae to control the intarval 

    let thebackgroundintrval;


    //start get item for localStorage 

    if (window.localStorage.getItem("backgroundstop") != null) {

        if (window.localStorage.getItem("backgroundOption") == "true") {
            landing_page.style.backgroundImage = `url(${window.localStorage.getItem("backgroundstop")})`


            backgroundswitchAllspan.forEach(span => {
                span.classList.remove("active")
                if (span.dataset.background === "yes") {
                    span.classList.add("active")
                }
            })
        }

        else if (window.localStorage.getItem("backgroundOption") == "false") {
            backgroundswitchAllspan.forEach(span => {
                span.classList.remove("active")

                if (span.dataset.background === "no") {
                    span.classList.add("active")
                }

            })

            backgroundOption = false
            clearInterval(thebackgroundintrval)
            randomaize()
            landing_page.style.backgroundImage = `url(${window.localStorage.getItem("backgroundstop")})`

        }


    }

    //end get item for localStorage 


    randomaize()
    // start swich backgroundclor 

    backgroundswitchAllspan.forEach(span => {
        span.onclick = (e) => {
            removeAndAddActive(backgroundswitchAllspan, e)

            if (e.target.dataset.background === "yes") {
                backgroundOption = true
                randomaize()
                window.localStorage.setItem("backgroundOption", backgroundOption)
            }
            else if (e.target.dataset.background === "no") {
                backgroundOption = false
                window.localStorage.setItem("backgroundOption", backgroundOption)
                clearInterval(thebackgroundintrval)
                randomaize()

            }
        }

    })
    // end swich backgroundclor 

    // function to randomiz imge 

    function randomaize() {
        if (backgroundOption == true) {
            thebackgroundintrval = setInterval(() => {
                let rand = imgesArray[Math.floor(Math.random() * imgesArray.length)]
                landing_page.style.backgroundImage = `url(${rand})`
                window.localStorage.setItem("backgroundstop", rand)
            }, durctionbackground);
        }
    }
}
// end change background color 

//*==========================================================================================================

// Sart remove and addactive class for link in landing 

{
    // let linksLi = document.querySelectorAll(".landing-page .header-area .links a")
    // linksLi.forEach(e => {
    //     e.onclick = (e) => {
    //         removeAndAddActive(linksLi,e)
    //     }
    // })
}

// end remove and addactive class for link in landing 

// start our skills
{
    let Allnum = document.querySelectorAll(".our-skills .skill-box .skill-progress .num")
    let Allrate = document.querySelectorAll(".our-skills .skill-box .skill-progress .rate")

    for (let i = 0; i < Allnum.length; i++) {
        Allnum[i].textContent = `${Allrate[i].dataset.width}%`
    }



    let our_skills = document.querySelector(".our-skills")

    let showskills = false
    window.onscroll = () => {
        if (window.scrollY >= our_skills.offsetTop - 100 && window.scrollY <= 2053) {
            if (!showskills) {
                Allrate.forEach(rate => {
                    let countWidth = 0;
                    let maxWidth = rate.dataset.width
                    let clearspan = setInterval(() => {
                        rate.style.width = `${countWidth}%`
                        countWidth++

                        if (maxWidth == countWidth) {
                            clearInterval(clearspan)
                        }
                    }, 1000 / +maxWidth)

                });
            }
            showskills = true
        }
    }



    // end our skills 
}
// End our skills

// start gaellry 
// create popup with image 

let ourGallry = Array.from(document.querySelectorAll(".gallery img"))

ourGallry.forEach(img => {
    img.addEventListener("click", (e) => {
        //create overlay Element 
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay"

        document.body.appendChild(overlay)
        // create the poup 
        let popupBox = document.createElement("div")
        popupBox.className = "popup-box"

        // create the amage
        let popupIamge = document.createElement("img")
        // set iamge sorce 
        popupIamge.src = img.src
        let numberofIage = parseInt(ourGallry.indexOf(img));
        // ADD age th pupe box 

        // if (img.alt !== null) {
        // create img heading 

        let headingImg = document.createElement("h3")
        headingImg.className = "heading-img"

        headingImg.textContent = ourGallry[numberofIage].alt;
        popupBox.appendChild(headingImg)

        // }
        popupBox.appendChild(popupIamge)
        document.body.appendChild(popupBox)


        let nextimg = document.createElement("div")
        let priveousimg = document.createElement("div")
        nextimg.className = "next-img"
        priveousimg.className = "pre-img"
        nextimg.textContent = ">"
        priveousimg.textContent = "<"
        // chaeckImg(popupIamge, numberofIage, priveousimg, nextimg)
        nextimg.onclick = () => {
            // chaeckImg(popupIamge, numberofIage, priveousimg, nextimg)
            numberofIage++
            chaecker()
            popupIamge.src = ourGallry[numberofIage].src

        }



        priveousimg.onclick = () => {
            // chaeckImg(popupIamge, numberofIage, priveousimg, nextimg)
            numberofIage--
            chaecker()
            popupIamge.src = ourGallry[numberofIage].src


        }






        popupBox.append(priveousimg, nextimg)


        // create close over lay 

        let closeImg = document.createElement("div")
        closeImg.className = "close-imge"
        closeImg.textContent = "X"
        popupBox.appendChild(closeImg)
        closeImg.onclick = () => {
            overlay.remove()
            popupBox.remove()
            popupIamge.remove()
            closeImg.remove()
        }

        chaecker()


        function chaecker() {
            headingImg.textContent = ourGallry[numberofIage].alt;

            if (numberofIage == 0) {
                priveousimg.style.display = "none"
            }
            else {
                priveousimg.style.display = "block"

            }
            if (numberofIage == ourGallry.length - 1) {
                nextimg.style.display = "none"
            }
            else {
                nextimg.style.display = "block"

            }
        }

    })

})

// end gaellry

// remove all active and acc for click

function removeAndAddActive(elements, e) {

    elements.forEach(li => {
        li.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
}
