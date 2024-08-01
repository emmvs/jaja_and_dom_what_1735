// 👻 Declaring Variables
// - No reassignment, but you can remove/add elements
const sports = ['skateboard', 'kung fu', 'football', 'swimming'];
// - Reassignment
let total = 0;
let counter = 0;

// 👻 Datatypes
// - Strings
'Emma'
// - Numbers
42
42.5
// - Arrays
const fruits = ['banana', 'cherries'];
// - Objects (== Hash)
const teacher = {
  firstName: "Emma",
  middleName: "Anna Agneta",
  lastName: "Rünzel"
}
// - NO SYMBOLS IN JS (Just Strings)

// 👻 If Else Statements
const age = 16;

if (age >= 16) {
  console.log('You can drink whuuu 🎉')
} else if (age == 15) {
    console.log('You can not drink yet but very soon ⏰')
} else {
  console.log('no drinking for you, sir 👻')
}

// 👻 Functions (== Methods in Ruby)
// - Arrow Function
() => {};
// - Arrow Function w/ a name
const addition = (param1, param2) => {
  console.log('Doing very difficult calculation #einstein')  
  return param1 + param2;
};
// - Calling the function by its name
addition(1, 2)

// JS == Think in Steps
// - Select the list
const list = document.querySelector('ul');
// - Attach the names to the list
list.insertAdjacentHTML("beforeend", "<li>Navid</li>");
list.insertAdjacentHTML("beforeend", "<li>Frida</li>");
list.insertAdjacentHTML("beforeend", "<li>Josephine</li>");
