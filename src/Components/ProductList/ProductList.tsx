import { LinearProgress } from '@material-ui/core';
import { useQuery } from 'react-query';
import {IProductProps, Product} from '../Product/Product';
import "../../styles/ProductList.css";


interface ProductListProps {
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {


    const getproducts = async (): Promise<IProductProps[]> => await (await fetch('https://fakestoreapi.com/products')).json()
    
    const {data, isLoading, error} = useQuery<IProductProps[]>('products', getproducts);

    
    if (isLoading) return <LinearProgress/>;

    if (error) return <div>Something went Wrong</div>

    return (
        <div>
            <h2>Product list</h2>
            <div className="productlist_div">
                {data?.map(e=>
                    <Product {...e} key={e.id}></Product>
                )}
            </div>
        </div>
    );
    
};

export default ProductList;