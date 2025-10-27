document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.dropbtn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.parentElement;

      // Close all other dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('active');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('active');
    });
  });
});

document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
});
