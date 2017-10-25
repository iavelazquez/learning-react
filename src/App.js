import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
//import ReviewForm from './components/ReviewList';
import {ReviewList, ReviewForm} from './components/ReviewList';




class App extends Component {

  state = {

    items: [
      {
        title: "Self-Storage",
        description: "Get a storage unit for your stuff.",
        action: "Read More"
      },
      {
        title: "Car Storage",
        description: "Find space for your vehicle.",
        action: "Read More"
      },
      {
        title: "Storage with Pickup",
        description: "We'll do all the heavy lifting.",
        action: "Read More"
      },
      {
        title: "Moving trucks",
        description: "Get a truck for your move.",
        action: "Read More"
      }
    ],
    reviews: [
      {
        title: "Self-Storage",
        review: "Get a storage unit for your stuff.",
        date: "19/10/2017",
        stars: 5
      },
      {
        title: "Car Storage",
        review: "Find space for your vehicle.",
        date: "19/10/2017",
        stars: 4
      },
      {
        title: "Storage with Pickup",
        review: "We'll do all the heavy lifting.",
        date: "19/10/2017",
        stars: 2
      },
      {
        title: "Moving trucks",
        review: "Get a truck for your move.",
        date: "19/10/2017",
        stars: 5
      }
    ],
    inputs: [
      {
        name: "Reviewer",
        type: "text",
        date: "19/10/2017",
        stars: 5
      },
      {
        name: "Title",
        type: "text",
        date: "19/10/2017",
        stars: 4
      },
      {
        name: "Comment",
        type: "text",
        date: "19/10/2017",
        stars: 2
      }
    ]
  };

  
  handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);

    let reviewItem = {
      title: e.target[1].value,
      review: e.target[2].value,
      date: "19/10/2017",
      stars: 5
    }
    
    // FIRST IMPLEMENTATION (With .concat)
    this.setState(prevState => ({
      reviews: prevState.reviews.concat(reviewItem)
    }));

    // SECOND
    //let newItem = this.state.reviews.push(reviewItem);
    //this.state.reviews.push(reviewItem);

    // Funciona con el prevState aunque en realidad no se está usando en el setState.
    // this.setState (prevState => ({
    //   reviews: this.state.reviews
    // }));

    // THIRD
    // this.state.reviews.push(reviewItem);
    
    // this.setState ({
    //   reviews: this.state.reviews
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ItemList items={this.state.items}/>
        <ReviewList reviews={this.state.reviews} />
        <ReviewForm onSubmit={this.handleSubmit} inputs={this.state.inputs}/>
      </div>
    );
  }
}

export default App;
