import Gallery from "../components/Gallery";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProductListing";
import { useLocation } from "react-router-dom";

const ProductViewPage = () => {

    const location = useLocation();
    const info = location.state || {};
    const itens = [];
    console.log(info)

    for(let i = 0; i<4; i++){
        const obj = {
            nome:'sapato',
            image:'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true',
            price:'200',
            priceDescout:'179.99',
            key: crypto.randomUUID()
        }
        itens.push(obj);
    }

    return ( 
    <div style={{minHeight:'100vh'}}>
        {/* Primeira parte*/}
        <div style={{display:'flex'}} className="viewDivisor">
            <div style={{width:'50%'}} className="imgView">
                <Gallery view={2}></Gallery>
            </div>
            <div style={{width:'50%',paddingLeft:'20px'}} className="buyboxView">
                <BuyBox
                 nome={info.nome}
                 reference='Casual | Nike | REF:38416711'
                 stars={5}
                 rating={5}
                 priceDiscount={info.priceDescout}
                 price={info.price}
                 desc={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consequuntur nostrum necessitatibus temporibus. Dolores, sapiente adipisci. Iusto incidunt dolor repellendus sed, rerum beatae. Alias quis ratione doloremque esse debitis minima!'}
                ></BuyBox>
            </div>

        </div>

        {/* Segunda Parte */}
        <div>
            <Section title='Produtos relacionados' link={{title:'Ver todos'}}>
                <ProductListing listaDeProdutos={itens}></ProductListing>
            </Section>
        </div>

    </div>
 );
}
 
export default ProductViewPage;