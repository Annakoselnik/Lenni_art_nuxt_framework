<template>
 <!-- Страница Мероприятия Раздел Дополнительные услуги -->
    <div class=" app-services">
        <h2 class="section-title app-services__title">
            Дополнительные услуги
        </h2>
        <p class="app-events__section-description">
            Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом. Убедившись, что 
            все пожеланию учтены и мы можем приступать к реализациии проекта, начинается сложная, но интересная 
            работа, результатом которой будет проведение вашего мероприятия на высшем уровне.
        </p>

    </div>
<AppTable :data="tarifs" class="app-events__tariffs-table"/>

</template>

<script setup>
const tarifs = ref({
        headers: ["Тариф «Light»", "Тариф «Promo»", "Тариф «All stars»"],
        data: [
            {
                header: "Стоимость за час",
                values: ["1 000 ₽", "3 000 ₽", "3 000 ₽"],
            },
            {
                header: "Ведущий мероприятия",
                values: ["", true, true],
            },
            {
                header: "Фотосъемка",
                values: [true, true, true],
            },
            {
                header: "Видеосъемка",
                values: ["", "", true],
            },
            {
                header: "Организация питания",
                values: ["", true, true],
            },
            {
                header: "Декор",
                values: ["", "", true],
            },
            {
                header: "Звуковое сопровождение",
                values: ["", true, true],
            },
            {
                header: "Дополнительное освещение",
                values: ["", "", true],
            },
            {
                header: "Клининг",
                values: ["", "", true],
            },
        ],
    });
</script>

<style lang="less">
.app-events {
    padding: 140px 0 20px; /*сверху 140px, слево/справа 0, снизу 150px*/
    max-width: 1920px;
    margin: auto;

    &__listing {
        margin-bottom: 100px;
        
    }

    &__section-description {
        max-width: 868px;
        margin-bottom: 60px;
        @media @bw1340 {
            max-width: 828px;
            margin-bottom: 60px;
        }
        @media @bw768 {
            width: 100%;
            margin-bottom: 50px;
        }
        @media @bw370 {
            margin-bottom: 30px;
        }
    }
    &__section-title {
        font-size: 22px;
        margin-top: 100px;
        margin-bottom: 150px;
        @media @bw1340 {
            padding-left: 130px;
        }
        @media @bw768 {
            padding-left: 100px;
        }
        @media @bw370 {
            font-size: 16px;
            padding-left: 80px;
        }
    }
    &__button {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center; /* Выравнивание по вертикали */
        justify-content: center; /* Выравнивание по горизонтали */
        padding: 10px 20px; /* Отступы внутри кнопки */
        margin: auto;
        width: 128px;
        height: 132px;
    }
    
    &__button-icon {
        padding-top: 20px;
        background-color: none;
        rotate: 90deg;
    }

    &__button-link {
        text-decoration: none;
    }

    &__button-text {
        font-family: @font1;
    }
}
.app-services {
  .container;
  &__title {
    margin-top: 100px;
    margin-bottom: 150px;
    font-family: @font7;
    font-size: 22px;
    font-weight: 400;
        @media @bw1340 {
            margin-top: 100px;
            margin-bottom: 130px;
        }
        @media @bw768 {
            margin-top: 100px;
            margin-bottom: 100px;
        }
        @media @bw370 {
            margin-top: 100px;
            margin-bottom: 80px;
            font-size: 16px;
            font-weight: 500;
        }
  }
}
</style>