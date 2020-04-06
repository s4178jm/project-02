import React from 'react';
import NewsList from './NewsList.js'
import Form from './Form'
import '../App.css';

class Home extends React.Component {

  render(){
    const isButtonClicked = (this.props.isButtonClicked) ? 'news-list' : 'news-list-pre'
  return (
    <>
    <div className= 'intro'>
      <h1 className='title'>News App <br />News around the world</h1>

      <Form
        keyChange = {this.props.keyChange}
        searchInput ={this.props.searchInput}
        value = {this.props.value}  />

      </div>

      <div className ='container'>
        <div id="US" class= "flag"><p>US</p>
        <NewsList addClass={`us-${isButtonClicked}`}
          newsList={this.props.usSearchList} />
        </div>
        <div id="GB" class= "flag"><p>GB</p>
        <NewsList addClass={`gb-${isButtonClicked}`}
          newsList={this.props.gbSearchList} />
        </div>
        <div id="Globle" class= "flag"><p>Globle</p>
        <NewsList addClass={`world-${isButtonClicked}`} newsList={this.props.worldResultList} />
      </div>
      </div>

    </>
  );
  }
}

export default Home;
