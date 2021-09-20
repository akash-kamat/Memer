import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Memelist from './components/Memelist'
import Caption from './components/Caption'
import './App.css'

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			Memedata: [],
			Route: 'Home',
			captionId: '',
			Url: ''
		}
	}

	componentDidMount() {

		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(memedata => this.setState({ Memedata: memedata.data.memes }))



	}

	changeRoute = (id, page) => {
		this.setState({ Route: page })
		this.setState({ captionId: parseInt(id) })

	}

	Generate = (caption0, caption1) => {
		if (caption0==='' & caption1==='') {
			alert("Enter atleast one caption")
		}
		else{
			fetch(`https://api.imgflip.com/caption_image?template_id=${this.state.captionId}&username=akashkamat&password=1234567890Aa@&text0=${caption0}&text1=${caption1}`)
			.then(response => response.json())
			.then(imgc => this.setState({ Url: imgc.data.url }))
		}
		
	}

	Reset = () => {
		document.getElementById("caption0").value = '';
		document.getElementById("caption1").value = '';
		this.setState({ Url: '' })
	}

	Back = () => {
        document.getElementById("caption0").value = '';
		document.getElementById("caption1").value = '';
		this.changeRoute(null, 'Home')
        this.setState({Url:''})
        this.setState({CaptionId:''})
	}
	memeclick = (url) => {
		this.setState({Url:url})
	}
	render() {
		if (this.state.Route === 'Home') {
			return (
				<div>
					<Nav />
					<Memelist Memedata={this.state.Memedata} changeRoute={this.changeRoute} memeclick={this.memeclick}/>
				</div>
			)
		}
		else if (this.state.Route === 'Caption') {
			return (
				<Caption captionId={this.state.captionId} Generate={this.Generate} generatedImg={this.state.Url} changeRoute={this.changeRoute} Reset={this.Reset} Back={this.Back} />
			)
		}
	}

}
