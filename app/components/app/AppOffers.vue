<template>
<!-- Главная - Предложение Я ХОЧУ -->
    <section class="app-offers">
    <h2 class="app-offers__title">Я ХОЧУ:</h2>
    <div class="app-offers__btns">
        <button class="app-offers__btn btn btn--red" type="button" @click="openPopup">
            Провести мероприятие
        </button>
        <button class="app-offers__btn btn" type="button">Стать арендатором</button>
    </div>

    <ModalWindow
        alive
        :name="'getOffer'"
        :title="'Заполните форму<br />и мы подберем площадку'"
    >
    <EventsForm @close="closePopup" />
    </ModalWindow>

</section>
 
</template>

<script setup>
    const store = useIndexStore();

    const openPopup = () => {
    store.openModal("getOffer");
    };

    const closePopup = () => {
    store.closeModal("getOffer");
    };

</script>

<style lang="less">
.app-offers {
    @media @bw768 {
        margin-top: 40px;
    }
    @media @bw370 {
        margin-top: 40px;
    }
    &__title {
        font-family: Lora;
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 2%;
        text-align: center;
        text-transform: uppercase;

        margin: 0;
        margin-bottom: 46px;

        @media @bw1340 {
            margin: 0;
            margin-bottom: 46px;
        }
        @media @bw768 {
            margin: 0;
            margin-bottom: 43px;
        }
        @media @bw370 {
            margin: 0;
            margin-bottom: 25px;
        }
    }

    &__btns {
        display: flex;
        flex-direction: row;
        gap: 106px;
        @media @bw1340 {
            gap: 94px;
        }
        @media @bw768 {
            gap: 56px;
        }
        @media @bw370 {
            flex-direction: column;
            gap: 25px;
        }
    }
}
</style>
