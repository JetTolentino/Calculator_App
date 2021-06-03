import './clearbutton.css';

const ClearButton = (props) => {
    return ( 
        <div className='clear-container' onClick={()=> props.handleClick()}>
            <div className='clear-text'>
            Clear
            </div>
        </div>
     );
}
 
export default ClearButton;