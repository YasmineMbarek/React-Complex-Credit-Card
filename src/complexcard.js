import React, { Component } from 'react';
const MasterCard ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmpDP7isrB68D8K6Gp0PNkk3y4wh_ZzJB5g4Wjk6H0paG4Os7'
const Sim ='https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png'
class ComplexCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber :'**** **** **** ****',
            validThru :'**/**',
            cardname:'********',
            msg:''
          }
          this.CardNumber=this.CardNumber.bind(this);
          this.CardName=this.CardName.bind(this);
          this.ValidThru=this.ValidThru.bind(this);


    }
    CardNumber(event) {
        event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        if (event.target.value.length < 16)
        {  this.setState({
    
            cardNumber : event.target.value,
          msg: 'Valid number',
    
        })}
    else {
      this.setState({
    
        msg: 'Invalid number ',
    
      })
     }
        
      }
      CardName(event){
          event.target.value=event.target.value.replace(/[^a-zA-Z]/g,'');
          if(event.target.value.length<20){
              this.setState({
                cardname:event.target.value.toUpperCase(),
              })
          }
          else {
              this.setState({
                  msg:'Invalid name'
              })
          }
      }
      ValidThru(event) {
    
    
        this.setState({
    
            validThru: (event.target.value).split("").slice(0,2).join("")+"/"+(event.target.value).split("").slice(2,4).join(""),
    
        })
        
      }
    render() { 
        return ( 
            <div className="divContainer">
            <div className="visaCard">
            <h1>COMPANYNAME</h1>
            <img className="ImgSim" src={Sim} alt="#"/>
            <h1 className="cardNumber">{this.state.cardNumber }</h1>
            <h6>Month/Year</h6>

            <div className="visaCardDisplay">
             <h2>5422</h2> 
             <h4>validThru</h4>
             <h2 className="validThru">{this.state.validThru}</h2>
            </div> 
            <img className="imgMasterCard" src={MasterCard} alt="#"/>  
            <h3 className="cardname">{this.state.cardname}</h3>

            </div>
            <div className="containerInput">
            <input type="text" placeholder="Card number" onChange= {this.CardNumber}/>
            <input type="text" placeholder="User name" onChange={this.CardName}/>
            <input type="text" placeholder="Valid date" onChange={this.ValidThru}/>
            </div>

            </div>
         );
    }
}
 
export default ComplexCard;