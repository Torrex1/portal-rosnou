<template>
    <div class="popup-wrapper">
        <h2>Test</h2>

        <span></span>
        <div class="popup-body">

            <label>Введите дату</label>
            <input type="text">

            <label>Комментарий</label>
            <textarea></textarea>
        </div>

        <div class="poput-footer">
            <button>Закрыть</button>
            <button>Сохранить</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


let poputProperties = reactive([]);



</script>

<style scoped>
.popup-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
    max-height: 840px;
    border: 1px solid red;
}
span {
    background-color: #cce5ff;
    padding: 15px;
    border-radius: 5px;
}

.popup-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.poput-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
}

.poput-footer > button {
    padding: 10px;
    cursor: pointer;
}
</style>