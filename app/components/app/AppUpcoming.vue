<template>
<!-- Главная - Мероприятия -->
    <section class="app-upcoming" >

    <div class="app-upcoming__wrapper">
        <div class="app-upcoming__container">
            <h2 class="app-upcoming__title section-title">МЕРОПРИЯТИЯ</h2>
            
            <TheSwiper 
            :component="EventCard" 
            :list="list" 
            class="app-upcoming__swiper"
            />

            <!--<div class="app-upcoming__swiper">
                <EventCard
                v-for="(card, index) in [list[0]]"
                :key="card.slug"
                :data="card"
                class="app-upcoming__card"
                /> 
            </div>-->

            <a href="#" class="app-upcoming__link link btn-all">Смотреть все</a>

        </div>
    </div>

    </section>
</template>

<script setup>
    import { EventCard } from "#components";
    //import EventCard from '../event/EventCard.vue';

    const list = ref([]);

    const URL = "http://localhost:3000/json/events.json";

    const { data } = await useAsyncData(`upcoming`, () => {
    return $fetch(URL);
    });
    if (data?.value) list.value = data.value;
</script>

<style lang="less">
    .app-upcoming {
        position: relative;
        width: 100%;
        padding: 35px 0;
        overflow: hidden;
        /* margin-left: 40px; */

            @media @bw1340 {
                max-width: 1340px;
            }

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            width: 0;
            height: 0;
            border-bottom: 35px solid fade(@white, 60%);
        }

        &::before {
            left: 0;
            border-right: 34vw solid transparent;
        }
        
        &::after {
            right: 0;
            border-left: 66vw solid transparent;
        }

        &__wrapper {
            width: 100%;
            padding: 90px 0;
            background-color: fade(@white, 60%);
            &::before,
            &::after {
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                border-top: 35px solid fade(@white, 60%);
            }
            &::before {
                left: 0;
                border-right: 60vw solid transparent;
            }
            &::after {
                right: 0;
                border-left: 39vw solid transparent;
            }
        }

        &__container {
            .container();
            display: flex;
            flex-direction: column;
        }

        &__card {
            display: flex;
            width: 405px;
            max-width: 100%;
            min-width: 280px;
            margin-right: 58px;
            width: calc(33.3333% - 158px);
            margin: 0 29px 120px;
        }
    }
</style>