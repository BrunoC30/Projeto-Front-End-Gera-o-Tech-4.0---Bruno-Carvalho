import ProductOptions from "./ProductOptions";
import { BtaoPadrao } from "./Header";
import { Stars } from "./Logo";

const BuyBox = ({nome,reference,stars,rating,priceDiscount,price,desc}) => {
    return ( 
    <div>
        <h1>{nome}</h1>
        <p style={{color:'var(--light-gray)'}}>{reference}</p>
        <div>
            <Stars numero={stars}></Stars>
        </div>
        <div>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                <p style={{fontSize:'1.7rem'}}>{priceDiscount}</p>
                <p style={{color:'var(--light-gray)', textDecoration:'line-through'}}>{price}</p>
            </div>
                <p>{desc}</p>
            
            <ProductOptions></ProductOptions>
            <BtaoPadrao>Comprar</BtaoPadrao>
        </div>
    </div> 
    );
}
  
export default BuyBox;