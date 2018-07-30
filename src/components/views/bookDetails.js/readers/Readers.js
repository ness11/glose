import React from "react";
import { connect } from "react-redux";
import "./Readers.css";

// display les lecteurs

class Readers extends React.Component {
	render() {
		let readers = [];
		// recuperer tous les livres de l'api livre
		this.props.readers.map(bookReaderList => {
			//si l'id du livre correspond a l'id de l'api lecteurs les pusher dans un tableau
			if (this.props.id === bookReaderList.id) {
				return bookReaderList.readers.map((reader, index) => {
					return readers.push(
						<a href="" key={index}>
							<img
								src={reader.image}
								className="avatar d-flex flex-row justify-content-between"
								alt="avatar"
							/>
						</a>
					);
				});
			}
		});
		readers = readers.slice(0, 3);
		return (
			<div className="d-flex flex-row justify-content-between readers-buttons">
				<div className="d-flex flex-row ">{readers}</div>
				{/* changer la couleur du bouton en fonction des données */}
				{this.props.readers.length > 0 ? (
					<button
						type="button"
						className="btn btn-outline-success btn-sm d-flex justify-content-center align-items-center"
					>
						LIRE
					</button>
				) : (
					<button
						type="button"
						className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center"
					>
						-
					</button>
				)}
			</div>
		);
	}
}
const mapStateToProps = function(store) {
	return {
		readers: store.readersState.readers
	};
};

export default connect(mapStateToProps)(Readers);
