//outdoor-section1
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#concept");
  
    const observerOptions = {
      threshold: 0.2 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  });
  
  //outdoor-section2
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#concept-two");
  
    const observerOptions = {
      threshold: 0.4
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  });
  
  //outdoor-section3
  window.addEventListener('scroll', function() {
    const sectionThree = document.getElementById('concept-three');
    const text = sectionThree.querySelector('.text');
    const img = sectionThree.querySelector('.concept-img');
    const sectionPosition = sectionThree.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
  
    if (sectionPosition < windowHeight * 0.8) {
      sectionThree.classList.add('visible');
      text.classList.add('visible');
      img.classList.add('visible');
    }
  });
  
  //Cafe Testimonial 
  $(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
      items: 4,
      margin: 30,
      loop: true,
      nav: false,         
      dots: false, 
      autoplay: true,
      autoplayTimeout: 3000, // each 3 seconds
      autoplayHoverPause: true, 
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 4 }
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // 特定のボタン（.special-button）を選択
    const button = document.querySelector(".special-button");
  
    // イベントリスナーを追加
    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Enjoy discovering Dublin!");
      });
    }
  });
  

// Back to top button : show up if user scroll up to 300px
window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) { 
    backToTopButton.classList.remove('hidden'); 
  } else {
    backToTopButton.classList.add('hidden'); 
  }
});
