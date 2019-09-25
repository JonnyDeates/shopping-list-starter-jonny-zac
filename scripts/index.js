import shoppingList from './shopping-list.js';
import item from './item.js';
import store from './store.js';

const main = function () {

    store.findAndDelete(id);
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);