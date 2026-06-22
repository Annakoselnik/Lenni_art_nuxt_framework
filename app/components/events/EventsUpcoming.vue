<template>
<!-- Главная Раздел Мероприятия -->
  <section class="events-upcoming">
    <div class="events-upcoming__wrapper">
      <div class="events-upcoming__conainer">
        <h2 class="events-upcoming__title section-title">Мероприятия</h2>

        <TheSwiper
          :component="EventCard"
          :list="list"
          class="events-upcoming__swiper"
        />

        <a href="#" class="events-upcoming__link link btn-all">Смотреть все</a>
      </div>
    </div>
  </section>
</template>

<script setup>

  import { EventCard } from "#components";
  
  const list = ref([]);

  const URL = "/json/events.json";

  const { data } = await useAsyncData(`events-upcoming`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>
