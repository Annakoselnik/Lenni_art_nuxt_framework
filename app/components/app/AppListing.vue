<template>
<!-- Страница Главная/Мероприятия - Раздел Мероприятия -->
  <section class="app-listing">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div :class="listClass">
      <!-- <slot /> -->
      <!-- new 17-3 -->
      <slot :list="list"/>

    </div>

    <div class="app-listing__block-button">
    <button v-if="moreBtn" type="button" class="more-btn app-listing__more-btn btn-all">
      Показать еще
      <SvgIcon
        class="more-btn__down"
        name="arrow"
        width="62"
        height="92"
      />
    </button>

    <a v-else-if="moreLink" href="#" class="app-listing__link link btn-all">Смотреть все</a>
    </div>
    
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  //new 17-3
    url: {
      type: String,
      default: "",
      required: true,
    },
    moreBtn: {
      type: Boolean,
      default: false,
    },
    moreLink: {
      type: Boolean,
      default: false,
    },
    grid: {
      type: String,
      default: "row",
    },
  });

  const listClass = computed(() => props.grid === "column" ? "app-listing__column-list" : "app-listing__list")

  //new 17-3
  const list = ref([]);
  const { data } = props.url 
  ? await useAsyncData(`list-${props.url}`, () => {
    return $fetch(props.url);
  })
  : { data: null };

  if (data?.value) list.value = data.value;

</script>

<style lang="less">
  .app-listing {
    margin-left: 40px;
    display: flex;
    align-items: center;
    .container;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &__column-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 -30px -120px;
      gap: 115px 58px;
      margin-bottom: 70px;
        @media @bw1340 {
            margin-bottom: 56px;
            justify-content: center;
            gap: 89px 40px;
        }
        @media @bw768 {
            margin-bottom: 60px;
            justify-content: center;
            gap: 80px 30px;
        }
        @media @bw370 {
          margin-bottom: 50px;
          row-gap: 60px;
        }
    }

    &__title {
      font-family: @font2;
      font-size: 36px;
      margin-bottom: 150px;
      padding: 8px 45px;
      padding-left: 0px!important;
      padding-right: 0px!important;
        @media @bw1340 {
            margin-bottom: 138px;
            padding: 8px 36px;
        }
        @media @bw768 {
            margin-bottom: 110px;
            padding: 10px 40px;
            font-size: 24px;
        }
        @media @bw370 {
            margin-bottom: 91px;
            padding: 11px 19px;
            font-size: 16px;
        }
    }

    &__card {
      font-family: @font1;
      padding: 0!important;
      @media @bw1340 {
            max-width: 393px !important;
        }
        @media @bw768 {
            max-width: 339px !important;
        }
        @media @bw370 {
            
        }
    }

    &__more-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: transparent;
      border: none;
      margin: auto;
      /* padding: 20px; */
      padding-top: 111px;
      padding-bottom: 100px;
    }

    &__link {
      @media @bw370 {
        max-width: 340px;
        /* margin: auto; */
      }
    }

    &__block-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;
      width: 100%;
      max-width: 1334px;
    }

    .event-card {
      //height: 100%;
      &__link {
        text-decoration: none;
        height: 100%;
      }
      &__title {
        font-size: 24px;
      }
      &__description {
        font-size: 16px;
      }
      &__time {
        font-size: 14px;
      }
    }
  }
  .more-btn {
    font-family: @font1;
    font-size: 14px;
    padding: 0px;
    &__down {
      transform: rotate(90deg);
    }
  }

</style>