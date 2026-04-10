<template>
  <footer class="footer">
    <section class="footer__section" id="footer">
      <div class="footer__container">
        <div class="footer__grid">
          <div class="footer__left">
            <p class="footer__copyright">© ГРУЗОВОЕ ТАКСИ «GRUZLY». Все права защищены, 2023 г.</p>
            <p class="footer__address">г. Днепр</p>

            <ul class="footer__list">
              <li>Все права защищены</li>
              <li>Copyright ©{{ currentYear }} «Kozya» - г. Днепр</li>
            </ul>

            <NuxtLink to="/politics" class="footer__policy">Политика конфиденциальности</NuxtLink>
          </div>

          <div class="footer__right">
            <a href="tel:+380967171371" class="footer__phone">+38 (096) 71-71-371</a>
            <a href="tel:+380507171371" class="footer__phone">+38 (050) 71-71-371</a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.footer {
  font-family: @font-main;

  &__section {
    background: #002246;
    color: #d8e9fb;
    padding: 28px 0 34px;
  }

  &__container {
    max-width: @container-width;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: start;
  }

  &__copyright,
  &__address {
    margin: 0 0 8px;
    line-height: 1.45;
  }

  &__address {
    color: #fff;
    font-weight: 700;
  }

  &__list {
    margin: 0 0 12px;
    padding: 0 0 0 18px;
    display: grid;
    gap: 6px;
    line-height: 1.4;
  }

  &__policy {
    color: #7fd4ff;
    text-decoration: none;
    font-weight: 700;
  }

  &__policy:hover {
    text-decoration: underline;
  }

  &__right {
    display: grid;
    gap: 10px;
    justify-items: end;
  }

  &__phone {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 800;
  }

  &__phone:hover {
    color: #7fd4ff;
  }
}

@media (max-width: 900px) {
  .footer {
    &__grid {
      grid-template-columns: 1fr;
    }

    &__right {
      justify-items: start;
    }

    &__phone {
      font-size: 20px;
    }
  }
}
</style>
