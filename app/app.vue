<script setup lang="ts">
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />

    <template v-if="isHomePage">
      <AppHeader />
      <AppHeroSection />
      <AppBusinessSection />
      <AppFleetSection />
      <AppServicesSection />
      <AppAdditionallySection />
      <AppGuaranteesSection />
      <AppTimeSection />
      <AppTrustSection />
      <AppCalculationSection />

      <AppDeliverySection />
      <AppAboutSection />
      <AppImpossibleSection />
      <AppFooter />
      <AppBackToTopButton />
      <AppRequestModal />
    </template>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
