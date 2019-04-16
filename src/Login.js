import { h, Component } from 'preact';
import {loginUser, logoutUser, isLoggedIn} from './redux/actions/users'
import { connect } from 'preact-redux';

class Login extends Component{
  state = {
    inputName:""
  }
  componentDidMount(){
    this.props.isLoggedIn()
  }

  handleChange = (e) =>{
    let name = e.target.value
    this.setState({inputName:name})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.loginUser(this.state.inputName)
  }

  handleLogout=(e)=>{
    this.props.logoutUser()
    this.setState({inputName:""})
  }
  handleSessionButton=(e)=>{

  }

  render(){
    return(
      <div className="login">
        {this.props.user.name ? [
          <h1>Hi {this.props.user.name}</h1>,
          <button onClick={this.handleLogout}>Logout</button>
        ]
        :
        <h1>Please Login</h1>}
        <form onSubmit={this.handleSubmit}>
          <h4>First name:</h4>
          <input type="text" name="name" value={this.state.inputName} onChange={this.handleChange}></input>
          <button type="submit">Login</button>
        </form>
        

      </div>
    )
  }
}

const mapDispatchToProps= dispatch =>{
  return({
    loginUser: (name) => dispatch(loginUser(name)),
    logoutUser: ()=> dispatch(logoutUser()),
    isLoggedIn: ()=> dispatch(isLoggedIn())
  })
}

const mapStateToProps= state =>{
  return({
    user: state.users
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
