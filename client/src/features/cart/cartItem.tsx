import { Typography, Box, IconButton, ListItem, Divider } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
import {
  useGetProductOrderByProductIdQuery,
  useDeleteProductOrderMutation,
  useUpdateQuantityMutation,
} from "../orders/ordersApi";
import { useGetProductQuery } from "../products/productsApi";

export const CartItem = ({ id, quantity }: any) => {
  const { data: productInfo } = useGetProductQuery(id);
  const { data: productOrderInfo } = useGetProductOrderByProductIdQuery(id);
  const [update] = useUpdateQuantityMutation();
  const [deleteItem] = useDeleteProductOrderMutation();
  // eslint-disable-next-line prefer-const
  let [count, setCount] = useState(quantity);
  const totalPerItem = (quantity * Number(productInfo?.price)).toFixed(2);

  const updateQuantity = (newQuantity: number) => {
    setCount(newQuantity);
    return update({ id: productOrderInfo!.id, quantity: newQuantity });
  };
  const removeEntirely = () => {
    deleteItem(productOrderInfo!.id)
      .unwrap()
      .then()
      .catch((error) => console.error(error));
  };
  return (
    <>
      {productInfo && (
        <>
          <ListItem dense>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="div" sx={{ width: "200px" }}>
                {productInfo.name} <br /> €
                {Number(productInfo.price).toFixed(2)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="secondary"
                  onClick={() => updateQuantity(--count)}
                  disabled={count <= 0}
                  disableRipple
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {count}
                <IconButton color="secondary" onClick={() => updateQuantity(++count)} disableRipple>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
              <Typography component="div" sx={{ width: "30px" }}>
                €{totalPerItem}
              </Typography>
              <IconButton onClick={removeEntirely} disableRipple>
                <HighlightOffIcon color="secondary" />
              </IconButton>
            </Box>
          </ListItem>
          <Divider />
        </>
      )}
    </>
  );
};
