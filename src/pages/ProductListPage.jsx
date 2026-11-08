import ProductOptions from "../components/ProductOptions";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
const ProductListPage = () => {

    const itens = [];

    for (let i = 0; i < 20; i++) {
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
        <div style={{ minHeight: '140vh', display: 'flex' }} >
            <div style={{ width: '70%', padding: '30px 0 0 30px' }} className="filtro">
                <ProductOptions></ProductOptions>
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight:'30px'}}>
                    <select name="Ordem" style={{ width: '220px',height:'30px'}}>
                        <option value="teste1">Preço: Mais barato</option>
                        <option value="teste2">Preço: Mais caro</option>
                        <option value="teste3">teste3</option>
                    </select>
                </div>
                <Section>
                    <ProductListing
                        listaDeProdutos={itens}
                    ></ProductListing>
                </Section>
            </div>
        </div>
    );
}

export default ProductListPage;