import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    return ( 
    <div style={{
        height:'100px',
        padding: '16px 20px',
        backgroundColor:'var(--white)',display:'flex',
        flexDirection:'column'
        }}>
            <div style={{
                height:'50px',
                display:'flex',alignItems:'center',
                gap:'10px',padding:'0 0 12px 0 ',justifyContent:'space-between'
                }}>
                <Logo tipo='header'/>
                <div className="ContainerSearch"
                    style={{
                        display:'flex',
                        flex:1,minWidth:'170px',
                        height:"100%",position:'relative'
                    }}
                >
                <input type="text" placeholder="Pesquisar produto"
                    style={{
                        border:'none',backgroundColor:'var(--light-gray-3)',
                        height:'100%',borderRadius:'10px',
                        paddingLeft:'10px',flex:1
                    }}
                />
                    <img src="./src/assets/search.svg" alt="" 
                        style={{position:'absolute',right:'10px',bottom:'30%',
                                height:'20px',width:'40px'
                        }}
                    />
                </div>



                <div className="Login/Cadastro" style={{display:'flex',gap:'8px',height:'60%'}}>
                        <button style={{
                            border:'none',color:'var(--dark-gray-2)',
                            paddingBottom:'3px',
                            borderBottom:'1px solid var(--dark-gray-2)'
                            }}>Cadastrar-se</button>

                        <button style={{
                            border:'none',backgroundColor:'var(--primary)',
                            color:'var(--white)',width:'60px',borderRadius:'10px',
                            padding:'3px',height:'100%'
                        }}>Entrar</button>
                </div>

                <img src="./src/assets/mini-cart.svg" alt="" />

            </div>

            <nav className="Menu">
                <NavLink end className={'menu-link'} to="/">Home</NavLink>
                <NavLink className={'menu-link'} to='/produtos'>Produtos</NavLink>
                <NavLink className={'menu-link'} to='/categorias'>Categorias</NavLink>
                <NavLink className={'menu-link'} to='/meus-pedidos' >Meus Pedidos</NavLink>
            </nav>
       
    </div>
     );
}
 
export default Header;