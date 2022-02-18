export default function ConceptofInterpolation() {



    var details = {
        name: "Mayank",
        avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
        createdAt: "Today",
        id: 1
    }

    return (
        <div>
            <img src={details.avatar} alt={details.name} />
            <h1>User Name is: {details.name}</h1>
            <p>
                <span>The User Selected has the Following Id: {details.id}.</span>
                <span>The User was created On: {details.createdAt}</span>
            </p>
        </div>
    )
    }
   
