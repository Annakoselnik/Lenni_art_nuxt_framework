<template>
<!-- pop up text input -->
  <div class="field">
    <textarea
        class="field__input pop-up-text"
        cols="115"
        rows="5"
        v-model="userWishes"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userWishes: ''
    };
  },
};
</script>

<style lang="less">

    .pop-up-text{
        width: 100%;
        max-width: 960px;
        height: 120px;

        @media @bw768 {
            width: 100%;
            height: 149px;
        }
        @media @bw370 {
           /*  width: 240px; */
          width: 100%;
          height: 234px;
        }
    }

</style>