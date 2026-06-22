<template>
<!--Главная-О нас-->
<section class="app-about">
    <h2 class="app-about__section-title section-title">О НАС</h2>
    <div class="app-about__container">

        <div class="app-about__block1">
            <h3 class="app-about__block1-title">
            Проект «Millennials»  
            </h3>
            <div class="app-about__block1-text">
                <div class="app-about__block1-text--style">
                    Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и желанием 
                    сделать мир лучше, проявить себя. У них есть талант и стремление, у нас возможность помочь
                    им воплотить их мечту в реальность.
                </div>
            </div>

        </div>

        <div class="app-about__block2">
            <picture class="app-about__picture">
                <img src="@/assets/images/pic1.jpg" class="app-about__img" alt="pic">
            </picture>
            <h3 class="app-about__title">
                Мы предоставляем площади для вашего мероприятия 
            </h3>
            <picture class="app-about__picture2">
                <img src="@/assets/images/pic2.jpg" class="app-about__img" alt="pic2">
            </picture>
            <p class="app-about__text">
            И оказываем помощь с организацией, если вам это нужно. 
            <br>
            Наша цель: вовлечь в культурную жизнь города как можно больше людей, помочь молодым 
            ребятам сделать первые шаги к своей мечте и рассказать всем о том, что их волнует.
            </p>
        </div>

            <div class="app-about__block3">
               <div class="app-about__pic-3">
               
                <div class="app-about__red-rectangle"></div>
                <img src="@/assets/images/pic3.jpg" class="app-about__img-block3" alt="pic3">
                </div>

                <div class="app-about__text-3">
                    Мы уже успешно организовали и
                    провели более 100 проектов. 
                    Посмотрите, как это было классно.
                </div>

                
                <div class="app-about__button-3--style">
                    <button class="app-about__button-3">

                            <span class="app-about__button-3--text">Смотреть</span>
                            <span>
                            <SvgIcon
                            class="more-btn__arrow"
                            name="arrow"
                            width="92"
                            height="62"
                            />
                            </span>
                    </button>
                </div>
        </div>

    </div>
</section>
</template>

<script setup></script>

