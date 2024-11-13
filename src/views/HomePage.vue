<template>
  <h1 style="margin-bottom: 20px">Add New Todos</h1>
  <form action="" @submit.prevent>
    <input
      type="text"
      v-model="todoObject.text"
      placeholder="Enter Your todo"
    />
    <br />
    <label
      for=""
      style="margin: 0px 10px 0px 0px; font-size: 18px; font-weight: bold"
      >from</label
    >
    <input type="date" placeholder="from" v-model="todoObject.from" />
    <label
      for=""
      style="margin: 0px 10px 0px 20px; font-size: 18px; font-weight: bold"
      >to</label
    >
    <input type="date" placeholder="to" v-model="todoObject.to" />
    <br />
    <input type="submit" value="Add" @click="addTodo" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import todoMixins from "@/mixins/todo";

const { todoList, addToLocalSt } = todoMixins();

const todoObject = ref({
  text: "",
  from: "",
  to: "",
  id: "",
  createdAt: "",
  isCompleted: "",
});

const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAt = new Date();
  if (
    todoObject.value.text != "" &&
    todoObject.value.from != "" &&
    todoObject.value.to != ""
  ) {
    todoList.value.push(todoObject.value);
    addToLocalSt();
    alert("Todo Was Added Successfully");
    todoObject.value = {
      id: "",
      text: "",
      from: "",
      to: "",
      createdAt: "",
      isCompleted: false,
    };
  } else {
    alert("this inputs is required");
  }
};
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
    outline: none;
    margin-bottom: 20px;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgb(0, 100, 71);
    color: white;
    border: 1px solid rgb(0, 100, 71);
    border-radius: 7px;
    margin: 20px 0px 20px 0px;
  }
}
</style>
