//import "../styles/EmployeeDetailsComponentStyle.css";

export default function EmployeeDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }, headerStyling: {
        
        }, buttonStyle: {
            color: "red"
        }
    };

    return (
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                    { props.id % 2 !== 0 && <h5 style={styleObject.headerStyling} className="card-title">{props.name}: </h5>}
                    { props.id % 2 === 0 && <h5 style={styleObject.headerStyling} className="card-title">{props.name}: </h5>}
                    <div>
                        <p className="card-text">{props.id} <b>{props.createdAt}</b> </p>
                    </div>
                    <input type="button" style={styleObject.buttonStyle} className="btn btn-primary" value="Go somewhere" />
                  </div>
              </div>
          </div>
    )
}