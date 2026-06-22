<template>
  <div v-if="data" class="event-page">
    <div class="page-title__detailed">
      <span class="page-title__style">Главная / Мероприятия / {{ data.title }}</span>
    </div>

    <article class="event">
      <header class="event__header">
        <h1 class="event__title title">{{ data.title }}</h1>

        <div class="event__about">
          <div class="event__info">
            <time v-if="datetime" :datetime="data.date" class="event__time--date">
              {{ datetime.date }}
            </time>
            <div class="event__info-text--location">{{ data.location }}</div>
          </div>

          <picture class="event__picture">
            <source type="image/webp" :srcset="data.img_webp" />
            <img :src="data.img" :alt="data.alt" class="event__image" />
          </picture>

          <div class="event__info">
            <span v-if="datetime" class="event__time--time" data-caption="начало">
              {{ datetime.time }}
            </span>
            <div class="event__info-text--address">{{ data.address }}</div>
          </div>
        </div>
      </header>

      <div class="event__container">
        <div class="content event__content" v-html="data.content"></div>
        <EventReserve class="event-reserve" />
      </div>
    </article>
  </div>
  <div v-else class="loading">
    <p>Загрузка...</p>
  </div>
</template>

<script setup>
  const slug = computed(() => useRoute().params.event);
  const URL = computed(() => `/json/events/${slug.value}.json`);

  const { data, error } = await useFetch(URL);

  // Если ошибка или данных нет – 404
  if (error.value || !data.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Мероприятие не найдено'
    });
  }
  // Безопасное вычисление даты
  const datetime = computed(() => {
    if (!data.value?.date) return null;
    try {
      const date = new Date(data.value.date);
      if (isNaN(date.getTime())) return null;
      return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    } catch {
      return null;
    }
  });
</script>

<style lang="less">

  .event {
    width: 100%;
    max-width: 1414px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    @media @bw1340 {
      max-width: 1260px;
      padding-left: 40px;
      padding-right: 40px;
    }
    @media @bw768 {
      max-width: 708px;
      padding-left: 30px;
      padding-right: 30px;
    }
    @media @bw370 {
      max-width: 329px;
      padding-left: 20px;
      padding-right: 20px;     
    }
    &__title {
    text-align: center;
    font-family: @font2;
    font-size: 70px;
    font-weight: 500;
    line-height: 90px;
        @media @bw768 {
            font-size: 40px;
            line-height: 51px;
        }
        @media @bw370 {
            font-size: 20px;
            line-height: 26px;
        }
    }

    &__about {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      margin-bottom: 80px;
      column-gap: 58px;
        @media @bw1340 {
            column-gap: 50px;
        }
        @media @bw768 {
            column-gap: 19px;
            margin-bottom: 76px;
        }
        @media @bw370 {
            margin-bottom: 20px;
            display: grid;
            gap: 40px 20px;
            grid-template-areas:
            "pic   pic"  
            "date  time"
            "location  address";
        }
    }

    &__container {
      display: block;
      padding-inline-start: 0px;
      width: 100%;

      h5,ul,p,ol {
      padding-inline-start: 0px !important;
      }

    }
    &__picture {
      max-width: 506px;
        @media @bw1340 {
            max-width: 426px;
        }
        @media @bw768 {
            max-width: 245px;
        }
        @media @bw370 {
            max-width: 245px;
            grid-area: pic;
        }
    }
    &__time--date {
      font-family: @font10;
      font-size: 30px;
      line-height: 36px;
      font-weight: 300;
      @media @bw768 {
          font-size: 18px;
          line-height: 22px;
      }
      @media @bw370 {
            grid-area: date;
        }
    }
    &__time--time {
      font-family: @font10;
      font-size: 30px;
      line-height: 36px;
      font-weight: 300;
      @media @bw768 {
          font-size: 18px;
          line-height: 22px;
      }
      @media @bw370 {
            max-width: 245px;
            grid-area: time;
        }
    }
    &__info-text--location {
      font-family: @font9;
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
      font-style: normal;
      text-transform: uppercase;
      padding-top: 11px;
      @media @bw768 {
            padding-top: 8px;
            font-size: 12px;
            line-height: 14px;
      }
      @media @bw370 {
            grid-area: location;
      }
    }
    &__info-text--address {
      font-family: @font9;
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
      font-style: normal;
      text-transform: uppercase;
      padding-top: 11px;
      @media @bw768 {
            padding-top: 8px;
            font-size: 12px;
            line-height: 14px;
      }
      @media @bw370 {
            grid-area: address;
      }
    }
    &__content {
      max-width: 868px;
        @media @bw1340 {
            max-width: 831px;
        }
        @media @bw768 {
            max-width: 600px;
        }
        @media @bw370 {
            width: 100%;
        }
    }
  }
</style>