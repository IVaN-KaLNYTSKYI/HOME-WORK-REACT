import {useEffect, useState} from 'react';
import Post from "../Post/Post";
export default function Posts(){
    const [posts,setPosts]=useState([])
    const [etam,setEtem]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value =>setPosts([...value]))

    },[]);
    const searchPost=(id)=>{
        let infaPro=posts.find(value => value.id===id);
        setEtem(infaPro)
    }
    return(
        <div className={"box"}>
            <div className={"all"}>
                {
posts.map((value)=>
    <Post
    key={value.id}
    {...value}
        searchPost={searchPost}
    />)

                }
            </div>
            <div className={"one"}>
                {
                    etam?(
                        <div className={"infa"}>
                            {etam.body}
                        </div>
                    ):(
                        <span>no infa</span>
                    )
                }
            </div>
        </div>
    )
}