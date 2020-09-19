import React, { Component } from 'react';
import Slide from 'react-reveal';
import Fade from 'react-reveal';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    percentage(){
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(() =>{
        this.percentage()},30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                    onReveal ={()=> this.percentage()}>
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>

                    </Fade>
                    <Slide right>
                    <div className="discount_discription">
                        <h3>Learn Once, Write Anywhere</h3>
                        <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                       <MyButton
                       text="Purchase thing"
                       link="google.com"
                       color="red"
                       bckcolor="yellow"/>
                    </div>
                   </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;