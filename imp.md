document.querySelector("#GalaxyAI-head").style.opacity = "0"
  document.querySelector("#galaxyAI-div").addEventListener("mouseenter", function(){
  
    gsap.from("#GalaxyAI-head",{
      x:-500,
      duration:2,
      opacity:0,
      scrollTrigger: {
        trigger: "#galaxyAI-div",
       
        
      }
     
    
    })
  })