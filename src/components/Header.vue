<template>
    <header>
        <ul class="headerList">
            <li>
                <i class="fa-solid fa-bars"></i>
            </li>
            <div class="right-side-list">
                <li>
                    <i class="fa-solid fa-expand"></i>
                </li>
                <li>
                    <img scr="assets/img/userImg.jpg" alt="userImg" class="avatar"></img>
                    <span>Тарикулиев Рустам</span>
                </li>
            </div>
           
        </ul>
    </header>
</template>

<style scoped>
/* .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  align-items: center;
} */

.headerList {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  padding: 10px 20px;
  cursor: pointer;
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