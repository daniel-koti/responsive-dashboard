const body = document.querySelector('body');
const sidebar = document.querySelector('nav');
const modeToggle = document.querySelector('.mode-toggle');
const sidebarToggle = document.querySelector('i.sidebar-toggle')

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark')
  } else {
    localStorage.setItem('mode', 'light')
  }
})

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
})