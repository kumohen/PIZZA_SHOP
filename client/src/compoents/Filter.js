import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {filterPizzas} from "../actions/pizzaActions";

const Filter = () => {
    const[searchKey,setSearchKey] = useState("");
    const[category,setCategory] = useState("all");
    const dispatch = useDispatch();


    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 ">
                     <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="searchPizza" className="form-control" />
                </div>
                <div className="col-md-3 mt-2">
                    <select className="form-control" value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">ALL</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Nonveg</option>
                    </select>
                </div>
                <div className="col-md-3 mt-1 ">
                    <button className="btn" onClick={()=> dispatch(filterPizzas(searchKey,category))}>Filter</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;