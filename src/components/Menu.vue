<script setup>
    const emit = defineEmits(['closeMenu']);
</script>

<template>
    <div class="menu-container">
        <div @click="emit('closeMenu')" style="width: 100%; height: 100%;"></div>
        <div class="menu-content">
            <div class="menu-header">
                <Router-Link to="/" style="display: flex; gap: 7px;">
                    <img style="width: 35px ; height: 35px;" src="../assets/img/rosnou.svg" alt="logo">
                    <span>Rosnou Portal</span>
                </Router-Link>
                
                <img @click="emit('closeMenu')" style="width: 20px ; height: 20px;" src="../assets/img/arrow-right.svg" alt="arrow">
            </div>

            <div class="menu-main">
                <ul>
                    <li>Общие страницы</li>
                    <div class="general-sections">
                        <li>
                            <i class="fa-solid fa-shield-virus"></i>
                            <Router-Link to="/vaccination">
                                <span>Вакцинация</span>
                            </Router-Link>
                            
                        </li>
                    </div>
                    
                    <li>Студенту</li>
                    <div class="student-sections">
                        <li>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>Электронное расписание</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-clipboard"></i>
                            <span>Успеваемость</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span>Учебная деятельность</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-briefcase"></i>
                            <span>Портфолио</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-headphones"></i>
                            <span>Перейти в конференцию</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            <span>Почта</span>
                        </li>
                    </div>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .menu-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.382);
        z-index: 10;
    }

    .menu-content {
        background-color: #343a40;
        color: var(--ligth-gray);
        width: 250px;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 20;
        padding: 10px 15px;     
    }

    .menu-header {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .menu-header span {
        font-size: 23px;
    }

    .menu-main > ul {
        margin-top: 25px; 
        display: flex; 
        flex-direction: column; 
        gap: 20px;
    }

    .general-sections{
        padding-left: 10px;
        cursor: pointer;
    }

    .student-sections {
        display: flex;
        flex-direction: column;
        gap: 25px; 
        padding-left: 10px;
    }

    .student-sections li {
        cursor: pointer;
    }

    /* .student-sections li:hover {
        background-color: red;
    } */

    i {
        margin-right: 5px;
    }
    
    li span:hover {
        color: #afb4b4;
    }

    li span:se {
        color: #0bcece;
    }

</style>