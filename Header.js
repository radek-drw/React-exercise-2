const Header = props => {
   const activeItems = props.items.filter(item => item.active);
   const number = activeItems.length;

   return (
      <>
         <h2>Order summary: {number}</h2>
         <h2></h2>
         <h2>To pay: {number ? `${number * 10} euro` : "You don't buy you don't pay"}</h2>
      </>
   )
}