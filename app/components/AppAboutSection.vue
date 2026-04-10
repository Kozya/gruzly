<template>
  <section class="about" id="about">
    <div class="about__container">
      <header class="about__head">
        <h2 class="about__title">О компании</h2>
      </header>

      <div class="about__grid">
        <article class="about__card">
          <span class="about__value">2020</span>
          <p class="about__text">с 2020 <br />года на рынке <br />услуг</p>
        </article>

        <article class="about__card">
          <span class="about__value">Днепр</span>
          <p class="about__text">Работаем в <br />Днепре и области</p>
        </article>

        <article class="about__card">
          <span class="about__value">99%</span>
          <p class="about__text">99% <br />клиентов остаются с нами на <br />долгие годы</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.about {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__head {
    margin: 0 0 22px;
  }

  &__title {
    margin: 0;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 800;
    color: @color-dark;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    min-height: 160px;
    border-radius: 12px;
    background: #fff;
    border: 1px solid rgba(255, 103, 83, 0.35);
    box-shadow: 0 7px 16px rgba(0, 34, 70, 0.06);
    padding: 20px;
    display: grid;
    align-content: start;
    gap: 10px;
  }

  &__value {
    display: block;
    color: @color-primary;
    font-size: 36px;
    line-height: 1;
    font-weight: 800;
  }

  &__text {
    margin: 0;
    color: #2f3c4a;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
  }
}

@media (max-width: 1024px) {
  .about {
    &__title {
      font-size: 30px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__card {
      min-height: 0;
    }

    &__value {
      font-size: 40px;
    }
  }
}

@media (max-width: 600px) {
  .about {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
    }

    &__card {
      padding: 14px;
    }

    &__text {
      font-size: 18px;
    }
  }
}
</style>
