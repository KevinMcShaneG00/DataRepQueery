//make an array
const ages = [25, 31, 42, 77];

//create function to check items in ages[] and multiply *2 if below 70
//assign the function to a variable
let partd = ages.map((item) => {
    if (item < 70) {
        return item * 2;
    }
    else {
        return item;
    }
});

//log the variable to see results
console.log(partd);