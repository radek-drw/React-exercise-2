const ListItems = props => {
   const items = props.items.map(item => {
      return (
         <Item
            key={item.id}
            id={item.id}
            name={item.name}
            active={item.active}
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