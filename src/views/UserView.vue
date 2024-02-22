<template>
    <div>
        {{ usersStore.users[props.id].name }}
        {{ usersStore.users[props.id].surname }}
        {{ usersStore.users[props.id].patronymic }}
        {{ usersStore.users[props.id].date }}
        {{ usersStore.users[props.id].role }}


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