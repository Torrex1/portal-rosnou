<script setup>
  import { ref } from 'vue'
  import Header from './components/Header.vue'
  import Menu from './components/Menu.vue'
  import WelcomeCard from './components/WelcomeCard.vue'
  import AdmissionsCard from './components/AdmissionsCard.vue'

  const sidebarOpen = ref(false);
  const openMenu = () => {
    sidebarOpen.value = !sidebarOpen.value;
  }
  const closeMenu = () => {
    sidebarOpen.value = false;
  }
</script>

<template> 
  <Menu v-if="sidebarOpen" @closeMenu="closeMenu" />
  <Header @openMenu="openMenu" />

  <div style="padding: 1.5% 2.5%;  display: flex; flex-direction: column;">
    <h1>Главная</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
      <WelcomeCard />
      <AdmissionsCard />
    </div>
  </div>
  
</template>

<style scoped>

</style>
