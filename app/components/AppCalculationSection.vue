<template>
  <section class="calculation" id="calculation">
    <div class="calculation__container">
      <header class="calculation__head">
        <h2 class="calculation__title">Расчет стоимости перевозки груза</h2>
      </header>

      <div class="calculation__grid">
        <article class="calculation__card">
          <ul class="calculation__list">
            <li>Мы готовы разработать индивидуальные логистические схемы.</li>
            <li>
              Предоставим персонального менеджера для оперативного решения вопросов,
              возникающих в процессе транспортировки.
            </li>
            <li>
              Обеспечим своевременный и качественный квартирный и офисный переезд,
              а также грузоперевозки по Днепру и области.
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.calculation {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #ffffff 0%, #eef6ff 100%);

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

  &__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }

  &__card {
    background: #fff;
    border: 1px solid rgba(255, 103, 83, 0.35);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 7px 16px rgba(0, 34, 70, 0.06);
  }

  &__list {
    margin: 0;
    padding: 0 0 0 24px;
    display: grid;
    gap: 10px;
    color: #2f3c4a;
    line-height: 1.45;
    font-size: 17px;
  }
}

@media (max-width: 1024px) {
  .calculation {
    &__title {
      font-size: 30px;
    }
  }
}

@media (max-width: 600px) {
  .calculation {
    padding: 32px 0 38px;

    &__title {
      font-size: 24px;
    }

    &__card {
      padding: 14px;
    }

    &__list {
      font-size: 16px;
    }
  }
}
</style>
