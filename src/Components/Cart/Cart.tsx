import { Card, Box, CardContent, Typography, IconButton, CardMedia } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from 'react';
import { useContext } from 'react';
import { CartItemTypes, MyContext } from '../../App';

export interface Props {
  item: CartItemTypes
}

export const Cart: React.FC<Props> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(MyContext);
  return (
    <Card sx={{ display: 'flex', width: '250px', height: '100px', margin: '3px', padding: '3px', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden', pt: 1 }}>
        <CardContent sx={{ padding: "3px" }}>
          <Typography sx={{
            fontSize: "12px", overflow: 'hidden', width: '95%',
            wordWrap: 'break-word', textOverflow: 'ellipsis',height:'20px', whiteSpace:'nowrap'
          }} title={item.title}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: "10px" }}>
            {item.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: "10px" }}>
            {item.price * item.quantity}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          <IconButton aria-label="previous" onClick={() => decreaseQuantity(item.id)}>
            <DoDisturbOnOutlinedIcon fontSize="small" />
          </IconButton>
          <Typography aria-label="quantity" variant="caption">
            {item.quantity}
          </Typography>
          <IconButton aria-label="add" onClick={() => increaseQuantity(item.id)}>
            <AddCircleOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => removeFromCart(item.id)} >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ objectFit: 'contain', height: "80px", width: '80px' }}
        image={item.image}
        alt={item.title}
      />
    </Card>

  );
}
