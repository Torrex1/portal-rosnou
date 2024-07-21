<template>
    <div class="card">
        <div class="card-header">
          <h3>Добро пожаловать</h3>
          <div class="card-badges">
              <div><i class="fa-solid fa-minus"></i></div>
              <div class="close"><i class="fa-solid fa-xmark"></i></div>
          </div>
        </div>

        <div class="card-body">
          <p>Добро пожаловать на новый портал Российского нового университета.
            Сайт еще находится в процессе разработки, но уже скоро здесь будет много всего.</p>
        </div>
    </div>
</template>

<style scoped>
.card {
  border: 1px solid rgb(204, 203, 203);
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
  padding: 10px 20px 10px 20px;
}

.card-header > h3 {
  font-weight: unset;
}

.card-body {
  padding: 10px 0px 10px 20px;
  width: 85%;
  font-size: 18px;
}
.card-badges {
  display: flex; 
  align-items: center;
  gap: 10px;
}
.card-badges > div {
  cursor: pointer;
}
</style>