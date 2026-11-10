//import ProductOptions from "./ProductOptions";
import { BtaoPadrao } from "./Header";
import { Stars } from "./Logo";
import ProductOptions from "../components/ProductOptions";

const BuyBox = ({nome,reference,stars,rating,priceDiscount,price,desc}) => {

    
    const opts1 = ['#69caa5','#bf68ca','#89bb5b','#b43f3f']
    const opts2 = ['41','42','43','44','45']


    return ( 
    <div>
        <h1>{nome}</h1>
        <p style={{color:'var(--light-gray)'}}>{reference}</p>
        <div>
            <Stars numero={stars}></Stars>
        </div>
        <div style={{gap:'10px', display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                <p style={{fontSize:'1.7rem'}}>{priceDiscount}</p>
                <p style={{color:'var(--light-gray)', textDecoration:'line-through'}}>{price}</p>
            </div>
                <p>{desc}</p>
                <ProductOptions
                    title='Tamanhos'
                    shape='square'
                    type='text'
                    radius='12'
                    options={opts2}
                >
                </ProductOptions>
                
                <ProductOptions
                    title='Cores'
                    shape='circle'
                    type='color'
                    options={opts1}
                >
                </ProductOptions>

            <BtaoPadrao style={{backgroundColor:'var(--warning)'}}>Comprar</BtaoPadrao>
        </div>
    </div> 
    );
}
  
export default BuyBox;