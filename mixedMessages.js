const knockKnock = "Knock Knock!!";
const homeOwner = "Who's There!?????";
const knocker = ['Owls say', 'Cabbage', 'Ida', 'A litle old lady', 'To', 'Spell', 'Smellmop', 'I am', 'Cash', 'Amish', 'Ya', 'Billy Bob Joe Penny', 'FBI.', 'Cow says', 'Says', 'Tank', 'Hike', 'Hatch','Europe' ]
//const response = `${knockGen(knocker)} whoo!!?????`
const joke = ['Yes. Yes, they do', 'You expect a cabbage to have a last name?', 'Surely, it’s pronounced Idaho?', 'Wow, I didn’t know you could yodel!', 'No, it’s to whom.', 'W-H-O.', 'Gross! No thanks!', 'Are you having an identity crisis?', 'No thanks, but I’d love some peanuts', 'Really, you’re a shoe? Uh, okay.', 'No thanks, I use Google.', 'Really? How many Billy Bob Joe Pennies do you know?', 'We\'re asking the questions here!', 'No, cow says, Mooooooo!', 'Says me, that’s who!', 'You’re welcome.', 'I didn’t know you liked Japanese poetry!', 'God bless you!', 'No, you’re a poo!', ]

const knockGen = arr => {
    knockerResponse = []
    knockerResponse.push(arr[Math.floor(Math.random() * 19)])
    return knockerResponse
    } 

const jokeGen = arr => {
    jokeResponse = [];
    jokeResponse.push(arr[Math.floor(Math.random() * 19)])
    return jokeResponse
}
console.log(knockKnock + ' ' + 
homeOwner + ' ' + knockGen(knocker) + ' ' + ' ' + jokeGen(joke));
// console.log(jokeGen(joke));

//FINAL PRODUCT
// console.log(knockKnock)
// console.log(homeOwner)
// console.log(knockGen(knocker))
// console.log(response)
// console.log(jokeGen(joke))


// console.log(knocker.length)
// console.log(Math.floor(Math.random() * 19))


