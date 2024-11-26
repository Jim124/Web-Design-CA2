$(document).ready(function () {
  // navbar menu list
  const navMenuItems = [
    { name: 'Home', href: 'index.html' },
    { name: 'Where to stay', href: 'live.html' },
    { name: 'Food&Drinks', href: '#' },
    { name: 'Outdoor', href: '#' },
    { name: 'Festival&Events', href: '#' },
  ];
  // footer menu list
  const footerMenuItems = [
    { name: 'Home', href: 'index.html' },
    { name: 'Where to stay', href: 'live.html' },
    { name: 'Food & Drinks', href: '#' },
    { name: 'Outdoor', href: '#' },
    { name: 'Festival & Events', href: '#' },
  ];
  // footer legal list
  const footerLegalItems = [
    { name: 'Terms&conditions' },
    { name: 'Accessibility' },
    { name: 'Cookie policy' },
    { name: 'Privacy Statement' },
  ];

  // extract code for reuse navbar n footer
  $('#navbar-placeholder').load('navbar.html', function () {
    setNavActiveLink();
  });

  $('#footer-placeholder').load('footer.html', function () {
    setFooterActiveLink();
  });

  // toggle tabs
  // match current page link
  function setNavActiveLink() {
    const currentPath =
      window.location.pathname.split('/').pop() || 'index.html';

    // Dynamically generate footer sub menu list
    $.each(navMenuItems, function (index, item) {
      $('.navbar-nav').append(`
      <li class="nav-item me-2">
      <a class="nav-link" href="${item.href}">
      <span>${item.name}</span>
      </a>
      </li>
      `);
    });

    $('.nav-link').each(function () {
      if ($(this).attr('href') === currentPath) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // onclick, change active class
    $('.nav-link').on('click', function () {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    });
  }
  function setFooterActiveLink() {
    // get actived page
    const currentPath =
      window.location.pathname.split('/').pop() || 'index.html';

    // Dynamically generate footer sub menu list
    $.each(footerMenuItems, function (index, item) {
      $('.footer-sub-link').append(`
      <li class="footer-item">
      <a class="footer-link" href="${item.href}">${item.name}</a>
      </li>
      `);
    });

    // Dynamically generate footer legal list
    $.each(footerLegalItems, function (index, item) {
      $('.footer-legal').append(`
      <li class="footer-item">
      <span class="footer-link">${item.name}</span>
      </li>
      `);
    });

    // handle active class
    $('.footer-link').each(function () {
      if ($(this).attr('href') === currentPath) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    $('.footer-link').on('click', function () {
      $('.footer-link').removeClass('active');
      $(this).addClass('active');
    });
  }
});

// scroll navbar
$(document).ready(function () {
  // save the postion where last time scrolled
  let lastScrollTop = 0;

  $(window).on('scroll', function () {
    // get the current scroll sposition
    let currentScrollTop = $(this).scrollTop();

    if (currentScrollTop > 100 && currentScrollTop > lastScrollTop) {
      // scroll down, hidden nabar
      $('.navbar').removeClass('navbar-fixed').addClass('navbar-hidden');
    } else {
      // scroll top, fix navbar
      $('.navbar').removeClass('navbar-hidden').addClass('navbar-fixed');
    }
    // update scroll position
    lastScrollTop = currentScrollTop;
  });
});
