import { useQuery } from 'react-query';
import { IProductProps, Product } from '../Product/Product';
import "../../styles/ProductList.css";
import { Grid, LinearProgress } from '@mui/material';


interface ProductListProps {
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {


    const getproducts = async (): Promise<IProductProps[]> => await (await fetch('https://fakestoreapi.com/products')).json()

    const { data, isLoading, error } = useQuery<IProductProps[]>('products', getproducts);


    if (isLoading) return <LinearProgress />;

    if (error) return <div>Something went Wrong</div>

    return (
        <Grid
            container
            spacing={3}
            padding="10px"
        >
            {data?.map(e =>
                <Product {...e} key={e.id}></Product>
            )}
        </Grid>
    );

};

export default ProductList;