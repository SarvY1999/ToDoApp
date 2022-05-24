import React from 'react';
import logo from './logo.png'
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list]
      list.push(newItem);

      this.setState({
        list, newItem: ""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id)
    this.setState({list: updatedList})
  }

  updateInput(input){
    this.setState({newItem: input})
  }


  render(){
    return(
      <div>
        <img src={logo} alt = "app Logo"width="100" height="100" className ="logo"></img>
        <h1 className='app-title'>ToDo App</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input type="text" className="input-test" placeholder="Write a Todo"
          required value={this.state.newItem} onChange ={e => this.updateInput(e.target.value)}></input>
          <button className='add-btn'
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add ToDo</button>
          <div className='list'>
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input type ="checkbox" name="idDone" checked={item.isDone} onChange={()=>{}}></input>
                    {item.value}
                    <button className='btn' onClick={()=> this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
              <li>
                <input type="checkbox" name ="" id=""></input>
                Read Books
                <button className='btn'>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App