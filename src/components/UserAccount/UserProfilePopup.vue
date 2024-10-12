<script setup>
    const prop = defineProps({
        userIconSrc: String,
        userName: String,
    })
    
    const emit = defineEmits(['toggle_popup']);
    
</script>

<template>
    <div class="modal-shadow" @click="emit('toggle_popup')">

            <div class="user-profile" @click.stop>
                <div class="main-info">
                    <img :src="userIconSrc" alt="user icon">
                    <div>
                        <span class="user-name">{{ userName }}</span>
                        <span class="user-email">example@example.com</span>
                    </div>
                </div>
                <div class="footer-container">
                    <div class="footer-content">
                        <button>
                            <img src="@/assets/img/shutdown.svg" alt="">
                            <span>Выход</span>
                        </button>
                    </div>
                </div>
            </div>  

    </div>
    
</template>

<style scoped>

.modal-shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.user-profile {
    /* min-width: auto; */
    padding: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: fixed;
    right: 10px;
    top: 65px;
    
    background-color: #007bff;
    color: #fff;
    border-radius: 2px;
    z-index: 20;
}
.main-info {
    display: flex;
    gap: 5px;
}

.main-info img {
    width: 70px;
    height: 70px;
}

.main-info div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.footer-container {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-container button {
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    border: 1px solid #eceaea;
    border-radius: 5px;
}

button:hover {
    opacity: 0.9;
}

button img {
    width: 20px;
    height: 20px;
}

    
</style>