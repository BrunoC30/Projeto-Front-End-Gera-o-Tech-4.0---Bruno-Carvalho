import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

export const BtaoPadrao = styled.button`
    border:none;
    background-Color:var(--primary);
    color:var(--white);
    width:40%;
    border-Radius:10px;
    padding:3px;
    height:30px;
    cursor:pointer;
`
export const HeaderMobile = ({ executarFunc }) => {
    return (<>
        <div className="HeaderMobile" style={{
            position: 'absolute',
            top: 0,
            zIndex: 999,
            height: '60px',
            padding: '16px 20px',
            backgroundColor: 'var(--white)', display: 'flex',
            flexDirection: 'column'
        }}>


            <div
                className="headerContainer"
                style={{
                    height: '50px',
                    display: 'flex', alignItems: 'center',
                    gap: '10px', padding: '0 0 12px 0 ', justifyContent: 'space-between'
                }}>
                <button onClick={executarFunc}
                    style={{ border: 'none', fontSize: '1.6rem', backgroundColor: 'var(--white)', cursor: 'pointer' }}
                ><p>☰</p></button>
                <Logo tipo='header' />

                <img src="https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/Search.svg" alt=""
                    style={{
                        height: '20px', width: '40px'
                    }}
                />



                <img src="https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/mini-cart.svg" alt="" />

            </div>

        </div>
    </>)
}

const Header = () => {
    return (
        <>
            <div className="MainHeader" style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                height: '100px',
                padding: '16px 20px',
                backgroundColor: 'var(--white)', display: 'flex',
                flexDirection: 'column'
            }}>
                <div
                    className="headerContainer"
                    style={{
                        height: '50px',
                        display: 'flex', alignItems: 'center',
                        gap: '10px', padding: '0 0 12px 0 ', justifyContent: 'space-between'
                    }}>
                    <Logo tipo='header' />
                    <div className="ContainerSearch"
                        style={{
                            display: 'flex',
                            flex: 1, minWidth: '170px',
                            height: "100%", position: 'relative'
                        }}
                    >
                        <input type="text" placeholder="Pesquisar produto"
                            style={{
                                border: 'none', backgroundColor: 'var(--light-gray-3)',
                                height: '100%', borderRadius: '10px',
                                paddingLeft: '10px', flex: 1
                            }}
                        />
                        <img src="https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/Search.svg" alt=""
                            style={{
                                position: 'absolute', right: '10px', bottom: '30%',
                                height: '20px', width: '40px'
                            }}
                        />
                    </div>



                    <div className="LoginCadastro" style={{ display: 'flex', gap: '8px', height: '60%' }}>
                        <button style={{
                            border: 'none', color: 'var(--dark-gray-2)',
                            paddingBottom: '3px',
                            borderBottom: '1px solid var(--dark-gray-2)'
                        }}>Cadastrar-se</button>

                        <BtaoPadrao>Entrar</BtaoPadrao>
                    </div>

                    <img src="https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/mini-cart.svg" alt="" />

                </div>

                <nav className="NavMenu">
                    <NavLink end className={'menu-link'} to="/">Home</NavLink>
                    <NavLink className={'menu-link'} to='/produtos'>Produtos</NavLink>
                    <NavLink className={'menu-link'} to='/categorias'>Categorias</NavLink>
                    <NavLink className={'menu-link'} to='/meus_pedidos' >Meus Pedidos</NavLink>
                </nav>

            </div>
        </>
    );
}


export default Header;