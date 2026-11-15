const navButtons = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const dashboardContent = document.getElementById('dashboardContent');
const placeholderContent = document.getElementById('placeholderContent');
const sectionTitle = document.getElementById('sectionTitle');
const sidebar = document.getElementById('sidebar');

document.getElementById('menuToggle').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const page = button.dataset.page;
    pageTitle.textContent = page;
    const isDashboard = page === 'Dashboard';
    dashboardContent.classList.toggle('hidden', !isDashboard);
    placeholderContent.classList.toggle('hidden', isDashboard);
    sectionTitle.textContent = page;
    sidebar.classList.remove('open');
  });
});
