<script setup>
    import WelcomeCard from '../components/WelcomeCard.vue'
    import AdmissionsCard from '../components/AdmissionsCard.vue'
</script>

<template>
    <h1>Главная</h1>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        <WelcomeCard />
        <AdmissionsCard />
    </div>
</template>