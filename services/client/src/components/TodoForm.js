import { useState, useEffect } from 'react';
import useStore from '../hooks/useStore';

export default function TodoForm() {
  // метод для создания задачи из хранилища
  const addTodo = useStore(({ addTodo }) => addTodo);
  // состояние для текста новой задачи
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(!text.trim());
  }, [text]);

  // метод для обновления текста задачи
  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  // метод для отправки формы
  const onSubmit = (e) => {
    e.preventDefault();
    if (disable) return;
    const newTodo = {
      text,
      done: false,
    };
    addTodo(newTodo);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='text'>New todo text</label>
      <input type='text' id='text' value={text} onChange={onChange} />
      <button className='add'>Add</button>
    </form>
  );
}
