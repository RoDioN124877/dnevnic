<template>
    <div>
        <div>
            <form action="" method="post" @submit.prevent="">
                <div>
                    <p>Название</p>
                    <input v-model="newUser.title" type="text" placeholder="">
                </div>
                <div>
                    <p>учитель</p>
                    <select name="" id="" v-model="newUser.teacher.userId">
                        <option :value="user.id" v-for="user in filtredTeach" :key="user.id">{{ user.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <p>студенты</p>
                    <p>сколько учеников</p>
                    <input type="number" v-model="countStudent">
                    <select v-model="newUser.students.userId" name="" id="" v-for="i in countStudent" :key="i">
                        <option :value="user.id" v-for="user in filtredStudent" :key="user.id">{{ user.name }}</option>
                    </select>
                </div>
                <div>
                    <p>описание</p>
                    <input v-model="newUser.description" type="text" placeholder="">
                </div>
                <div>
                    <p>дата</p>
                    <input v-model="newUser.date" type="date" placeholder="">
                </div>
                <button @click="postNewUser()">добавить</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUsersStore } from "@/store/usersStore";
const countStudent = ref(3)
const usersStore = useUsersStore();
const newUser = ref<any>({
    id: (usersStore.users.length),
    title: null,
    teacher: {
        userId: null,
    },
    date: null,
    description: null,
    students: {
        userId: [],
    }

})
const postNewUser = () => {
    usersStore.lessons.push(newUser.value)


}

const filtredTeach = computed(() => {
    return usersStore.users.filter((item) => item.role == "teacher")
})
const filtredStudent = computed(() => {
    return usersStore.users.filter((item) => item.role == "student")
})
</script>

<style scoped></style>