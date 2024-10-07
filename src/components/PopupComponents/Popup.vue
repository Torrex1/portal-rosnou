<script setup>
import SelectionButton from './SelectionButton.vue';

const emit = defineEmits(['toggle_popup']);

</script>

<template>
    <div @click="emit('toggle_popup')" class="popup">
        <div @click.stop class="popup-wrapper">
            <h2>Выберите один из пунктов (Впоследствии можно будет редактировать)</h2>

            <SelectionButton />
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.382);
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid red
}

.popup-wrapper {
    position: fixed;
    background-color: #fff;   
    width: 20%;
    height: auto;
    z-index: 20;
    padding: 10px 15px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

h2 {
    text-align: center;
}
</style>