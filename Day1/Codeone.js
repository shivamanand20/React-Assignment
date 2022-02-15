var empName = "TechnoFunnel";

function functionOne() {
    var empName = "Shivam";
    
    function innerFunction() {
        console.log(empName)
        console.log(window.empName)

        function innerInnerFunction() {
            alert("Anand")
        }

        innerInnerFunction();
    }

    innerFunction()
}

functionOne()

console.log(empName);