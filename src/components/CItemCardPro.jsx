import { Component } from "react";
import ErrorBoundry from "./ErrorBoundry";
import Card from "./Card";

class CItemCardPro extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
        this.increment=this.increment.bind(this);//this is one way
    }

    increment(){
        this.setState({
            count:this.state.count+2
    });}

    decreament=()=>{ //another way to use arrow func instead of binding as arrow func get this from its surrounding not from window so we don't need to define this for it
        this.setState(()=>{return {count:this.state.count-2}});
    };

    multiply(){
        this.setState({count:this.state.count*2});
    };

    componentDidMount(){
        console.log("The component is rendered");
    }

    componentDidUpdate(){
        console.log("Component is updated");
    }

    componentWillUnmount(){
        console.log("Component Ended");//when move to another component
    }

    render(){
        return (
            <div>
                    <h1 className="deep-purple-text darken-4">{this.props.tit}</h1>
                    <p>Count: {this.state.count}</p>
                    <button className="waves-effect waves-light btn" onClick={this.increment}>Increment</button><span> | </span>
                    <button className="waves-effect waves-light btn deep-purple" onClick={this.decreament}>Decrement</button> <span> | </span>
                    <button className="waves-effect waves-light btn cyan" onClick={()=>this.multiply()}>Multiply</button>{/*third way} */}
            <ErrorBoundry>
                <Card/>
            </ErrorBoundry>
            
            </div>
            
        );
    }
}

export default  CItemCardPro;