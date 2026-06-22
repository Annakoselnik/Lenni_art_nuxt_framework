<template>
<!-- Главная -->
  <div class="home">

    <AppHero class="home__hero"/>

    <AppOffers class="home__offers"/>

    <AppAbout class="home__about"/>

    <AppUpcoming class="home__apcoming"/>

    <AppListing 
    v-slot="{ list }"
    class="home__listing"
    :title="'Блог'"
    :moreLink="true"
    :grid="'column'"
    :url="'/json/blog.json'"
    >
      <ArticleCard
      v-for="card in list"
      :key="card.slug"
      :data="card"
      class="app-listing__article-card"
      />
    </AppListing class="home__listing">

    <AppContacts class="home__contacts"/>
    
    <Doit class="home__doit"/>

  </div>
</template>

<script setup></script>

<style lang="less">
.home {
    max-width: 1920px; /* задаём максимальную ширину */
    width: 100%;
    margin: 0 auto; /* центрируем по горизонтали */
    &__listing {
      margin-bottom: 78px;
      @media @bw1340 {
            margin-bottom: 90px;
      }
      @media @bw768 {
            margin-bottom: 58px;
      }
      @media @bw370 {
            margin-bottom: 60px;
      }
    }

    &__hero {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__offers {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }



}
</style>
