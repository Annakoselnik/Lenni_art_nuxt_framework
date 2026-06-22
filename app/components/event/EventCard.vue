<template>
<!-- Карточка мероприятий -->
  <article class="event-card">
    <NuxtLink :to="`/events/${data.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img :src="data.img" :alt="data.alt" class="event-card__img" />
      </picture>

      <h2 class="event-card__title article-card__title-link">{{ data.title }}</h2>

      <p class="event-card__description">{{ data.description }}</p>

      <time v-if="date" :datetime="data.date" class="event-card__time">
        {{ date}}
      </time>
    </NuxtLink>
  </article>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
  });

  const date = computed(() => {
    try {
      const date = new Date(props.data.date);
      return `${date.toLocaleDateString()} | начало ${date.toLocaleTimeString(
        "ru-RU",
        {
          hour: "2-digit",
          minute: "2-digit",
        },
      )}`;
    } catch {
      return null;
    }
  });
</script>

<style lang="less">
  .event-card {
    /*Карточка мероприятий*/
/*Стилизация карточек*/
.event-card {
    display: flex;
    width: 405px;
    max-width: 100%;
    min-width: 280px;
    margin-right: 58px;
    width: calc(33.3333% - 158px);
    margin: 0 29px 120px;

    @media @bw1340 {
        width: 393px;
            }
    @media @bw768 {
        width: 280px;
    }

    /*Оформление ссылки*/
    &__link {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: @black;
        text-decoration: none;
        &hover {
            .event-card__title{
            color: @red;
            text-decoration-color: @red;
            }
        }
    }

     /*Оформление изображения*/
    &__picture {
        display: block;
        position: relative;
        width: 100%;
        margin: 0 0 25px;
        font-size: 0;
        text-decoration: none;
        overflow: hidden;
        @media @bw1660 {
            margin: 0 0 20px;
        }
        @media @bw768 {
            margin: 0 0 15px;
        }
        @media @bw370 {
            margin: 0 0 25px;
        }
        /*псевдоэлемент*/
        &::after {
            content: "";
            display: block;
            width: 100%;
            padding-top: 107.16%;
        }
    }

    &__img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__title {
        margin: 0 0 15px;
        min-height: 66px;
        color: @black;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        text-decoration: underline transparent;
        transition: color 0.2s, text-decoration-color 0.2s;
        font-family: @font4;
        @media @bw1660 {
            margin-bottom: 0 0 10px;
        }
        @media @bw1340 {
            font-size: 24px;
            line-height: 33px;
            margin-bottom: 10px;
        }
        @media @bw768 {
            min-height: 54px;
            font-size: 20px;
            line-height: 27px;
        }
        @media @bw370 {
            font-size: 16px;
            line-height: 22px;
        }
    }
    &__description {
        margin: 0 0 auto;
        font-size: 16px;
        line-height: 22px;
        font-family: @font6;
        @media @bw370 {
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__time {
        margin: 15px 0 0;
        font-family: @font6;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        @media @bw1340 {
            margin-top: 10px;
        }
    }

}

  }
</style>