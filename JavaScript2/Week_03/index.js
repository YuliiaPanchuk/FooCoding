// 1.1
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

// My solution
const doubles = myNumbers.filter(n => { return n % 2 !== 0 }).map(num => { return num * 2 });
console.log(doubles) // ==> [2, 6]

// 1.2
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const sumHours = monday.concat(tuesday);
const hours = sumHours.map(h => { return h.duration / 60 }).filter(hrs => { return hrs >= 2 })
const totalEarned = hours.reduce((acc, curr) => { return acc + curr }) * 20;

console.log(`Earned: €${totalEarned}`)

/*
const totalEarned = monday.concat(tuesday)
  .map(h => { return h.duration / 60 })
  .filter(hrs => { return hrs >= 2 })
  .map(hr => { return hr * 20 })
  .reduce((acc, curr) => { return acc + curr });

console.log(totalEarned); => 160 */