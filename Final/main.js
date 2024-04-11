/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["UI/UX Designer","Product Designer","Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)
//   cv download
  function downloadCV() {
        // Replace 'path_to_your_cv_file.pdf' with the actual path to your CV file
        var cvUrl = 'assets/graphic.pdf';
        
        // Create a temporary anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = cvUrl;
        downloadLink.download = 'graphic.pdf'; // Set the name for the downloaded file
        
        // Append the anchor element to the document body
        document.body.appendChild(downloadLink);
        
        // Trigger a click event on the anchor element to start the download
        downloadLink.click();
        
        // Remove the anchor element from the document body
        document.body.removeChild(downloadLink);
    }
    // dark mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// cv button
document.getElementById('download-cv-btn').addEventListener('click', function() {
  // Path to your CV file
  var cvFilePath = 'D:\Seneca\web development\Assignment4-Rabin Majhi INM 120\assets';
  
  // Create a link element
  var link = document.createElement('a');
  link.href = cvFilePath;
  link.download = 'your_cv_file.pdf'; // Specify the file name for download
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Remove the link from the body
  document.body.removeChild(link);
});
