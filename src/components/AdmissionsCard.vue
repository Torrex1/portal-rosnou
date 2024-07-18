<template>
    <div class="card">
        <div class="card-header">
            <h3>Приемная компания 2024</h3>
        </div>
        <div class="card-body">
            <p>Подайте заявку прямо сейчас</p>
            <p>Так же Вы можете ознакомиться с информацией о поступлении и порядке приема 
                <a 
                    style="color: #007bff; text-decoration: none;" 
                    href="https://rosnou.ru/entrant/" target="_blank">здесь.
                </a>
            </p>
        </div>
        <div class="card-footer">
            <button>Подать заявку</button>
        </div>
    </div>
</template>


<style scoped>
.card {
  border: 1px solid rgb(204, 203, 203);
  border-top: 5px solid #007bff;
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(204, 203, 203);
  padding: 10px 0px 10px 20px;
}

.card-header > h3 {
  font-weight: unset;
}

.card-body {
  padding: 10px 0px 10px 20px;
  width: 85%;
  font-size: 18px;
}

.card-footer > button {
    margin: 0px 0px 10px 20px;
    padding: 10px;
    color: var(--white);
    background-color: #007bff;
    border: unset;
    border-radius: 5px;
    cursor: pointer;
}

.card-footer > button:hover {
    background-color: #0069d9;
}

</style>