document.addEventListener('DOMContentLoaded', function () {
  const drawerToggle = document.getElementById('drawerToggle');
  const drawerClose = document.getElementById('drawerClose');
  const drawer = document.getElementById('drawer');

  drawerToggle.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  drawerClose.addEventListener('click', () => {
    drawer.classList.add('hidden');
  });

  // Assuming you have a button with an ID of 'darkModeToggle'
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  // Load 'gridlnews.html' by default
  loadPage('gridlnews.html');
});

function checkLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === 'abdallh' && password === '123456') {
    window.location.href = 'https://www.ynet.co.il/home/0,7340,L-8,00.html';
  } else {
    alert('Incorrect username or password');
  }
}

function loadPage(page) {
  // Use AJAX to load the content of the specified HTML page
  $.ajax({
    url: page,
    type: 'GET',
    success: function(data) {
      // Replace the content of the 'content' div with the loaded HTML
      $('#content-container').html(data);

      // Hide the drawer after loading the new page
      const drawer = document.getElementById('drawer');
      drawer.classList.add('hidden');
    },
    error: function() {
      // Handle errors if necessary
      alert('Error loading page.');
    }
  });
}
