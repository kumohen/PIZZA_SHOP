import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import {getAllPizzas,deletePizza} from "../../actions/pizzaActions"
import Loading from "../../compoents/Loading"
import Error from "../../compoents/Error"

const PizzaList = () => {
    const dispatch = useDispatch();
    const pizzasState = useSelector(state => state.getAllPizzasReducer)
    const {pizzas,loading,error} = pizzasState  ;

   useEffect(()=>{
      dispatch(getAllPizzas());
   },[])
    return (
        <div>
            <h2>PizzaList</h2>
            <div className="row justify-content-center ">
            {loading && <Loading />}
            {error && <Error error="somthing is worng" />}
            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {pizzas && pizzas.map(pizza => {
                    return (
                        <tr>
                            <td>{pizza.name}</td>
                            <td>
                                small:{pizza.prices[0]['small']} <br />
                                medium:{pizza.prices[0]['medium']} <br />
                                large:{pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className="fa fa-trash m-1" onClick={()=> dispatch(deletePizza(pizza._id))}></i>
                                <Link to = {`/admin/editPizza/${pizza._id}`}>  <i className="fa fa-edit m-1"></i></Link>
                              
                            </td>
                        </tr>
                    )
                })}
            </table>
            
           </div>
        </div>
    );
};

export default PizzaList;

