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
        <NewsList addClass={`us-${isButtonClicked}`}
          newsList={this.props.usSearchList} />

        <NewsList addClass={`gb-${isButtonClicked}`}
          newsList={this.props.gbSearchList} />

        <NewsList addClass={`world-${isButtonClicked}`} newsList={this.props.worldResultList} />
      </div>

    </>
  );
  }
}

export default Home;
