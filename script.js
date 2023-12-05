// var crsr=document.querySelector("#cursor")
// var blur=document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x -7.5 +"px"
//     crsr.style.top = dets.y -7.5 +"px"
//     blur.style.left = dets.x -200 +"px"
//     blur.style.top = dets.y -200 +"px"

// })


gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.15,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        //markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})


   