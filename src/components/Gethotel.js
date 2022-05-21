import { useEffect } from "react"
import axios from "axios"




export const Gethotel=({setData,page,priceorder,filterrating})=>{
  useEffect(()=>{
    loaddata(page,priceorder,filterrating).then((res)=>setData(res.data))
  },[page,priceorder,filterrating])
  const loaddata=(page,priceorder,filterrating)=>{
      return axios("http://localhost:8080/food",{
          method:"GET",
          params:{
            _page:page,
            _limit:5,
            _sort:"cost",
            _order:priceorder,
            rating_gte:filterrating
          }
      })
  }
    return (
        <div>
          <h2>Restaurent details</h2>
        </div>
    )
}