import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Switch,Route,Link} from "react-router-dom";
import UserList from "./AdminPanel/UserList"
import PizzaList from "./AdminPanel/PizzaList"
import AddPizza from "./AdminPanel/AddPizza"
import OrderList from "./AdminPanel/OrderList"
import EditPizza from "./AdminPanel/EditPrizza"

const AdminScreen = () => {
    const userState = useSelector(state => state.userLoginReducer)
    
    const {currentUser} = userState ;

    useEffect(()=>{
         if(!currentUser.isAdmin){
            window.location.href ="/"
         }
    },[])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                <h3>Admin Panel</h3>
            <ul className="adminfunction">
                <li> <Link to="/admin/userlist">Users List</Link> </li>
                <li> <Link to="/admin/orderlist">Pizzas List</Link> </li>
                <li> <Link to="/admin/addPizza">Add new Pizza</Link> </li>
                <li> <Link to="/admin/pizzalist">Order List</Link> </li>
            </ul>  
            <Switch>
            <Route path="/admin" component={UserList} exact />
                <Route path="/admin/userlist" component={UserList} exact />
                <Route path="/admin/orderlist" component={OrderList} exact />
                <Route path="/admin/addPizza" component={AddPizza} exact />
                <Route path="/admin/pizzalist" component={PizzaList} exact />
                <Route path="/admin/editPizza/:id" component={EditPizza} exact />
            </Switch>   
                </div>
            </div>
           
        </div>
    );
};

export default AdminScreen;