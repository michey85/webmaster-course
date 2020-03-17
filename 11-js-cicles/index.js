document.write("<h1>Hello from JS</h1>");

// const age = prompt("Сколько вам лет?");

// let access = age > 18 ? "Доступ разрешен" : "Доступ запрещен";

// if (age > 18) {
//   access = "Доступ разрешен";
// } else if (age < 18 && age >= 16 && age != 0) {
//   access = "Доступ запрещен. Приходи через пару лет";
// } else {
//   access = "Доступ запрещен.";
// }

// document.write(`<h4>${access}</h4>`);

// циклы
// let num = 0;
// let age = prompt("Сколько вам лет?");

// while (true) {
//   if (age > 0 && age < 100) {
//     break;
//   }

//   age = prompt("Некорректный ввод. Сколько вам лет?");
// }

for (let i = 0; i < 10; i++) {
  document.write(`<h4>${i}</h4>`);
}
