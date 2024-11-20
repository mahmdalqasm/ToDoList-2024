import { ref, onMounted } from "vue";

const todoFunction = () => {
  const todoList = ref([]);
  const addToLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todoList.value));
  };
  const updateTodos = () => {
    if (localStorage.getItem("todos")) {
      todoList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };
  onMounted(() => {
    updateTodos();
  });
  return { todoList, addToLocalSt };
};

export default todoFunction;
