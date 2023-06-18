const gsapPageLoad = () => {
    const tl = new TimelineLite({delay: 0}),
    documentBody = document.getElementById("app__body")
    preloader = document.querySelector(".preloader")

    tl
    // .to(documentBody, .2, {backgroundColor: "#070707"})
    .to(documentBody, .6, {backgroundColor: "#070707"})
    .from(preloader, .2, {opacity: 0, y: 60, display: "none"})
    .to(preloader, .2, {opacity: 0, y: -60, display: "none"})
    // .to(documentBody, .2, {backgroundColor: "#d00000"})
    // .to(documentBody, .2, {backgroundColor: "#d00000"})
    // .to(documentBody, .2, {backgroundColor: "#3a86ff"})
    .to(documentBody, .2, {backgroundColor: "#faf9f9"})

    gsap.from("#app__content_wrapper", {
        duration: .5,
        opacity: 0,
        delay: 1
    })
    gsap.from("nav", {
        duration: .5,
        opacity: 0,
        delay: 1,
        y: -20,
    })
    
}

gsapPageLoad()