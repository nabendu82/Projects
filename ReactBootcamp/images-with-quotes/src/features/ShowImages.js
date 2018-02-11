import React, { Component } from 'react';
import { db } from "../config/constants";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {firebaseAuth} from "../config/constants";

class ShowImages extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: '',
            title: 'Images',
            suggests: [],
            userId: '',
            randomText: ''           
        };
      }
    
      // https://zoodegranby.com/content/images/_300xAUTO_fit_center-center/Panda_280x280.jpg
      // https://21786-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2013/10/giraffe-300px-animal-encouter.jpg
      // https://i.pinimg.com/736x/de/a5/8a/dea58a49c02061b26be655da7af8379d.jpg
      // https://www.wildlifealliance.org/wp-content/uploads/2017/07/clouded-leopard1.jpg
      // https://lindsaywildlife.org/wp-content/uploads/2014/03/BDOW-Houston-Hara-e1427144397779-300x300.jpg
      // http://media.beam.usnews.com/f3/38e39e187adf3c5aadaadf6d18cbdf/13790caribou.jpg
    
    
    
      componentDidMount() {
        //Logic to generate random text from api
        const url = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                      randomText: data[0]
                    });
              })
            .catch(error => console.log('Something went wrong', error));

        //getting the userid for further use
        var user = firebaseAuth().currentUser;
        if (user) {        
            this.setState({
                userId: user.uid
            });
        } else {
            console.log("Not logged in");
        }
    
        //Filtering logic based on userid
        db
          .collection('courses')
          .onSnapshot(coll => 
          {
            let tmpArr = [];
            let suggests = coll.docs.map(doc => {
                if(doc.data().userId == this.state.userId) {
                    tmpArr.push(doc.data()); 
                }
                return tmpArr;               
            });
            this.setState({ suggests: tmpArr });
           }
        )
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

        const newSuggestion = db.collection('courses').doc()
        newSuggestion.set({
          name: this.state.text,
          id: newSuggestion.id,
          userId: this.state.userId
        });
    
        this.setState({
            text: ''        
        });
    
      }

    render() {
        return(
            <div className="App">
            <header className="App-header">
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
                    {this.state.randomText}
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