
const Block = ({ className, value, onClick, turn }) => {
    
     let hoverClass = null;
     if (value == null && turn != null) {
       hoverClass = `${turn.toLowerCase()}-hover`;
     }

    return(
        <div className={`block ${className} ${hoverClass}`} onClick={onClick}>
          {value}
        </div>
    )
}


export default Block