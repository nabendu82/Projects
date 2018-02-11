import React, { Component } from 'react';
import { db } from './firebase';
import logo from './logo.svg';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class ShowImages extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: '',
            title: 'Portfolio',
            suggests: [],
            isLoggedOut: false
        };
      }
    
      // https://zoodegranby.com/content/images/_300xAUTO_fit_center-center/Panda_280x280.jpg
      // https://21786-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2013/10/giraffe-300px-animal-encouter.jpg
      // https://i.pinimg.com/736x/de/a5/8a/dea58a49c02061b26be655da7af8379d.jpg
      // https://www.wildlifealliance.org/wp-content/uploads/2017/07/clouded-leopard1.jpg
      // https://lindsaywildlife.org/wp-content/uploads/2014/03/BDOW-Houston-Hara-e1427144397779-300x300.jpg
      // http://media.beam.usnews.com/f3/38e39e187adf3c5aadaadf6d18cbdf/13790caribou.jpg
    
    
    
      componentDidMount() {
        // db
        //   .doc('users/college')
        //   .get()
        //   .then(doc => this.setState({ title: doc.data().name }))
    
        db
          .collection('courses')
          .onSnapshot(coll => 
          {
            const suggests = coll.docs.map(doc =>
            doc.data())
            this.setState({ suggests })
           })
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
    
        // db.doc('users/college').set({ name: this.state.text })
        // db.collection('courses').add({ name: this.state.text }) 
        const newSuggestion = db.collection('courses').doc()
        newSuggestion.set({
          name: this.state.text,
          id: newSuggestion.id
        });
    
        this.setState({
            text: ''        
        });
    
      }

    render() {
        return(
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.state.title}</h1>
            </header>
            <div className="container">
              
                {this.state.suggests &&
                  this.state.suggests.map((topic,index) => (
                  <div key={index}>
                  <Grid>
                    <Row className="show-grid">
                    <Col xs={6} md={4}>
                      <img src={topic.name} alt="animals"/>
                      <button
                      onClick={() =>
                        db
                          .collection('courses')
                          .doc(topic.id)
                          .delete()
                      }   
                    >Delete Me</button>                 
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem.Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    </Row>
                  </Grid>
                  <br/>
                  </div>
                ))}
              
              <form>
                <input 
                  type="text"
                  placeholder="Enter image url" 
                  value={this.state.text}
                  onChange={this.handleChange}
                />            
                <Button bsSize="small" onClick={this.handleSubmit}>Click Me</Button>            
              </form>
              
          </div>
          </div>
        );
    }


}

export default ShowImages;