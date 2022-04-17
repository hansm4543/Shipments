import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {Context} from "../store";
import {updatePosts, removePost, updateLoad} from "../store/actions"

import MyTable from '../component/MyTable'


function Main(){

    const [state, dispatch] = useContext(Context);
    console.log(state.load.data[0])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        if(state.load.data[0]){
            axios.get('Shipments.json')
            .then(data => {
                dispatch(updatePosts(data.data))

            }).catch(err => console.log(err))

            dispatch(updateLoad([false]))
        }

        console.log(state);
        setIsLoading(false)
    
    },[state])


    function itemDeleteHandler(number, data){
        if(number === 1){
            console.log("Õnnestus");
            console.log(data);
            setIsLoading(true)
            dispatch(removePost(data));
        }else{
            console.log("Failed");
        }

    }

    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }
    


    return(
        <div>
            <h1>Shipments</h1>
            <MyTable shipments={state.posts.data} itemDeleteHandler={itemDeleteHandler}/>
        </div>
    )
}
export default Main;