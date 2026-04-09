<template>
  <section class="trust" id="trust">
    <div class="trust__container">
      <header class="trust__head">
        <h2 class="trust__title">Нам доверяют свои грузы</h2>
      </header>

      <div class="trust__grid">
        <article v-for="item in trustItems" :key="item.title" class="trust__card">
          <div class="trust__image" :style="{ backgroundImage: `url('${item.image}')` }" role="img" :aria-label="item.title" />
          <h3 class="trust__card-title">{{ item.title }}</h3>
          <ul class="trust__list">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustItems = [
  {
    title: 'Малый бизнес',
    image: '/trust-small-business.jpg',
    points: [
      'Исполняем разовые заказы на перевозку.',
      'Вам не требуется содержать свой отдел логистики: подберем лучшую цену под любую задачу.'
    ]
  },
  {
    title: 'Мебельные фабрики',
    image: '/trust-furniture.jpg',
    points: [
      'Перевозим мебель от производства до клиента.',
      'Обеспечиваем качественную погрузку и выгрузку.',
      'Доставляем вовремя в согласованные сроки.'
    ]
  },
  {
    title: 'Строительные магазины',
    image: '/trust-building-store.jpg',
    points: [
      'География перевозок: по Днепру и области.',
      'Подбираем необходимый тип транспорта под груз.',
      'Обеспечиваем сервис с учетом особенностей вашей компании.'
    ]
  },
  {
    title: 'Частные лица',
    image: '/trust-private.jpg',
    points: [
      'Каждый месяц помогаем сотням людей с переездами в другой город, квартиру или на дачу.',
      'Опыт команды позволяет гарантировать качество услуг и сохранность вещей.'
    ]
  }
]
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.trust {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%);

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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    background: #fff;
    border: 1px solid rgba(0, 34, 70, 0.08);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 7px 16px rgba(0, 34, 70, 0.06);
    display: flex;
    flex-direction: column;
  }

  &__image {
    height: 170px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__card-title {
    margin: 14px 14px 8px;
    color: @color-dark;
    font-size: 22px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__list {
    margin: 0;
    padding: 0 14px 16px 30px;
    display: grid;
    gap: 8px;
    color: #2f3c4a;
    line-height: 1.45;
    font-size: 15px;
  }
}

@media (max-width: 1180px) {
  .trust {
    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}

@media (max-width: 600px) {
  .trust {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__image {
      height: 150px;
    }

    &__card-title {
      font-size: 20px;
    }
  }
}
</style>
