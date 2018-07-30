import React from "react";
import "./SocialMedia.css";

// class pour les boutons réseaux sociaux

class SocialMedia extends React.Component {
	render() {
		return (
			<div className="social-media d-flex justify-content-center align-items-center">
				<a className="btn  btn-social btn-twitter facebook d-flex justify-content-center align-items-center">
					<i className="fab fa-facebook fa-xs icon">
						<span className="ico-name">{"  "}PARTAGER</span>
					</i>
				</a>
				<a className="btn  btn-social btn-twitter twitter d-flex justify-content-center align-items-center">
					<i className="fab fa-twitter fa-xs icon">
						<span className="ico-name">{"  "}TWEET</span>
					</i>
				</a>
				<a className="btn  btn-social btn-twitter email d-flex justify-content-center align-items-center">
					<i className="fas fa-envelope fa-xs icon">
						<span className="ico-name">{"  "}EMAIL</span>
					</i>
				</a>
			</div>
		);
	}
}

export default SocialMedia;
