<template>
  <section class="delivery-calc" id="delivery">
    <div class="delivery-calc__container">
      <div class="delivery-calc__panel">
        <div class="delivery-calc__content">
          <p class="delivery-calc__preline">Качество и пунктуальность, проверенные временем</p>
          <p class="delivery-calc__preline">Грузовое такси «GRYZLY»</p>

          <header class="delivery-calc__head">
            <h2 class="delivery-calc__title">У вас есть груз, который нужно доставить?</h2>
          </header>

          <p class="delivery-calc__lead">Мы сделаем это <strong>под ключ</strong>:</p>

          <ul class="delivery-calc__list">
            <li>совершим погрузку в автотранспорт;</li>
            <li>составим оптимальный маршрут;</li>
            <li>доставим по адресу вовремя.</li>
          </ul>

          <p class="delivery-calc__slogan">
            От вас требуется только сказать, где находится груз.
            <br />
            Все остальное - наша забота.
          </p>
        </div>

        <aside class="delivery-calc__form-wrap">
          <div class="delivery-calc__form-title">
            <p>Все просто</p>
            <h3>Рассчитайте свою перевозку по Днепру</h3>
          </div>

          <form class="delivery-calc__form" @submit.prevent="onSubmit">
            <label class="delivery-calc__field">
              <span>Выберите автомобиль</span>
              <select v-model="carType" required>
                <option value="Бус">Бус</option>
                <option value="Газель 2т">Газель 2т</option>
                <option value="Авто 5т">Авто 5т</option>
              </select>
            </label>

            <label class="delivery-calc__field">
              <span>Время аренды машины</span>
              <select v-model="hours" required>
                <option value="2">2ч</option>
                <option value="3">3ч</option>
                <option value="4">4ч</option>
                <option value="5">5ч</option>
                <option value="6">6ч</option>
              </select>
            </label>

            <label class="delivery-calc__field">
              <span>Количество грузчиков</span>
              <select v-model="loaders" required>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>

            <h5>Ваши контактные данные</h5>

            <div class="delivery-calc__contacts">
              <label class="delivery-calc__field">
                <input v-model="name" type="text" placeholder="Имя" required />
              </label>
              <label class="delivery-calc__field">
                <input
                  v-model="phone"
                  type="tel"
                  inputmode="tel"
                  placeholder="Контактный телефон"
                  required
                  @input="onPhoneInput"
                />
              </label>
            </div>

            <label class="delivery-calc__policy">
              <input v-model="accepted" type="checkbox" required />
              <span>Даю согласие на обработку персональных данных</span>
            </label>

            <button class="delivery-calc__submit" type="submit">Рассчитать стоимость</button>

            <p class="delivery-calc__estimate" v-if="submitted">
              Ориентировочно: <strong>{{ estimateText }}</strong>
            </p>
            <p class="delivery-calc__note">
              *Точная стоимость и сроки зависят от маршрута доставки и веса груза
            </p>
          </form>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const carType = ref('Бус')
const hours = ref('2')
const loaders = ref('0')
const name = ref('')
const phone = ref('')
const accepted = ref(true)
const submitted = ref(false)

const carRates: Record<string, number> = {
  'Бус': 450,
  'Газель 2т': 600,
  'Авто 5т': 850
}

const estimateText = computed(() => {
  const carRate = carRates[carType.value] ?? 450
  const hoursCount = Number(hours.value) || 2
  const loadersCount = Number(loaders.value) || 0
  const loadersRate = loadersCount * 180 * hoursCount
  const total = carRate * hoursCount + loadersRate
  return `${total.toLocaleString('uk-UA')} грн`
})

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

.delivery-calc {
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
      url('/gazelle.jpg') center / cover no-repeat;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 20px;
    padding: 28px;
    overflow: hidden;
  }

  &__content {
    color: #fff;
    align-self: center;
  }

  &__preline {
    margin: 0 0 6px;
    font-size: 18px;
    line-height: 1.35;
    color: #d5ecff;
    font-weight: 600;
  }

  &__head {
    margin: 12px 0;
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
  }

  &__list {
    margin: 0 0 12px;
    padding: 0 0 0 22px;
    display: grid;
    gap: 8px;
    font-size: 17px;
    line-height: 1.45;
  }

  &__slogan {
    margin: 0;
    font-size: 18px;
    line-height: 1.45;
    color: #bfe6ff;
    font-weight: 700;
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
    font-size: 25px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__form {
    display: grid;
    gap: 10px;
  }

  &__field {
    display: grid;
    gap: 6px;
  }

  &__field span {
    color: @color-dark;
    font-size: 14px;
    font-weight: 600;
  }

  &__field select,
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

  &__field select:focus,
  &__field input:focus {
    border-color: @color-primary;
    box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.13);
  }

  &__contacts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  &__form h5 {
    margin: 2px 0 0;
    color: @color-dark;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
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

  &__estimate {
    margin: 2px 0 0;
    color: #167e43;
    font-size: 14px;
    line-height: 1.35;
  }

  &__note {
    margin: 0;
    color: #5b6a7a;
    font-size: 12px;
    line-height: 1.35;
  }
}

@media (max-width: 1024px) {
  .delivery-calc {
    &__panel {
      grid-template-columns: 1fr;
      background:
        linear-gradient(180deg, rgba(0, 34, 70, 0.88) 0%, rgba(0, 34, 70, 0.84) 100%),
        url('/gazelle.jpg') center / cover no-repeat;
    }

    &__title {
      font-size: 30px;
    }

    &__form-title h3 {
      font-size: 22px;
    }
  }
}

@media (max-width: 600px) {
  .delivery-calc {
    padding: 32px 0 38px;

    &__panel {
      padding: 14px;
      border-radius: 12px;
    }

    &__title {
      font-size: 24px;
    }

    &__preline,
    &__lead,
    &__slogan {
      font-size: 16px;
    }

    &__list {
      font-size: 15px;
    }

    &__form-wrap {
      padding: 14px;
    }

    &__contacts {
      grid-template-columns: 1fr;
    }
  }
}
</style>
