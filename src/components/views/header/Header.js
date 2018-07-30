import React from "react";
import "./Header.css";

// class header image

class Header extends React.Component {
	render() {
		return (
			<div className="header d-flex justify-content-center align-items-center">
				<img src={"/header.jpeg"} className="img-fluid image" alt="header" />
				<h1 className="title">Free Books</h1>
			</div>
		);
	}
}

export default Header;
