import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Pizza from '../compoents/Pizza';
import {getAllPizzas} from "../actions/pizzaActions"
import Loading from "../compoents/Loading"
import Error from "../compoents/Error"
import Filter from "../compoents/Filter"
//import pizzas from "../pizzaData";

const Home = () => {
     const dispatch = useDispatch();
     const pizzasState = useSelector(state => state.getAllPizzasReducer)
     const {pizzas,loading,error} = pizzasState  ;

    useEffect(()=>{
       dispatch(getAllPizzas());
    },[])
    return (
        <div>
            <Filter />
           <div className="row justify-content-center ">
               {loading ? (<Loading />): error ? ( <Error error="something went worng" /> ) : 
                   ( pizzas.map(pizza => {
                    return <div className="col-md-3 m-3"  key={pizza._id}>
                        <div>
                            <Pizza  pizza={pizza}  />
                        </div>
                    </div>
                }))
               }
            
           </div>
        </div>
    );
};

export default Home;