import Gallery from "../components/Gallery";
import styled from 'styled-components';
import { BtaoPadrao } from "../components/Header";

const HomePage = () => {

    const Cta = styled.div`
        position:absolute;
        width:40%;
        height:100%;
        left:0;
        padding-left:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:20px;
    `

    return (
        <div style={{ height: '140vh', backgroundColor: 'var(--light-gray-3)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'white',
                        position:'relative'
             }}>
                    <Gallery />
                    <Cta>
                        <p>melhores ofertas personalizadas</p>
                        <h1>Queima de estoque nike</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum corporis rerum laudantium illo vel repudiandae, debitis minus, repellendus aliquid odio quo cumque laboriosam itaque. Animi delectus officia voluptate hic.
                        </p>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <BtaoPadrao>Compre já</BtaoPadrao>
                        </div>
                    </Cta>
            </div>
        </div>
    );
}

export default HomePage;