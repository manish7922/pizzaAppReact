
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import ShowOptions from './showOptions';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
class Veg extends Component {
 state={


optionsArray: {
    size:["Regular","Medium","Large"],
    crust:["NewHand","WheatThinCrust","CheeseBurst","WheatThinCrust","ClassicHandTossed"],
  },
  optionsSel: {
    size:"",
    crust:"",
  },
 options1:{}
 }

 handleChange=(e)=>{
  let s1 ={...this.props.optionsSel}
  let {currentTarget:input}=e
  s1[input.name]=input.value;
  this.props.onhandleDrop(s1)
  }
  handleChange1=(e)=>{
    let s1 ={...this.props.optionsSel}
    let {currentTarget:input}=e
    s1[input.name]=input.value;
    this.props.onhandleDrop1(s1)
    }
  


    render(){
const {vegPizza,cart,view,onButton,optionsArray,optionsSel,onhandleDrop,onhandleDrop1,onChangeOption1,name ,onMinus,onPlus,editIndex}=this.props


let cartIndex=vegPizza.findIndex((n)=>n.name===name)
console.log("cartIndex",cartIndex);
return ( 
view===0 ?(
<div className='container'>
<div className='row'>
<div className='col-9 '>
<div className='row border'>

    {vegPizza.map((n,index)=>(
        <>
        <div className='col-6 border bg-light'>
        <img src={n.image} style={{width:"100%"}} /> 
        <h6 className="text-center">{n.name}</h6>
        {/* <ShowOptions  optionsSel={optionsSel} optionsArray={optionsArray} onchangeOption={onChangeOption1}  />  */}
  
     
     <div className='d-flex'>
     <>
     
     <select className="custom-select" onChange={this.handleChange}>
     
        <option selected>Choose size</option>
         <option value="Regular">Regular</option>
         <option value="Medium">Medium</option>
         <option value="Large">Large</option>
         
         </select>
    
    
          <select className="custom-select" onChange={this.handleChange1}>
          <option selected>Choose curst</option>
          <option value="NewHand">NewHand</option>
          <option value="WheatThinCrust">WheatThinCrust</option>
          <option value="CheeseBurst">CheeseBurst</option>
          <option value="WheatThinCrust">WheatThinCrust</option>
          <option value="ClassicHandTossed">ClassicHandTossed</option>
        </select>
        </>
        </div>
     <div className='text-center'> <button className=" btn btn-primary text-center m-2" onClick={()=>onButton(index)} >Add to cart</button>
        </div>
        </div> 
        
        </>
    ))}
 
</div>
</div>
<div className='col-3 border'>
 </div>
</div>
</div>
):view===1 ? (
  <div className='container'>

<div className='row'>
<div className='col-9 '>
<div className='row border'>

    {vegPizza.map((n,index)=>(
        <>
        <div className='col-6 border bg-light'>
        <img src={n.image} style={{width:"100%"}} /> 
        <h6 className="text-center">{n.name}</h6>

        { cartIndex===index ? 
        (
          <>
          {/* <ShowOptions  optionsSel={optionsSel} optionsArray={optionsArray} onchangeOption={onChangeOption1}  /> */}
          <div className='d-flex'>
     <>
     
     <select className="custom-select" onChange={this.handleChange}>
     
        <option selected>Choose size</option>
         <option disabled value="Regular">Regular</option>
         <option disabled value="Medium">Medium</option>
         <option disabled value="Large">Large</option>
         
         </select>
    
    
          <select className="custom-select" onChange={this.handleChange1}>
          <option selected>Choose curst</option>
          <option disabled value="NewHand">NewHand</option>
          <option disabled value="WheatThinCrust">WheatThinCrust</option>
          <option disabled value="CheeseBurst">CheeseBurst</option>
          <option disabled value="WheatThinCrust">WheatThinCrust</option>
          <option disabled value="ClassicHandTossed">ClassicHandTossed</option>
        </select>
        </>
        </div>
          <div className='text-center'>
          <button className=" btn btn-danger btn-sm text-center" onClick={()=>onMinus(n.name)}  ><FaMinus /></button>    
          <button className=" btn btn-secondary btn-sm text-center" >{n.Quantity}</button>
          <button className=" btn btn-success btn-sm text-center" onClick={()=>onPlus(n.name)} ><FaPlus /></button>  
          </div> 
          </>
        ):(
         <>
         {/* <ShowOptions  optionsSel={optionsSel} optionsArray={optionsArray} onchangeOption={onChangeOption1}  />  */}
         <div className='d-flex'>
     <>
     
     <select className="custom-select" onChange={this.handleChange}>
     
        <option selected>Choose size</option>
         <option value="Regular">Regular</option>
         <option value="Medium">Medium</option>
         <option value="Large">Large</option>
         
         </select>
    
    
          <select className="custom-select" onChange={this.handleChange1}>
          <option selected>Choose curst</option>
          <option value="NewHand">NewHand</option>
          <option value="WheatThinCrust">WheatThinCrust</option>
          <option value="CheeseBurst">CheeseBurst</option>
          <option value="WheatThinCrust">WheatThinCrust</option>
          <option value="ClassicHandTossed">ClassicHandTossed</option>
        </select>
        </>
        </div>
          <div className='text-center'> <button className=" btn btn-primary text-center m-2" onClick={()=>onButton(index)} >Add to cart</button>
        </div>
         </>
        )}
     
    
        </div>
        </>
    ))}
 
</div>
</div>
<div className='col-3 border'>
{cart.map((n)=>(
  <>
  <div className="row border">
  <div className='col-4'>
  <img src={n.image} style={{width:"40%" ,height:"20vh"}} /> 
  </div>
  
  <div className='col-8'>
        <h6 className="text-center" style={{ marginLeft:"-10%"}}>{n.name}</h6> 
        <div className='row'>{n.size} {n.crust}</div>
     
        <div className='text-center'>
          <button className=" btn btn-danger btn-sm text-center" onClick={()=>onMinus(n.name)}  ><FaMinus /></button>    
          <button className=" btn btn-secondary btn-sm text-center" >{n.Quantity}</button>
          <button className=" btn btn-success btn-sm text-center" onClick={()=>onPlus(n.name)} ><FaPlus /></button>  
          </div> 
      
          </div>
          </div>
  </>
))}
 </div>
</div>
</div>
):(
  ""
)
)
    }
}
export default Veg;