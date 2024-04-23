
function GSAPeffects(){
 gsap.registerPlugin(ScrollTrigger);
  

 
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
     start:"-500px"
   
     
      
     }
     
  
   })
  
  

   gsap.from(".galaxy-ai-img",{
     y:450,
     duration:1,
     opacity:0,
     scrollTrigger: {
       trigger: ".galaxy-ai-img",
       start:"top center",
      start:"-450px",
    end:"200px"
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
   
    
      
    }
  })

  gsap.from("#page6 .back img",{
    x:-250,
    duration:1.25,
    opacity:0,

    scrollTrigger: {
      trigger: "#page6",
  
   
   
    
      
    }
  })

}
GSAPeffects()



function shopdropDown(){
  let navElem = document.querySelector("#shop");
  let DropList = document.querySelector(".shop-content");
  let eraHead = document.querySelector("#samsung-era-head");
  let SamsungInfo = document.querySelector(".content");
  navElem.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
       DropList.style.marginLeft = "2vw"
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  
  })
  DropList.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  })
  navElem.addEventListener("mouseleave", function(){
    DropList.style.display = "none";
    eraHead.style.display = "block";
    SamsungInfo.style.display = "flex";
  
  })

    
  }
shopdropDown()
  


function mobiledropDown(){
  let navElem = document.querySelector("#mobile");
  let DropList = document.querySelector(".mobile-content");
  let eraHead = document.querySelector("#samsung-era-head");
  let SamsungInfo = document.querySelector(".content");
  navElem.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
    DropList.style.marginLeft = "5vw"
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  
  })
  navElem.addEventListener("mouseleave", function(){
    DropList.style.display = "none";
    eraHead.style.display = "block";
    SamsungInfo.style.display = "flex";
  
  })
    
  }
mobiledropDown()


function laptopdropDown(){
  let navElem = document.querySelector("#laptop");
  let DropList = document.querySelector(".laptop-content");
  let eraHead = document.querySelector("#samsung-era-head");
  let SamsungInfo = document.querySelector(".content");
  navElem.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
    DropList.style.marginLeft = "10vw"
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  
  })
  navElem.addEventListener("mouseleave", function(){
    DropList.style.display = "none";
    eraHead.style.display = "block";
    SamsungInfo.style.display = "flex";
  
  })
    
  }
laptopdropDown()

function displaydropDown(){
  let navElem = document.querySelector("#display");
  let DropList = document.querySelector(".display-content");
  let eraHead = document.querySelector("#samsung-era-head");
  let SamsungInfo = document.querySelector(".content");
  navElem.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
    DropList.style.marginLeft = "15vw"
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  
  })
  navElem.addEventListener("mouseleave", function(){
    DropList.style.display = "none";
    eraHead.style.display = "block";
    SamsungInfo.style.display = "flex";
  
  })
    
  }
displaydropDown()


function accessoriesdropDown(){
  let navElem = document.querySelector("#accessories");
  let DropList = document.querySelector(".accessories-content");
  let eraHead = document.querySelector("#samsung-era-head");
  let SamsungInfo = document.querySelector(".content");
  navElem.addEventListener("mouseenter", function(){
    DropList.style.display = "block";
    DropList.style.marginLeft = "20vw"
    eraHead.style.display = "none";
    SamsungInfo.style.display = "none";
  
  })
  navElem.addEventListener("mouseleave", function(){
    DropList.style.display = "none";
    eraHead.style.display = "block";
    SamsungInfo.style.display = "flex";
  
  })
    
  }
  accessoriesdropDown()

































function TextChangebespoke(){
   
  function changingInfobespoke() {
  
   document.addEventListener("DOMContentLoaded", function () {
    let currentTextIndex = localStorage.getItem("currentTextIndex") || 0;
     const paragraphs = document.querySelectorAll('.bespoke-info p');
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
  
   function showNextBespokeInfo() {
     if (currentTextIndex < numParagraphs - 1) {
       currentTextIndex++;
     } else {
       currentTextIndex = 0; // Reset to the first paragraph
     }
     showText(currentTextIndex);
   }
  
      function showPreviousBespokeInfo() {
        if (currentTextIndex > 0) {
          currentTextIndex--;
        } else {
          currentTextIndex = numParagraphs - 1; // Move to the last paragraph
        }
        showText(currentTextIndex);
      }
  
      showText(0);
  
    
      document.getElementById('bespoke-left').addEventListener('click', showNextBespokeInfo);
      document.getElementById('bespoke-right').addEventListener('click', showPreviousBespokeInfo);
    });
  }
 
  changingInfobespoke()
 //-------------------------------------------------------------------------------------------------------
}

TextChangebespoke()




function bespokeImgChange() {
  
  function ChangingimgBespoke() {
    document.addEventListener("DOMContentLoaded", function () {
      let currentImageIndex = localStorage.getItem("currentImageIndex") || 0;
      const images = document.querySelectorAll('.bespoke-img img');
      const numImages = images.length;

      function showImage(index) {
        images.forEach((image, i) => {
          if (i === index) {
            image.style.display = 'inline-block';
          } else {
            image.style.display = 'none';
          }
        });
        localStorage.setItem("currentImageIndex", index);
      }

      function showNextImage() {
        if (currentImageIndex < numImages - 1) {
          currentImageIndex++;
        } else {
          currentImageIndex = 0; // Reset to the first image
        }
        showImage(currentImageIndex);
      }

      function showPreviousImage() {
        if (currentImageIndex > 0) {
          currentImageIndex--;
        } else {
          currentImageIndex = numImages - 1; // Move to the last image
        }
        showImage(currentImageIndex);
      }

      showImage(0);

      document.getElementById('bespoke-left').addEventListener('click', showNextImage);
      document.getElementById('bespoke-right').addEventListener('click', showPreviousImage);
    });
  }

  ChangingimgBespoke()
}

bespokeImgChange()
  



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


