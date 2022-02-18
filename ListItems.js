const ListItems = ({ changeStatus, items }) => {
   const itemsList = items.map(item => (
      <Item
         key={item.id}
         id={item.id}
         name={item.name}
         active={item.active}
         price={item.price}
         changeStatus={changeStatus}
      />
   ))

   return (
      <ul>
         {itemsList}
      </ul>
   )
}