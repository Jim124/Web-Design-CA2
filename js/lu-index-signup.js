$(document).ready(function () {
	console.log('lu-index-signup.js is loaded');
	const slides = [
    { alt: 'slide1', src: 'src/lu-pic/slide1.jpg' },
    { alt: 'slide2', src: 'src/lu-pic/slide2.jpg' },
    { alt: 'slide3', src: 'src/lu-pic/slide3.jpg' },
    { alt: 'slide4', src: 'src/lu-pic/slide4.jpg' }
    ];
	// Dynamically generate silde pic
  $.each(slides, function (index, item) {
    $('.carousel-inner').append(`
     <div class="carousel-item ${index === 0 ? 'active' : ''}">
     <img src="${item.src}" class="d-block w-100 h-100 object-fit-cover" alt="${item.alt}">
     </div>
    `);
  });

  // Dynamically generate first row - where to stay
  const stayPlaces = [
  { 
    src: 'src/lu-pic/stay.jpg', alt:"", 
    title:"Plan a magical winter break in DublinPlan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', alt:"", 
    title:"Plan a magical winter break",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  }
  ];
  $.each(stayPlaces, function (index, item) {
    $('.content-stay').append(`
      <div class="flex-shrink-0">         
        <div class="card">
          <img src="${item.src}" class="card-img-top img-fluid" alt="${item.alt}">
          <div class="card-body">
            <div class="text">${item.text} · ${item.category}</div>
            <div class="title roboto-font">${item.title}</div>
          </div>
        </div>
      </div>
      `);
  });
    // Dynamically generate second row - food n drinks
  const indoorPlaces = [
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in DublinPlan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle",

  }
  ];

  $.each(indoorPlaces, function (index, item) {
    $('.content-fnd').append(`
      <div class="col col-sm-6 d-flex justify-content-center">
        <div class="card mb-2 ${(index === 2 || index === 3) ? 'd-none d-md-block' : ''}">
          <img src="${item.src}" class="card-img-top" alt="${item.alt}">
          <div class="card-body">
            <div class="text">${item.text} · ${item.category}</div>
            <div class="title roboto-font">${item.title}</div>
          </div>
        </div>
      </div>
    `);
  });
  // Dynamically generate second row - food n drinks
  const outdoorPlaces = [
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in DublinPlan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle"
  }
  ];

  $.each(outdoorPlaces, function (index, item) {
  $('.outdoor-items').append(`
    <div class="flex-shrink-0 pb-3">         
      <div class="card">
        <img src="${item.src}" class="card-img-top img-fluid" alt="${item.alt}">
        <div class="card-body">
          <div class="text">${item.text} · ${item.category}</div>
          <div class="title roboto-font">${item.title}</div>
        </div>
      </div>
    </div>
  `);
});

  // Dynamically generate forth row - festival n events
  // calculate the rest day 
  function calDateDiff(estimate){
    const now = new Date();
    const newDate = new Date(estimate);
    let diff = newDate - now;
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let res = "";
    if (diffDays < 0) {
      res = "The event was finished";
    } else {
      res = `Starts in ${diffDays} days`;
    }
    return res;
}

  const festivalNEvents = [
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in DublinPlan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle",
    date: "2024-12-30",
    diff: calDateDiff("2024-12-30")
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break",
    text: "where to stay",
    category: "castle",
        date: "2024-12-29",
    diff: calDateDiff("2024-12-29")
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle",
    date: "2024-12-01",
    diff: calDateDiff("2024-12-01")
  },
  { 
    src: 'src/lu-pic/stay.jpg', 
    alt:"", 
    title:"Plan a magical winter break in Dublin",
    text: "where to stay",
    category: "castle",
    date: "2024-12-31",
    diff: calDateDiff("2024-12-31")
  }
  ];
  $.each(festivalNEvents, function (index, item) {
    $('.content-fne').append(`
      <div class="col col-sm-6 d-flex justify-content-center">
        <div class="card mb-2 ${(index === 2 || index === 3) ? 'd-none d-md-block' : ''}">
          <img src="${item.src}" class="card-img-top" alt="${item.alt}">
          <div class="card-body text-center">
            <div class="text">${item.text} · ${item.category}</div>
            <div class="title georgia">${item.title}</div>
            <div class="text date">Starts date: ${item.date}</div>
            <div class="text">${item.diff}</div>
          </div>
        </div>
      </div>
    `);
  });
  // --------------sign up page-------------
  // city option 
  const cities = [
    "Dublin",
    "Cork", 
    "Galway", 
    "Limerick", 
    "Waterford", 
    "Sligo", 
    "Wexford"
    ];
    $.each(cities, function (index, item) {
    $('.form-select').append(`
      <option value="${item}">${item}</option>
      </div>
    `);
  });

    $("#sign-up-form").on("submit", function (event) {
    // prevent default submit
    event.preventDefault();
    // if the form validation
    let isValid = true;

    // validate name
    const nameInput = document.getElementById("inputName");
    if (nameInput.value.length < 4) {
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
    };

    // validate email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("inputEmail");
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
    };

    // validate password 
    const pwdInput = document.getElementById("inputPassword");
    const pswRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!pswRegex.test(pwdInput.value)) {
      pwdInput.classList.add("is-invalid");
      isValid = false;
    } else {
      pwdInput.classList.remove("is-invalid");
    };

    // through all the viladation, submit all info
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
      window.location.href="index.html";
    }
  });


})