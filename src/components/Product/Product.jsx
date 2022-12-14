import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h5">{product.price}</Typography>

          <Typography variant="body5" color="textSecondary">
            {product.description}
          </Typography>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
