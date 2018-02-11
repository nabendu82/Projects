import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { db } from '../firebase';
// import ShowEntered from './ShowEntered';

class FormFirebase extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        //    items: [],
            text: ''
        };
    }

    handleChange(e) {
        this.setState({ 
            text: e.target.value,
        });
     }


    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
          return;
        }

        db.doc('users/college').set({ name: this.state.text })
        db.collection('suggestions').add({ name: this.state.text }) 

        this.setState({
            text: ''
        });
        
        // const newItem = {
        //   text: this.state.text,
        //   id: Date.now()
        // };

        // this.setState(prevState => ({
        //   items: prevState.items.concat(newItem),
        //   text: ''
        // }));

      }
    

    render() {
        return (
            <div>
                {/* <ShowEntered items={this.state.items} /> */}
                <Form horizontal>
                <FormGroup controlId="formHorizontalTitle">
                    <Col componentClass={ControlLabel} sm={2}>
                        Title
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                        type="text" 
                        placeholder="Change the title" 
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="primary" onClick={this.handleSubmit}>Title</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>

        );
    }

}

export default FormFirebase;