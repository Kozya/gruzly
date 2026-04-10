<template>
  <section class="business-calc" id="business">
    <div class="business-calc__container">
      <div class="business-calc__panel">
        <div class="business-calc__content">
          <header class="business-calc__head">
            <h2 class="business-calc__title">Транспортные услуги для бизнеса</h2>
          </header>

          <p class="business-calc__lead">
            Сделаем вам предложение исходя из ваших потребностей, учитывая все особенности бизнеса.
          </p>
          <p class="business-calc__slogan"><strong>С нами безопасно, быстро и экономно!</strong></p>
        </div>

        <div class="business-calc__image" aria-hidden="true"></div>

        <aside class="business-calc__form-wrap">
          <div class="business-calc__form-title">
            <p>Все просто!</p>
            <h3><span>Оставьте свои данные,</span> и мы вам перезвоним</h3>
          </div>

          <form class="business-calc__form" @submit.prevent="onSubmit">
            <label class="business-calc__field">
              <input v-model="name" type="text" placeholder="Ваше имя" required />
            </label>

            <label class="business-calc__field">
              <input
                v-model="phone"
                type="tel"
                inputmode="tel"
                placeholder="Контактный телефон"
                required
                @input="onPhoneInput"
              />
            </label>

            <label class="business-calc__policy">
              <input v-model="accepted" type="checkbox" required />
              <span>Даю согласие на обработку персональных данных</span>
            </label>

            <button class="business-calc__submit" type="submit">Получить коммерческое предложение</button>

            <p class="business-calc__ok" v-if="submitted">
              Заявка принята. Менеджер свяжется с вами в ближайшее время.
            </p>
          </form>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const name = ref('')
const phone = ref('')
const accepted = ref(true)
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
  if (!name.value.trim()) return
  if (phone.value.replace(/\D/g, '').length < 12) return
  if (!accepted.value) return
  submitted.value = true
}
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.business-calc {
  font-family: @font-main;
  padding: 44px 0 56px;
  background: linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__panel {
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 14px 30px rgba(0, 34, 70, 0.2);
    background:
      linear-gradient(102deg, rgba(0, 34, 70, 0.92) 0%, rgba(0, 34, 70, 0.8) 52%, rgba(0, 34, 70, 0.45) 100%),
      url('/trust-small-business.jpg') center / cover no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'content image'
      'form form';
    gap: 20px;
    padding: 28px;
    overflow: hidden;
  }

  &__content {
    grid-area: content;
    color: #fff;
    align-self: center;
  }

  &__head {
    margin: 0 0 12px;
  }

  &__title {
    margin: 0;
    font-size: 36px;
    line-height: 1.16;
    font-weight: 800;
    color: #fff;
    max-width: 560px;
  }

  &__lead {
    margin: 0 0 10px;
    font-size: 18px;
    line-height: 1.45;
    color: #e9f6ff;
  }

  &__slogan {
    margin: 0;
    font-size: 20px;
    line-height: 1.45;
    color: #bfe6ff;
    font-weight: 700;
  }

  &__image {
    grid-area: image;
    min-height: 220px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    background:
      linear-gradient(180deg, rgba(0, 34, 70, 0.08) 0%, rgba(0, 34, 70, 0.35) 100%),
      url('/operator-headset.jpg') center / cover no-repeat;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }

  &__form-wrap {
    grid-area: form;
    max-width: 880px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(0, 34, 70, 0.15);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 10px 24px rgba(0, 34, 70, 0.12);
  }

  &__form-title {
    margin: 0 0 14px;
  }

  &__form-title p {
    margin: 0 0 6px;
    color: @color-primary;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  &__form-title h3 {
    margin: 0;
    color: @color-dark;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__form-title h3 span {
    color: @color-primary;
  }

  &__form {
    display: grid;
    gap: 10px;
    max-width: 420px;
  }

  &__field input {
    width: 100%;
    height: 46px;
    border: 1px solid rgba(0, 34, 70, 0.2);
    border-radius: 8px;
    padding: 0 12px;
    color: @color-dark;
    background: #f8fbff;
    font-size: 15px;
    outline: none;
    transition: border-color @transition, box-shadow @transition;
  }

  &__field input:focus {
    border-color: @color-primary;
    box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.13);
  }

  &__policy {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 8px;
    align-items: start;
    color: #22364b;
    font-size: 13px;
    line-height: 1.35;
    cursor: pointer;
  }

  &__policy input {
    margin-top: 2px;
  }

  &__submit {
    height: 48px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(255, 103, 83, 0.35);
    opacity: 0.94;
    transition: opacity @transition, box-shadow @transition;
  }

  &__submit:hover {
    opacity: 1;
    box-shadow: 0 6px 18px rgba(255, 103, 83, 0.5);
  }

  &__ok {
    margin: 2px 0 0;
    color: #167e43;
    font-size: 14px;
    line-height: 1.35;
  }
}

@media (max-width: 1024px) {
  .business-calc {
    &__panel {
      grid-template-columns: 1fr;
      grid-template-areas:
        'content'
        'image'
        'form';
      background:
        linear-gradient(180deg, rgba(0, 34, 70, 0.88) 0%, rgba(0, 34, 70, 0.84) 100%),
        url('/trust-small-business.jpg') center / cover no-repeat;
    }

    &__title {
      font-size: 30px;
    }

    &__form-title h3 {
      font-size: 24px;
    }
  }
}

@media (max-width: 600px) {
  .business-calc {
    padding: 32px 0 38px;

    &__panel {
      padding: 14px;
      border-radius: 12px;
    }

    &__title {
      font-size: 24px;
    }

    &__lead,
    &__slogan {
      font-size: 16px;
    }

    &__image,
    &__form-wrap {
      min-height: 0;
    }

    &__form-wrap {
      padding: 14px;
    }

    &__form-title h3 {
      font-size: 20px;
    }
  }
}
</style>
