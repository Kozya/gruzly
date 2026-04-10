<template>
  <Teleport to="body">
    <div v-if="state.isOpen" class="request-modal" @click.self="closeRequestModal">
      <div class="request-modal__dialog" role="dialog" aria-modal="true" aria-label="Заказ звонка">
        <button class="request-modal__close" type="button" aria-label="Закрыть" @click="closeRequestModal">×</button>

        <h3 class="request-modal__title">Оставьте заявку</h3>
        <p class="request-modal__subtitle">Заполните данные, и мы свяжемся с вами.</p>

        <form class="request-modal__form" @submit.prevent="onSubmit">
          <label class="request-modal__field">
            <span>Имя</span>
            <input v-model="name" type="text" placeholder="Ваше имя" required />
          </label>

          <label class="request-modal__field">
            <span>Телефон</span>
            <input
              v-model="phone"
              type="tel"
              inputmode="tel"
              placeholder="+38 (0__) ___-__-__"
              required
              @input="onPhoneInput"
            />
          </label>

          <label class="request-modal__field">
            <span>Описание</span>
            <textarea
              v-model="description"
              rows="4"
              placeholder="Опишите задачу: что перевозим, откуда и куда, желаемая дата и время."
            ></textarea>
          </label>

          <button class="request-modal__submit" type="submit" :disabled="isSending">
            {{ isSending ? 'Отправка...' : 'Отправить' }}
          </button>

          <p v-if="statusMessage" class="request-modal__status" :class="{ 'request-modal__status--error': isError }">
            {{ statusMessage }}
          </p>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const { state, closeRequestModal } = useRequestModal()

const name = ref('')
const phone = ref('')
const description = ref('')
const isSending = ref(false)
const statusMessage = ref('')
const isError = ref(false)

const serviceId = runtimeConfig.public.emailjsServiceId
const templateId = runtimeConfig.public.emailjsTemplateId
const publicKey = runtimeConfig.public.emailjsPublicKey
const leadToEmail = runtimeConfig.public.leadToEmail || 'darthkozya@gmail.com'

watch(
  () => state.value.isOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      statusMessage.value = ''
      isError.value = false
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
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

async function onSubmit() {
  if (!name.value.trim()) return
  if (phone.value.replace(/\D/g, '').length < 12) return

  if (!serviceId || !templateId || !publicKey) {
    isError.value = true
    statusMessage.value = 'Не настроен EmailJS. Добавьте ключи в runtimeConfig.'
    return
  }

  isSending.value = true
  statusMessage.value = ''
  isError.value = false

  try {
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: leadToEmail,
          user_name: name.value.trim(),
          user_phone: phone.value.trim(),
          user_description: description.value.trim() || 'Не указано',
          source: state.value.source,
          sent_at: new Date().toISOString()
        }
      }
    })

    statusMessage.value = 'Заявка отправлена. Мы свяжемся с вами.'
    name.value = ''
    phone.value = ''
    description.value = ''

    setTimeout(() => {
      closeRequestModal()
    }, 1200)
  } catch {
    isError.value = true
    statusMessage.value = 'Ошибка отправки. Попробуйте еще раз.'
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.request-modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 20, 42, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  font-family: @font-main;
}

.request-modal__dialog {
  position: relative;
  width: min(560px, 100%);
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(255, 103, 83, 0.35);
  box-shadow: 0 18px 36px rgba(0, 34, 70, 0.24);
  padding: 22px;
}

.request-modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(0, 34, 70, 0.14);
  background: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.request-modal__title {
  margin: 0 0 8px;
  color: #002246;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 800;
}

.request-modal__subtitle {
  margin: 0 0 14px;
  color: #34506b;
}

.request-modal__form {
  display: grid;
  gap: 10px;
}

.request-modal__field {
  display: grid;
  gap: 6px;
}

.request-modal__field span {
  color: #002246;
  font-size: 14px;
  font-weight: 700;
}

.request-modal__field input,
.request-modal__field textarea {
  width: 100%;
  border: 1px solid rgba(0, 34, 70, 0.2);
  border-radius: 8px;
  padding: 11px 12px;
  font-size: 15px;
  color: #002246;
  background: #f8fbff;
  outline: none;
}

.request-modal__field textarea {
  resize: vertical;
  min-height: 110px;
}

.request-modal__field input:focus,
.request-modal__field textarea:focus {
  border-color: #00b9ff;
  box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.13);
}

.request-modal__submit {
  height: 48px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.request-modal__submit:disabled {
  opacity: 0.7;
  cursor: default;
}

.request-modal__status {
  margin: 2px 0 0;
  color: #167e43;
  font-size: 14px;
}

.request-modal__status--error {
  color: #b02b2b;
}

@media (max-width: 600px) {
  .request-modal__dialog {
    padding: 14px;
  }

  .request-modal__title {
    font-size: 22px;
    padding-right: 30px;
  }
}
</style>
