const ListItems = props => {
   const items = props.items.map(item => {
      return (
         <Item
            key={item.id}
            id={item.id}
            name={item.name}
            active={item.active}
            price={item.price}
            changeStatus={props.changeStatus}
         />
      )
   })

   return (
      <ul>
         {items}
      </ul>
   )
}