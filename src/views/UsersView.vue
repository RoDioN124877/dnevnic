<template>
  <div class="main">
    <input v-model="searchQuery" type="text" placeholder="Поиск" />
    <div class="container">
      <!-- Поле ввода для поиска -->

      <div class="user-block" v-for="userData in filteredUsers" :key="userData.id">
        <router-link :to="{ name: 'user', params: { id: userData.id, name: userData.name } }">
          <div class="user-block-main">
            <h4>{{ userData.role }}</h4>
            <p>{{ userData.name }} {{ userData.surname }} {{ userData.patronymic }}</p>
            <p>Дата рождения - {{ userData.date }}</p>
          </div>
        </router-link>
        <p v-for="lesson in getUserLessons(userData.id)" :key="lesson.id">
          уроки в которых участвует -
          <router-link :to="{ name: 'lesson', params: { id: lesson.id, title: lesson.title } }">{{
            lesson.title
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/store/usersStore'
import { ref, computed } from 'vue'

const usersStore = useUsersStore()
const searchQuery = ref('')

// Вычисляемое свойство для фильтрации пользователей по имени, фамилии или отчеству
const filteredUsers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return usersStore.users
  } else {
    return usersStore.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.surname.toLowerCase().includes(query) ||
        user.patronymic.toLowerCase().includes(query)
    )
  }
})

const getUserLessons = (userId: number) => {
  return usersStore.lessons.filter((lesson) => lesson.students.userId.includes(userId))
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 200px;
  text-align: center;
}
.container {
  width: 1440px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}
.user-block {
  width: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
.user-block-main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 320px;
  align-items: center;
  padding: 20px;
  padding-bottom: 0px;
}
p {
  text-align: center;
}
</style>
