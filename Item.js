const Item = ({ id, name, active, changeStatus }) => {
   return (
      <li
         className={active ? 'enabled' : 'disabled'}
         onClick={() => changeStatus(id)}
      >{name}</li>
   )
}