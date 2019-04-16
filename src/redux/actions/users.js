export const isLoggedIn = () =>{
  return (dispatch) =>{
    fetch('http://localhost:3000',{
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => dispatch(setUser(data.name[0])))
    .catch(console.log)
  }
}

export const loginUser = (name) =>{
  console.log(name)
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method:"POST",
      credentials: 'include',
      headers:{
        "Content-type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name:name
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(setUser(data[0]))
    })
  }
}

export const logoutUser = () =>{
    return (dispatch) =>{
    fetch('http://localhost:3000/logout',{
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => dispatch(deleteUser()))
  }
}

export const deleteUser = () =>{
  console.log("Action logout user")
  return{
    type:"DELETE_USER"
  }
}

export const setUser = (user) => {
  console.log("Action set user", user)
  return{
    type:"SET_USER",
    user
  }
}
