<template>
  <div>
    <div class="add-user-form">
      <form @submit.prevent="postNewUser">
        <div class="form-group">
          <label for="name">Имя</label>
          <input id="name" v-model="newUser.name" type="text" placeholder="Введите имя" />
        </div>
        <div class="form-group">
          <label for="surname">Фамилия</label>
          <input id="surname" v-model="newUser.surname" type="text" placeholder="Введите фамилию" />
        </div>
        <div class="form-group">
          <label for="patronymic">Отчество</label>
          <input
            id="patronymic"
            v-model="newUser.patronymic"
            type="text"
            placeholder="Введите отчество"
          />
        </div>
        <div class="form-group">
          <label for="date">Дата рождения</label>
          <input
            id="date"
            v-model="newUser.date"
            type="date"
            placeholder="Выберите дату рождения"
          />
        </div>
        <div class="form-group">
          <label for="role">Роль</label>
          <select id="role" v-model="newUser.role">
            <option value="student">Студент</option>
            <option value="teacher">Учитель</option>
          </select>
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsersStore } from '@/store/usersStore'
const usersStore = useUsersStore()
const newUser = ref<any>({
  id: usersStore.users.length,
  name: null,
  surname: null,
  patronymic: null,
  role: null,
  date: null
})
const postNewUser = () => {
  if (
    newUser.value.name != null &&
    newUser.value.surname != null &&
    newUser.value.patronymic != null &&
    newUser.value.role != null &&
    newUser.value.date != null
  ) {
    usersStore.users.push(newUser.value)
  }
}
</script>

<style scoped>
.add-user-form {
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

input[type='text'],
input[type='date'],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* чтобы ширина включала границы и отступы */
}

button[type='submit'] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #292929;
}
</style>
