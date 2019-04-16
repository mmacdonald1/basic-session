export default (state={},action) =>{
  switch(action.type){
    case 'SET_USER':
      console.log("Set User Reducer", state, action)
      return action.user
    case 'DELETE_USER':
      console.log("Logout/Delete User Reducer", state, action)
      return {}
    default:
      return state
  }
}
