<template>
  <div>
    <nav>
      <ul>
        <li v-for="userData in usersStore.users" :key="userData.id">
          <router-link :to="{
            name: 'user', params: {
              id: userData.id,
              name: userData.name

            }
          }">{{ userData.name }}
            {{ userData.surname }}
            {{ userData.patronymic }}
            {{ userData.date }}
            {{ userData.role }}</router-link>

        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store/usersStore";
const usersStore = useUsersStore();
interface Props {
  id: number;
}
const props = defineProps<Props>();
</script>

<style scoped></style>