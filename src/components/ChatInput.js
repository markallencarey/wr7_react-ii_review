import React, { Component } from 'react';

export default class ChatInput extends Component {
	constructor() {
		super()
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	render() {
		return (
			<div id="chat-input">
				<input
					onChange={this.handleChange}
					placeholder='type something...' />
				<button
					id='chat-submit'
					onClick={() => this.props.processMessage(this.state.input)}>
					Ask!
				</button>
			</div>
		);
	}
}
