import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state={
                fname: '',
                lname: ''
                
        }
    }
    submitAction(e){
        e.preventDefault();
        const {fname, lname} = this.state;
        const id = Date.now();
        
        if(fname!==""&&lname!==""){
            this.props.addAction(id,fname, lname);
            this.setState({fname: '', lname: ''});
        }
    }
    render(){
        return(
            <form className="col-md-5 " onSubmit={(e)=>this.submitAction(e)} >
                <div className="card card-default form-group">
                    <h3 className="card-header font-weight-light">add your guests</h3>
                   <input 
                   type="text" 
                   value={this.state.fname}
                   onChange={event => this.setState({fname: event.target.value})}
                   className="card-body form-control"
                   name="fname"
                   placeholder="first name"
                   />
                   <input 
                   type="text" 
                   className="card-body form-control"
                   name="lname"
                   value={this.state.lname}
                   onChange={event => this.setState({lname: event.target.value})}
                   placeholder=" last name"
                   />
                    <button type="submit" className="btn btn-outline-success" >ok!</button>  
                </div>
               
            </form>
        );
    }
}
export default Form;