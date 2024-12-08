$(document).ready(function () {
  const slides = [
    { alt: "slide1", src: "src/lu-pic/slide1.avif" },
    { alt: "slide2", src: "src/lu-pic/slide2.avif" },
    { alt: "slide4", src: "src/lu-pic/slide4.avif" },
  ];
  // Dynamically generate silde pic
  $.each(slides, function (index, item) {
    $(".carousel-inner").append(`
     <div class="carousel-item ${index === 0 ? "active" : ""}">
     <img src="${
       item.src
     }" class="d-block w-100 h-100 object-fit-cover" alt="${item.alt}" loading="lazy">
     </div>
    `);
  });

  // Dynamically generate first row - where to stay
  const stayPlaces = [
    {
      src: "src/images/tent-2.avif",
      alt: "tent",
      title: "Experience the Charm of Winter Camping",
      text: "where to stay",
      category: "tent",
    },
    {
      src: "src/images/hotel.avif",
      alt: "hotel",
      title: "Luxury Awaits: Your Winter Getaway in Dublin",
      text: "where to stay",
      category: "hotel",
    },
    {
      src: "src/images/cabin-1.avif",
      alt: "cabin",
      title: "Cozy Cabins: A Magical Winter Retreat in Dublin",
      text: "where to stay",
      category: "cabin",
    },
    {
      src: "src/images/caravan-2.avif",
      alt: "caravan",
      title: "Adventurous Winter Break: Discover Dublin in a Caravan",
      text: "where to stay",
      category: "caravan",
    },
  ];
  $.each(stayPlaces, function (index, item) {
    $(".content-stay").append(`
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
      src: "src/lu-pic/indoor-1.avif",
      alt: "indoor",
      title: "Ryleigh's",
      text: "grill",
      category: "food",
    },
    {
      src: "src/lu-pic/indoor-2.avif",
      alt: "indoor",
      title: "WILDE Restaurant",
      text: "fusion",
      category: "food",
    },
    {
      src: "src/lu-pic/indoor-3.avif",
      alt: "indoor",
      title: "FIRE Steakhouse and Bar",
      text: "steak",
      category: "food",
    },
    {
      src: "src/lu-pic/indoor-4.avif",
      alt: "indoor",
      title: "The Church",
      text: "international",
      category: "food",
    },
  ];

  $.each(indoorPlaces, function (index, item) {
    $(".content-fnd").append(`
      <div class="col col-sm-6 d-flex justify-content-center">
        <div class="card mb-2 ${
          index === 2 || index === 3 ? "d-none d-md-block" : ""
        }">
          <img src="${item.src}" class="card-img-top" alt="${item.alt}">
          <div class="card-body">
            <div class="text">${item.text} · ${item.category}</div>
            <div class="title roboto-font">${item.title}</div>
          </div>
        </div>
      </div>
    `);
  });
  // Dynamically generate third row - outdoor
  const outdoorPlaces = [
    {
      src: "src/lu-pic/outdoor-coastal.avif",
      alt: "coastal",
      title: "Dublin Coastal Hike, Pints & Puppies",
      text: "outdoor",
      category: "hiking",
    },
    {
      src: "src/lu-pic/outdoor-boat.avif",
      alt: "Boat",
      title: "1 Hour Boat Trip from Howth to Dun Laoghaire",
      text: "outdoor",
      category: "boat trip",
    },
    {
      src: "src/lu-pic/outdoor-cliff.avif",
      alt: "cliff",
      title: "Cliffs of Moher Tour",
      text: "outdoor",
      category: "hiking",
    },
    {
      src: "src/lu-pic/outdoor-howth.avif",
      alt: "howth",
      title: "Howth Coastal Half-Day Bus Tour",
      text: "outdoor",
      category: "bus tour",
    },
  ];

  $.each(outdoorPlaces, function (index, item) {
    $(".outdoor-items").append(`
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
  function calDateDiff(estimate) {
    const now = new Date();
    const newDate = new Date(estimate);
    let diff = newDate - now;
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let res = "";
    if (diffDays < 0) {
      res = "Oops, finished";
    } else {
      res = `Starts in ${diffDays} days`;
    }
    return res;
  }

  const festivalNEvents = [
    {
      src: "src/images/christmas-spinner.avif",
      alt: "spinner",
      title: "Magical Winter Break in Dublin",
      text: "events",
      category: "festival",
      date: "2024-12-30",
      diff: calDateDiff("2024-12-30"),
    },
    {
      src: "src/images/comedy-3.avif",
      alt: "comedy",
      title: "Comedy Show in January",
      text: "events",
      category: "comedy",
      date: "2025-1-30",
      diff: calDateDiff("2025-01-30"),
    },
    {
      src: "src/images/music-3.avif",
      alt: "music",
      title: "Music event in December",
      text: "events",
      category: "music",
      date: "2024-12-01",
      diff: calDateDiff("2024-12-01"),
    },
    {
      src: "src/images/theater-1.avif",
      alt: "theater",
      title: "Theater Show on New Year's Eve",
      text: "events",
      category: "theater",
      date: "2024-12-31",
      diff: calDateDiff("2024-12-31"),
    },
  ];
  $.each(festivalNEvents, function (index, item) {
    $(".content-fne").append(`
      <div class="col col-sm-6 d-flex justify-content-center">
        <div class="card mb-2 ${
          index === 2 || index === 3 ? "d-none d-md-block" : ""
        }">
          <img src="${
            item.src
          }" class="card-img-top img-fluid2" alt="${item.alt}">
          <div class="card-body text-center">
            <div class="text">${item.text} · ${item.category}</div>
            <div class="title georgia">${item.title}</div>
            <div class="text date">Date: ${item.date}</div>
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
    "Wexford",
  ];
  $.each(cities, function (index, item) {
    $(".form-select").append(`
      <option value="${item}">${item}</option>
      </div>
    `);
  });

  // validate when submit all the information
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
    }

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("inputEmail");
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
    }

    // validate password
    const pwdInput = document.getElementById("inputPassword");
    const pswRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!pswRegex.test(pwdInput.value)) {
      pwdInput.classList.add("is-invalid");
      isValid = false;
    } else {
      pwdInput.classList.remove("is-invalid");
    }

    // through all the viladation, submit all info
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
      window.location.href = "index.html";
    }
  });

  // navigate to ohter pages
  // get each button by id
  const btnForStay = document.getElementById("stayBtn");
  const btnForFnd = document.getElementById("fndBtn");
  const btnForOutdoor = document.getElementById("outdoorBtn");
  const btnForFne = document.getElementById("fneBtn");

  // bind a click event
  btnForStay.addEventListener("click", () => {
    window.location.href = "live.html";
  });

  btnForFnd.addEventListener("click", () => {
    window.location.href = "food_drinks.html";
  });

  btnForOutdoor.addEventListener("click", () => {
    window.location.href = "outdoor.html";
  });

  btnForFne.addEventListener("click", () => {
    window.location.href = "festival.html";
  });
});
