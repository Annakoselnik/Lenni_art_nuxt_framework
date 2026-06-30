<template>
<!--Главная-Контакты-->
 <section class="app-contacts">

  <h2 class="app-contacts__section-title section-title">КОНТАКТЫ</h2>

  <div class="app-contacts__wrapper">

        <ul class="app-contacts__list">

            <li class="app-contacts__item" >
                <div class="app-contacts__item-mark">
                    <SvgIcon class="app-contacts__item-icon" name="location"/>
                </div>
                <div class="app-contacts__item-content">
                    <h2 class="app-contacts__item-title">
                    Томск, Красноармейская 146
                    </h2>
                    <div class="app-contacts__item-info">
                    2 этаж
                    </div>
                    <div class="app-contacts__item-info">
                    оф. 206
                    </div>
                </div>
            </li>

            <li class="app-contacts__item" >
                <div class="app-contacts__item-mark">
                    <SvgIcon class="app-contacts__item-icon" name="home"/>
                </div>
                <div class="app-contacts__item-content">
                    <h2 class="app-contacts__item-title">
                    Отдел аренды
                    </h2>
                    <div class="app-contacts__item-info">
                        <a href="tel:+73822907256" class="app-contacts__item-info">
                            8 (3822) 90-72-56
                        </a>
                    </div>
                    <div class="app-contacts__item-info">
                        <a href="mailto:idat@tusur.ru" class="app-contacts__item-info">
                            idat@tusur.ru
                        </a>
                    </div>
                </div>
            </li>

            <li class="app-contacts__item" >
                <div class="app-contacts__item-mark">
                    <SvgIcon class="app-contacts__item-icon" name="star"/>
                </div>
                <div class="app-contacts__item-content">
                    <h2 class="app-contacts__item-title">
                    Отдел мероприятий
                    </h2>
                    <div class="app-contacts__item-info">
                        <a href="tel:+73822907256" class="app-contacts__item-info">
                            8 (3822) 90-72-56
                        </a>
                    </div>
                    <div class="app-contacts__item-info">
                        <a href="mailto:idat@tusur.ru" class="app-contacts__item-info">
                            idat@tusur.ru
                        </a>
                    </div>
                </div>
            </li>
        </ul>

    <div class="app-contacts__map-container">
        <TheMap class="app-contacts__map"/>
    </div>

    </div>
</section>
</template>

<script setup>

</script>

<style lang="less">
.app-contacts {
    .container;

    &__wrapper {
        display: flex;
        align-items: center;
        /* margin-bottom: 164px; */
        @media @bw1020 {
            flex-direction: column;
        }
        @media @bw1340 {
            /* margin-bottom: 130px; */
        }
        @media @bw768 {
            margin-bottom: 100px;
        }
    }
    &__list {
        flex-shrink: 0;
        width: 100%;
        max-width: 400px;
        margin: 0 30px 0 0;
        padding: 0;
        list-style: none;
        @media @bw1020 {
            order: 1;
            width: 100%;
            margin: 0;
            display: flex;
            align-items: flex-start;
        }
        @media @bw768 {
            flex-direction: row;
            margin-top: 100px;
        }
        @media @bw370 {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    &__item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        margin: 0 0 65px;
        @media @bw1020 {
            flex-direction: column;
            width: 33%;
            margin: 0;
            padding: 0 10px;
        }
        @media @bw768 {
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 0 0 45px;
            padding: 0;
        }
        @media @bw370 {
            flex-direction: row;
            align-items: flex-start;
        }
        &:last-child {
            margin: 0;
        }
    }
    &__item-mark {
        flex-shrink: 0;
        display: flex;
        margin-right: 55px;
        width: 110px;
        height: 110px;
        background: @black;
        color: @red;
        @media @bw1340 {
            margin-right: 30px;
        }
        @media @bw1020 {
            margin: 0 30px 0 0;
        }
        @media @bw768 {
            margin: auto;
            margin-bottom: 30px;
        }
        @media @bw370 {
            margin-bottom: 41px;
            margin-left: 0;
            margin-right: 10px;
        }
    }
    &__item-icon{
        margin: auto;
    }
    &__item-content {
        display: flex;
        flex-direction: column;
        @media @bw1020 {
            align-items: center;
            text-align: center;
        }
        @media @bw768 {
            align-items: center;
            text-align: center;
        }
        @media @bw370 {
            align-items: flex-start;
            text-align: left;
        }
    }
    &__item-title {
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        font-family: @font4;
        @media @bw1340 {
            font-size: 20px;
            line-height: 27px;
        }
        @media @bw768 {
            font-size: 18px;
            line-height: 25px;
        }
        @media @bw370 {
            font-size: 14px;
            line-height: 19px;
        }
    }
    &__item-info {
        margin: 0 0 5px;
        font-size: 16px;
        line-height: 22px;
        font-family: @font6;
        @media @bw768 {
            margin: 0;
        }
        @media @bw370 {
            font-size: 14px;
            line-height: 19px;
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

    &__map-container {
        width: 100%;
        max-width: 750px;
        height: 490px;
        margin-left: auto;
        @media @bw1340 {
            width: 100%;
            max-width: 752px;
            height: 493px;
            /* margin-bottom: 130px; */
        }
        @media @bw768 {
            /* width: 708px; */
            height: 464px;
            width: 100%;
            /* margin-bottom: 100px; */
        }
        @media @bw370 {
            width: 100%;
            height: 186px;
        }
    }
}
</style>
