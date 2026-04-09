<template>
  <section class="time" id="time">
    <div class="time__container">
      <div class="time__panel">
        <div class="time__content">
          <h2 class="time__title">
            <span>Не тратьте свое время,</span>
            оставляйте заявку на перевозку груза прямо сейчас!
          </h2>
          <p>Наши логисты учтут все ваши пожелания, озвучат стоимость.</p>
          <p><strong>Все просто!</strong></p>
        </div>

        <aside class="time__form-wrap">
          <h3 class="time__form-title">
            <span>Оставьте свои данные,</span>
            и мы вам перезвоним
          </h3>

          <form class="time__form" @submit.prevent="onSubmit">
            <h5>Ваши контактные данные</h5>

            <label class="time__field">
              <input v-model="name" type="text" placeholder="Имя" required />
            </label>

            <label class="time__field">
              <input
                v-model="phone"
                type="tel"
                inputmode="tel"
                placeholder="Контактный телефон"
                required
                @input="onPhoneInput"
              />
            </label>

            <label class="time__policy">
              <input v-model="accepted" type="checkbox" required />
              <span>Даю согласие на обработку персональных данных</span>
            </label>

            <button class="time__submit" type="submit">Перезвоните мне</button>

            <p class="time__note">*Точная стоимость и сроки зависят от маршрута доставки и веса груза</p>
            <p v-if="submitted" class="time__success">Заявка отправлена. Мы скоро перезвоним.</p>
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

.time {
  font-family: @font-main;
  padding: 44px 0 60px;
  background: linear-gradient(180deg, #ffffff 0%, #eef6ff 100%);

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__panel {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    background:
      linear-gradient(102deg, rgba(0, 34, 70, 0.92) 0%, rgba(0, 34, 70, 0.8) 52%, rgba(0, 34, 70, 0.45) 100%),
      url('/operator-headset.jpg') center right / cover no-repeat;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 14px 30px rgba(0, 34, 70, 0.2);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 20px;
    padding: 28px;
  }

  &__content {
    color: #ffffff;
    align-self: center;
  }

  &__title {
    margin: 0 0 14px;
    font-size: 38px;
    line-height: 1.17;
    font-weight: 800;
    text-transform: uppercase;
    max-width: 640px;
  }

  &__title span {
    color: #95daff;
    display: block;
  }

  &__content p {
    margin: 0 0 10px;
    font-size: 18px;
    line-height: 1.45;
    max-width: 520px;
  }

  &__form-wrap {
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(0, 34, 70, 0.15);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 10px 24px rgba(0, 34, 70, 0.12);
  }

  &__form-title {
    margin: 0 0 14px;
    color: @color-dark;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 800;
  }

  &__form-title span {
    color: @color-primary;
    display: block;
  }

  &__form {
    display: grid;
    gap: 10px;
  }

  &__form h5 {
    margin: 0;
    color: @color-dark;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  &__field input {
    width: 100%;
    height: 48px;
    border: 1px solid rgba(0, 34, 70, 0.2);
    border-radius: 8px;
    padding: 0 14px;
    color: @color-dark;
    font-size: 16px;
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

  &__note {
    margin: 2px 0 0;
    color: #5b6a7a;
    font-size: 12px;
    line-height: 1.35;
  }

  &__success {
    margin: 2px 0 0;
    color: #167e43;
    font-size: 13px;
    font-weight: 700;
  }
}

@media (max-width: 1024px) {
  .time {
    &__panel {
      grid-template-columns: 1fr;
      background:
        linear-gradient(180deg, rgba(0, 34, 70, 0.88) 0%, rgba(0, 34, 70, 0.84) 100%),
        url('/operator-headset.jpg') center / cover no-repeat;
    }

    &__title {
      font-size: 30px;
      max-width: none;
    }
  }
}

@media (max-width: 600px) {
  .time {
    padding: 32px 0 38px;

    &__panel {
      padding: 14px;
      border-radius: 12px;
    }

    &__title {
      font-size: 24px;
    }

    &__content p {
      font-size: 16px;
    }

    &__form-wrap {
      padding: 14px;
    }

    &__form-title {
      font-size: 20px;
    }
  }
}
</style>
