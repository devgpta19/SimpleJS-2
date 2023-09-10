gsap.from("#btn", {
    y:100,
    opacity:0,
    duration:3,
    ease:Expo.easeInOut,
    delay:0.3
})
document.querySelector("#btn").addEventListener("click", function(){
    gsap.to("#rect1", {
        ease:Expo.easeInOut,
        bottom:0,
        duration:3,
        delay:0.5
    })
    gsap.to("#rect2", {
        ease:Expo.easeInOut,
        top:0,
        duration:3,
        delay:0.5
    })
    gsap.to("#rect1", {
        backgroundColor:"rgb(0, 255, 247)",
        duration: 3.5,
        delay:3
    })
    gsap.to("#rect2", {
        backgroundColor:"rgb(0, 255, 247)",
        duration: 3.5,
        delay:3
    })
    gsap.from("#btn", {
        y:100,
        opacity:0,
        duration:3,
        ease:Expo.easeInOut,
        delay:0.3
    })
})