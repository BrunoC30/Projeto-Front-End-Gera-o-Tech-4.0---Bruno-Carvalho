import { NavLink } from "react-router-dom";
import { BtaoPadrao } from "./Header";

const SideBar = ({ isOpen }) => {
    return (
        <div style={{
            backgroundColor: 'var(--white)',
            width: '250px',
            minHeight: '85vh',
            borderRight: '1px solid #ddd',
            position: 'fixed',
            top: '90px',
            zIndex: '999',
            display: isOpen ? 'flex' : 'none',
            paddingLeft: '8px',
            paddingBottom:'40px',
            flexDirection: 'column',
        }}>

            <nav className="NavMenu"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <div>
                    <p style={{ padding: '10px', fontWeight: 'bold', color: 'var(--dark-gray-2)' }}>Páginas</p>
                </div>
                <NavLink end className={'menu-link'} to="/">Home</NavLink>
                <NavLink className={'menu-link'} to='/produtos'>Produtos</NavLink>
                <NavLink className={'menu-link'} to='/categorias'>Categorias</NavLink>
                <NavLink className={'menu-link'} to='/meus_pedidos' >Meus Pedidos</NavLink>
            </nav>

            <div style={{flex:1}}></div>

            <div className="LoginCadastro" style={{
                display: 'flex', gap: '8px', height: '60%', flexDirection: 'column', alignItems: 'center'
            }}>
                <button style={{
                    border: 'none', color: 'var(--dark-gray-2)',
                    paddingBottom: '3px',
                    borderBottom: '1px solid var(--dark-gray-2)'
                }}>Cadastrar-se</button>

                <BtaoPadrao>Entrar</BtaoPadrao>
            </div>



        </div>
    );
}

export default SideBar; 