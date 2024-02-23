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
        },
        {
            id: 1,
            name: 'Temerlan',
            surname: 'Maximov',
            patronymic: 'aaa',
            role: 'teacher',
            date: '1990-11-1'
        },
        {
            id: 2,
            name: 'Temerlan',
            surname: 'Maximov',
            patronymic: 'aaa',
            role: 'student',
            date: '1990-11-1'
        },
    ]
    )

    const lessons = ref([
        {
            id: 0,
            title: 'vue lesson 8',
            teacher: {
                userId: 1,
            },
            date: '2024-02-25',
            description: "",
            students: {
                userId: [0, 0],
            }
        },
        {
            id: 1,
            title: 'vue lesson 9',
            teacher: {
                userId: 1,
            },
            date: '2024-02-25',
            description: "",
            students: {
                userId: [2],
            }
        }
    ]
    )
    return { users, lessons }
})