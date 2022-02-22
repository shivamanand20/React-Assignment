export default function EmployeeDetailsComponent(props) {
    return (
          <div className="card" style={{width: "18rem", margin: "20px", display: "inline-block"}}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"  className="card-img-top" alt={props.name} />
              <div className="card-body">
              { props.id % 2 !== 0 && <h5 className="card-title">{props.name}: Odd Id Value</h5>}
                  { props.id % 2 === 0 && <h5 className="card-title">{props.name}: Even Id Value</h5>}
                  <p className="card-text">{props.id} <b>{props.createdAt}</b> </p>
                  <input type="button" className="btn btn-primary" value="Go somewhere" />
              </div>
          </div>
    )
}