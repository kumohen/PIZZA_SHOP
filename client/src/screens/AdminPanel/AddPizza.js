import React,{useState} from 'react';
import {addPizza} from "../../actions/pizzaActions";
import {useDispatch,useSelector} from 'react-redux'
import Loading from "../../compoents/Loading"
import Error from "../../compoents/Error"
import Success from "../../compoents/Success"

const AddPizza = () => {
    const[name,setName]=useState("");
    const[smallPrice,setSmallPrice] = useState()
    const[mediumPrice,setMediumPrice] = useState()
    const[largePrice,setLargePrice] = useState()
    const[image,setImage] = useState("")
    const[description,setDescription] = useState("")
    const[category,setCategory] = useState("")

    const dispatch = useDispatch();
     
    const newPizzaState = useSelector(state => state.addPizzaReducer);
    const {error,loading ,success} = newPizzaState ;  
    const formHandler = e => {
        e.preventDefault();
        const pizza = {
            name,image,category,description,
            price:{
                small:smallPrice,
                medium:mediumPrice,
                large:largePrice
            }
        }
        console.log(pizza);
        dispatch(addPizza(pizza));
    }
    return (
        <div>
              {loading && <Loading />}
                  {success && <Success success="You successfully registered" />}
                  {error && <Error error="somthing is worng" />}
            <div>
                <h2>add pizza</h2>
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)} />
                    <input className="form-control" type="text" value={smallPrice} placeholder="smallPrice" onChange={e => setSmallPrice(e.target.value)} />
                    <input className="form-control" type="text" value={mediumPrice} placeholder="mediumPrice" onChange={e => setMediumPrice(e.target.value)} />
                    <input className="form-control" type="text" value={largePrice} placeholder="largePrice" onChange={e => setLargePrice(e.target.value)} />
                    <input className="form-control" type="text" value={image} placeholder="image" onChange={e => setImage(e.target.value)} />
                    <input className="form-control" type="text" value={description} placeholder="description" onChange={e => setDescription(e.target.value)} />
                    <input className="form-control" type="text" value={category} placeholder="category" onChange={e => setCategory(e.target.value)} />
                   <br />
                    <button className="btn" type="submit">Add Pizza</button>
                </form>
            </div>
        </div>
    );
};

export default AddPizza;