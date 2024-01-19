var anim = gsap.timeline();

anim.from("#header",{
    y: -300,
    opacity: 0,
    duration: 1
})
.from('.text h1',{
    y: 100,
    opacity: 0,
    duration: 1
})
.from('.text p',{
    y: 100,
    opacity: 0,
    duration: .5
})
.from('.hero-btn',{
    y: 100,
    opacity: 0,
    duration: .5
})
.from('.media video',{
    x: 300,
    opacity: 0,
    duration: 1
})

// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//           "body").style.visibility = "hidden";
//         document.querySelector(
//           ".loader").style.visibility = "visible";
//     } else {
//         document.querySelector(
//           ".loader").style.display = "none";
//         document.querySelector(
//           "body").style.visibility = "visible";
//     }
// };