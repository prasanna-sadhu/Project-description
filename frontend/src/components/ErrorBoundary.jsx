import {Component} from "react";

class ErrorBoundary extends Component{

constructor(props){

super(props);

this.state={
hasError:false
};

}

static getDerivedStateFromError(){

return{
hasError:true
};

}

componentDidCatch(error,errorInfo){

console.log(error,errorInfo);

}

render(){

if(this.state.hasError){

return(

<div>

<h2>
Something went wrong.
</h2>

<p>
Please refresh the page.
</p>

</div>

);

}

return this.props.children;

}

}

export default ErrorBoundary;