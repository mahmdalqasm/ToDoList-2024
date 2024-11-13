<template>
  <div class="nav">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }"></router-link>
        {{ route.meta.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.nav ul {
  margin: 0px 0px 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 20px 0px;
  background-color: #078b69;
  a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
</style>
