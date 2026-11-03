import Gallery from "../components/Gallery";
import styled from 'styled-components';


const HomePage = () => {

    const Cta = styled.div`
        position:absolute;
        width:30%;
        left:0;
    `

    return ( 
    <div style={{height:'140vh',backgroundColor:'var(--light-gray-3)'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
            <Gallery/>
             <Cta>
                <p>melhores ofertas personalizadas</p>
                <h1>Queima de estoque nike</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum corporis rerum laudantium illo vel repudiandae, debitis minus, repellendus aliquid odio quo cumque laboriosam itaque. Animi delectus officia voluptate hic.
                </p>
                <button>Compre já</button>
             </Cta>
        </div>
    </div> 
    );
}
 
export default HomePage;