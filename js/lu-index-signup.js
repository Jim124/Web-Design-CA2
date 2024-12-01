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
    category: "castle"
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
  const festivalNEvents = [
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
  $.each(festivalNEvents, function (index, item) {
    $('.content-fne').append(`
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
})