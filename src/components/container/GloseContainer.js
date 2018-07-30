import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../views/header/Header";
import BooksContainer from "./BooksContainer";
import books from "../../actions/booksAction";
import store from "../../store";
import SocialMedia from "../views/socialMedia/SocialMedia";

class GloseContainer extends Component {
	componentDidMount() {
		store
			.dispatch(books())
			.then(res => {})
			.catch(err => {
				alert("une erreur s'est produite, vérifier votre connexion");
			});
	}
	render() {
		return (
			<div>
				<header className="App">
					<Header />
				</header>
				<section>
					<SocialMedia />
				</section>
				<section>
					<BooksContainer bookList={this.props.bookList} />
				</section>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		bookList: store.bookState.bookList
	};
};

export default connect(mapStateToProps)(GloseContainer);
