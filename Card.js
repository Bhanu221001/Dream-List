import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddProduct} from './actions';
import { RemoveProduct } from './actions';
import './card.css'
const Card = ({products,AddProduct,RemoveProduct}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await AddProduct({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <div id="card">
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input id="enterdreams" type="text" placeholder="Enter Your Dreams To FullFilled" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit" id="adddreambutton"class="btn btn-success">
                        Add Your Dream 
                        </button> 
                    </form>
                    <br />
                    {products.map(product => {
                        return(
                            <div className="item" id="input" >{product.name} 
                            <span onClick={()=> RemoveProduct(product.name)} id="cross" style={{"float": "right","padding":"3px 10px 6px 10px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
        </div>
    )
}

const mapStateToProps = (state) =>({
    products: state
})

export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card);