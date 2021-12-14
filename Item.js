const Item = ({ id, name, price, active, changeStatus }) => {
   return (
      <li
         className={active ? 'enabled' : 'disabled'}
         onClick={() => changeStatus(id)}
      >
         <span className="item">{name}</span>
         <span className="price">€{price.toFixed(2)}</span>
      </li>
   )
}