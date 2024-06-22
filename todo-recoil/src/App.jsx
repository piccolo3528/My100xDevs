import React, { useState } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { todoListState } from './State';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleAddTodo = () => {
    if (title && description) {
      setTodoList([...todoList, { title, description, completed: false }]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppWrapper() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default AppWrapper;
