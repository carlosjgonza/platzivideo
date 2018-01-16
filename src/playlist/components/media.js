import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
	/*
	Emascript 6
	constructor(props) {
		super(props);
		this.state = {
			author: props.author
		}
		this.handleClick = this.handleClick.bind(this);
	}*/
	state = {
		author: this.props.author,
	}
	handleClick = (event) => {
		console.log(this.props.title);

		this.setState({
			author: 'Jesus Escalante',
		});
	}
	render() {
		const styles = {
			container: {
				//fontSize: 18, //Lo transforma a px
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img
						src={this.props.image}
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.state.author}</p>
				</div>
			</div>
		);
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;