
<template>
<!-- Страница Мероприятия/Детальная/Бронирование -->
    <form class="event-reserve" @submit="onSubmit">

    <div class="event-reserve__checks">

        <h4 class="event-reserve__section-title event-reserve__section-title--mb30">
            Забронировать столик
        </h4>

        <FieldCheck
            v-for="(val, key) in checks"
            :key="key"
            :checkedValue="+key"
            :id="`table-${key}`"
            :name="`table`"
            :label="`${key} стол`"
            class="event-reserve__check"
            :red="val.red || false"
            :disabled="val.disabled || false"
        />

    </div>

    <div class="event-reserve__scheme">
        <div class="event-reserve__scheme-container">
            <!-- <h4 class="event-reserve__scheme-title">Сцена</h4> -->
            <div class="event-reserve__scheme-wrapper">
                <EventScene :checks="checks" :values="values" class="event-reserve__scene" @tableClick="onTableClick"/>
            </div>
        </div>
    </div>

    <div class="event-reserve__order">
        <h4 class="event-reserve__section-title event-reserve__section-title--list">Ваши пригласительные билеты</h4>

        <div
            class="event-reserve__tickets-list"
            id="js-reservetickets-list"
            data-caption="шт"
            data-currency="Р"
        >
            <div class="event-reserve__tickets">
                <div class="event-reserve__qty" data-caption="шт." :data-price="price.red">
                    {{red}}
                </div>
                <div class="event-reserve__sum" data-currency="Р">
                    {{redCost}}
                </div>
            </div>

            <div class="event-reserve__tickets">
                <div class="event-reserve__qty" data-caption="шт." :data-price="price.black">
                    {{ black }}
                </div>
                <div class="event-reserve__sum" data-currency="Р">
                    {{blackCost}}
                </div>
            </div>

        </div>

        <div 
        class="event-reserve__total"
        data-caption="Сумма"
        data-currency="Р"
        >
        {{ redCost + blackCost }}
        </div>

        <button
            type="submit"
            class="btn btn--red event-reserve__submit"
        >
            Купить билеты
        </button>
    </div>
    
        <div class="event-reserve__legend">
            <div class="event-reserve__price">
            <h4 class="event-reserve__section-title event-reserve__section-title--price">
                Стоимость пригласительного билета
            </h4>

            <div
            class="event-reserve__price-list"
            id="js-reservePriceList"
            data-caption="Р | 1 персона"
            >
                
                <div
                class="event-reserve__price-list event-reserve__price-item--red"
                data-caption="Р | 1 персона"
                >
                  <div class="event-reserve__square-red"></div>
                  {{price.red}} Р | 1 персона
                </div>
                
                <div
                class="event-reserve__price-item"
                data-caption="Р | 1 персона"
                >
                <div class="event-reserve__square-black"></div>
                {{price.black}} Р | 1 персона
                </div>
            </div>
        </div>
    
        <div class="event-reserve__notation">
            <h4 class="event-reserve__section-title event-reserve__section-title--other">
                Примечания
            </h4>

            
            <div class="event-reserve__note event-reserve__note--free">
                <div class="event-reserve__ellipse-black"></div> 
                <div class="event-reserve__ellipse-red"></div>
                доступные места
            </div>

            
            <div class="event-reserve__note event-reserve__note-booked">
                <div class="event-reserve__ellipse-gray"></div> 
                забронировано
            </div>

        </div>
    </div>
    </form>
</template>

<script setup>

    import { useForm} from 'vee-validate';

    const checks = ref({
        1:{ red:true },
        2:{},
        3:{},
        4:{ red:true },
        5:{ disabled:true },
        6:{},
        7:{ red:true },
        8:{ red:true },
        9:{ red:true },
        10:{},
        11:{},
    });

    const price= ref({red: 1400, black: 1250});

    const { submitCount, handleSubmit, setFieldValue, values } = useForm({
        initialValues: {
            table: []
        }
    });

      const black = computed(() => {
        return Array.isArray(values.table) ? values.table.reduce(function(sum, current) {
          return sum + (checks.value[current] ?.red ? 1 : 0)
        }, 0) : 0;
      })

      const red = computed(() => {
        return Array.isArray(values.table) ? values.table.reduce(function(sum, current) {
          return sum + (checks.value[current] ?.red ? 0 : 1)
        }, 0) : 0;
      });

      const blackCost = computed(() => black.value * price.value.black);
      const redCost = computed(() => red.value * price.value.red);

      const onSubmit = handleSubmit((submitValues) => {
      console.log('Форма отправлена!'); //
      console.log(submitValues)
    });

    const onTableClick = (table) => {
      if (checks.value[table]?.disabled) return;

      const currentArray = Array.isArray(values.table) ? values.table : [];

      let newArray;

      if (currentArray.includes(table)) {
        newArray = currentArray.filter((check) => check !== table)
      } else {
        newArray = [...currentArray, table]
      }
      setFieldValue("table", newArray);
    }

