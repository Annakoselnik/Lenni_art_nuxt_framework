<template>
<!-- Главная - Заключение -->
    <div class="doit">
    
        <div style="margin: 0;">
            <div class="doit__text-style--structure">
                <span class="doit__text-style doit__text-style--1">Просто делайте, </span>
                <span class="doit__text-style doit__text-style--2">&nbsp;что нравиться,</span>
            </div>
            
            <span class="doit__text-style doit__text-style--3">а мы вам поможем</span>
        </div>
    
    </div>
</template>

<script setup></script>

<style lang="less">
.doit {
    position: relative;
    box-sizing: border-box;
    text-align: left;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    margin-top: 150px;
        @media @bw1340 {
            margin-top: 130px;
        }
        @media @bw768 {
            margin-top: 100px;
        }
        @media @bw370 {
            margin-top: 100px;
        }
    &__text-style {
        /* display: flex;
        flex-direction: column; */
        position: relative;
        /* margin: 0 0 0 -2.5vw; */
        /* font-size: 6.6vw; */
        font-size: 128px;
        line-height: 1.2;
        font-family: @font9;
        /* font-style: normal; */
        font-weight: 700;
       /*  @media @bw1020 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 0 0 -3vw;
            font-size: 10.5vw;
        } */
         
        @media @bw1340 {
            font-size: 90px;
        }
        @media @bw768 {
            font-size: 80px;
        }
        @media @bw370 {
            font-size: 40px;
        }
    }
    &__text-style--structure {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        @media @bw768 {
            flex-direction: column;
        }
    }
    &__text-style--1 {
        left: -52px;
        @media @bw1340 {
            left: -30px;
        }
        @media @bw768 {
            left: -26px;
        }
        @media @bw370 {
            left: -13px;
        }
    }
    
    &__text-style--2 {
        left: -52px;
        @media @bw1340 {
            left: -30px;
        }
        @media @bw768 {
            left: 254px;
        }
        @media @bw370 {
            left: 81px;
        }
    }
    &__text-style--3 {
        left: 712px;
        @media @bw1340 {
            left: 506px;
        }
        @media @bw768 {
            left: -4px;
        }
        @media @bw370 {
            left: -57px;
        }
    }
}
</style>