<style lang="less">
 .app-about {
    box-sizing: border-box;
    width: 100%;
    max-width: 1414px;
    margin: 0 auto;
    margin-bottom: 100px;
    padding-left: 40px;
    padding-right: 40px;
    
    @media @bw768 {
        padding-left: 30px;
        padding-right: 30px;
        }

/*     .container;

    &__container {
        .container(); 
    } */  
    &__section-title {
        margin-top: 200px;
        margin-bottom: 150px;
        @media @bw1340 {
            margin-top: 200px;
            margin-bottom: 130px;
        }
        @media @bw768 {
            margin-top: 130px;
            margin-bottom: 100px;
        }
        @media @bw370 {
            margin-top: 100px;
            margin-bottom: 80px;
        }
    }
    &__block1-title {
        font-family: @font5;
        font-size: 44px;
        line-height: 60px;
        font-weight: bold;
        @media @bw1340 {
            font-size: 44px;
            line-height: 60px;
        }
        @media @bw768 {
            font-size: 26px;
            line-height: 35px;
        }
        @media @bw370 {
            font-size: 18px;
            line-height: 25px;
        }
    }
    &__block1-text {
        display: inline-flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        margin-top: 50.5px;
        margin-bottom: 100.5px;
        @media @bw1340 {
            margin-top: 50.5px;
            margin-bottom: 100.5px;
        }
        @media @bw768 {
            margin-top: 50px;
            margin-bottom: 80px;
        }
        @media @bw370 {
            margin-top: 30px;
            margin-bottom: 60px;
        }
    }
    &__block1-text--style {
        font-family: @font6;
        font-size: 18px;
        line-height: 25px;
        width: 867px;
        @media @bw1340 {
            width: 827px;
            font-size: 18px;
            line-height: 25px;
        }
        @media @bw768 {
            width: 637px;
            font-size: 16px;
            line-height: 22px;
        }
        @media @bw370 {
            width: 100%;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
        }
    }     
    &__block2 {
        display: grid;
        grid-template-columns: 1fr 406px;
        /* gap: 100px 58px; */
        grid-template-areas: 
        "pic pic2"
        "title pic2"
        "text text";
        @media @bw1340 {
            grid-template-columns: 826px 1fr;
            grid-template-areas: 
            "pic pic2"
            "title pic2"
            "text text";
        }
        @media @bw768 {
            width: 709px;
            grid-template-columns: 419px 1fr;
            grid-template-areas: 
            "pic pic"
            "title pic2"
            "text pic2";
        }
        @media @bw370 {
            grid-template-areas: 
            "pic"
            "title"
            "text"
            "pic2";
        }
    }
    &__picture {
        grid-area: pic;
        width: 870px;
        height: 577px;
        @media @bw1340 {
            width: 828px;
            height: 550px;
        }
        @media @bw768 {
            width: 708px;
            height: 470px;
            
        }
        @media @bw370 {
            width: 280px;
            height: 186px;
        }
    }
    &__picture2 {
        grid-area: pic2;
        align-self: flex-end; /*Приравнять к низу*/
        width: 406px;
        height: 493px;
        @media @bw1340 {
            width: 393px;
            height: 481px;
            padding-left: 39px;
        }
        @media @bw768 {
            align-self: start;
            justify-self: end;
            padding-top: 52px;
            width: 262px;
            height: 321px;
            
        }
        @media @bw370 {
            width: 193px;
            height: 236px;
            padding-top: 50px;
            padding-bottom: 50px;
            justify-self: start;
            padding-left: 97px;
        }
    }
    &__title {
        grid-area: title;
        margin: 10 px 0 0;
        font-family: @font5;
        font-size: 44px;
        line-height: 60px;
        font-weight: 700;
        padding-top: 100px;
        @media @bw1340 {
            font-size: 44px;
            line-height: 60px;
        }
        @media @bw768 {
            width: 419px;
            padding-top: 79.5px;
            font-size: 26px;
            line-height: 35px;
        }
        @media @bw370 {
            width: 280px;
            font-size: 18px;
            line-height: 25px;
            padding-top: 60px;
            padding-bottom: 30px;
        }
    }
    &__text {
        grid-area: text;
        margin: 0 80px 90px auto;
        max-width: 867px;
        width: 100%;
        padding-top: 87px;
        font-family: @font7;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        @media @bw1340 {
            max-width: 827px;
            font-size: 18px;
            line-height: 25px;
        }
        @media @bw768 {
            max-width: 348px;
            padding-top: 40.5px;
            padding-left: 71px;
            font-size: 16px;
            line-height: 22px;
        }
        @media @bw370 {
            max-width: 280px;
            font-size: 16px;
            line-height: 22px;
            padding-top: 30px;
            padding-left: 0;
            /* padding-bottom: 50px; */
            margin: 0;
        }
    }

    &__block3 {
        display: grid;
        grid-template-columns: 928px 1fr;
        grid-template-areas: 
        "pic3 text3"
        "pic3 button3";
        @media @bw1340 {
            grid-template-columns: 867px 1fr;
        }
        @media @bw768 {
            grid-template-columns: 280px 1fr;
            grid-template-areas: 
            "pic3 pic3"
            "text3 button3";
        }
        @media @bw370 {
            grid-template-columns: 267px;
            grid-template-areas: 
            "pic3"
            "text3"
            "button3";
        }
    }
     &__pic-3 {
        grid-area: pic3;
        width: 870px;
        height: 361px;
        @media @bw1340 {
            width: 821px;
            height: 342px;
        }
        @media @bw768 {
            width: 672px;
            height: 277px;
        }
        @media @bw370 {
            width: 267px;
            height: 111px;
        }
    } 
    &__red-rectangle {
        background-color: @red;
        width: 928px;
        height: 246px;
        @media @bw1340 {
            width: 867px;
            height: 231px;
        }
        @media @bw768 {
            width: 708px;
            height: 187px;
        }
        @media @bw370 {
            width: 280px;
            height: 75px;
        }
    }
    &__img-block3 {
        width: 870px;
        height: 361px;
        position: relative;
        bottom: 228px;
        left: 49px;
        @media @bw1340 {
            bottom: 213px;
            left: 38px;
        }
        @media @bw768 {
            bottom: 173px;
            left: 29px;
        }
        @media @bw370 {
            bottom: 70px;
            left: 11px;
        }
        @media @bw1340 {
            width: 821px;
            height: 342px;
        }
        @media @bw768 {
            width: 672px;
            height: 277px;
        }
        @media @bw370 {
            width: 267px;
            height: 111px;
        }
    }
    &__text-3 {
        grid-area: text3;
        width: 353px;
        font-size: 18px;
        line-height: 25px;
        font-weight: 400;
        align-self: flex-start;
        padding-left: 62px;
        padding-top: 155px;

        @media @bw1340 {
        font-size: 18px;
        line-height: 25px;
        width: 353px;
        padding-left: 40px;
        padding-top: 137px;
        }
        @media @bw768 {
        font-size: 16px;
        line-height: 22px;
        width: 280px;
        padding-left: 0px;
        padding-top: 80px;
        }
        @media @bw370 {
        font-size: 16px;
        line-height: 22px;
        width: 281px;
        padding-top: 60px;
        }
    }
    &__button-3 {
        grid-area: button3;
    display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        background-color: transparent;
        text-decoration: none;
        border: none;

        font-family: @font1;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        text-align: right;
        text-decoration: none;
        font-weight: bold;
        font-family: @font1;
        &:hover,
        &:active {
        color: @red_dark;
        }
       
    }

    &__button-3--style {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 344px;
        height: 60px;
        padding-top: 89px;
        padding-left: 64px;
        
        @media @bw1340 {
            width: 353px;
            height: 60px;
            padding-top: 88px;
            padding-left: 40px;
        }
        @media @bw768 {
            width: 262px;
            height: 40px;
            padding-top: 106px;
            padding-left: 166px;
        }
        @media @bw370 {
            width: 280px;
            height: 40px;
            padding-top: 30px;
            padding-left: 0px;
        }
    }
}
</style>