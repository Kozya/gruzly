<template>
  <section class="additionally" id="additionally">
    <div class="additionally__container">
      <header class="additionally__head">
        <h2 class="additionally__title">Дополнительно предоставляем</h2>
      </header>

      <div class="additionally__grid">
        <article class="additionally__card">
          <ul class="additionally__list">
            <li>Забор груза у отправителя</li>
            <li>Доставка груза получателю</li>
            <li>Доставка ко времени</li>
          </ul>
        </article>

        <article class="additionally__card">
          <ul class="additionally__list">
            <li>Перевозка хрупких грузов</li>
            <li>Перевозка ценных грузов</li>
            <li>Погрузо-разгрузочные работы</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.additionally {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);

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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    background: #fff;
    border: 1px solid rgba(0, 34, 70, 0.08);
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
  .additionally {
    &__title {
      font-size: 30px;
    }
  }
}

@media (max-width: 600px) {
  .additionally {
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

    &__list {
      font-size: 16px;
    }
  }
}
</style>
