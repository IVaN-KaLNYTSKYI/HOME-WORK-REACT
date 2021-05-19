import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useError, useIsLoading, usePost, useResetLoading} from "../../redux";


export default function Counter() {
    const {isLoading, post, error} = useSelector(({post}) =>post)

    const postFetch = usePost()
    const postIsLoading = useIsLoading()
    const postResetLoading = useResetLoading()
    const postError = useError()

    const dispatch = useDispatch()
    const fetchPost = async () => {
        try {
            postIsLoading()

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const date = await response.json()

            postFetch(date)
            console.log(date)
        } catch (e) {
            console.log(e, "retro")

            postResetLoading()
            postError("error")
        }
    }
    console.log(post)
    useEffect(() => {
        fetchPost()
    }, [])
    if (isLoading) {
        return (
            <div>Loading!!!!</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    return (
        <div>
            {
                post.map((post) => {
                    return <p key={post.id}>{post.title}</p>
                })
            }
        </div>
    )
}