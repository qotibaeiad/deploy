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
});
