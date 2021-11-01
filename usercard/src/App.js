import React from 'react'
import './App.css';
import axios from 'axios'



class App extends React.Component {
    state = {
      gitHub: [],
      followers: [],
      users: ''
    }

    componentDidMount() {
       axios.get(`https://api.github.com/users/${this.state.users}/followers`)
           .then(res => {
                 this.setState({
                  ...this.state,
                 followers:res.data.message
                 })
              })
             .catch(err=>{
                console.log(err)
             })  
    }

    componentDidUpdate(){
        
    }

    handleChange = (e) =>{
      this.setState({
        ...this.state,
        users:e.target.value
        
      })
      
    }

    handleClick = (e) =>{
      e.preventDefault()
      axios.get(`https://api.github.com/users/${this.state.users}`)
          .then(res =>{
            this.setState({
              ...this.state,
              gitHub: res.data
            })
          })
          .catch(err =>{
            console.log(err)
          })
      
    }

    render(){
      return(
      <div>
        <header>
          <h1>Git Users Profile Search Engine</h1>
          <form>
              <input placeholder='Please enter a username'  onChange={this.handleChange}/>
              <button onClick={this.handleClick}>search</button>
          </form>
        </header>
          <div className='profileDiv'>
            <div className='profile'>
                <h2>{this.state.gitHub.name}</h2>
                <h3>{this.state.gitHub.login}</h3>
                <p>{this.state.gitHub.location}</p>
                <img src={this.state.gitHub.avatar_url} alt=''/>
                <p>{this.state.gitHub.login}</p> 
                <p>{this.state.gitHub.followers}</p>  
                <p>{this.state.gitHub.followering}</p> 
          </div>
        </div> 
      </div>)
    }
}

export default App;

