import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllUser,deleteUser} from "../../actions/userActions"
import Loading from "../../compoents/Loading"
import Error from "../../compoents/Error"

const UserList = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.getAllUserReducer)
    const {users,loading,error} = userState  ;

   useEffect(()=>{
      dispatch(getAllUser());
   },[])
    return (
        <div>
            <h2>User List</h2>
            <div className="row justify-content-center ">
            {loading && <Loading />}
            {error && <Error error="somthing is worng" />}
            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Delete</th>
                     
                    </tr>
                </thead>
                <tbody>
                {users && users.map(user => {
                    return (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>
                               {user.email}
                            </td>
                            <td>
                               
                                    <button className="btn" onClick ={() => dispatch(deleteUser(user._id))} >Delete</button>
                              
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            
           </div>
        </div>
    );
};

export default UserList;

