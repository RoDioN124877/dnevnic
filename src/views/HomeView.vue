<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'users' }">Ученики</router-link></li>
          <li><router-link :to="{ name: 'lessons' }">Задания</router-link></li>
        </ul>
        <ul>
          <li><router-link :to="{ name: 'userAdd' }">добавить ученика</router-link></li>
          <li><router-link :to="{ name: 'lessonAdd' }">добавить урок</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
header {
  background-color: black;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  width: 1440px;
  margin: auto;
  padding: 0px 100px;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
li a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
li a:hover {
  opacity: 0.9;
}
</style>
