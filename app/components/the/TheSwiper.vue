<template>
<!-- Главная - Мероприятия - Swiper -->
  <div class="the-swiper">
    <swiper

    :slides-per-view="slidesPerView"
    :space-between="20"
    :breakpoints="breakpoints"
    :freeMode="freeMode"
    :speed="speed"
    :grab-cursor="true"

    :modules="[Navigation, Pagination]"
    :pagination="{ clickable: true, el: '.swiper-pagination-bullets' }"
    :navigation="{
      prevEl: '.swiper-arrow-prev',
      nextEl: '.swiper-arrow-next',
    }"

    class="the-swiper__slider"
    >
      <swiper-slide
      v-for="(card, cardIndex) in list"
      :key="cardIndex"
      class="the-swiper__slider"
      > 
      <component :is="component" :data="card" class="the-swiper__card"/>
      </swiper-slide>
      <template #container-end>
        <div class="swiper-footer">
          <button type="button" class="swiper-arrow-prev arrow arrow--left">
            <SvgIcon class="arrow__icon" name="arrow" width="92" height="62" />
          </button>

          <div class="swiper-pagination-bullets"></div>

          <button type="button" class="swiper-arrow-next arrow">
            <SvgIcon class="arrow__icon" name="arrow" width="92" height="62" />
          </button>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Navigation, Pagination } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/pagination";

    const props = defineProps({
      component: {
        type: Object,
        default: true
      },
      list: {
        type: Array,
        default: () => []
      },
      slidesPerView: {
        type: [String, Number],
        default: "auto"
      },
      spaceBetween: {
        type: Number,
        default: 20
      },
      
      breakpoints: {
      type: Object,
      default: () => ({
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1660: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      }),
    },

    freeMode: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 500,
    },

    })
</script>

<style lang="less">
  .the-swiper {
    width: 100%;
    &__slider {
      width: 100%;
    }

    .swiper-wrapper {
      width: 100%;
    }

    .swiper-slide {
      display: flex;
      min-width: 280px;

      @media @bw1020 {
        width: 280px;
      }

      & > * {
        width: 100%;
      }
    }

    .swiper-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 530px;
      max-width: 100%;
      margin: 70px auto 0;
      @media @bw1340 {
        width: 300px;
      }
      @media @bw768 {
        margin: 60px auto 0;
      }
    }

    .swiper-pagination-horizontal.swiper-pagination-bullets {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      bottom: auto;
      left: auto;
      width: auto;
      margin: 0 auto;
      padding: 0 15px;
    }

    .swiper-pagination-bullet {
      width: 15px;
      height: 2px;
      margin: 2px 3px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-radius: 2px;
      background-color: @gray_dark;
      background-clip: padding-box;
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background-color: @black;
        background-clip: padding-box;
      }
    }

  }
</style>