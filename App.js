class App extends React.Component {

   state = {
      items: [
         { id: 1, name: 'pizza', active: false },
         { id: 2, name: 'tea', active: true },
         { id: 3, name: 'double-decker', active: true },
         { id: 4, name: 'coffee', active: false },
         { id: 5, name: 'milkshake', active: false },
         { id: 6, name: 'sprite', active: false },
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