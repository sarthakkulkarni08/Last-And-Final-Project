function refreshPageNot(){
  document.addEventListener("DOMContentLoaded", function() {
  let myButton = document.querySelector(".nav-1 ul");
  
    myButton.addEventListener("click", function(event) {
      event.preventDefault(); 
      console.log("clicked")
    });
  });
  
  }
refreshPageNot()

// Above Function is for Prevent the Page Reload 

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

  gsap.from("#page7",{
    y:250,
    duration:1,
    opacity:0,

    scrollTrigger: {
      trigger: "#page7",
      start:"top center",
  
    
   
   
    
      
    }
  })



}
GSAPeffects()

// Above Function is contain all GSAP Effects
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
// Above function is for the the changing text of BESPOKE AI


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
  
// Above function is for the the changing Images of BESPOKE AI
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


// Above function is for the the changing Text of the PAGE 1


