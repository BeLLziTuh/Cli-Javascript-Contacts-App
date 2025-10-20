const fs = require('fs');

function getList() {
  return (JSON.parse(fs.readFileSync('./list.json', 'utf8')));
};

function list() {
  let listObj = getList(),
  list = '';
  if (listObj.length == 0) {
    list = 'Empty list!';
  } else if (listObj.length == 1) {
    list += `Contacts list:\n${listObj[0].name} ${listObj[0].number}`;
  } else {
    list += 'Contacts list:';
    listObj.map(contact => {
      list += `\n${contact.name} ${contact.number}`;
    });
  };
  console.log(list);
};

function add() {
  console.log('Contato adicionado');
};

function remove() {
  console.log('Contato removido');
};

module.exports = {
  list,
  add,
  remove
};