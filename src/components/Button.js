import './button.css';

const isOperator = val =>{
    if(!isNaN(val)|| val=='.'){
        return "button-wrapper"
    }
    else{
        return 'operator'
    }   
}

const Button = (props) => {

    return ( 
        <div type='button' className={isOperator(props.children)} onClick={()=>props.handleClick(props.children)}>
        {props.children}
        </div>
     );
}
 
export default Button;