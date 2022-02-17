let inpt
document.getElementById("button").onclick = function(){
    
inpt = document.getElementById("name").value;
document.getElementById("one").innerText = "The Name is "+ inpt
console.log(inpt);

}
const student = {   
    name: inpt,
    set changeName(newName) {
        this.name = newName;
        document.getElementById("one").innerText = "The Name is "+newName
    }
};

console.log(student.changeName = '')

var input=setInterval(changevalue,10000)
    function changevalue() {
        inpt = Math.floor((Math.random() * 100)+1);
    
        document.getElementById("name").value = inpt;
        document.getElementById("one")
            .innerText = "value of variable is: " + inpt;
        console.log(inpt);
}