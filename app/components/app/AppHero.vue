<template>
<!-- Главная - АРТ-ПРОСТРАНСТВО -->
    <header class="app-hero">
        <h1 class="app-hero__title">Арт - пространство</h1>

        <TheLogo class="app-hero__logo" />

        <p class="app-hero__description">
            для людей, горящим сердцем и делом
            <br />
            место для настоящего
        </p>
    </header>
  
</template>

<script setup></script>


<style lang="less">
.app-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
        font-family: @font7;
        font-size: 45px;
        font-weight: 400;
        line-height: 58px;
        text-align: center;
        text-transform: uppercase;

        margin: 0;
        margin-top: 100.5px;
        margin-bottom: 70.5px;

        @media @bw1340 {
            margin: 0;
            margin-top: 100px;
            margin-bottom: 70px;
            font-size: 35px;
            line-height: 45px;
        }
        @media @bw768 {
            margin: 0;
            margin-top: 80px;
            margin-bottom: 51px;
            font-size: 30px;
            line-height: 38px;
        }
        @media @bw370 {
            margin: 0;
            margin-top: 80px;
            margin-bottom: 29px;
            font-size: 13px;
            line-height: 17px;
        }
    }
    &__description {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 1340px;
        height: 116px;
        font-family: @font7;
        font-size: 45px;
        font-weight: 400;
        line-height: 58px;
        text-align: center;
        text-transform: uppercase;

        margin: 0;
        margin-top: 70px;
        margin-bottom: 100px;

        @media @bw1340 {
            width: 1340px;
            margin: 0;
            margin-top: 70px;
            margin-bottom: 100px;
            font-size: 35px;
            line-height: 45px;
            }
        @media @bw768 {
            width: 768px;
            margin: 0;
            margin-top: 49px;
            margin-bottom: 73px;
            font-size: 30px;
            line-height: 38px;
        }
        @media @bw370 {
            max-width: 100%;
            margin: 0;
            margin-top: 28px;
            margin-bottom: 40px;
            font-size: 13px;
            line-height: 17px;
        }
    }
    &__logo {
         @media @bw1340 {
            width: 1340px;
        }
        @media @bw768 {
            width: 768px;
        }
        @media @bw370 {
            width: 370px;
        }
    }
}
</style>
