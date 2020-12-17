const knockKnock = "Knock Knock!!";
const homeOwner = "Who's There!?????";
const theKnocker = ['Owls say', 'Cabbage', 'Ida', 'A litle old lady', 'To', 'Spell', 'Smellmop', 'I am', 'Cash', 'Amish', 'Ya', 'Billy Bob Joe Penny', 'FBI.', 'Cow says', 'Says', 'Tank', 'Hike', 'Hatch','Europe' ]
const response = `${theKnocker} whoo!!?????`

const knockGenerator = arr => {
    arr[Math.floor(arr.length * Math.random() * 10)]
    }
console.log(knockGenerator(theKnocker))













// let i = 'hello world'
// let g = " this is my first console test!!"
// console.log(i + g)
