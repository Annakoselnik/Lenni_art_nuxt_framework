
<template>
<!-- Раздел Мероприятия - Главная/Мероприятия-->
  <div class="page-title">
    <span class="page-title__style">Главная / Мероприятия</span>
  </div>

  <div class="events">

    <AppListing 
    v-slot="{ list }"
    class="events__listing"
    :title="'Мероприятия'"
    :moreBtn="true"
    :url="'/json/events.json'"
    >

    <EventCard
    v-for="card in list"
    :key="card.slug"
    :data="card"
    class="app-listing__card"
    />

    </AppListing>

    <AppServices class="events__services"/>

    <AppOffers class="events__offers"/>

  </div>

  <div class="events-contacts__wrapper">

        <ul class="events-contacts__list">

            <li class="events-contacts__item" >
                <div class="events-contacts__item-mark">
                    <SvgIcon class="events-contacts__item-icon" name="information"/>
                </div>
                <div class="events-contacts__item-content">
                    <h2 class="events-contacts__item-title">
                    Цены
                    </h2>
                    <div class="events-contacts__item-info">
                    Цены, указанные на сайте носят информационный характер. Мы придерживаемся индивидуального подхода в работе с клиентом.
                    </div>
                </div>
            </li>

            <li class="events-contacts__item" >
                <div class="events-contacts__item-mark">
                    <SvgIcon class="events-contacts__item-icon" name="contact"/>
                </div>
                <div class="events-contacts__item-content">
                    <h2 class="events-contacts__item-title">
                    Контакты
                    </h2>
                    <div class="events-contacts__item-info">
                        Отдел организации мероприятий
                    </div>
                    <div class="events-contacts__item-info">
                        <a href="mailto:idat@tusur.ru" class="events-contacts__item-info">
                            idat@tusur.ru
                        </a>
                    </div>
                </div>
            </li>

            <li class="events-contacts__item">
                <div class="events-contacts__item-mark">
                    <SvgIcon class="events-contacts__item-icon" name="handshake"/>
                </div>
                <div class="events-contacts__item-content">
                    <h2 class="events-contacts__item-title">
                    Преимущество
                    </h2>
                    <div class="events-contacts__item-info">
                        Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам.
                    </div>
                </div>
            </li>
        </ul>

    </div>

</template>

<script setup></script>

<style lang="less">
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__offers {
      margin-bottom: 100px;
      @media @bw768 {
        margin-bottom: 90px;
      }
    }
  }

  .app-listing{
    max-width: 1340px;
    width: 100%;
    margin: auto;
    &__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__card {
      max-width: 400px;
      padding: 20px;
    }
  }
</style>