import { defineStore } from 'pinia'
import { ref } from "vue";
export const useUsersStore = defineStore('usersStore', () => {

    const users = ref([
        {
            id: 0,
            name: 'Rodion',
            surname: 'Chubarov',
            patronymic: 'Evgenivich',
            role: 'student',
            date: '2006-12-12'
        }])
    return { users }
})