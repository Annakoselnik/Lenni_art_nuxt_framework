
<template>
<!-- Карточка Блога -->
    <article class="article-card">
        <a href="#" class="article-card__link">

            <picture class="article-card__picture">

            <source 
            media="(max-width: 450px)"
            type="image/webp"
            :srcset="data.img_webp"
            />
            <source media="(max-width: 450px)" :srcset="data.img" />

            <source 
            media="(max-width: 1169px)"
            type="image/webp"  
            :srcset="data.img_tablet_webp"/>

            <source media="(max-width: 1169px)" :srcset="data.img_tablet" />

            <source type="image/webp" :srcset="data.img_webp"/>

            <img :src="data.img" alt="data.alt" class="article-card__img"/>

            </picture>

        </a>

        <div class="article-card__info">

            <time :datetime="data.date" class="event-card__time">
                {{date}}
            </time>

            <a href="#" class="article-card__title-link">

                <h4 class="article-card__title">
                    {{data.title}}
                </h4>

                <div class="article-card__arrow arrow">
                    <SvgIcon name="arrow" class="arrow" width="92" height="62" />
                </div>

            </a>

            <p class="article-card__description">
                {{data.description}}
            </p>
        </div>

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
    return new Date(props.data.date).toLocaleDateString();
} catch {
    return null;
}
});

</script>

<style lang="less">
/* Стилизация карточек блога */
.article-card {

  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;

  @media @bw1170 {
    flex-direction: column;
    max-width: 708px;
  }
  @media @bw370 {
    margin-bottom: 40px;
  }

  &__info {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 63px;
      @media @bw1340 {
          padding-left: 60px;
      }
      @media @bw768 {
          padding-top: 20px;
          padding-left: 0;
      }
      @media @bw370 {
            padding-top: 10px;
      }
  }

  &__link {

    &:hover {
      & ~ .article-card__info {
        .article-card__title-link {
          color: @red;
          text-decoration-color: @red;
        }
      }
    }
  }

  & + .article-card {
    margin-top: 120px;
    @media @bw1340 {
        margin-top: 110px;    
    }
    @media @bw768 {
        margin-top: 100px;    
    }
    @media @bw370 {
        margin-top: 80px; 
        margin-bottom: 40px;    
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: 0 auto 60px;
      bottom: 100%;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 1254px;
      height: 3px;
      background-color: @black;
      pointer-events: none;
    }
  }

  &__time {
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }

  &__title-link,
  &__description {
    max-width: 470px;
  }

  &__title-link {
    margin: 70px 0 40px;
    color: @black;
    text-decoration-color: transparent;
    transition: color 0.2s, text-decoration-color 0.2s;
    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
    @media @bw768 {
        margin: 40px 0 20px;
    }
    @media @bw370 {
        margin: 20px 0 10px;   
    }
  }

  &__title {
    margin: 0;
    color: inherit;
    font-family: @font5;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    @media @bw768 {
        font-size: 20px;
        line-height: 27px;
    }
    @media @bw370 {
        font-size: 16px;
        line-height: 22px; 
    }
  }

  &__description {
    margin: 0;
    font-family: @font6;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    @media @bw370 {
        font-size: 14px;
        line-height: 19px; 
    }
  }

  &__arrow {
    position: absolute;
    right: 0;
    bottom: 30px;
    color: inherit;
    transition: none;
    @media @bw768 {
        bottom: 0px;
        }
    @media @bw370 {
        bottom: -40px;  
    }
  }
  
}

</style>
