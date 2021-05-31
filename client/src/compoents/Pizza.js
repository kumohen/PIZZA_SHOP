import React,{useState} from 'react';
import {Modal} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {addTocart} from "../actions/cartAction"
import AOS from 'aos'
import 'aos/dist/aos.css';

const Pizza = ({pizza}) => {
    const[quantity,setQuantity] = useState(1);
    const[variant,setVarient] = useState("small");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    AOS.init();
    const addTocartItem = ()=>{
        dispatch(addTocart(pizza,quantity,variant));
    }

    return (
        <div  className="shadow-lg p-3 mb-5 bg-body rounded"  data-aos="zoom-in">
            <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} alt="skkdk" className="img-fluid" style={{height:'200px',width:"200px"}} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varient</p>
                    <select className="form-control" value={variant} onChange={(e)=> {setVarient(e.target.value)}} >
                        {pizza.varients.map((varient,index) => (
                            <option value={varient} key={index}>{varient}</option>
                        ))}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>quantity</p>
                    <select className="form-control" value={quantity} onChange={(e)=> {setQuantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1} key={i} >{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
           
            <div className="flex-container">
                <div className=" m-1 w-100">
                    <p>Price : {pizza.prices[0][variant] * quantity}</p>
                   
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={addTocartItem}>Add To Cart</button>
                </div>
            </div>

            <Modal show={show}>
  <Modal.Header closeButton>
    <Modal.Title>{pizza.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={pizza.image} alt="skkdk" className="img-fluid" style={{height:'400px'}} />
  <p>{pizza.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button onClick={handleClose} >close</button>
  </Modal.Footer>
</Modal>


        </div>
    );
};

export default Pizza;