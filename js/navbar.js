// Highlight active menu item
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    const navLinks = document.querySelectorAll('.nav-link:not([href*="http"])'); // Exclude external links
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('#')[0]; // Remove anchor tags
      // Highlight if:
      // 1. Current page matches the link (e.g., music.html)
      // 2. On index.html and the link is "Home"
      if (
        linkPage === currentPage ||
        (currentPage === "index.html" && linkPage === "index.html" && link.getAttribute('href') === "index.html")
      ) {
        link.classList.add('active');
      }
    });
  });