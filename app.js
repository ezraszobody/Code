// REMEMBER: OBJECTS USE {}
// REMEMBER: ARRAYS USE []

const views = [134, 86730, 1290, 13, 10, 15, 39, 68]

const ezra = {
    email: 'kids@szobody.com',
    firstName: 'Ezra',
    lastName: 'Szobody',
    born: '2011',
    died: 'N/A',
    city: 'Asheville',
    state: 'North Carolina'
}

const { email, firstName, lastName, born, died, city, state } = ezra;

// example of destructuring an object


function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

//basic sum function using reduce and rest (...)



const total = views.reduce((total, view) => {
    return total + view;
})

// Above is how to get the total of views using a reduce function

// let total = 0
// for (let view of views) {
//     total += price
// }
// console.log(total)

// above is how to get the total using a different way

const maxViews = views.reduce((max, view) => {
    if(view > max) {
        return view;
    }
    return max; 
})

// above is how to get the video with max views,
// the same can be done with the min by flipping the > to a <

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

//  Default params to roll die that defaults to 6

const maxVIEWS = Math.max(...views);

// above is a MUCH EASIER way to get the video with max views
// the same can be done with Math.min()

