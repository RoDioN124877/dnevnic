<template>
  <div class="main">
    <input v-model="searchQuery" type="text" placeholder="Поиск" />
    <div class="container">
      <div v-for="lessonData in filteredLessons" :key="lessonData.id" class="block">
        <router-link
          :to="{
            name: 'lesson',
            params: {
              id: lessonData.id,
              title: lessonData.title
            }
          }"
        >
          <div class="block-main">
            <h4>{{ lessonData.title }}</h4>
            <p>{{ lessonData.description }}</p>
            <p>Дата проведения - {{ lessonData.date }}</p>
          </div>
        </router-link>
        <div>
          <p>Учитель</p>
          <p>
            <router-link
              :to="{
                name: 'user',
                params: {
                  id: usersStore.users[lessonData.teacher.userId].id,
                  name: usersStore.users[lessonData.teacher.userId].name
                }
              }"
            >
              {{ usersStore.users[lessonData.teacher.userId].name }}
              {{ usersStore.users[lessonData.teacher.userId].surname }}
            </router-link>
          </p>
        </div>
        <div>
          <p>Ученики</p>
          <p v-for="index in lessonData.students.userId" :key="index">
            <router-link
              :to="{
                name: 'user',
                params: { id: usersStore.users[index].id, name: usersStore.users[index].name }
              }"
            >
              {{ usersStore.users[index].name }} {{ usersStore.users[index].surname }}
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/store/usersStore'
const usersStore = useUsersStore()
import { ref, computed } from 'vue'

const searchQuery = ref('')

// Вычисляемое свойство для фильтрации уроков по названию
const filteredLessons = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return usersStore.lessons
  } else {
    return usersStore.lessons.filter((lesson) => lesson.title.toLowerCase().includes(query))
  }
})
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input{
  width: 200px;
  text-align: center;
}
.container {
  width: 1440px;
  margin: auto;
  display: flex;
  gap: 20px;
  margin-top: 50px;
  text-align: center;
  justify-content: center;
}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 300px;
  height: 150px;
}
.block-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block-main div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
