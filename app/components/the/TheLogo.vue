<template>
  <div class="the-logo">
    <div class="the-logo__wrapper">
        <SvgIcon name="logo_big" class="the-logo__icon"/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
.the-logo {

    overflow: hidden;
    
    &__wrapper {
        position: relative;
        margin: 0;
        width: 1920px + 100px;
        @media @bw1340 {
            width: calc(100% + 200px);
        }
        @media @bw768 {
            width: calc(100% + 120px);
        }
        &::after {
            content: "";
            display: block;
        } 
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