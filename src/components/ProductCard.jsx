import { Link } from "react-router-dom";
const ProductCard = ({ nome, image, price, priceDescout , productKey}) => {
    const info = {
        nome: nome,
        image:image,
        price:price,
        priceDescout:priceDescout
    }
    return (
        <Link to={`/produto/:id${productKey}`}
            state={info}
            key={productKey}
            className="card" 
            style={{
            cursor:'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: '320px',
            width: '230px',
            gap:'20px',
            backgroundColor: 'var(--white)'
        }}>
            <img src={image} alt="" style={{ width: '90%', objectFit: 'contain', alignSelf: 'center', paddingTop: '10px' }} />
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'0 0 0 20px'}}>
                <h4
                    style={{margin:'20px 0 5px 0',fontSize:'1.2rem',
                            color:'var(--dark-gray-2)',overflow:'hidden',
                            textOverflow:'ellipsis',textWrap:'nowrap',width:'70%'
                    }}
                >{nome}</h4>
                <div 
                    style={{display:'flex', alignItems:'center',gap:'10px',fontSize:'1.1rem'}}
                >
                     <p
                        style={{textDecoration:'line-through',color:'var(--light-gray)'}}
                     >
                       ${price}
                    </p>
                    <p>
                        ${priceDescout}
                    </p>
             
                </div>
            </div>

        </Link>
    );
}

export default ProductCard;