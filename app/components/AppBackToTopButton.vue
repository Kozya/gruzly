<template>
  <a
    class="call-button"
    href="tel:+380938474810"
    aria-label="Позвонить +38 093 847 48 10"
  >
    <span aria-hidden="true">☎</span>
  </a>
</template>

<style scoped lang="less">
.call-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(255, 103, 83, 0.35);
  border-radius: 50%;
  background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 103, 83, 0.35);
  z-index: 120;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.call-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(255, 103, 83, 0.5);
}

@media (max-width: 600px) {
  .call-button {
    right: 14px;
    bottom: 14px;
    width: 46px;
    height: 46px;
    font-size: 22px;
  }
}
</style>
