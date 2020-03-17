const age = prompt("Сколько вам лет");

function isOldEnough(age) {
  if (age >= 18) {
    return true;
  }

  return false;
}

const message = isOldEnough(age) ? "Welcome" : "Bye";
alert(message);
