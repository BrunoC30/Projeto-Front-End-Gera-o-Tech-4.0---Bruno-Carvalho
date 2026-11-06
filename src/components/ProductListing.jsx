import ProductCard from "../components/ProductCard";

const ProductListing = ({listaDeProdutos}) => {
    return ( 
        <div style={{
            display:'flex',flexWrap:'wrap',gap:'20px',
            justifyContent:'center'
        }}>
                                                    
            {

                listaDeProdutos.map(produto=>(
                    <ProductCard
                        nome={produto.nome}
                        image={produto.image}
                        price={produto.price}
                        priceDescout={produto.priceDescout}
                    >
                    </ProductCard>
            ))
            }
    
        </div> 
    );
}
 
export default ProductListing;