import React,{useState,useEffect} from 'react';
import {getPizzaById,updatePizza} from "../../actions/pizzaActions";
import {useDispatch,useSelector} from 'react-redux'
import Loading from "../../compoents/Loading"
import Error from "../../compoents/Error"
import Success from "../../compoents/Success"

const EditPizza = ({match}) => {
    const[name,setName]=useState("");
    const[smallPrice,setSmallPrice] = useState()
    const[mediumPrice,setMediumPrice] = useState()
    const[largePrice,setLargePrice] = useState()
    const[image,setImage] = useState("")
    const[description,setDescription] = useState("")
    const[category,setCategory] = useState("")

    const dispatch = useDispatch();
     

    const newPizzaState = useSelector(state => state.getPizzaById);
    const editPizzaState = useSelector(state => state.editPizzaReducer) 

    const {error,loading,pizza } = newPizzaState ;  
    const {editsuccess} = editPizzaState ;
     
    useEffect(()=>{
        if(pizza){
            if(pizza._id === match.params.id){
                setName(pizza.name)
                setSmallPrice(pizza.prices[0]['small'])
                setMediumPrice(pizza.prices[0]['medium'])
                setLargePrice(pizza.prices[0]['large'])
                setImage(pizza.image)
                setDescription(pizza.description)
                setCategory(pizza.category)
            } else {
                dispatch(getPizzaById(match.params.id))
            }
            
        } else {
            dispatch(getPizzaById(match.params.id))
        }
     
    },[pizza,dispatch])

    const formHandler = e => {
        e.preventDefault();
        const pizza = {
            _id:match.params.id,
            name,image,category,description,
            price:{
                small:smallPrice,
                medium:mediumPrice,
                large:largePrice
            }
        }
        console.log(pizza);
        dispatch(updatePizza(pizza));
    }
   
    return (
        <div>
              {loading && <Loading />}
                {editsuccess && <Success success="pizza is successfully edited" />}
              {error && <Error error="somthing is worng" />}
            <div>
                <h2>Edit pizza</h2>
                
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)} />
                    <input className="form-control" type="text" value={smallPrice} placeholder="smallPrice" onChange={e => setSmallPrice(e.target.value)} />
                    <input className="form-control" type="text" value={mediumPrice} placeholder="mediumPrice" onChange={e => setMediumPrice(e.target.value)} />
                    <input className="form-control" type="text" value={largePrice} placeholder="largePrice" onChange={e => setLargePrice(e.target.value)} />
                    <input className="form-control" type="text" value={image} placeholder="image" onChange={e => setImage(e.target.value)} />
                    <input className="form-control" type="text" value={description} placeholder="description" onChange={e => setDescription(e.target.value)} />
                    <input className="form-control" type="text" value={category} placeholder="category" onChange={e => setCategory(e.target.value)} />
                   <br />
                    <button className="btn" type="submit">Edit Pizza</button>
                </form>
            </div>
        </div>
    );
};

export default EditPizza;