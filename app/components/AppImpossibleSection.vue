<template>
  <section class="impossible" id="impossible">
    <div class="impossible__container">
      <header class="impossible__head">
        <h2 class="impossible__title">Для нас нет невозможных задач!</h2>
      </header>

      <div class="impossible__grid">
        <div class="impossible__column">
          <article class="impossible__item" :style="{ backgroundImage: `url('/hero-sprinter-custom.png')` }">
            <h5>Срочность</h5>
            <p>Мы подадим транспорт уже через <strong>30 минут</strong> после звонка.</p>
          </article>

          <article class="impossible__item" :style="{ backgroundImage: `url('/gazelle.jpg')` }">
            <h5>Грузоперевозки до 5 т.</h5>
            <p>Имеем в автопарке Бус, Газель 2 т, Грузовик до 5 т.</p>
          </article>
        </div>

        <div class="impossible__column">
          <article class="impossible__item" :style="{ backgroundImage: `url('/operator-headset.jpg')` }">
            <h5>Ограниченный бюджет</h5>
            <p>Работаем со сборными грузами, догрузами. Предложим оптимальное ценовое решение.</p>
          </article>

          <article class="impossible__item" :style="{ backgroundImage: `url('/trust-small-business.jpg')` }">
            <h5>Праздники, выходные, "высокий" сезон? Мы всегда на связи!</h5>
            <p>24 часа в сутки на линии дежурный логист, который поможет рассчитать стоимость и быстро подать машину.</p>
          </article>
        </div>

        <div class="impossible__column">
          <article class="impossible__item" :style="{ backgroundImage: `url('/trust-building-store.jpg')` }">
            <h5>Необходимо доставить в несколько пунктов?</h5>
            <p>Осуществим доставку и выгрузку по разным адресам.</p>
          </article>

          <article class="impossible__item" :style="{ backgroundImage: `url('/bus.jpg')` }">
            <h5>Работаем без выходных</h5>
            <p>Мы готовы к переездам в любой день недели.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.impossible {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__head {
    margin: 0 0 24px;
  }

  &__title {
    margin: 0;
    color: @color-dark;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
  }

  &__column {
    display: grid;
    gap: 14px;
  }

  &__item {
    position: relative;
    min-height: 220px;
    border-radius: 12px;
    border: 1px solid rgba(255, 103, 83, 0.35);
    overflow: hidden;
    padding: 16px;
    color: #fff;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 10px 24px rgba(0, 34, 70, 0.16);
    display: grid;
    align-content: end;
    gap: 8px;
  }

  &__item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 34, 70, 0.12) 0%, rgba(0, 34, 70, 0.78) 100%);
  }

  &__item h5,
  &__item p {
    position: relative;
    margin: 0;
    z-index: 1;
  }

  &__item h5 {
    font-size: 22px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__item p {
    font-size: 15px;
    line-height: 1.45;
    color: #e9f6ff;
  }
}

@media (max-width: 1024px) {
  .impossible {
    &__title {
      font-size: 30px;
    }

    &__grid {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 700px) {
  .impossible {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__item {
      min-height: 200px;
      padding: 14px;
    }

    &__item h5 {
      font-size: 19px;
    }
  }
}
</style>
