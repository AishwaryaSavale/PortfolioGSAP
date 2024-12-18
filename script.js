
//header sticky
var header = document.querySelector('.header')
window.addEventListener('scroll',(event)=>{
    if(window.scrollY > 90.0){
        header.classList.remove('header')
        header.classList.add('header-top')
    }else{
        header.classList.remove('header-top')
        header.classList.add('header')
    }
})

const time=gsap.timeline() //header animation
time.from('.header',{
    opacity:0,
    y:-25,
    duration:0.5
})
time.from('.header .links button',{
    opacity:0,
    x:300,
    duration:0.5
})
time.from('.header h2',{
    opacity:0,
    y:-20,
    duration:0.5
})
time.from('.header .links a',{
    opacity:0,
    y:-20,
    duration:0.5,
    stagger:0.6
})
//home array names 
var txtarray=['Web Developer.','FrontEnd Engineer.','Web Designer.']
var info=document.querySelector('.home .information .info')

var index=0
setInterval(()=>{
    if(index>1){
        index=0
    }
    info.innerHTML=txtarray[index]
    index=index+1
},3000)
//home ani para
gsap.from('.home .information',{
    scale:0,
    scrollTrigger:{
        trigger:".home",
        scroll:'body',
        start:'top 10%',
        end:'top 0%',
        scrub:0.01,
       // markers:true
    }
})
var paraElement = document.querySelector('.home .information .para')
var paraText = paraElement.textContent

var paraSplit = paraText.split('')
var updatedPara=''

paraSplit.forEach((ele,index)=>{
        updatedPara+=`<span>${ele}</span>`
})
paraElement.innerHTML=updatedPara
gsap.from('.home .information .para span',{
    delay:1.5,
    rotate:180,
    opacity:0,
    duration:0.01,
    stagger:0.01
})
//project ani

gsap.from('.container',{
    scale:0,
    scrollTrigger:{
        trigger:".container",
        scroll:'body',
        start:'top 80%',
        end:'top 30%',
        scrub:1,
        //markers:true
    }
})

//para animation in academics
gsap.from('.academics .parent',{
    scale:0,
    scrollTrigger:{
        trigger:".academics",
        scroll:'body',
        start:'top 50%',
        end:'top 20%',
        scrub:1,
        //markers:true
    }
})
gsap.from('.academics .parent .card p',{
    opacity:0,
    y:100,
    duration:1.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:".academics .parent",
        scroll:'body',
        start:'top 65%',
        end:'top 25%',
        scrub:1,
        //markers:true
    }
})