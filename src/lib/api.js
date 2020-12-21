const tmp = [{
  id: 1,
  title: 'example 123',
  quantity: 0,
  price: 0,
  description: 'hello world',
  done: false,
}, {
  id: 2,
  title: 'hello',
  quantity: 0,
  price: 0,
  description: 'hello world',
  done: false,
}];

class ToDoAPI {
  constructor(list) {
    this.list = list || [];
  }

  getAll() {
    return this.list;
  }
}

export default new ToDoAPI(tmp);
