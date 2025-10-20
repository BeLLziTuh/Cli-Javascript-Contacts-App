function getList() {
  console.log('Lista adicionada como objeto');
};

function list() {
  console.log('Lista de contatos:');
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