import React, { Component } from 'react'
import Meme from './Meme'
import './Memelist.css'

export default class Memelist extends Component {
    render() {
        return (
            <div id="memelist">
                {
                    this.props.Memedata.map((element, i) => {
                        return <Meme id={this.props.Memedata[i].id} name={this.props.Memedata[i].name} url={this.props.Memedata[i].url} key={i} changeRoute={this.props.changeRoute} memeclick={this.props.memeclick}/>
                    })
                }
            </div>
        )
    }
}
