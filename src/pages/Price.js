import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'



export default function Price (props) {
  const [coin,setCoin] =useState(null)


 //.evn later
  const params = useParams()
  const {symbol} = params
  console.log(params)
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apiKey=${process.env.REACT_APP_COINAPI_KEY}`

  
  const getCoin = async() =>{
    try{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setCoin(data)
    }catch(e){
        console.log('error',e)
    }



  }
  // runcs as soon as the componet mounts
  useEffect(()=>{
    getCoin()
  },[])
  

  const loaded = () =>{
    return(
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }
  const loading = ()=> <img src='https://i.gifer.com/XOsX.gif'/>

 return coin && coin.rate?loaded() : loading()
};