<template>
  <div class="con">
    <table style="width: 100%" v-if="todoList.length">
      <thead>
        <tr>
          <th>Task</th>
          <th>from</th>
          <th>to</th>
          <th>created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background: rgb(149 242 192)'
              : 'background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td class="action">
            <div>
              <button @click="completeTodo(todo)" class="copmleted">
                {{ todo.isCompleted ? "Uncompleted" : "Completed" }}
              </button>
              <button @click="deleteTodo(index)" class="deleted">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else style="line-height: 15">No Todos To show</h2>
  </div>
</template>

<script setup>
import todosMixin from "@/mixins/todo";

const { todoList } = todosMixin();

//Data
// const index = ref(todoList.value.index);

// const deleteTodo = () => {
//   todosList.value.splice(index, 1);
//   addToLocalSt();
// };

// const completeTodo = (todo) => {
//   todo.isCompleted = !todo.isCompleted;
//   addToLocalSt();
// };
</script>
