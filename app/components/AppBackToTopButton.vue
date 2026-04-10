<template>
  <button
    v-show="isVisible"
    class="back-to-top"
    type="button"
    aria-label="Вернуться к началу страницы"
    @click="scrollToTop"
  >
    <span aria-hidden="true">↑</span>
  </button>
</template>

<script setup lang="ts">
const isVisible = ref(false)

function updateVisibility() {
  const businessSection = document.getElementById('business')

  if (!businessSection) {
    isVisible.value = window.scrollY > 600
    return
  }

  const triggerPoint = businessSection.offsetTop + businessSection.offsetHeight
  isVisible.value = window.scrollY >= triggerPoint
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
  window.addEventListener('resize', updateVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', updateVisibility)
})
</script>

<style scoped lang="less">
.back-to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(255, 103, 83, 0.35);
  border-radius: 50%;
  background: linear-gradient(90deg, #ff6753 0.26%, #ff8f50 99.7%);
  color: #fff;
  font-size: 26px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 103, 83, 0.35);
  z-index: 120;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(255, 103, 83, 0.5);
}

@media (max-width: 600px) {
  .back-to-top {
    right: 14px;
    bottom: 14px;
    width: 46px;
    height: 46px;
    font-size: 22px;
  }
}
</style>
