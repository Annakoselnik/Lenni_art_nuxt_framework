<template>
<!-- Главная - Форма подписки -->
  <form novalidate class="subscribe-form page-footer__subscribe" @submit.prevent="onSubmit">
    <h2 class="subscribe-form__title">
      Подпишись и будь в курсе происходящего
    </h2>

    <div class="page-footer__subscribe-form-wrapper">
            <div class="page-footer__subscribe-form-wrapper">
              <div class="page-footer__subscribe-form-email">
                    <input
                    v-model="email"
                    type="email"
                    placeholder="     Email"
                    class="subscribe-form__input"
                    required
                    />
                    <span
                      v-if="submitCount && (!email || !emailIsValid)"
                      class="subscribe-form__error field-error"
                    >
                      {{
                        email && !emailIsValid
                          ? "Email указан неверно"
                          : "Это поле обязательно"
                      }}
                    </span>
                  </div>
            </div>

            <button type="submit" class="page-footer__subscribe-form-submit">
            Подписаться
            </button>
      </div>
      <label class="page-footer__check check">
            <input 
            v-model="agreement"
            :true-value="1"
            :false-value="0"
            type="checkbox"
            class="check__input"
            required
            />
            <span class="check__mark"></span>
            <span class="check__label check__label--s">
                  Согласен на обработку персональных данных
            </span>
      </label>

      <span
      v-if="submitCount && !agreement"
      class="subscribe-form__error field-error"
    >
      Это поле обязательно
    </span>
  </form>
</template>

<script setup>

  const email = ref("");
  const submitCount = ref(0);
  const agreement = ref(0);


  const emailIsValid = computed(() => {
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value);
  });

  const onSubmit = () => {
    submitCount.value += 1;
    if (!email.value || !emailIsValid.value || !agreement.value) return;

    console.log({
      email: email.value,
      agreement: agreement.value
    });
    alert("Подписка оформлена");
  };

</script>

<style lang="less">

.subscribe-form {
  width: 100%;
  max-width: 405px;
  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;
    font-weight: inherit;
    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
    &__error {
      margin: 5px 0 0;
    }
  }
  &__input {
      display: flex;
      flex-grow: 1;
      border: none;
    }
}

.page-footer {

    &__nav {
        display: flex;
        flex-direction: column;
    }

    &__subscribe {
        display: flex;
        flex-direction: column;
    }

    &__subscribe-form-wrapper {
        display: flex;
        flex-direction: row;
        flex-flow: 1;
    }

    &__subscribe-form-submit {
        width: 135px;
        height: 49px;
        background-color: @black;
        color: @white;
        border: none;
    }

    &__field-wrapper {
        width: 405px;
        height: 49px;
    }
    
    &____check {
         margin-top: 15px;
    }
}

</style>