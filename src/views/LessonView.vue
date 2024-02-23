<template>
  <div>
    <div class="block">
      <h4>{{ usersStore.lessons[props.id].title }}</h4>
      <p>{{ usersStore.lessons[props.id].date }}</p>
      <p>
        <router-link
          :to="{
            name: 'user',
            params: {
              id: usersStore.lessons[props.id].teacher.userId,
              name: usersStore.users[usersStore.lessons[props.id].teacher.userId].name
            }
          }"
        >
          учитель - {{ usersStore.users[usersStore.lessons[props.id].teacher.userId].name }}
          {{ usersStore.users[usersStore.lessons[props.id].teacher.userId].surname }}
        </router-link>
      </p>
      {{ usersStore.lessons[props.id].description }}
      <p v-for="index in usersStore.lessons[props.id].students.userId" :key="index">
        <router-link
          :to="{
            name: 'user',
            params: {
              id: usersStore.users[index].id,
              name: usersStore.users[index].name
            }
          }"
        >
          {{ usersStore.users[index].name }}
          {{ usersStore.users[index].surname }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/store/usersStore'
const usersStore = useUsersStore()
interface Props {
  id: number
  name: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.block {
  margin: auto;
  width: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
