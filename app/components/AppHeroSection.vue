<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__panel">
        <div class="hero__content">
          <h1 class="hero__title">
            ГРУЗОВОЕ ТАКСИ GRUZLY
            <br />
            доступные грузовые перевозки ДНЕПР и вся Украина
          </h1>
          <p class="hero__subtitle">По всей Украине</p>

          <ul class="hero__list">
            <li>Рассчитаем стоимость перевозки бесплатно и заранее.</li>
            <li>Машина приезжает в среднем за 30 минут, работаем быстро и четко.</li>
            <li>Всегда вежливые водитель и грузчики. Без вредных привычек.</li>
            <li>Перевозим аккуратно, при необходимости упакуем и надежно зафиксируем груз.</li>
          </ul>

          <aside class="hero__form-wrap">
            <h2 class="hero__form-title">Заказать услугу в один клик</h2>
            <form class="hero__form" @submit.prevent="onSubmit">
              <input
                v-model="phone"
                class="hero__input"
                type="tel"
                inputmode="tel"
                placeholder="+38 (0__) ___-__-__"
                aria-label="Введите номер телефона"
                @input="onPhoneInput"
              />
              <button class="hero__button" type="submit">Перезвоните мне</button>
            </form>
            <p v-if="submitted" class="hero__note">Заявка принята. Мы перезвоним в ближайшее время.</p>
          </aside>
        </div>
      </div>
    </div>

    <div class="delivery">
      <div class="delivery__container">
        <h2 class="delivery__title">Мы доставляем грузы быстрее конкурентов</h2>

        <div class="delivery__grid">
          <article class="delivery__card">
            <p><strong>По районам Днепра:</strong></p>
            <ul class="delivery__list delivery__list--columns">
              <li>Индустриальный</li>
              <li>Самарский</li>
              <li>Новокодакский</li>
              <li>Чечеловский</li>
              <li>Центральный</li>
              <li>Соборный</li>
            </ul>
          </article>

          <article class="delivery__card">
            <h3>Работаем по всей Украине</h3>
            <p>Организуем грузовые перевозки в любой город Украины и обратно.</p>
          </article>

          <article class="delivery__card delivery__card--highlight">
            <h3>Гибкие условия</h3>
            <p>От разового заказа до обслуживания на постоянной основе.</p>
          </article>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const phone = ref('')
const submitted = ref(false)

function onPhoneInput(event: Event) {
  const target = event.target as HTMLInputElement
  const digits = target.value.replace(/\D/g, '').slice(0, 12)
  let formatted = '+38'

  if (digits.length > 2) {
    const local = digits.slice(2)

    if (local.length > 0) formatted += ` (${local.slice(0, 3)}`
    if (local.length >= 3) formatted += ')'
    if (local.length > 3) formatted += ` ${local.slice(3, 6)}`
    if (local.length > 6) formatted += `-${local.slice(6, 8)}`
    if (local.length > 8) formatted += `-${local.slice(8, 10)}`
  }

  phone.value = formatted
}

