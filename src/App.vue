<script setup>
  import { ref } from 'vue'
  import Header from './components/Header.vue'
  import Menu from './components/Menu.vue'

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
</template>
