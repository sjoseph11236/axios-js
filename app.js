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