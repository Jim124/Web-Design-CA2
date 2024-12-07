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
  
  //Testimonial JS
  $(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
      items: 4,
      margin: 30,
      loop: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 4 }
      }
    });
  });
  
  
  // alart
  document.addEventListener("DOMContentLoaded", () => {
      const button = document.querySelector(".main-border-button a");
  
      button.addEventListener("click", (event) => {
          event.preventDefault(); 
          alert("Enjoy your night out in Dublin!");
      });
  });

  const slides = document.querySelectorAll('.thumb');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none'; // 現在のスライドだけ表示
    slide.classList.remove('slide-active');
    if (i === index) {
      slide.classList.add('slide-active');
    }
  });
}

function startSlideShow() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; // 次のスライドへ
    showSlide(currentIndex);
  }, 3000); // 3秒ごとに切り替え
}

// 初期化
showSlide(currentIndex);
startSlideShow();
