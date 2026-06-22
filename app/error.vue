<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">404 – Страница не найдена</h1>
    <h1 v-else-if="error.statusCode === 500">500 – Внутренняя ошибка сервера</h1>
    <h1 v-else>Ошибка {{ error.statusCode }}</h1>
    <p>{{ error.statusMessage || 'Что-то пошло не так' }}</p>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
const error = useError(); // получаем объект ошибки
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  font-family: sans-serif;
}
.error-page h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.error-page p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.error-page a {
  color: #007bff;
  text-decoration: none;
  border: 1px solid #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>