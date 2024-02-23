<template>
  <div>
    <div class="block">
      <h4>{{ usersStore.users[props.id].role }}</h4>
      <p>
        {{ usersStore.users[props.id].name }} {{ usersStore.users[props.id].surname }}
        {{ usersStore.users[props.id].patronymic }}
      </p>
      <p>{{ usersStore.users[props.id].date }}</p>
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
    .block{
        margin: auto;
        width: 300px;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
</style>
