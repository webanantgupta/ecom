import axios from "axios";
import { useState,useEffect } from "react";
import Choose from "../components/Choose";
import HeroImageCarousal from "../components/HeroImageCarousal";
import PopularBrands from "../components/PopularBrands";
import Footer from "../common/Footer";


const Home = () =>{
const [data,setData] = useState([]);


const fetchData = () =>{
    return axios.get("https://dummyjson.com/products?limit=100")
    .then((result) => {
     console.log(result.data.products);
     const products = result.data.products;
        setData(products)
    }).catch((err) => {
        console.log(err);
    });
}

useEffect(()=>{
    fetchData();
},[]);



    return ( 
      <div>

<HeroImageCarousal/>
    <div className="bg-slate-200 mx-20 my-5 p-10">
<Choose/>

{data && (
    data.map((obj)=>{
        return <div key={obj.id}>
         {obj.title}
        </div>
    })
)}
<PopularBrands/>
    </div> 
    <Footer/>
      </div>
    
)
}


export default Home;