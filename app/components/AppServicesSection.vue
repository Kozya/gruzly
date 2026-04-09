<template>
  <section class="services" id="services">
    <div class="services__container">
      <header class="services__head">
        <h2 class="services__title">Услуги перевозки грузов</h2>
      </header>

      <div class="services__grid">
        <article v-for="service in visibleServices" :key="service.title" class="services__card">
          <div class="services__card-title">
            <img class="services__icon" :src="service.icon" alt="" loading="lazy" />
            <h3>{{ service.title }}</h3>
          </div>

          <p class="services__text">{{ service.description }}</p>

          <a class="services__cta" href="tel:+380982304083">Узнать стоимость доставки</a>
        </article>
      </div>

      <div class="services__actions" v-if="services.length > initialCount">
        <button class="services__more" type="button" @click="expanded = !expanded">
          {{ expanded ? 'Скрыть услуги' : 'Посмотреть другие услуги' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const initialCount = 6
const expanded = ref(false)

const services = [
  {
    icon: '/images/services/truck.svg',
    title: 'Экспресс доставка грузов',
    description:
      'Доставка малогабаритных грузов выполняется по Днепру в формате «от двери до двери». Быстро, удобно и недорого.'
  },
  {
    icon: '/images/services/home-modern.svg',
    title: 'Квартирный переезд в Днепре',
    description:
      'Не важно, куда вы переезжаете: на соседнюю улицу или в другую область. Чтобы во время квартирного переезда ничего не потерялось, не разбилось и не сломалось, к нему нужно готовиться.'
  },
  {
    icon: '/images/services/cube.svg',
    title: 'Доставка товаров и техники',
    description:
      'Ежедневно по Днепру грузовые такси доставляют товары от производителя своим потребителям. Это самый выгодный инструмент для того, чтобы перевезти товары и продукцию.'
  },
  {
    icon: '/images/services/building-office-2.svg',
    title: 'Офисный переезд',
    description:
      'Одной из популярных услуг является перевозка офиса. Фирмы открываются, расширяются или сокращают штат, и в этих случаях требуется быстрый и аккуратный переезд на новое место.'
  },
  {
    icon: '/images/services/users.svg',
    title: 'Газель для переезда (грузчики)',
    description:
      'Услугу «Газель для переезда» можно заказать отдельно или вместе с грузчиками. Вы можете выбрать необходимое количество человек для выполнения такелажных работ.'
  },
  {
    icon: '/images/services/home.svg',
    title: 'Дачный переезд',
    description:
      'Поездка на дачу становится проще, если не заниматься транспортировкой мебели и крупного груза самостоятельно. Закажите услугу дачного переезда и наслаждайтесь отдыхом.'
  },
  {
    icon: '/images/services/archive-box.svg',
    title: 'Перевозка мебели',
    description:
      'Перевозка мебели выполняется по отлаженному алгоритму, с гибким подходом и большим выбором машин. Задача — уложиться в ваш бюджет и исключить повреждения.'
  },
  {
    icon: '/images/services/truck.svg',
    title: 'Автоперевозка грузов',
    description:
      'Компания доставляет автотранспортом груз любого веса в кратчайшие сроки. Если вес груза свыше 5 тонн, перевозка выполняется в нескольких транспортных средствах.'
  },
  {
    icon: '/images/services/wrench-screwdriver.svg',
    title: 'Услуги грузчиков',
    description:
      'Услуги грузчиков в Днепре можно заказать отдельно или вместе с грузовой машиной. Вы можете выбрать нужное количество специалистов для любых такелажных работ.'
  },
  {
    icon: '/images/services/calculator.svg',
    title: 'Заказ грузового авто',
    description:
      'У нас можно заказать машину грузоподъемностью до 5 тонн для перевозки стройматериалов, мебели и предметов интерьера, продуктов питания, бытовой и офисной техники.'
  },
  {
    icon: '/images/services/cog-6-tooth.svg',
    title: 'Перевозка оборудования',
    description:
      'Если речь идет о крупногабаритном грузе или транспортировке дорогостоящих товаров, задачу стоит доверить профессионалам с опытом безопасной и своевременной доставки.'
  },
  {
    icon: '/images/services/musical-note.svg',
    title: 'Перевозка пианино и роялей',
    description:
      'Перевозка пианино, фортепиано и рояля выполняется специально оборудованным автомобилем. Инструменты надежно закрепляются ремнями для защиты от повреждений.'
  },
  {
    icon: '/images/services/safe.svg',
    title: 'Такелажные услуги',
    description:
      'Если вам нужна быстрая перевозка сейфов, аквариумов и другого тяжелого имущества, команда выполнит работу оперативно и аккуратно с гарантией сохранности.'
  }
]

const visibleServices = computed(() => {
  if (expanded.value) return services
  return services.slice(0, initialCount)
})
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.services {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__head {
    margin: 0 0 20px;
  }

  &__title {
    margin: 0;
    font-size: 34px;
    font-weight: 800;
    color: @color-dark;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background: #fff;
    border: 1px solid rgba(0, 34, 70, 0.08);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 7px 16px rgba(0, 34, 70, 0.06);
  }

  &__card-title {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 12px;
    align-items: center;
    margin: 0 0 12px;
  }

  &__icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    color: @color-primary;
  }

  &__card-title h3 {
    margin: 0;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 800;
    color: @color-dark;
  }

  &__text {
    margin: 0 0 16px;
    color: #2f3c4a;
    line-height: 1.5;
  }

  &__cta {
    margin-top: auto;
    width: fit-content;
    text-decoration: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 16px;
    box-shadow: 0 3px 12px rgba(255, 103, 83, 0.35);
    opacity: 0.93;
    transition: opacity @transition, box-shadow @transition;

    &:hover {
      opacity: 1;
      box-shadow: 0 5px 18px rgba(255, 103, 83, 0.48);
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }

  &__more {
    border: none;
    border-radius: 8px;
    background: #002246;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 20px;
    cursor: pointer;
    transition: opacity @transition;

    &:hover {
      opacity: 0.9;
    }
  }
}

@media (max-width: 1024px) {
  .services {
    &__title {
      font-size: 30px;
    }

    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}

@media (max-width: 600px) {
  .services {
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

    &__card-title {
      grid-template-columns: 40px 1fr;
      gap: 10px;
    }

    &__icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
