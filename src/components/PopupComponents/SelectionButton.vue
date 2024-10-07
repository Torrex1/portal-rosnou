<script setup>
import { reactive } from 'vue';

let button_title_list = reactive([
    'Переболел', "Имеются противопоказания", "Вакцинировался полностью", "Ревакцинировался", "Иностранный сертификат", 
    "Вакцинировался 1-м компонентом", "Буду вакцинироваться", "Не буду вакцинироваться", "Нет 18-ти лет"
]);
</script>

<template>
    <button
        v-for="title in button_title_list">{{ title }}
    </button>
</template>


<style scoped> 
button {
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
}

button:hover {
    background-color: #e6e6e6;
}

button:focus-visible {
    background-color: #d9d9d9;
    outline: none;
    border: 1px solid red;
    
}
</style>
