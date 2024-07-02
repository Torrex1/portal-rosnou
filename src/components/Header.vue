<script setup>
    const emit = defineEmits(['openMenu']);
</script>

<template>
    <header>
        <ul class="headerList">
            <li style="cursor: pointer;">
                <i @click="emit('openMenu')" class="fa-solid fa-bars"></i>
            </li>
            <div class="right-side-list">
                <li style="cursor: pointer;">
                    <i class="fa-solid fa-expand"></i>
                </li>

                <li class="userInfo">
                    <img class="userIcon" src="../assets/img/user.jpg" alt="icon">
                    <span>Тарикулиев Рустам</span>
                </li>
            </div>
           
        </ul>
    </header>
</template>

<style scoped>

.headerList {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  padding: 20px 40px;
  align-items: center;
  max-height: 70px;
}

.userInfo {
    cursor: pointer;  
    display: flex; 
    align-items: center; 
    gap: 10px;
}

.userIcon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
}

.right-side-list {
  display: flex;
  align-items: center;
  gap: 20px;
}

.headerList > li:first-child:hover {
    color: rgb(30, 29, 29);
}

.right-side-list > li:first-child:hover {
    color: rgb(45, 43, 43);
}
</style>