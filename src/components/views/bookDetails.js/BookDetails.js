import React from "react";
import "./BookDetails.css";
import Readers from "./readers/Readers";

// vue pour display les livres

class BookDetails extends React.Component {
	render() {
		return (
			<div className="contain ">
				<div className="book-list">
					<a href="">
						<img src={this.props.book.image} className="img-fluid image-book" alt="book" />
					</a>
					<div className="">
						<div>
							<Readers id={this.props.book.id} />
						</div>
						<a href="">
							<p className="title-book">{this.props.book.title}</p>
						</a>
						{this.props.book.authors.map((author, index) => {
							return (
								<a key={index} href="">
									<span className="from">
										par <span className="author">{author.name}</span>
									</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default BookDetails;
