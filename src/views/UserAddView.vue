<template>
    <div>
        <div>
            <form action="" method="post" @submit.prevent="">
                <div>
                    <p>Имя</p>
                    <input v-model="newUser.name" type="text" placeholder="">
                </div>
                <div>
                    <p>Фамилия</p>
                    <input v-model="newUser.surname" type="text" placeholder="">
                </div>
                <div>
                    <p>Отчество</p>
                    <input v-model="newUser.patronymic" type="text" placeholder="">
                </div>
                <div>
                    <p>дата рождения</p>
                    <input v-model="newUser.date" type="date" placeholder="">
                </div>
                <div>
                    <select name="" id="" v-model="newUser.role">
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                </div>
                <button @click="postNewUser()">добавить</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsersStore } from "@/store/usersStore";
const usersStore = useUsersStore();
const newUser = ref<any>({
    id: (usersStore.users.length),
    name: null,
    surname: null,
    patronymic: null,
    role: null,
    date: null,
})
const postNewUser = () => {
    if (newUser.value.name != null && newUser.value.surname != null && newUser.value.patronymic != null && newUser.value.role != null && newUser.value.date != null) {
        usersStore.users.push(newUser.value)

    }
}
</script>

<style scoped></style>