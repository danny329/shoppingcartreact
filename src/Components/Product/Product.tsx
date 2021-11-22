import Button from '@mui/material/Button';
import * as React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';
import "../../styles/Product.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Chip,Rating   } from '@mui/material';

export interface IProductProps {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export const Product: React.FC<IProductProps> = (props ) => {
    const { id, title, price, category, description, image, rating } = props;
    const { addToCart, cartItems, setcartToggle } = useContext(MyContext);
    const info = { id: id, title: title, price: price, category: category, description: description, image: image, quantity: 1 }
    return (
        <Grid item xs={12} sm={6} md={3} >
            <Card>
                <CardMedia
                    component="img"
                    height="150px"
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: 'contain',
                    }}
                />
                <CardContent sx={{ display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center' }} >
                    <Typography 
                    variant="button" 
                    sx={{
                        fontWeight: 'bold',
                        overflow: "hidden",
                        height: "30px",
                        textOverflow: "ellipsis",
                        display: "block",
                        whiteSpace:'nowrap',
                        width:'90%',
                        margin:'auto',
                        textAlign:'center'
                    }} 
                    gutterBottom 
                    title={title}
                    >{title}</Typography>
                    <Typography variant="caption" sx={{
                        overflow: "hidden",
                        height: "40px",
                        textOverflow: "ellipsis",
                        display: "block",
                    }} title={description} gutterBottom>{description}</Typography>
                    <Chip  label={category} color="primary" size="small" ></Chip>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}> 
                        <Typography variant="caption" gutterBottom >Rating</Typography>
                        <Rating name="product-rating" size="small" value={rating.rate} readOnly />
                    </div>                                            
                    <Typography variant="subtitle1" gutterBottom>{`Price ${price}`}</Typography>
                </CardContent>
                <CardActions>
                    {
                        cartItems.find(e=>e.id === id) ? 
                        <Button  size="small" sx={{width:'100%'}} color="success" onClick={() => setcartToggle(true)} variant="contained" startIcon={<CheckCircleOutlineIcon />} >
                            Added to Cart
                        </Button>
                         :
                        <Button  size="small" sx={{width:'100%'}} onClick={() => addToCart(info)} variant="outlined" startIcon={<AddShoppingCartIcon />}>
                            Add to Cart
                        </Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
}
