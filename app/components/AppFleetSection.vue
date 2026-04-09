<template>
  <section class="fleet" id="fleet">
    <div class="fleet__container">
      <header class="fleet__head">
        <h2 class="fleet__title">Автопарк в грузовом такси «GRYZLY»</h2>
        <p class="fleet__intro">
          В нашем автопарке действуют прозрачные фиксированные тарифы. Выберите тип автомобиля во вкладках
          ниже и посмотрите, какой вариант лучше подойдет под ваш груз.
        </p>
      </header>

      <div class="fleet__tabs" role="tablist" aria-label="Типы транспорта">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="fleet__tab"
          :class="{ 'fleet__tab--active': activeTab === index }"
          role="tab"
          :aria-selected="activeTab === index"
          :aria-controls="`fleet-panel-${tab.id}`"
          :id="`fleet-tab-${tab.id}`"
          @click="activeTab = index"
        >
          {{ tab.label }}
        </button>
      </div>

      <article
        class="fleet__panel"
        role="tabpanel"
        :id="`fleet-panel-${tabs[activeTab].id}`"
        :aria-labelledby="`fleet-tab-${tabs[activeTab].id}`"
      >
        <div class="fleet__visual">
          <img :src="tabs[activeTab].image" :alt="tabs[activeTab].name" loading="lazy" />
        </div>

        <div class="fleet__content">
          <p class="fleet__name">{{ tabs[activeTab].name }}</p>
          <p class="fleet__capacity">{{ tabs[activeTab].capacity }}</p>
          <p class="fleet__description">{{ tabs[activeTab].description }}</p>

          <ul class="fleet__features">
            <li v-for="feature in tabs[activeTab].features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <a class="fleet__cta" href="tel:+380982304083">Заказать авто</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref(0)

const tabs = [
  {
    id: 'vans',
    label: 'Бусы',
    name: 'Бус-стандарт',
    capacity: 'До 1000 кг',
    description: 'Оптимальный вариант для мебели, техники и переезда по городу в один рейс.',
    features: [
      'Подходит для квартирных и офисных переездов',
      'Закрытый кузов для защиты хрупких вещей',
      'Удобен для перевозки крупногабаритных предметов'
    ],
    image: '/bus.jpg'
  },
  {
    id: 'gazelles',
    label: 'Газели',
    name: 'Газель 4 метра',
    capacity: 'До 2000 кг',
    description: 'Решение для длинномерных и объемных грузов, когда нужен увеличенный кузов.',
    features: [
      'Подходит для стройматериалов и оборудования',
      'Боковая и задняя загрузка',
      'Усиленные крепления для надежной фиксации'
    ],
    image: '/gazelle.jpg'
  },
  {
    id: 'trucks',
    label: 'Грузовики',
    name: 'Грузовик 3-5 тонн',
    capacity: 'До 5000 кг / до 36 м³',
    description: 'Для крупных перевозок и высоких предметов, которые важно везти вертикально.',
    features: [
      'Подходит для коммерческих и складских задач',
      'Высокий кузов для объемного груза',
      'Идеален для регулярных перевозок по городу и области'
    ],
    image: '/5-tonnik.jpg'
  }
]
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.fleet {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__head {
    max-width: 900px;
    margin: 0 auto 24px;
    text-align: center;
  }

  &__title {
    margin: 0 0 12px;
    font-size: 34px;
    font-weight: 800;
    color: @color-dark;
  }

  &__intro {
    margin: 0;
    color: #324458;
    font-size: 17px;
    line-height: 1.5;
  }

  &__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0;
  }

  &__tab {
    border: 1px solid rgba(255, 103, 83, 0.35);
    background: #fff;
    color: @color-dark;
    border-radius: 10px 10px 0 0;
    height: 44px;
    padding: 0 18px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color @transition, color @transition, border-color @transition;
  }

  &__tab--active {
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: #fff;
    border-color: transparent;
  }

  &__panel {
    background: #fff;
    border: 1px solid rgba(255, 103, 83, 0.35);
    border-radius: 0 14px 14px 14px;
    padding: 20px;
    box-shadow: 0 12px 28px rgba(0, 34, 70, 0.09);
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 20px;
    align-items: stretch;
  }

  &__visual {
    background: #f2f6fb;
    border-radius: 12px;
    overflow: hidden;
    height: 370px;
  }

  &__visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__name {
    margin: 0 0 8px;
    font-size: 27px;
    font-weight: 800;
    color: @color-dark;
  }

  &__capacity {
    margin: 0 0 12px;
    color: @color-primary;
    font-size: 18px;
    font-weight: 700;
  }

  &__description {
    margin: 0 0 12px;
    color: #2f3c4a;
    line-height: 1.55;
  }

  &__features {
    margin: 0 0 18px;
    padding: 0 0 0 20px;
    display: grid;
    gap: 7px;
    color: #2f3c4a;
    line-height: 1.45;
  }

  &__cta {
    margin-top: auto;
    width: 220px;
    height: 45px;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 3px 12px rgba(255, 103, 83, 0.35);
    opacity: 0.93;
    transition: opacity @transition, box-shadow @transition;

    &:hover {
      opacity: 1;
      box-shadow: 0 5px 18px rgba(255, 103, 83, 0.48);
    }
  }
}

@media (max-width: 1024px) {
  .fleet {
    &__title {
      font-size: 30px;
    }

    &__panel {
      grid-template-columns: 1fr;
    }

    &__visual {
      height: 270px;
    }
  }
}

@media (max-width: 600px) {
  .fleet {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
      text-align: left;
    }

    &__head {
      text-align: left;
    }

    &__intro {
      font-size: 15px;
    }

    &__tab {
      flex: 1 1 0;
      min-width: 0;
      padding: 0 10px;
      font-size: 14px;
    }

    &__panel {
      border-radius: 0 10px 10px 10px;
      padding: 14px;
    }

    &__name {
      font-size: 22px;
    }

    &__capacity {
      font-size: 16px;
    }

    &__cta {
      width: 100%;
    }
  }
}
</style>
