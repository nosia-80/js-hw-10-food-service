import menu from '../menu.json';
import menuItemsTpl from '../menu-items.hbs';

const menuContainer = document.querySelector('.js-menu');
const menuItemsMarkup = createMenuItemsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createMenuItemsMarkup(menu) {
  return menuItemsTpl(menu);
}
