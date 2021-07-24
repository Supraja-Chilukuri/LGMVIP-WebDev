import './App.css';
import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Loader from './Components/Loader';
import Cards from './Components/Cards';

class App extends Component{
    constructor(){
        super()
        this.state = {
            users : [],
            getUsers : false
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
    }

    onButtonSubmit = () => {
        this.setState({getUsers : !this.getUsers})

        const loadtime = setTimeout(() => {

            fetch('https://reqres.in/api/users?page=1').then(response => {
                return response.json();
            }).then(users => {
                this.setState({users : users.data})
            });
        }, 3000);
        return () => clearTimeout(loadtime);
    }

    render(){
 
        if(this.state.users.length === 0 && this.state.getUsers === false){
            return (
                <div><Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                      <div className="typing">
                        <h1> Welcome to <span className="istreamzio">iStreamzio</span> <br/> Click <b>Get Users</b> to get the user data!!</h1>

                      </div>
                    </div>
                </div>
            );
        }
        else if(this.state.users.length === 0){
            return (
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                    <Loader/>
                    </div>
                </div>
            );            
        }
        else{
            return(
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit} />
                    <div className="body">
                        <Cards users={this.state.users} />
                    </div>                    
                </div>
            )
        }
    }

}

export default App;
