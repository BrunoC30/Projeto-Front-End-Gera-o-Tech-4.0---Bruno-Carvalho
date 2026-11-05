const ProductCard = ({ nome, image, price, priceDescout }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '220px',
            width: '160px',
            backgroundColor: 'var(--white)'
        }}>
            <img src={image} alt="" style={{ width: '90%', objectFit: 'contain', alignSelf: 'center', paddingTop: '10px' }} />
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                <p>{nome}</p>
                <div >
                    {priceDescout}
                    {price}
                </div>
            </div>

        </div>
    );
}

export default ProductCard;