import React, {Component} from 'react';


class ListItem extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <li className="list-group-item" >
                <h4 className="font-weight-light" >{`${this.props.fname} ${this.props.lname}`}</h4>
            </li>
        );
    }
}
export default ListItem;