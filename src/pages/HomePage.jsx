import Gallery from "../components/Gallery";
import styled from 'styled-components';
import { BtaoPadrao } from "../components/Header";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

const HomePage = () => {

    const imgsDestaque = [
        './src/assets/shirts.svg',
        './src/assets/pants.svg',
        './src/assets/pants.svg',
        './src/assets/headphones.svg',
        './src/assets/shoes.svg'
    ]

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
        <div style={{ minHeight: '140vh', backgroundColor: 'var(--light-gray-3)' }}>
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

            <Section  title='Coleções em destaque'>
                <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true" alt=""
                    style={{width:'30%'}}
                    />
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true" alt=""
                    style={{width:'30%'}}
                    />
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true" alt=""
                    style={{width:'30%'}}
                    />
                </div>
            </Section>

            <Section title='Coleções em destaque'
                     textalign="center"
            >
                <div style={{display:'flex',justifyContent:'center',gap:'60px'}}>

                    {
                        imgsDestaque.map(item=>(
                            <img src={item} style={{width:'40px'}}/>
                        ))
                    } 

                </div>
            </Section>

            <Section title='produtos em destaque'>
            <ProductCard
                image='https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-3.jpeg?raw=true'
                price='200'
                priceDescout='149.9'
                nome='Tenis'
            >
            </ProductCard>       

            </Section>


        </div>
    );
}

export default HomePage;