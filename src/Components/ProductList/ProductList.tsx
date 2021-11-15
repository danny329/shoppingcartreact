import {useEffect, useState} from 'react';
import {IProductProps, Product} from '../Product/Product';
import './ProductList.css'

interface ProductListProps {
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {

    const [loading, setloading] = useState(true);
    const [productlist, setproductlist] = useState<IProductProps[]>([]);
    

    useEffect(() => {
        setloading(true);
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setproductlist(json);
            setloading(false);
        })
        return () => { }
    }, []);

    const product : JSX.Element[] = productlist.map(e=>
        <Product {...e} key={e.id}></Product>
    );
    

    return (
        <div>
            <h2>Product list</h2>
            <div className="productlist_div">
                {product}
            </div>
        </div>
    );
};

export default ProductList;