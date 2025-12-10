import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            error:null,
            errorInfo:null
        };
    }

        static getDerivedStateFromError(error){//upddate the state
            return {hasError:true};
        }

        componentDidCatch(error,errorInfo){
            this.setState({
                error:error,
                errorInfo:errorInfo
            });
        }


    render(){
        //dealing with errors without fail the whole project
        if(this.state.hasError){
            return(
                <div>
                    {/* {console.log(this.state.error)} */}
                    {/* {console.log(this.state.errorInfo.componentStack)} */}
                    <h1>Error: {this.state.error?this.state.error.toString():"hi"}</h1>
                    <p>Error Information:{this.state.errorInfo?this.state.errorInfo.componentStack:"hello"}</p>
                </div>
            )
        }
        return(this.props.children);
    }
}

export default ErrorBoundry;