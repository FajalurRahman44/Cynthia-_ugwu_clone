const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function mousemoveover(xscale,yscale) {
    window.addEventListener("mousemove",function(dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        opacity:0,
        y:-10,
        duration:1.5,
        ease:"Expo.easeInOut",
    })
    .to(".boundelem",{
        y:0,
        duration:2,
        ease:"Expo.easeInOut",
        stagger:0.2,
        delay:-1,
        
    })
    .from("#hero_footer",{
        y:-10,
        duration:1.5,
        opacity:0,
        ease:"Expo.easeInOut",
        delay:-1
    })
}
function makecircleskew(){
    var prevX = 0;
    var prevY = 0;
    var xscale = 1;
    var yscale = 1;

    window.addEventListener('mousemove',function(e){
        clearTimeout(timeout)
        xscale = gsap.utils.clamp(0.8,1.2,e.clientX - prevX)
        yscale = gsap.utils.clamp(0.8,1.2,e.clientY - prevY)

        mousemoveover(xscale,yscale)

        timeout = setTimeout(function(){
             document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },1000)
    })
}
document.querySelectorAll('.elem').forEach(function (elem){
    var diff;
    var previous = 0;
      elem.addEventListener('mousemove',function(details){
       diff = details.clientX - previous;
       previous = details.clientX;
       gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:(details.clientY)-elem.getBoundingClientRect().bottom,
        left:details.clientX,
        rotate:gsap.utils.clamp(-20,20,diff)
       }) 
      });
      elem.addEventListener('mouseleave',function(details){
      
       gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:0.5,
       }) 
      });
});
window.addEventListener('load',function(){
    var preloader = document.querySelector('.preloader')
    var main = document.querySelector('#main')

    gsap.to(preloader,{
        y:"-100%",
        duration:2,
        ease:"power2.inOut",
        onComplete:()=>{
            preloader.style.display = none
        }
    })
    gsap.to(main, { opacity: 1, duration: 0.5 })
         
})

const iconset = document.getElementById('iconset')
 const x = window.matchMedia("(max-width:450px)")
 function remove_iconset(x){
    if(x.matches){
        iconset.remove()
    }
 }
 remove_iconset(x)
x.addEventListener('change',remove_iconset)



firstPageAnime()
makecircleskew()
mousemoveover()