import React, {Component} from 'react';
import ListItem from './list-item';

class List extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-md-6 offset-md-1" >
                <ul className="list-group" >
                    
                    {Object.keys(this.props.contacts).map(key => <ListItem 
                        key={key}
                        id={key}
                        fname={this.props.contacts[key].fname} 
                        lname={this.props.contacts[key].lname} 
                        
                        />)}
                </ul>
                <br/>
                <button className="btn btn-outline-warning"
                onClick={()=>this.props.clearList()}
                >Delete All
                </button>
            </div>
        );
    }
}
export default List;