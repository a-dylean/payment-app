import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  styled,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import { AddToCartButton } from '../../components/addToCardButton';
import { Price } from '../../components/price';
import { Product } from '../../models/api';

export const ProductItem = (product: Product) => {
  const navigate = useNavigate();
  const ProductItemCard = styled(Card)(() => ({
    width: 345,
    height: 345,
  }));
  return (
    <ProductItemCard>
      <Box>
        <Box
          onClick={() => {
            navigate(`${routes.PRODUCTS}/${product.id}`);
          }}
          sx={{ cursor: 'pointer' }}
        >
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="h6" component="div">
                <Price price={product.price} />
              </Typography>
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            height="210"
            image="https://www.bandg.com/assets/img/default-product-img.png?w=400&h=225&scale=both&mode=max"
            alt="item pic"
          />
        </Box>
        <CardActions>
          <AddToCartButton {...product} />
        </CardActions>
      </Box>
    </ProductItemCard>
  );
};
