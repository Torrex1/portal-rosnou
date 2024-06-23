<template>
    <div class="menu-container">
        <div class="menu-content">
            <div class="menu-header">
                <img style="width: 50px ; height: 50px;" src="../assets/img/rosnou.svg" alt="logo">
                <span>Rosnou Portal</span>
            </div>

            <div class="menu-main">
                <ul>
                    <li>Общие страницы</li>
                    <li>
                        <i class="fa-solid fa-shield-virus"></i>
                        <span>Вакцинация</span>
                    </li>
                    <li>Студенту</li>
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
    }

    .menu-header span {
        font-size: 25px;
    }

</style>