</script>

<style lang="less">
.event-reserve {
    margin-top: 80px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 150px;
        @media @bw1340 {
            margin-top: 80px;
            margin-bottom: 150px;
        }
        @media @bw768 {
            margin-top: 54px;
            margin-bottom: 100px;
        }
        @media @bw370 {
            margin-top: 40px;
            margin-bottom: 100px;
        }

    &__form {
     display: grid;
     width: 100%;
     margin: 80px auto 0;
     gap: 65px 11%;
     grid-template-columns: 405px 1fr;
    /* grid-template-columns: px calc(89% - 405px); */
     grid-template-areas: 
    "checks scheme"
    "order legend"; 
     width: 100%;
     @media @bw1660 {
     gap: 65px 6% 
     }
     @media @bw1340 {
      grid-template-columns: 340px 1fr;
      gap: 65px 6.5%;
     }
     @media @bw1020 {
      grid-template-columns: 1fr 388px;
      gap: 60px;
      grid-template-areas: 
      "scheme scheme"
      "checks legend"
      "checks order";
     }
     @media @bw768 {
      grid-template-columns: 100%;
      grid-template-areas: 
      "scheme"
      "legend"
      "checks"
      "order";
     }
    }
    &__checks {
    grid-area: checks;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    }

    &__checks-title {
      color: @black;
      font-family: @font5;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: left; 
      margin-top: 0;
      margin-bottom: 31px;  
    }
    &__check-group {
      display: flex;
      cursor: pointer;
      flex-direction: column;
    }
    
    &__check {
     /* margin-bottom: 10px; */
    }
     &__scheme {
     grid-area: scheme;
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     width: 780px;
     @media @bw1340 {
            max-width: 780px;
        }
        @media @bw768 {
            max-width: 628px;
            align-items: center;
            margin: auto;
            margin-bottom: 68px;
        }
        @media @bw370 {
            max-width: 280px;
        }
     }
     &__scheme-title {
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      margin: 0 auto 40px;
      background-color: @black;
      color: @white;
      font-family: @font4;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      max-width: 162px;
      min-height: 34px;
      text-align: center;
      @media @bw768 {
            margin: 0 auto 45px;
            font-size: 11px;
            line-height: 15px;
            max-width: 130px;
            min-height: 27x;
        }
        @media @bw370 {
            margin: 0 auto 40px;
        }
     }  
     &__scheme-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
     }
    &__scheme-wrapper {
    position: relative;
    width: 100%;
    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 51.15384%;
    }
  }
    &__scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__order {
  grid-area: order; 
  width: 405px;
  @media @bw1020 {
  width: 100%;
  margin: 0;
  }
  }
   &__section-title {
      color: @black;
      font-family: @font5;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      margin-top: 0;
      margin-bottom: 30px;
      @media @bw768 {
            margin-bottom: 1px;
        }
     }

     &__section-title--list {
        text-align: left;
        margin-top: 0px;
        margin-bottom: 20px;
     }
     &__section-title--price {
        text-align: right;
        margin-top: 0px;
        margin-bottom: 20px;
        @media @bw370 {
            text-align: left;
        }
     }
     &__section-title--other {
        text-align: right;
        @media @bw370 {
            text-align: left;
        }
     }


    &__tickets {
     display: flex;
     justify-content: space-between;
     align-items: baseline;
     padding: 0;
     /* margin-bottom: 16px; */
     font-family: @font6;
     font-weight: 400;
     font-size: 16px;
     line-height: 22px; 
     }
     &__tickets-list {
     margin-bottom: 20px;
     }
     &__total {
     display: flex;
     justify-content: center;
     align-items: center;
     font-family: @font4;
     font-weight: 600;
     font-size: 20px;
     line-height: 27px;
     margin-top: 10px;
     margin-bottom: 53px;
     }
      &__submit {
      display: block;
      justify-content: center;
      align-items: center;
      width: 100%;
     }
     &__qty {
      margin-bottom: 15px;
      @media @bw370 {
            margin-bottom: 10px;
        }
     &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
    }
  
  &__sum {
    font-family: @font4;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
     
  }

   &__total {
    &::before {
      content: attr(data-caption);
      margin-right: 30px;
      @media @bw370 {
            margin-right: 70px;
        }
    }

    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  } 
     &__legend {
      grid-area:legend;
      width: 780px;
      @media @bw1020 {
      width: 100%;
      margin: 0;
      }
     }
      &__legend-title{
      color: @black;
      font-family: @font5;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: right; 
      margin-top: 0;
      margin-bottom: 20px;
      @media @bw370 {
      text-align: left; 
      font-size: 16px; 
      }
     }
     &__ticket {
     display: flex;
     justify-content: flex-end;
     gap: 9px;
     align-items: center;
     font-family: @font6;
     font-weight: 400;
     font-size: 16px;
     line-height: 22px;
     margin-bottom: 15px;
     @media @bw370 {
     justify-content: flex-start;
     }
     }
     &__ticket-list {
       margin-bottom: 22px;
     }
    &__square-red {
      width: 24px;
      height: 24px;
      background-color: @red;
      margin-right: 9px;
    }
    &__square-black {
      width: 24px;
      height: 24px;
      background-color: @black; 
      margin-right: 9px;
    }
    &__note {
      text-align: right; 
      color: @black;
      font-family: @font4;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 23px;
      @media @bw370 {
      font-size: 16px;  
      text-align: left; 
      }
    }
    &__ticket2 {
      display: flex;
     justify-content: flex-end;
     gap: 9px;
     align-items: center;
     font-family: @font6;
     font-weight: 400;
     font-size: 16px;
     line-height: 22px;
     margin-bottom: 15px;
     @media @bw370 {
     justify-content: flex-start;
     }
     }
  
    &__not {
      font-family: @font6;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      margin-top: 3px;
      margin-bottom: 0;
    }  
    &__ellipse-red {
      width: 24px;
      height: 24px;
      border: 1px solid @red;
      border-radius: 50%;
      margin-right: 21px;
    }
    &__ellipse-black {
      width: 24px;
      height: 24px;
      border: 1px solid @black;
      border-radius: 50%;
      margin-right: -13px;
    }
    &__ellipse-gray {
      width: 24px;
      height: 24px;
      background-color: rgba(191, 191, 191, 1);
      border-radius: 50%;
      margin-right: 29px;  
    }
    &__price-list {
      text-align: right;
      font-family: "Open Sans", Regular;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
    &__note {
      font-family: "Open Sans", Regular;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
    &__price {
      margin-top: 0px;
      margin-bottom: 37px;
      @media @bw370 {
            margin-top: 60px;
            margin-bottom: 30px;
        }
    }
    &__price-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      @media @bw370 {
            justify-content: flex-start;
        }
    }
    &__price-item--red {
    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
    margin-top: 0px;
    margin-bottom: 15px;
    @media @bw370 {
            justify-content: flex-start;
        }
    }
    
    &__note--free {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-top: 23px;
      @media @bw370 {
           justify-content: flex-start; 
      }
    }
    &__note-booked {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 18px;
      font-family: "Open Sans", Regular;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      @media @bw370 {
           justify-content: flex-start; 
      }
    }
}

