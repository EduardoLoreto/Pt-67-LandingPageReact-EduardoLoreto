import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
import Card from "./card";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<div className="container-fliud">

			<div>
				<Navbar/>
			</div>
			
			<div className="container-fluid text-start mt-5 bg-secondary gap-5 mt-5 mb-5 bg-opacity-10 d-flex">
				<Jumbotron/>
			</div>

			<div className="row container-fluid justify-content-center d-flex gap-5 mt-5 mb-5 col-lg-12 col-md-3">
				<Card/>
				<Card/>
				<Card/>
				<Card/>				
			</div>

			<div>
				<Footer/>				
			</div>			
			
		</div>
	);
};

export default Home;
