import react, { useEffect, useState } from "react";
import axios from "axios";


import './Movielist.css';



const Movielist = () => {
    const [getList, setList] = useState([])


    useEffect(() => {
        initialDetails();

    }, [])

    const initialDetails = () => {
        try {
            axios.get('https://localhost:3000/list').then((response) => {
                console.log(response.data);
                setList([...response.data])

            }).catch((error) => {
                console.log(error);
            })

        } catch (err) {

            console.log(err);
        }
    }


    return (<>
        {getList.map((obj, index) => {
            return (
                <div key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={obj.img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{index + 1}{")"}{obj.movie_name}</h5>
                            <p className="card-text">{obj.about}.</p>
                            <a className="btn btn-primary">{obj.more_details}</a>
                        </div>
                    </div>
                </div>




            )
        })}
    </>)

}
export default Movielist;