import create from 'zustand';
// API для настроек
import settingsApi from '../api/settings.api';
// API для задач
import todoApi from '../api/todo.api';

const useStore = create((set, get) => ({
  // начальное состояние
  settings: {},
  todos: [],
  loading: false,
  error: null,
  // методы для
  // получения настроек
  fetchSettings() {
    set({ loading: true });
    settingsApi
      .fetchSettings()
      .then((settings) => {
        set({ settings });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
  // получения задач
  fetchTodos() {
    set({ loading: true });
    todoApi
      .fetchTodos()
      .then((todos) => {
        set({ todos });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
  // создания задачи
  addTodo(newTodo) {
    set({ loading: true });
    todoApi
      .addTodo(newTodo)
      .then((newTodo) => {
        const todos = [...get().todos, newTodo];
        set({ todos });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
  // обновления задачи
  updateTodo(id, changes) {
    set({ loading: true });
    todoApi
      .updateTodo(id, changes)
      .then((updatedTodo) => {
        const todos = get().todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        set({ todos });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
  // удаления задачи
  removeTodo(id) {
    set({ loading: true });
    todoApi
      .removeTodo(id)
      .then(() => {
        const todos = get().todos.filter((todo) => todo.id !== id);
        set({ todos });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
}));

export default useStore;
