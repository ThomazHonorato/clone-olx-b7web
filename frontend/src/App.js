import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Template } from './Components/mainComponents';
import Header from './Components/Partials/Header/header';
import Footer from './Components/Partials/Footer/footer';

import './App.css';

const Page = (props) =>{
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}




//Configuração do Reducer
const mapStateToProps=(state)=>{
  return {
    user:state.user
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page); 