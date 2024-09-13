/**
 * @description DrinksPage component with dynamic price calculation
 * @author zqsun
 * @date 2024/9/13
 * @version 1.0
 */

import styles from './DrinksPage.module.scss';
import { Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { drinkItems } from '../ts/constant/drink-constant';
import FlexCenter from 'react-flex-center';

const DrinksPage = () => {
  /* state start*/
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  /* state end*/

  /* function start*/
  const handleAddItem = (price: number) => {
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + price);
  };
  /* function end*/

  return (
    <div id="DrinksPage" className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {drinkItems.map((drink, index) => (
            <div>
              <button
                key={index}
                onClick={() => handleAddItem(drink.price)}
                className={styles.drinkButton}
                style={{marginBottom: '10px'}}
              >
                <FlexCenter>
                  <p>{drink.name_jp}</p>
                  <p>{`-${drink.price}円`}</p>
                </FlexCenter>
              </button>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              お会計
            </Typography>
            <Typography variant="body1">
              商品数: {totalItems}
            </Typography>
            <Typography variant="body1">
              合計金額: {totalPrice} 円
            </Typography>
          </Paper>

        </Grid>
      </Grid>
    </div>
  );
};

export default DrinksPage;
