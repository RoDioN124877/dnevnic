<template>
  <div>
    <div class="add-lesson-form">
      <form class="form" action="" method="post" @submit.prevent="postNewUser()">
        <div class="form-group">
          <p>Название</p>
          <input class="input" v-model="newlesson.title" type="text" placeholder="" />
        </div>
        <div>
          <p>описание</p>
          <input class="input" v-model="newlesson.description" type="text" placeholder="" />
        </div>
        <div>
          <p>учитель</p>
          <select class="select" name="" id="" v-model="newlesson.teacher.userId">
            <option :value="user.id" v-for="user in filtredTeach" :key="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div>
          <p>студенты</p>
          <p>сколько учеников</p>
          <input class="input" type="number" v-model="countStudent" min="1" />
          <select
            class="select"
            v-model="newlesson.students.userId[i - 1]"
            name=""
            id=""
            v-for="i in countStudent"
            :key="i"
          >
            <option :value="user.id" v-for="user in filtredStudent" :key="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        
        <div>
          <p>дата</p>
          <input class="input" v-model="newlesson.date" type="date" placeholder="" />
        </div>
        <button class="button" type="submit">добавить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUsersStore } from '@/store/usersStore'
const countStudent = ref(1)
const usersStore = useUsersStore()
const newlesson = ref<any>({
  id: usersStore.lessons.length,
  title: null,
  teacher: {
    userId: null
  },
  date: null,
  description: null,
  students: {
    userId: []
  }
})
const postNewUser = () => {
  usersStore.lessons.push(newlesson.value)
  console.log(usersStore.lessons)
}

const filtredTeach = computed(() => {
  return usersStore.users.filter((item) => item.role == 'teacher')
})
const filtredStudent = computed(() => {
  return usersStore.users.filter((item) => item.role == 'student')
})
</script>

<style scoped>
.add-lesson-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #292929;
}
</style>
