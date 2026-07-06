document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  }

  // Active Link Handling based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });


  // Sidebar Active Link Switching (Dashboards)
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if(this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      sidebarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


