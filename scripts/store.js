import item from './item.js';

const items = [];
const hideCheckedItems = false;


function findById(id) {
    return items.find(item => item.id === id);
}

function addItem(itemName) {
    try {
        item.validateName(itemName);
        this.items.push(item.create(itemName));
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id){
    let item = findById(id);
    item.checked = !item.checked;
}
function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        let item = this.findById(id)
        item.name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete(id) {
    if (!(!!this.items.findIndex((item) => item.id === id))) {
        this.items.splice(this.items.findIndex((item) => item.id === id), 1);
    }
}

export default {items, hideCheckedItems, addItem, findAndToggleChecked, findAndDelete, findAndUpdateName, findById};