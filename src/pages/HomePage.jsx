import Gallery from "../components/Gallery";
import styled, { keyframes } from 'styled-components';
import { BtaoPadrao } from "../components/Header";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const TextHero = () => {
    return (
        <div className="textoHero">
            <p style={{ color: 'var(--primary)' }}>Melhores ofertas personalizadas</p>
            <h1>Queima de estoque nike</h1>
            <p style={{ color: 'var(--dark-gray-2)' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum corporis rerum laudantium illo vel repudiandae, debitis minus, repellendus
            </p>
            <div style={{ display: 'flex', justifyContent: 'center',marginTop:'10px' }}>
                <BtaoPadrao>Compre já</BtaoPadrao>
            </div>
        </div>
    )
}

const HomePage = () => {

    const imgsDestaque = [
        'https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/shirts.svg',
        'https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/pants.svg',
        'https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/pants.svg',
        'https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/headphones.svg',
        'https://raw.githubusercontent.com/BrunoC30/Projeto-Front-End-Gera-o-Tech-4.0---Bruno-Carvalho/dfa5bd351f542989ee305c47334b932557c88259/src/assets/shoes.svg'
    ]

    const Cta = styled.div`
        position:absolute;
        width:40%;
        height:80%;
        left:0;
        padding-left:20px;
        display:flex;
        flex-direction:column;
        font-size:1.2rem;
        justify-content:center;
        gap:20px;
    `
    const itens = [];

    for (let i = 0; i < 8; i++) {
        const obj = {
            nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true',
            price: '200',
            priceDescout: '179.99',
            key: crypto.randomUUID()
        }
        itens.push(obj);
    }

    return (
        <div style={{ minHeight: '140vh', backgroundColor: 'var(--light-gray-3)' }}>
            <div style={{
                display: 'flex', justifyContent: 'center', backgroundColor: 'white',
                position: 'relative'
            }}>
                <Gallery />
                <Cta>
                    <div className='txtHero1'>
                    <TextHero></TextHero>
                    </div>
                </Cta>

            </div>

            <div className='txtHero2' style={{visibility:'hidden',position:'absolute',
                display:'flex',justifyContent:'center',padding:'20px 0 20px 0'
            }}>
                <div style={{width:'70%'}}>
                    <TextHero></TextHero>
                </div>
            </div>

            <Section title='Coleções em destaque'>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} className="destaques" >
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true" alt=""
                        style={{ width: '30%' }} className="destaqueImg"
                    />
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true" alt=""
                        style={{ width: '30%' }}
                    />
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true" alt=""
                        style={{ width: '30%' }}
                    />
                </div>
            </Section>

            <Section title='Coleções em destaque'
                textalign="center"
            >
                <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', overflow: 'auto', scrollbarWidth: 'none' }}>

                    {
                        imgsDestaque.map(item => (
                            <img src={item} style={{ width: '40px' }} />
                        ))
                    }

                </div>
            </Section>

            <Section title='produtos em destaque'
                link={{ title: 'Ver mais' }}
            >

                <ProductListing
                    listaDeProdutos={itens}
                ></ProductListing>

            </Section>

            <Section title='Oferta especial'>
                <div
                    className="ofertaDestaque"
                    style={{ display: 'flex', gap: '20px' }}
                >
                    <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-5.jpeg?raw=true" alt=""
                        style={{ height: '250px' }}
                    />
                    <div style={{display:'flex',justifyContent:'center'}}>
                         <div className="finaltxt" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Air Jorda edição de colecionador</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo officia quasi ea quibusdam rerum! Cum dolores ipsum veritatis quas aspernatur aliquid iste voluptatum, suscipit ab optio sunt natus doloribus vitae.
                        </p>
                        <BtaoPadrao>Ver Oferta</BtaoPadrao>
                    </div>
                    </div>
                   
                </div>
            </Section>

        </div>
    );
}

export default HomePage;