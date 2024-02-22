<template>
  <div>
    <nav>
      <ul>
        <li v-for="lessonData in usersStore.lessons" :key="lessonData.id">
          <router-link :to="{
            name: 'lesson', params: {
              id: lessonData.id,
              title: lessonData.title

            }
          }">{{ lessonData.title }}
          </router-link>

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