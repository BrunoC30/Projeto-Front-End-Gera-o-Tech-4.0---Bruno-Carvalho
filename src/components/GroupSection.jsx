import FilterGroup from "./FilterGroup";

const GroupSection = () => {
    const marca = ['Adidas','Calenciaga','K-Swiss','Nike','Puma'];
    const categoria = ['Esporte e lazer','Casual','Utilitário','Corrida'];
    const genero = ['Masculino','Feminino','Unisex']
    return ( 
    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
    
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <p>Filtrar por</p>
             <FilterGroup title='Marca'opcoes={marca}></FilterGroup>
             <FilterGroup title='Categoria'opcoes={categoria}></FilterGroup>
             <FilterGroup title='Gênero'opcoes={genero}></FilterGroup>
             <div>
                <ul style={{accentColor:'var(--primary)'}}>
                    <li> <label><input type="radio" name="condicao" id="1" /> Novo</label></li>
                    <li> <label> <input type="radio" name="condicao" id="2" /> Usado </label> </li>
                </ul>
             </div>
        </div>
       

    </div> 
    );
}
 
export default GroupSection;