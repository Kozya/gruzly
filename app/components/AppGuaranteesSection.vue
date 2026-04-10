﻿<template>
  <section class="guarantees" id="guarantees">
    <div class="guarantees__container">
      <header class="guarantees__head">
        <h2 class="guarantees__title">
          Мы понимаем, за что переживают заказчики,
          <span>поэтому гарантируем</span>
        </h2>
      </header>

      <div class="guarantees__grid">
        <article v-for="item in guaranteeItems" :key="item.title" class="guarantees__card">
          <div class="guarantees__card-head">
            <NuxtImg class="guarantees__icon" :src="item.icon" alt="" loading="lazy" />
            <h3>{{ item.title }}</h3>
          </div>

          <p class="guarantees__text" v-html="item.description" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const guaranteeItems = [
  {
    icon: '/images/services/truck.svg',
    title: 'Своевременную подачу транспорта',
    description:
      'Нужна отправка груза уже сегодня? Берем в работу срочные заказы. Согласуем стоимость и сроки по телефону <a href="tel:+380982304083">+38 098 230-40-83</a> или через заявку на сайте.'
  },
  {
    icon: '/images/services/calculator.svg',
    title: 'Прозрачную стоимость без скрытых доплат',
    description:
      'До начала работ фиксируем условия перевозки, маршрут и итоговую цену. Вы заранее понимаете бюджет и получаете расчет под вашу задачу.'
  },
  {
    icon: '/images/services/building-office-2.svg',
    title: 'Офисный переезд без потери времени',
    description:
      'Аккуратно упакуем и перевезем мебель, технику и документы. Подбираем оптимальный транспорт и график, чтобы не останавливать рабочие процессы.'
  },
  {
    icon: '/images/services/safe.svg',
    title: 'Материальную ответственность за груз',
    description:
      'Отвечаем за сохранность имущества во время перевозки. В случае повреждения или утери урегулируем вопрос оперативно и в досудебном порядке.'
  },
  {
    icon: '/images/services/cog-6-tooth.svg',
    title: 'Соблюдение согласованных сроков доставки',
    description:
      'Доставляем груз по графику благодаря отлаженной логистике и собственному автопарку. Держим связь с клиентом на каждом этапе перевозки.'
  },
  {
    icon: '/images/services/users.svg',
    title: 'Опытную команду грузчиков и логистов',
    description:
      'На каждом заказе работает подготовленная команда. Вы получаете аккуратную погрузку, правильное крепление груза и контроль маршрута.'
  }
]
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.guarantees {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__head {
    max-width: 900px;
    margin: 0 0 24px;
    text-align: left;
  }

  &__title {
    margin: 0 0 12px;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 800;
    color: @color-dark;
  }

  &__title span {
    color: @color-primary;
    display: block;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    background: #fff;
    border: 1px solid rgba(255, 103, 83, 0.35);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 7px 16px rgba(0, 34, 70, 0.06);
  }

  &__card-head {
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: center;
    gap: 12px;
    margin: 0 0 10px;
  }

  &__icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  &__card-head h3 {
    margin: 0;
    color: @color-dark;
    font-size: 21px;
    line-height: 1.25;
    font-weight: 800;
  }

  &__text {
    margin: 0;
    color: #2f3c4a;
    line-height: 1.5;
    font-size: 15px;
  }

  &__text :deep(a) {
    color: @color-primary;
    font-weight: 700;
    text-decoration: none;
  }

  &__text :deep(a:hover) {
    text-decoration: underline;
  }
}

@media (max-width: 1024px) {
  .guarantees {
    &__title {
      font-size: 30px;
    }

    &__card-head h3 {
      font-size: 20px;
    }
  }
}

@media (max-width: 600px) {
  .guarantees {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__card {
      padding: 14px;
    }

    &__card-head {
      grid-template-columns: 40px 1fr;
      gap: 10px;
    }

    &__icon {
      width: 40px;
      height: 40px;
    }

    &__card-head h3 {
      font-size: 18px;
    }
  }
}
</style>

