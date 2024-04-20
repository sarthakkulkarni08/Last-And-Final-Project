

gsap.registerPlugin(ScrollTrigger);

  gsap.from("#page1 ",{
    y:500,
    duration:2,
    opacity:0,
   
   
  
  })
  gsap.from("#page2 ",{
    y:500,
    duration:1,
    opacity:0,
    scrollTrigger: {
      trigger: "#page2",
      
    }
     
  
  })
  gsap.from(".device-img ",{
    x:-200,
    duration:1,
    opacity:0,
    scrollTrigger: {
    trigger: ".devices",
    
    }
   
   })
  
   gsap.from("#GalaxyAI-head",{
    x:-500,
    duration:2,
    opacity:0,
   
    scrollTrigger: {
      trigger: "#GalaxyAI-head",
      start:"top center",
     toggleActions:"restart pause resume pause",
     scrub:1 ,
   
     
      
    }
     
  
  })
  
  

  gsap.from(".galaxy-ai-img",{
    y:450,
    duration:1,
    opacity:0,
    scrollTrigger: {
      trigger: ".galaxy-ai-img",
      start:"top center",
     
    
    }
  })
  gsap.from("#page4 h1",{
    y:150,
    duration:1,
    opacity:0,
    scrollTrigger: {
      trigger: "#page4",
      start:"top center",
      toggleActions:"restart pause resume pause",
      
      }
  })
  
  gsap.from("#page4 p",{
    y:450,
    duration:1,
    opacity:0,
    scrollTrigger: {
      trigger: "#page4 p",
      
    }
  })
  
  gsap.from(".feature-video",{
    y:250,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger: {
      trigger: ".feature-video",
      
      
      
    }
  })
  gsap.from(".ai-features-info",{
    x:-250,
    duration:1.25,
    opacity:0,
    stagger:1,
    scrollTrigger: {
      trigger: ".ai-features-row",
      start:"top center",
     toggleActions:"restart pause resume pause",
     scrub:1 ,
    
      
    }
  })
  gsap.from("#page6 .back",{
    y:250,
    duration:1.25,
    opacity:0,
    stagger:1,
    scrollTrigger: {
      trigger: "#page6",
    
      
    }
  })
  gsap.from("#page6 .top h1",{
    y:150,
    duration:1,
    opacity:0,
    stagger:1,
    delay:1.25,
    scrollTrigger: {
      trigger: "#page6",
    
      
    }
  })
  gsap.from("#page6 .top p",{
    y:150,
    duration:1,
    opacity:0,
    stagger:1,
    delay:2,
    scrollTrigger: {
      trigger: "#page6",
    
      
    }
  })
  
  


function TextChangeSamsung(){
   
    function changingInfoSamsung() {
    
     document.addEventListener("DOMContentLoaded", function () {
      let currentTextIndex = localStorage.getItem("currentTextIndex") || 0;
       const paragraphs = document.querySelectorAll('.content-info p');
       const numParagraphs = paragraphs.length;
    
     function showText(index) {
       paragraphs.forEach((paragraph, i) => {
         if (i == index) {
           paragraph.style.display = 'inline-block';
         } else {
           paragraph.style.display = 'none';
         }
       });
       localStorage.setItem("currentTextIndex", index);
     }
    
     function showNextInfo() {
       if (currentTextIndex < numParagraphs - 1) {
         currentTextIndex++;
       } else {
         currentTextIndex = 0; // Reset to the first paragraph
       }
       showText(currentTextIndex);
     }
    
        function showPreviousInfo() {
          if (currentTextIndex > 0) {
            currentTextIndex--;
          } else {
            currentTextIndex = numParagraphs - 1; // Move to the last paragraph
          }
          showText(currentTextIndex);
        }
    
        showText(0);
    
      
        document.getElementById('left').addEventListener('click', showNextInfo);
        document.getElementById('right').addEventListener('click', showPreviousInfo);
      });
    }
   
     changingInfoSamsung()() 
   //-------------------------------------------------------------------------------------------------------
}

TextChangeSamsung();


