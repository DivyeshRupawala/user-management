import React, { Component } from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import Clock from '../commonComponent/Clock'
import ModalPopup from './container/ModalPopup'

class App extends Component {
  render() {
     
    return (
     <div className="App">
        <ModalPopup 
            title="Success" 
            body="Record has beed added successfully." 
            okButtonName="Ok" 
            closeButtonName="Cancel" 
            isShow={true} />                  
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        <Header />

        {/* Routing Section Changing every time*/}
        <div className="center-panel">          
          <center>
            <Clock />
            {this.props.children}
          </center>
        </div>       

        <Footer />        
      </div>
    );
  }
}

export default App;
