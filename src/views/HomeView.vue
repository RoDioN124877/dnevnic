<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'users' }">Ученики</router-link></li>
          <li><router-link :to="{ name: 'lessons' }">Задания</router-link></li>
        </ul>
        <router-link :to="{ name: 'userAdd' }">добавить ученика</router-link>
        <router-link :to="{ name: 'lessonAdd' }">добавить урок</router-link>
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

<style scoped></style>