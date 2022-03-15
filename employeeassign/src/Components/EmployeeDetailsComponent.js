export default function EmployeeDetailsComponents(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }
    };
    
    return (
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                      <div>
                        <p className="card-text"><b>Employee id= {props.employeeid} </b> <br></br> <b> employeename: {props.employeename}</b> <br></br><b>salary ={props.salary}</b> <br></br> <b>Employee age: {props.age}</b> </p>
                    </div>
                    <input type="button" id={props.employeeid} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                    <input type="button" style={{margin: "20px"}} id={props.employeeid} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
                  </div>
              </div>
          </div>
    )
}
