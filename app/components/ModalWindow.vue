<template>
<!-- Окно pop up -->
  <ClientOnly>
    <teleport to="body">
      <Transition>
        <div 
        v-if="isActive || alive" 
        v-show="isActive" 
        v-keyup="onEsc" 
        class="modal-window"
        >
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot>
              <input type="text">
            </slot>
          </div>
        </div>
      </div>
      </Transition>
    </teleport>
  </ClientOnly>
</template>

<script setup>
  import { useIndexStore } from '../stores/index';   // ✅ правильный путь
  const store = useIndexStore();

  const props = defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
      type: String,
      default: ""
    },
    alive: {
      type: Boolean,
      default: false
    }
  });

  const isActive = computed(() => {
    return props.name ? store.modal[props.name] : null;
  });
  const close = () => {
    if(props.name) store.closeModal(props.name);
  };

  const onEsc = (event) => {
    if (event.key === "Escape" || event.keyCode === 27) close();
  };
</script>

<style lang="less">
  .modal-window {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 90px 40px 50px;
    background-color: fade(@gray, 95%);
    overflow-y: auto;
    z-index: 110;
    @media @bw370 {
            padding: 90px 20px 50px;
        }
    
    &__wrapper {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 1210px;
        width: 100%;
        margin: auto;
        background-color: @gray;
        background-image: url(../assets/images/noise.png), url(../assets/images/bg.png);
        background-position: 0 0, 0 0;
        background-size: auto, 100% auto;
        background-repeat: repeat, repeat-y;
        @media @bw1340 {
            max-width: 1144px;
        }
        @media @bw768 {
            max-width: 688px;
        }
        @media @bw370 {
            /* max-width: 280px; */
        }
    }

    &__sticky-close {
        position: sticky;
        top: 0;
        align-self: flex-end;
        width: 0;
        height: 0;
    }

    &__x-btn {
        position: absolute;
        top: -30px;
        right: -30px;
        @media @bw370 {
            top: -30px;
          right: -16px;
        }
    }

    &__container {
        box-sizing: border-box;
        max-width: 1040px;
        width: 100%;
        margin: 0 auto;
        padding: 0 40px 40px;
        @media @bw370 {
            padding: 0px;
        }
    }

    &__title {
        position: relative;
        margin: -40px 0 70px;
        padding: 10px 85px;
        max-width: 595px;
        width: 100%;
        background-color: @black;
        text-transform: uppercase;
        font-weight: 400;
        font-family: @font2;
        font-size: 22px;
        line-height: 1.36;
        color: @white;
        letter-spacing: 0.02em;
        z-index: 1;
        @media @bw768 {
            max-width: 465px;
            padding-left: 60px;
            padding-right: 20px;
        }
        @media @bw370 {
            width: 225px;
            font-size: 14px;
            line-height: 19px;
            padding-right: 20px;
            padding-left: 22px;
            padding-top: 9px;
            padding-bottom: 11px;
            margin-left: 14px;
            margin-bottom: 22px;
        }
    }
  }
</style>