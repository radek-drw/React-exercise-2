const Header = props => {
   const activeItems = props.items.filter(item => item.active);
   const number = activeItems.length;
   const itemsPrice = activeItems.map(item => item.price);
   const summary = itemsPrice.reduce((a, b) => a + b, 0);

   return (
      <>
         <h2>Order summary: {number}</h2>
         <h2>Total to pay: {summary ? `€ ${summary.toFixed(2)}` : "You don't buy you don't pay =D"}</h2>
      </>
   )
}