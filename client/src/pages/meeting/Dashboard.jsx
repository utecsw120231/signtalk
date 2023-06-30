import { Component } from 'react';
import { Input, Button, IconButton } from '@material-tailwind/react';
import 'tailwindcss/tailwind.css';

import "./Dashboard.css"

class Dashboard extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/meeting/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/meeting/${url}`
		}
	}

	render() {
		return (
			<div className="container mx-auto p-4">
				<div className="text-sm bg-white w-10% text-center mx-auto mb-10">
				<span className="text-sm bg-white w-20 text-center mr-2">Source code:</span>
				<IconButton className="bg-[#333333] rounded hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
				onClick={() => window.open("https://github.com/0x5eba/Video-Meeting", "_blank")}>
					<i className="fab fa-github text-lg" />
				</IconButton>

				</div>
	  
			  <div>
				<h1 className="text-6xl mb-2">Video Meeting</h1>
				<p className="font-light">Video conference website that lets you stay in touch with all your friends.</p>
			  </div>
	  
			  <div className="bg-white p-8 w-96 mx-auto mt-16">
				<p className="font-bold mb-2 pr-8">Start or join a meeting</p>
				<Input placeholder="URL" onChange={(e) => this.handleChange(e)} />
				<Button variant="contained" color="primary" onClick={this.join} className="my-4">
				  Go
				</Button>
			  </div>
			</div>
		  );
	}
}

export default Dashboard;
