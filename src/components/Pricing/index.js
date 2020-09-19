import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {

    state={
        prices:[100,200,300],
        position:['sdfsf','sdfsf','sdfsd'],
        desc:[
            'Since component logic is written in Javaad of templates', 
            'Since component logic is written in Javaad of templates',
            'Since component logic is written in Javaad of templates'
           
        ],
        linkto:['google,.com','sdfsffsf.vo','rrrrrrrr.vo'],
        delay:[500,0,500]
    }
    showBoxes =() =>{
            return(
                this.state.prices.map((box,i)=> (
                <Zoom delay={this.state.delay[i]} key={i}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                {this.state.prices[i]}
                            </div>
                            <div className="pricing_description">
                            {this.state.desc[i]}
                            </div>
                            <div className="pricing_buttons">
                                <MyButton
                                text="purhchae"
                                link={this.state.linkto[i]}
                                bckcolor="yellow"
                                color="red"
                                />
                            </div>
                        </div>

                    </div>
                </Zoom>
                    
                )

                )
            )
            
    }
    render() {
        return (
            <div className="bck_black">
                <div className="cneter_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;