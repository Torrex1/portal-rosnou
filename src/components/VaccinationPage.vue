<template>
    <h1>Вакцинация</h1>

    <div class="wrapper">
        <div class="card-attachment">
            <span>
                В соответствии с приказом 
                <a 
                    target="_blank" 
                    style="color: #00356e; font-weight: bold;" 
                    href="https://rosnou.ru/uploads/file/6/1/8/618d378be3b722d46260b12d2406d375.pdf">257-о от 21.06.2021г.
                </a> 
                    "Об организации и проведении вакцинации сотрудников и 
                    обучающихся университета" всем студентам и сотрудникам необходимо до 15.07.2021г. 
                    пройти вакцинацию 1-м компонентом вакцины. <br> С 01.09.2021г. в здание университета и общежития 
                    будут допускаться только те сотрудники, которые полностью прошли вакцинацию от COVID-19.
                    <br>Для того чтобы вы могли получить доступ в здание университета, необходимо прикрепить документы 
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

.vaccination-card-header > button {
    padding: 10px;
    background-color: var(--primary);
    color: var(--white);
    border: unset;
    border-radius: 5px;
    cursor: pointer;
}

.vaccination-card-header > button:hover {
    background-color: #0373ec;
}

.vaccination-card-body {
    border-top: 1px solid var(--border-color);
    padding: 10px;
}

</style>