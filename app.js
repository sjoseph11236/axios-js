import axios from 'axios';

const form = document.querySelector('form');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const  getTodos = async () => {
  try {
    const { data } = await axios.get(`{BASE_URL}/todos`);

    const todos = data;

    console.log(`GET: Here's the list of todos `, todos);

    return todos;
  } catch (error) {
    console.error(error);
  }
}

export const addTodo = async todo => { 
  try {
    const { data } = await axios.post(`${BASE_URL}/todos`, todo);
    const addedTodo = data;

    console.log(`Added a new Todo`, addedTodo);

    return addedTodo;
  } catch (error) {
    console.error(error);
  }
}

export const deleteTodo = async id => { 
  try {
    
  } catch (error) {
    console.error(error);
  }
}

const createLi = item => { 
  const li = document.createElement('li');

  li.appendChild(document.createTextNode(item.title));

  return li;
};


const addTodosToDom = todos => { 
  const ul = document.querySelector('ul');

  if(Array.isArray(todos) && todos.length > 0){ 
    todos.map(todo => { 
      ul.appendChild(createLi(todo));
    });
  }
  else if(todos) {
    ul.appendChild(createLi(todos));
  }
};

const main = async () => { 
  addTodosToDom(await getTodos());
}; 

main();


const formEvent = form.addEventListener('submit', async event => { 
  event.preventDefault();
  
  const title = document.querySelector('#new-todos__title').value;
  const userId = document.querySelector('#new-todos__userId').value;

  const todo = { 
    title,
    userId
  }

  const addedTodo = await addTodo(todo);
  addTodosToDOM(addedTodo);
});