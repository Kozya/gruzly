<template>
  <header class="header">
    <!-- Верхняя полоса: телефоны, мессенджеры, язык -->
    <div class="header__top">
      <div class="header__container">
        <div class="header__phones">
          <a class="header__phone" href="tel:+380982304083">
            <span class="header__phone-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
              </svg>
            </span>
            +38 098 230 40 83
          </a>
          <a class="header__phone" href="tel:+380660299805">
            <span class="header__phone-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
              </svg>
            </span>
            +38 066 029 98 05
          </a>
        </div>

        <div class="header__socials">
          <a class="header__social header__social--whatsapp" href="https://wa.me/380982304083" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a class="header__social header__social--telegram" href="https://t.me/+380982304083" target="_blank" rel="noopener" aria-label="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a class="header__social header__social--viber" href="viber://chat?number=+380982304083" target="_blank" rel="noopener" aria-label="Viber">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"/>
            </svg>
          </a>
        </div>

        <div class="header__lang">
          <a class="header__lang-item header__lang-item--active" href="/ru">RU</a>
          <span class="header__lang-divider">/</span>
          <a class="header__lang-item" href="/ua">UA</a>
        </div>
      </div>
    </div>

    <!-- Основная строка: логотип + навигация -->
    <div class="header__main">
      <div class="header__container">
        <a class="header__logo" href="/">
          <span class="header__logo-icon">
            <NuxtImg class="header__logo-image" src="/gruzly-logo.png" alt="Gruzly" loading="lazy" />
          </span>
        </a>

        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a class="header__nav-link" href="#services">Услуги</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#guarantees">Гарантии</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#calculation">Расчет стоимости</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#about">О компании</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#trust">Преимущества</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#impossible">Задачи</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#footer">Контакты</a>
            </li>
          </ul>
        </nav>

        <button class="header__cta" type="button" @click="openRequestModal('header')">
          Заказать звонок
        </button>

        <button class="header__burger" aria-label="Открыть меню" @click="toggleMenu">
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
        </button>
      </div>

      <!-- Мобильное меню -->
      <div class="header__mobile-menu" :class="{ 'header__mobile-menu--open': menuOpen }">
        <ul class="header__mobile-nav-list">
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#services" @click="closeMenu">Услуги</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#warranty" @click="closeMenu">Гарантии</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#calculation" @click="closeMenu">Расчет стоимости</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#about" @click="closeMenu">О компании</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#advantage" @click="closeMenu">Преимущества</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#impossible" @click="closeMenu">Задачи</a>
          </li>
          <li class="header__mobile-nav-item">
            <a class="header__mobile-nav-link" href="#contacts" @click="closeMenu">Контакты</a>
          </li>
        </ul>
        <div class="header__mobile-phones">
          <a class="header__mobile-phone" href="tel:+380982304083">+38 098 230 40 83</a>
          <a class="header__mobile-phone" href="tel:+380660299805">+38 066 029 98 05</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const { openRequestModal } = useRequestModal()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style lang="less">
@import '@/assets/styles/variables.less';

