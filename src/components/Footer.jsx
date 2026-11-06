
import Logo from "./Logo";

const BlocoFooter = ({titulo, lista})=>{
    return(<>
        <div style={{width:'20%'}}>
            <h4 style={{fontSize:'1.5rem',marginBottom:'5px'}}>{titulo}</h4>

            <ul style={{display:'flex',flexDirection:'column',gap:'6px',
                        fontSize:'0.8rem',color:'var(--light-gray)'
            }}>
                {lista.map(item=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </>)
}


const Footer = () => {

    const categorias = ['camisetas','calças','bonés','headphones','tenis'];
    const contatos = ['Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161','(85) 3051-3411'];
    const informacoes = ['Sobre Drip Store','Segurança','Wishlist','Blog','Trabalhe conosco','Meus pedidos']

    return (
    <div style={{
        minheight:'254px',
        backgroundColor:'var(--dark-gray)',
        padding:'40px 20px 10px 20px',color:'var(--white)',display:'flex',
        flexDirection:'column'
    }}>
       
        <div className="bloco1"
            style={{flex:1,display:'flex',justifyContent:'space-around',gap:'20px',padding:'0 0 40px 0'}}
        >
             <div className="subBloco"
                    style={{width:'300px'}}
                >
                 <Logo/>
                 <p style={{fontSize:'0.9rem',color:'var(--light-gray)'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rem beatae assumenda eum, dignissimos modi, nostrum maxime sint eos rerum culpa molestias similique commodi, quasi blanditiis officia nam sapiente soluta.
                 </p>
             </div>
            <BlocoFooter titulo='Informação' lista={informacoes}/>
            <BlocoFooter titulo='Categorias' lista={categorias}/>
            <BlocoFooter titulo='Contato' lista={contatos}/>

        </div>
        <hr style={{border:'none',height:'2px',
                    backgroundColor:'var(--dark-gray-2)',marginBottom:'8px'}}/>
        <div
            style={{height:'40px',display:'flex',justifyContent:'center'}}
        >
            <p>creditos . . .</p>
        </div>

    </div>
);
}
export default Footer;                                                                              