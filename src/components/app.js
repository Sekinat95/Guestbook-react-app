import React, {Component} from 'react';
import Form from './form';
import List from './list';

class App extends Component{
    constructor(){
        super();
        //state is an object that contains the app data which is also an object
    this.state=  {
                contacts: {
                item: {
                    fname: 'sekinat',
                    lname: 'yahya'
                },
                item1: {
                    fname: 'sofiyah',
                    lname: 'aliyu'
                }
            }
        
    }
    //making sure the functions addAction + deleteAction functions has access to the components states
    this.addAction = this.addAction.bind(this);
   // this.deleteAction = this.deleteAction.bind(this);
    this.clearList = this.clearList.bind(this);
}
    //function to add a new guest
    addAction(id, fname, lname){
        //contacts is an object, spread it out as a list
        const contacts = {...this.state.contacts};
        //such that each of its value is  in the format below
        contacts[id] = {fname,lname};
        //set the new contact with id of whatever to the current state 
        this.setState({contacts});
    }
    //function to delete all guestss on button click
    // deleteAction(id){
    //     const contacts = {...this.state.contacts};
    //     delete contacts[id];
    //     this.setState({contacts});
    // }
    clearList(){
        this.setState({
            contacts: []
        });
    }
    render(){
        return (
            //making sure the form and list classes both have access to 
            //data and functions they need which are defined here in app class
        <div >
             <h1 className="Jumbotron jumbotron-fluid text-success font-weight-light">GuestBook</h1>
             <hr/>
             <div className="row" >
                <Form addAction={this.addAction}/>
                <List clearList={this.clearList} 
                contacts={this.state.contacts}/>
             </div>
        </div>
    );
    }
}
export default App;