function onSubmit() {
  if (phone.value.replace(/\D/g, '').length < 12) return
  submitted.value = true
}
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.hero {
  font-family: @font-main;
  background: linear-gradient(180deg, #f4f9ff 0%, #ffffff 48%);
  padding: 36px 0 0;

  &__container,
  .delivery__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 390px;
    gap: 24px;
    align-items: end;
    min-height: 560px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 34px;
    overflow: hidden;
    background:
      linear-gradient(104deg, rgba(0, 34, 70, 0.94) 0%, rgba(0, 34, 70, 0.86) 47%, rgba(0, 34, 70, 0.38) 100%),
      url('/hero-movers-smiling.jpg') 78% 35% / cover no-repeat;
    box-shadow: 0 14px 30px rgba(0, 34, 70, 0.2);
  }

  &__content {
    color: #fff;
    max-width: 720px;
  }

  &__title {
    margin: 0 0 12px;
    font-size: 38px;
    line-height: 1.16;
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
    max-width: 760px;
  }

  &__subtitle {
    margin: 0 0 20px;
    font-size: 20px;
    color: #bfe6ff;
    font-weight: 600;
  }

  &__list {
    margin: 0;
    padding: 0 0 0 20px;
    display: grid;
    gap: 10px;
    color: #edf7ff;
    font-size: 16px;
    line-height: 1.45;
    max-width: 640px;
  }

  &__form-wrap {
    margin-top: 24px;
    max-width: 620px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(0, 185, 255, 0.2);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 10px 26px rgba(0, 34, 70, 0.08);
  }

  &__form-title {
    margin: 0 0 14px;
    font-size: 18px;
    font-weight: 700;
    color: @color-dark;
  }

  &__form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 10px;
  }

  &__input {
    height: 56px;
    border: 1px solid rgba(0, 34, 70, 0.2);
    border-radius: 8px;
    padding: 0 14px;
    font-size: 18px;
    color: @color-dark;
    outline: none;
    transition: border-color @transition, box-shadow @transition;

    &:focus {
      border-color: @color-primary;
      box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.12);
    }
  }

  &__button {
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    opacity: 0.92;
    box-shadow: 0 4px 14px rgba(255, 103, 83, 0.35);
    transition: opacity @transition, box-shadow @transition;

    &:hover {
      opacity: 1;
      box-shadow: 0 6px 18px rgba(255, 103, 83, 0.48);
    }
  }

  &__note {
    margin: 10px 0 0;
    color: #128047;
    font-size: 14px;
    font-weight: 600;
  }

}

.delivery {
  font-family: @font-main;
  margin-top: 34px;
  padding: 28px 0 42px;
  background: linear-gradient(180deg, #eef6ff 0%, #f8fbff 100%);
  border-top: 1px solid rgba(0, 34, 70, 0.06);

  &__title {
    margin: 0 0 18px;
    font-size: 30px;
    line-height: 1.22;
    font-weight: 800;
    color: @color-dark;
    text-align: left;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  &__card {
    background: #fff;
    border: 1px solid rgba(255, 103, 83, 0.35);
    border-radius: 12px;
    padding: 16px;
    color: #253444;
    box-shadow: 0 5px 14px rgba(0, 34, 70, 0.06);
  }

  &__card h3 {
    margin: 0 0 8px;
    font-size: 20px;
    color: @color-dark;
  }

  &__card p {
    margin: 0;
    line-height: 1.45;
  }

  &__list {
    margin: 0;
    padding: 0 0 0 18px;
    display: grid;
    gap: 7px;
  }

  &__list--columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 16px;
  }

  &__card--highlight {
    background: linear-gradient(135deg, #eff7ff 0%, #ffffff 70%);
  }
}

@media (max-width: 1024px) {
  .hero {
    &__panel {
      grid-template-columns: 1fr;
      min-height: 0;
      background:
        linear-gradient(180deg, rgba(0, 34, 70, 0.9) 0%, rgba(0, 34, 70, 0.78) 100%),
        url('/hero-movers-smiling.jpg') center / cover no-repeat;
    }

    &__form {
      grid-template-columns: 1fr;
    }

    &__title {
      font-size: 32px;
    }
  }

  .delivery {
    &__grid {
      grid-template-columns: 1fr;
    }

    &__title {
      font-size: 26px;
      text-align: left;
    }
  }
}

@media (max-width: 600px) {
  .hero {
    padding-top: 24px;

    &__title {
      font-size: 24px;
    }

    &__subtitle {
      font-size: 17px;
    }

    &__panel {
      padding: 18px;
      border-radius: 12px;
    }

    &__form-wrap {
      padding: 16px;
    }
  }

  .delivery {
    margin-top: 26px;
    padding: 22px 0 28px;

    &__title {
      font-size: 22px;
    }

    &__list--columns {
      grid-template-columns: 1fr;
    }
  }
}
</style>