.event-reserve {
    display: grid;
    width: 100%;
    gap: 67px 149px;
    grid-template-columns: 405px 1fr;
    grid-template-areas: 
        "checks scheme"
        "order legend";
    @media @bw1340 {
        grid-template-columns: 401px 1fr;
        gap: 67px 79px;
    }

    @media @bw768 {
        grid-template-columns: 191px 1fr;
        gap: 60px 129px;
        grid-template-areas: 
        "scheme scheme"
        "checks legend"
        "checks order"; 
    }
    @media @bw370 {
        grid-template-columns: 1fr;
        width: 100%;
        gap: 60px 129px;
        grid-template-areas: 
        "scheme"
        "legend"
        "checks"
        "order";  
        }

    /*Легенда*/
    .reserve__legend {
        grid-area: legend;
        
        @media @bw1340 {
        margin: 0 100px 0 100px;
    }
    }
}

.check {
/*box-sizing: border-box;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 24px;
  padding-top: 2px;
  padding-left: 24px;
  margin-bottom: 40px; */ 

  color: @black;
  cursor: pointer;

  &__input {
    .is-hidden();
  }
  
  &__mark {
    box-sizing: border-box;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 1px solid @black;
  }
   &__input {
    .is-hidden();
    &:checked {
      & ~ .check__mark {
        background-color: @black;
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 7px;
          top: 2px;
          width: 6px;
          height: 12px;
          border-bottom: 2px solid @white;
          border-right: 2px solid @white;
          transform: rotate(45deg);
        }
      }
    }
  }
   &__label {
    margin-left: 15px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    &--s {
      font-size: 14px;
      line-height: 19px;
    }
  }
  &--red {
    color: @red;
    .check__mark {
      border-color: @red;
    }

    .check__input {
      &:checked {
        & ~ .check__mark {
          background-color: @red;
        }
      }
    }
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}


</style>