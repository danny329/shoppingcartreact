import { Card, Box, CardContent, Typography, IconButton, CardMedia } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import * as React from 'react';
import { useContext } from 'react';
import {CartItemTypes, MyContext} from '../../App';

export interface Props {
  item : CartItemTypes
}

export const Cart: React.FC<Props> = ({item}) => {
  const {addToCart, decreaseQuantity, removeFromCart} = useContext(MyContext);
  return (
    <Card sx={{ display: 'flex', width:'250px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" >
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.price * item.quantity}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous"  onClick={()=>decreaseQuantity(item.id)}>
            <DoDisturbOnOutlinedIcon/>
          </IconButton>
          <IconButton aria-label="quantity">
            {item.quantity}
          </IconButton>
          <IconButton aria-label="add" onClick={()=>addToCart(item)}>
            <AddCircleOutlineIcon/>
          </IconButton>
          <IconButton aria-label="delete" onClick={()=>removeFromCart(item.id)}>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '120px' }}
        image={item.image}
        alt={item.title}
      />
    </Card>
    
  );
}
