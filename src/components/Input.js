import './input.css';

const Input = (props) => {
    return ( 
        <div className='input'>
            <div className='input-text'>
            {props.display}
            </div>
            
        </div>
     );
}
 
export default Input;