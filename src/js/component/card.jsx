import React from "react";

const Card = () => {
    return(

        <div className="card" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?cs=srgb&dl=pexels-joao-cabral-1723948-3325720.jpg&fm=jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-dark justify-content-center d-flex">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;