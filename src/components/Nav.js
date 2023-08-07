import {Link } from "react-router-dom"



export default function Nav(){
    return(
        <div className="nav">
            <Link to='/'>
                <div>
                    <div>Crypto </div>
                </div>
            </Link>
            <Link to="/currencies">
                <div>
                    Currencies
                </div>
            
            </Link>
            <Link to='/price'>
                <div>
                    Price
                </div>
            
            </Link>


        </div>
    )
}