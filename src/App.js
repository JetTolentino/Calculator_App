import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton'
import React ,{Component}from 'react';
import * as math from 'mathjs';
class App extends Component {
  state = { 
    display:'',
    numCount:0,
    shownResult:false,
   }

  addToInput = (val) => {
    if(this.state.shownResult && isNaN(val)){    //For multiple operations
      this.setState({
        display: this.state.display+val , 
        numCount:this.state.numCount+1 ,
        shownResult : false
      })
    }


    if(this.state.shownResult && !isNaN(val)){
    this.setState({
      display: '', 
      numCount:1 , 
      shownResult:false
    }, ()=>{this.setState({display: this.state.display+val});})       //async 
    }

    if(this.state.numCount<=13 && !this.state.shownResult){
      this.setState({
        display: this.state.display+val , 
        numCount:this.state.numCount+1 ,
        shownResult : false
      })
    
      };
    

  } 

  clearInput = () =>{
    this.setState({display: '',numCount:0})

  }

  showResult =()=>{
    this.setState({
      display: this.getResult() ,
      shownResult:true
    })
  }

  getResult =()=>{
    
    try {
    return math.round(math.evaluate(this.state.display),3)
    }
    catch(err){
      return "ERROR"
    }

  }

  render() { 
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Input display={this.state.display}></Input>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.showResult}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className='row'>
            <ClearButton handleClick={this.clearInput}>

            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;