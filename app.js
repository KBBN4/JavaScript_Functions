console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function printOdds(count) {
//   if (count < 0) {
//     for (let i = -1; i >= count; i--) {
//       if (i % 2 != 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     for (let i = 1; i <= count; i++) {
//       if (i % 2 != 0) {
//         console.log(i);
//       }
//     }
//   }
// }

// printOdds(10);
// console.log("_______");
// printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let overAge = `Congrats ${userName}, you can drive!`;
  let underAge = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(underAge);
  } else {
    console.log(overAge);
  }
}
checkAge("Katherine", 16);
checkAge("Katherine", 15);

// Exercise3

console.log(" -------- ");

function plane(x, y) {
  if (x > 0 && y > 0) {
    return " Quadrant 1";
  } else if (x < 0 && y > 0) {
    return "Quadrant 2";
  } else if (x > 0 && y < 0) {
    return "Quadrant 3";
  } else if (x == 0 && y != 0) {
    return "Quadrant 4";
  } else if (x != 0 && y == 0) {
    return " y - Axis";
  } else if (x == 0 && y != 0) {
    return " X - Axis";
  }
  }

  console.log(plane( 5 ,1));
  console.log(plane ( 0,8));
  console.log(plane(-6,18));
  console.log (plane ( -1,-3));
