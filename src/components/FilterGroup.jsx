const FilterGroup = ({title, opcoes}) => {
    return ( 
    <div>
        <h3 style={{color:'var(--dark-gray-2)',marginBottom:'6px'}}>{title}</h3>
        <ul style={{accentColor:'var(--primary)'}}>
            {opcoes.map(item=>(
                <li> <label> <input type="checkbox"/>{item}</label></li>
            ))}
        </ul>
    </div>
     );
}
 
export default FilterGroup;