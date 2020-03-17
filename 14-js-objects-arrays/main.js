const person = {
  firstName: "Mikhail",
  lastName: "Nepomnyashchiy",
  age: 35,
  city: "Moscow",
  married: false,
  languages: ["English", "Spanish"]
};

person.age = 36;
console.log(person.age);
person.yearOgBirth = 1985;
console.log(person.yearOgBirth);

// console.log(person.firstName, person["lastName"], person.languages.english);

for (let key in person) {
  console.log(key, person[key]);
}

const nums = [1, 2, 3, 4];
// console.log(nums[3]);

// nums.push(9);
console.log(nums);

console.log(nums.length);
