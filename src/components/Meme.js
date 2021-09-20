import React, { Component } from 'react'
import './Meme.css'

export default class Meme extends Component {
    
    render() {
        
        return (
            <div id={this.props.id}>
                <img className="memeimg" src={this.props.url} alt={this.props.name} onClick={()=>{this.props.memeclick(this.props.url);this.props.changeRoute(this.props.id,'Caption')}} />
            </div>
        )
    }
}
