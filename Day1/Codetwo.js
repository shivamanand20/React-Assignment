function getData(a, b) {
    debugger;
    console.log("Hello World...")
    for(var i = 0; i< arguments.length; i++ ) {
        console.log(arguments[i])
    }
}

getData("Shivam");

getData("Shivam", 10, 30);

getData("Shivam", "30");

debugger;
console.log(window.a)


function getDataAge(userAge, userSalary) {
    debugger;
    console.log("Value is " + userAge)
}

getDataAge()