
  const navLinks = document.querySelectorAll('#customNavbar .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default anchor behavior

      // If the link is disabled, ignore it
      if (link.classList.contains('disabled')) return;

      // Toggle active class
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      } else {
        navLinks.forEach(l => l.classList.remove('active')); // remove from all
        link.classList.add('active'); // add to clicked
      }
    });
  });
