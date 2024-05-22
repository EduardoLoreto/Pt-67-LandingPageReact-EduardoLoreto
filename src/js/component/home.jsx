import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
import Card from "./card";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<div className="container-fliud justify-content-center">

			<div>
				<Navbar/>
			</div>
			
			<div className="container-fluid justify-content-center"> 
				<div className="container text-start bg-secondary mt-2 mb-2 bg-opacity-10">
					<Jumbotron/>
				</div>

				<div className="row-fluid container-fluid justify-content-center text-center d-flex gap-5 mt-2 mb-2 col-lg-12 col-md-12 col-sm-12">
					<Card/>
					<Card/>
					<Card/>
					<Card/>				
				</div>
			</div>

			<div>
				<Footer/>				
			</div>			
			
		</div>
	);
};

export default Home;
