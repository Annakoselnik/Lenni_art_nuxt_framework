<template>
<!-- pop up разметка -->
  <form class="events-form" @submit="onSubmit">

    <div class="events-form__list">
      <div class="events-form__group events-form__group--w50">
        <FieldRadio
          name="format"
          :options="[
          {
            label: 'Мастер-класс/семинар',
            value: 'seminar',
          },
          {
            label: 'Концерт/выступление',
            value: 'concert',
          },
          {
            label: 'Выставка/показ',
            value: 'show',
          },
          {
            label: 'Другое',
            value: 'other',
          },
        ]"
          :initialValue="'seminar'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          :label="'Формат мероприятия:'"
          class="events-form__field"
        />
      </div>

      <div class="events-form__group events-form__group--w50">
        <FieldSelect
          name="amount"
          :options="[
            {
              label: 'до 20 человек',
              value: '20',
            },
            {
              label: 'от 20 до 100 человек',
              value: '100',
            },
            {
              label: 'от 100 до 500 человек',
              value: '500',
            },
            {
              label: 'более 500 человек',
              value: '1000',
            },
          ]"
          :initialValue="'20'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Планируемое количество посетителей:"
          placeholder="Выберите количество"
          class="events-form__field"
        />

        <FieldDate
          name="date"
          label="Дата проведения:"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />

      </div>

      <div class="events-form__section">
        <h3 class="events-form__section-title field-title">
          Контакные данные:
        </h3>

        <div class="events-form__list">
          <FieldInput
            name="first_name"
            label="Имя"
            placeholder="Имя"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="last_name"
            label="Фамилия"
            placeholder="Фамилия"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="phone"
            label="Телефон"
            placeholder="+7 (###) ###-##-##"
            :rules="{ required: true, phone: true }"
            mask="+7 (###) ###-##-##"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />
        </div>
      </div>

        <div>
        <h3 class="events-form__section-title field-title">
          Есть желания? Напишите нам:
        </h3>
         <FieldText
            name="text"
            type="text"
            class="events-form__field events-form__field--wishes"
         />
         
        </div>

    </div>

    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="`Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`"
      smallLabel
      class="events-form__field"
    />

    <div class="events-form__btns">
      <button type="submit" class="btn events-form__submit">Отправить</button>

      <button type="button" class="events-form__close-btn" @click="close">
        Закрыть
      </button>
    </div>

  </form>
</template>

<script setup>
  import { useForm } from "vee-validate";

  const emits = defineEmits(["close"]);

  const { submitCount, handleSubmit } = useForm();

  const close = () => {
    emits("close");
  };

  const onSubmit = handleSubmit((submitValues) => {
    console.log(submitValues);
    alert("Отправлено");

    close();
  });
</script>

<style lang="less">

  .events-form {

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 60px;
        align-items: flex-start;
        @media @bw370 {
            //gap: 30px;
        }
    }

    &__field,
    &__group {
        //margin: 0 0 30px;
        width: 100%;
        &--w50 {
            width: calc(50% - 30px);
            //width: 227px;
            @media @bw370 {
              width: 100%;
            }
        }
        &--m0 {
            margin: 0;
        }
    }

    &__check {
        margin: 20px 0 30px;
    }

    &__title {
        display: block;
        margin: 0 0 10px;
        color: @black;
        font-weight: 700;
        font-size: 18px;
    }

    &__btns {
        margin-top: 30px;
        display: flex;
        align-items: center;
        gap: 60px;
    }

    &__submit {
        width: calc(50% - 30px);
        text-align: center;
        justify-content: center;
    }
    
    &__close-btn {
        margin: 0 auto;
        padding: 5px;
        border: none;
        background-color: transparent;
        text-decoration: underline;
        color: @black;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.375;
        transition: color 0.2s;
        &:hover,
        &:active {
            color: @red;
        }
    }
    &__section-title {
      margin-top: 0px;
    }
    &__date {
      padding-top: 30px;
    }
}

</style>