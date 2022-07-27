import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import Data from "./data";

const cards = Data.map(item => {
	return <Cards
		key={item.id}
		item={item}

	/>
})

const Home = () => {
	return (
		<div>
			<Navbar />
			{cards}
			<Footer />
		</div>
	);
};

export default Home;
