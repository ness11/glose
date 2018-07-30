import React, { Component } from "react";
import store from "../../store";
import { connect } from "react-redux";
import BookDetails from "../views/bookDetails.js/BookDetails";
import readers from "../../actions/readersActions";

// container pour recuperer les livres

class BooksContainer extends Component {
	state = {
		ids: []
	};

	render() {
		let bookList = [];
		let ids = [];

		// boucle pour avoir chaque livre

		this.props.bookList.map((book, key) => {
			ids.push(book.id);
			return bookList.push(
				<div className="" key={key}>
					<BookDetails book={book} />
				</div>
			);
		});
		store
			.dispatch(readers(ids))
			.then(res => {})
			.catch(err => {
				alert("une erreur s'est produite, vérifier votre connexion");
			});

		return (
			<div className="container">
				<div className=" row col-sm d-flex justify-content-center">{bookList}</div>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
	return {};
};

export default connect(mapStateToProps)(BooksContainer);