// ─── Контейнер ───────────────────────────────────────────────────────────────
.header {
  width: 100%;
  font-family: @font-main;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 34, 70, 0.15);

  // ── Контейнер-обёртка ────────────────────────────────────────────────────
  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // ВЕРХНЯЯ ПОЛОСА
  // ══════════════════════════════════════════════════════════════════════════
  &__top {
    background: @color-top-bg;
    padding: 8px 0;
  }

  // ── Телефоны ─────────────────────────────────────────────────────────────
  &__phones {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
  }

  &__phone {
    display: flex;
    align-items: center;
    gap: 6px;
    color: @color-top-text;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color @transition;

    &:hover {
      color: @color-white;
    }
  }

  &__phone-icon {
    display: flex;
    align-items: center;
    color: @color-accent;
  }

  // ── Соцсети ──────────────────────────────────────────────────────────────
  &__socials {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: @color-white;
    text-decoration: none;
    transition: transform @transition, opacity @transition;

    &:hover {
      transform: scale(1.15);
      opacity: 0.9;
    }

    &--whatsapp { background: @color-whatsapp; }
    &--telegram { background: @color-telegram; }
    &--viber    { background: @color-viber; }
  }

  // ── Переключатель языка ───────────────────────────────────────────────────
  &__lang {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__lang-divider {
    color: @color-top-text;
    font-size: 13px;
  }

  &__lang-item {
    color: @color-top-text;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 3px;
    transition: color @transition;

    &:hover {
      color: @color-white;
    }

    &--active {
      color: @color-accent;
      font-weight: 700;
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // ОСНОВНАЯ СТРОКА
  // ══════════════════════════════════════════════════════════════════════════
  &__main {
    background: @color-white;
    box-shadow: 0 6px 16px rgba(0, 34, 70, 0.08);
  }

  // ── Логотип ───────────────────────────────────────────────────────────────
  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
    padding: 4px 0;
  }

  &__logo-icon {
    display: flex;
    align-items: center;
    max-width: 220px;
  }

  &__logo-image {
    display: block;
    width: 100%;
    height: auto;
    max-height: 54px;
  }

  // ── Навигация ─────────────────────────────────────────────────────────────
  &__nav {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: 4px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__nav-item {
    position: relative;
  }

  &__nav-link {
    display: block;
    padding: 22px 12px;
    color: @color-dark;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    border-radius: 6px;
    transition: color @transition, background-color @transition;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 14px;
      right: 14px;
      height: 1.5px;
      background: @color-primary;
      transform: scaleX(0);
      transition: transform @transition;
    }

    &:hover {
      color: @color-primary;
      background: rgba(0, 185, 255, 0.06);

      &::after {
        transform: scaleX(1);
      }
    }
  }

  // ── CTA-кнопка ────────────────────────────────────────────────────────────
  &__cta {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 248px;
    height: 45px;
    background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
    color: @color-white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    overflow: hidden;
    transition: opacity 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    box-shadow: 0 3px 12px rgba(255, 103, 83, 0.35);

    &:hover {
      opacity: 1;
      box-shadow: 0 5px 18px rgba(255, 103, 83, 0.5);
    }
  }

  // ── Бургер-кнопка (мобильная) ─────────────────────────────────────────────
  &__burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    flex-shrink: 0;
  }

  &__burger-line {
    display: block;
    width: 100%;
    height: 2px;
    background: @color-dark;
    border-radius: 2px;
    transition: background @transition;
  }

  &__burger:hover &__burger-line {
    background: @color-primary;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // МОБИЛЬНОЕ МЕНЮ
  // ══════════════════════════════════════════════════════════════════════════
  &__mobile-menu {
    display: none;
    flex-direction: column;
    background: @color-white;
    border-top: 1px solid rgba(0, 34, 70, 0.1);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;

    &--open {
      max-height: 500px;
    }
  }

  &__mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 8px 0;
  }

  &__mobile-nav-link {
    display: block;
    padding: 12px 20px;
    color: @color-dark;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 34, 70, 0.06);
    transition: background @transition, color @transition;

    &:hover {
      background: rgba(0, 185, 255, 0.06);
      color: @color-primary;
    }
  }

  &__mobile-phones {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 20px 16px;
  }

  &__mobile-phone {
    color: @color-primary;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      color: @color-dark;
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // АДАПТИВ
  // ══════════════════════════════════════════════════════════════════════════
  @media (max-width: 1024px) {
    &__nav {
      display: none;
    }

    &__cta {
      display: none;
    }

    &__burger {
      display: flex;
    }

    &__mobile-menu {
      display: flex;
    }

    &__container {
      justify-content: space-between;
    }

  }

  @media (max-width: 600px) {
    &__logo-icon {
      max-width: 170px;
    }

    &__top .header__container {
      flex-wrap: wrap;
      gap: 8px;
    }

    &__phones {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    &__phone {
      font-size: 13px;
    }
  }
}

// ─── Сброс отступов страницы ─────────────────────────────────────────────────
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
