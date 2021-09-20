import React, { Component } from 'react'
import './Caption.css'

export default class Caption extends Component {
    gen = () => {
        document.getElementById('imgdiv').className="imgd";
        this.props.Generate(document.getElementById("caption0").value, document.getElementById("caption1").value);
        document.getElementById("mainimg").className="imgdivafter";
    }
    render() {
        return (
            <div id="main">
                <div className="form">
                    <h1>Caption 1:</h1>
                    <input type="text" name="caption0" className="inputs" id="caption0" />
                    <h1>Caption 2:</h1>
                    <input type="text" name="caption1" className="inputs" id="caption1" />
                </div>
                <input type="button" value="generate" id="generate" onClick={this.gen}  />
                <div id="imgdiv" className="imgdiv">
                    <img id="mainimg" src={this.props.generatedImg} alt="" width="300px"/>
                </div>
                <br />
                <div className="botbtns">
                    <button id="backbtn" className="btn1" onClick={this.props.Back}>Go back</button>
                    <button id="reset" className="btn2" onClick={this.props.Reset}>Reset</button>
                </div>
            </div>
        )
    }
}
