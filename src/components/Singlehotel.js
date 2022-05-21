
import "./hotel.css"

export const Singlehotel=({value})=>{
    return (
        <>
        <div className="container">
        <div className="image">
       <img src={value.image} alt="food"/>
       </div>
        <div>
            <p>{value.name}</p>
            <p>{value.cuisine}</p>
            <p>{`cost ${value.cost} for one`}</p>
            <p>{`Min ${value.minprice}`}</p>
            <p>{value.payment.data}</p>
        </div>
        <div>
            <p>{value.rating}</p>
            <p>{value.votes} votes</p>
            <p>{value.reviews} reviews</p>
        </div>
       </div>
    </>

    )
}