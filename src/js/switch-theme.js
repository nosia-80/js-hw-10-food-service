const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.body;

themeSwitchToggle.addEventListener('change', onToggleClick);

checkTheme();

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;

  if (checked) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function darkTheme() {
  body.classList.remove(LIGHT);
  body.classList.add(DARK);
  localStorage.setItem('theme', DARK);
}

function lightTheme() {
  body.classList.remove(DARK);
  body.classList.add(LIGHT);
  localStorage.setItem('theme', LIGHT);
}

function checkTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === DARK) {
    body.classList.add(DARK);
    themeSwitchToggle.checked = true;
  }
}
