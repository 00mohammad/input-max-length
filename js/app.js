const input = document.querySelector("input");
const remaining = document.querySelector(".max-length");
const button = document.querySelector(".btn");
const inputMaxLength = +input.getAttribute("maxlength");

input.addEventListener("input", () => {
  remaining.textContent = inputMaxLength - input.value.length;
});
button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("شماره خود را وارد کنید");
  } else if (input.value.length < inputMaxLength) {
    alert("شماره باید ۱۱ رقم باشد");
  } else {
    alert("شماره شما با موفقیت ثبت شد ✅");
  }
});
