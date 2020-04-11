import axios from 'axios';

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