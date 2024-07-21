<template>
    <h1>Вакцинация</h1>

    <div class="wrapper">
        <div class="card-attachment">
            <span>
                В соответствии с приказом 257-о от 21.06.2021г. "Об организации и проведении вакцинации сотрудников и 
                обучающихся университета" всем студентам и сотрудникам необходимо до 15.07.2021г. 
                пройти вакцинацию 1-м компонентом вакцины. С 01.09.2021г. в здание университета и общежития 
                будут допускаться только те сотрудники, которые полностью прошли вакцинацию от COVID-19.
                Для того чтобы вы могли получить доступ в здание университета, необходимо прикрепить документы 
                подтверждающие вакцинацию, либо документы подтверждающие медицинские противопоказания.
            </span>
        </div>

        <div class="vaccination-card">
            <div class="vaccination-card-header">
                <h3>Нет 18 лет</h3>
                <button>Изменить</button>
            </div>
            
            <div class="vaccination-card-body">
                <b>Действие до:</b> 
                03.04.2024
            </div>
        </div>

    </div>
</template>

<style scoped>
.wrapper {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-attachment {
    background-color: #cce5ff;
    padding: 15px;
    border-radius: 5px;
}

.vaccination-card {
    border: 1px solid var(--border-color);
    border-top: 3px solid var(--primary);
    border-radius: 5px;
}

.vaccination-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.vaccination-card-body {
    border-top: 1px solid var(--border-color);
    padding: 10px;
}

</style>