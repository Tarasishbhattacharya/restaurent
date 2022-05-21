import { useState } from "react";
import { Gethotel } from "./Gethotel"
import { Singlehotel } from "./Singlehotel"




export const Displayhotel=()=>{
    const[data,setData]=useState([])
    const[page,setPage]=useState(1);
    const[priceorder,setPriceorder]=useState("asc");
    const[filterrating,setFilterrating]=useState(0)
    return (
        <>
        <Gethotel setData={setData} page={page} priceorder={priceorder} filterrating={filterrating}/>
          <button disabled={priceorder=="asc"}   onClick={()=>{setPriceorder("asc")}}>price by asc</button>
          <button  disabled={priceorder=="desc"} onClick={()=>{setPriceorder("desc")}}>price by Dsc</button>

          <button onClick={()=>{setFilterrating(4)}}>Gretaer than 4</button>
          <button onClick={()=>{setFilterrating(3)}}>Greater than 3</button>
          <button onClick={()=>{setFilterrating(2)}}>Greater than 2</button>
          <button onClick={()=>{setFilterrating(1)}}>Greater than 1</button>

        {data.map((item)=>{
            return <Singlehotel value={item} />
        })}
        <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
        <button  disabled={page==data.length} onClick={()=>setPage(page+1)}>Next</button>
        </>
    )
}