const date_btn = document.querySelector(".date_btn");
const time_btn = document.querySelector(".time_btn");
const reset_btn = document.querySelector(".reset_btn");

const date = document.querySelector(".date");
const time = document.querySelector(".time");

const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const day = ("0" + (new Date().getDay() - 1)).slice(-2);
const hour = ("0" + new Date().getHours()).slice(-2);
const min = ("0" + new Date().getMinutes()).slice(-2);

date_btn.addEventListener("click", () => {
  date.textContent = `${year}年${month}月${day}日`;
});

time_btn.addEventListener("click", () => {
  time.textContent = `${hour}：${min}`;
});
