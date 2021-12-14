class App extends React.Component {

   state = {
      items: [
         { id: 1, name: 'pizza', price: 13, active: false },
         { id: 2, name: 'tea', price: 2.60, active: false },
         { id: 3, name: 'big-mac', price: 5.25, active: false },
         { id: 4, name: 'coffee', price: 3.10, active: false },
         { id: 5, name: 'milkshake', price: 1.90, active: false },
         { id: 6, name: 'sprite', price: 1.50, active: false },
      ]
   }

   handleChangeStatus = id => {
      const items = this.state.items.map(item => {
         if (id === item.id) {
            item.active = !item.active
         }
         return item
      })

      this.setState({
         items
      })
   }

   render() {
      return (
         <React.Fragment>
            <Header
               items={this.state.items}
            />
            <ListItems
               items={this.state.items}
               changeStatus={this.handleChangeStatus}
            />
         </React.Fragment>
      )
   }
}