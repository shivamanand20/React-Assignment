function Employee(){
    var firstname="Shivam ";
    var lastname="Anand";
    var empid=5001;
    var designation="Intern";
    var salary=50000;

    var returnobj={
        "getfirstname":function(){
            return firstname;
        },
        "getlastname":function(){
            return lastname;
        },
        "getempid":function(){
            return empid;
        },
        "getdesignation": function(){
            return designation;

        },
        "getsalary":function(){
            return salary;
        }
    };
    return returnobj;

}

var person = Employee();
console.log(person.getfirstname());
console.log(person.getlastname());
console.log(person.getempid());
console.log(person.getdesignation());
console.log(person.getsalary());