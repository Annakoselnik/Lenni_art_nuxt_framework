<template>
<!-- Главная/Мероприятия -->
  <NuxtPage />

   

</template>

<style lang="less">
.page-title {
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 1334px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 138px;
     @media @bw1340 {
        max-width: 1260px;
        margin-top: 40px;
        margin-bottom: 138px;  
    }
    @media @bw768 {
        max-width: 707px;
        margin-top: 40px;
        margin-bottom: 91px; 
    }
    @media @bw370 {
        margin-top: 0px;
        margin-bottom: 80px;  
    }
  &__style {
    font-family: @font6;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    @media @bw768 {
        font-size: 14px;
        line-height: 19px;
    }
    @media @bw370 {
        display: none;
        }
  }
  &__detailed {
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 1334px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 38px;
     @media @bw1340 {
        max-width: 1260px;
        margin-top: 76px;
        margin-bottom: 38px;  
    }
    @media @bw768 {
        max-width: 707px;
        margin-top: 40px;
        margin-bottom: 41px; 
    }
    @media @bw370 {
        margin-top: 0px;
        margin-bottom: 80px;  
    }
  }
}

.events-offers {
  margin-bottom: 100px;
    
}

.events-contacts {
  margin: auto;
  margin-bottom: 50px;
  &__wrapper {
    padding-right: 54px;
    padding-left: 54px;
  }
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media @bw768 {
            flex-wrap: wrap;
            flex-direction: row;
            align-items: flex-start;
            gap: 50px 100px;
        }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 401px;
    @media @bw768 {
            flex-direction: column;
            align-items: center;
            width: 208px;
        }
  }

  &__item-mark {
      display: flex;
      justify-content: center; /* Горизонтальное центрирование */
      align-items: center; /* Вертикальное центрирование */
      height: 100px; /* Задайте нужную высоту контейнера */
  }

  &__item-icon {
      display: block;
      width: 110px;
      height: 110px;
  }
  
  &__item-content {
    text-align: center;
  }
  
&__item-content {
        display: flex;
        flex-direction: column;
        @media @bw1020 {
            align-items: center;
            text-align: center;
        }
        @media @bw768 {
            align-items: flex-start;
            text-align: left;
        }
    }
    &__item-title {
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        @media @bw1020 {
            font-size: 18px;
            line-height: 25px;
        }
        @media @bw768 {
            font-size: 14px;
            line-height: 19px;
            margin-top: 41px;
            margin-bottom: 16px;
            width: 100%;
            text-align: center;
        }
    }
    &__item-info {
        margin: 0 0 5px;
        font-size: 16px;
        line-height: 22px;
        @media @bw768 {
            margin: 0;
            font-size: 14px;
            line-height: 19px;
            width: 100%;
            text-align: center;
        }
        &[href] {
            text-decoration: none;
            transition: color 0.2;
            &:active {
                color: @red;
            }
            &:hover {
                @media (hover: hover) {
                    color: @red;
                }
            }
        }
    }


}

</style>