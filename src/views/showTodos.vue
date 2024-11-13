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

<style scoped lang="scss">
.con {
  max-width: 80vw;
  height: 100vh;
  margin: 0px auto;
}
.action {
  width: 30%;
}
table {
  tr,
  td,
  th {
    border: 1px solid;
    padding: 5px;
    width: 17.5%;
  }
  td {
    button {
      background-color: rgb(16, 110, 85);
      color: white;
      font-size: 18px;
      padding: 5px 10px;
      border: 1px solid rgb(16, 110, 85);
      border-radius: 7px;
      margin: 10px;
      cursor: pointer;
      &.deleted {
        background-color: indianred;
        border: 1px solid indianred;
      }
      &.copmleted {
        min-width: 130px;
      }
    }
  }
}
</style>
