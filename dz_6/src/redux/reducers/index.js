import {post} from "./post"
import {comments} from "./comments"
import {combineReducers} from "redux";
export const rootReducer=combineReducers({
    post:post,
    comments:comments
})