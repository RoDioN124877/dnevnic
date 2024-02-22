<template>
    <div>
        {{ usersStore.lessons[props.id].title }}
        {{ usersStore.users[usersStore.lessons[props.id].teacher.userId].name}}
        {{ usersStore.users[usersStore.lessons[props.id].teacher.userId].surname}}
        {{ usersStore.lessons[props.id].date }}
        {{ usersStore.lessons[props.id].description }}
        {{ usersStore.users[usersStore.lessons[props.id].students.userId].name }}
        {{ usersStore.users[usersStore.lessons[props.id].students.userId].surname }}
    


    </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store/usersStore";
const usersStore = useUsersStore();
interface Props {
    id: number;
    name: string;
}
const props = defineProps<Props>();

</script>

<style scoped></style>