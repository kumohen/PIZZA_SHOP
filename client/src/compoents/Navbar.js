import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from "../actions/userActions";
const Navbar = () => {
  const cartState = useSelector(state => state.cartReducer)
  const userState = useSelector(state => state.userLoginReducer)
  const dispatch = useDispatch();
  const {currentUser} = userState ;
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PIZZAHUB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ml-auto ">
         {currentUser ? (
           <div className="dropdown mt-2">
           <a className=" dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {currentUser.name}
           </a>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item" href="/order">Order</a>
             <a className="dropdown-item" href="#" onClick={()=> dispatch(logoutUser())}> <li  >Logout</li></a>
           
           </div>
         </div>
         ) :  (
             <li className="nav-item ">
             <a className="nav-link " aria-current="page" href="/login">Login</a>
             </li>
         )}
         
          <li className="nav-item ">
          <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
         </li>
       
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;