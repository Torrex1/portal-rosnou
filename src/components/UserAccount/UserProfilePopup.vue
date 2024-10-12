<script setup>
    const prop = defineProps({
        userIconSrc: String,
        userName: String,
    })

</script>

<template>
    <div class="user-profile">
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
</template>

<style scoped>
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
    
    background-color: #007bff;
    color: #fff;
    border-radius: 2px;
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