const global = {
  currentPage: window.location.pathname,
};

// Highlight Active Links
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  })
}

// Init App
function Init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV Details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }

  // Invoke functions
  highlightActiveLink();
}

// Add Event Listener
document.addEventListener('DOMContentLoaded', Init);