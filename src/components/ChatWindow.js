import React, { Component } from 'react';

export default function ChatWindow {
	const conversationMapped = props.conversation.map((element, index) => {
		return <h4 key={index}>{element}</h4>

	}
	
	render() {
		return(
			<div id = "chat-window" >
				<p>crickets..</p>
			</div >
		);
}
}
}
