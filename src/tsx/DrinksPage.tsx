/**
 * @description DrinksPage component with dynamic price calculation
 * @author zqsun
 * @date 2024/9/13
 * @version 1.0
 */

import styles from "./DrinksPage.module.scss";
import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { drinkItems } from "../ts/constant/drink-constant";
import FlexCenter from "react-flex-center";

const DrinksPage = () => {
  /* state start*/
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [drinkCounts, setDrinkCounts] = useState<number[]>(
    drinkItems.map((): number => 0),
  );
  /* state end*/

  /* function start*/
  const handleAddItem = (index: number, price: number) => {
    const newDrinkCounts = [...drinkCounts];
    newDrinkCounts[index] += 1; // Increment the count for the specific drink

    setDrinkCounts(newDrinkCounts);
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + price);
  };
  /* function end*/

  return (
    <div id="DrinksPage" className={styles.root}>
      <Grid container spacing={3}>
        {/*order part start*/}
        <Grid item xs={12} md={6}>
          {drinkItems.map((drink, index) => (
            <FlexCenter key={index}>
              <button
                id={drink.nameEn}
                onClick={() => handleAddItem(index, drink.price)}
                className={styles.drinkButton}
                style={{ marginBottom: "10px" }}
              >
                <FlexCenter
                  style={{
                    justifyContent: "space-between",
                    padding: "0 10px",
                  }}
                >
                  <p>{drink.nameJp}</p>
                  <p>{`${drink.price}円`}</p>
                </FlexCenter>

                <div className={styles.drinkCount} id={drink.countName}>
                  {drinkCounts[index]}
                </div>
              </button>
            </FlexCenter>
          ))}
        </Grid>
        {/*order part end*/}

        {/* summary  part start*/}
        <Grid item xs={12} md={6}>
          <FlexCenter
            style={{
              height: "100%",
            }}
          >
            <Paper className={styles.summaryPaper} elevation={8}>
              <h2 className={styles.summaryTitle}>お会計</h2>
              <hr />
              <div>
                <span id={'count'}>商品数: {totalItems} 個</span>
              </div>
              <div>
                <span id={'price'}>合計金額: {totalPrice} 円</span>
              </div>
            </Paper>
          </FlexCenter>
        </Grid>
        {/* summary  part end*/}
      </Grid>
    </div>
  );
};

export default DrinksPage;
