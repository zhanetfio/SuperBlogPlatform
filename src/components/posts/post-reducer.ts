import {postsAPI, PostType, ResponsePostsType} from "../../api/api";
import {AppDispatch, AppThunk} from "../../store/store";


const initialState:ResponsePostsType={
    pagesCount: 1,
    page: 1,
    pageSize: 1,
    totalCount: 1,
    items: [] as PostType[]
}
//export type InitialStateType = typeof initialState

export type PostActionsType= ReturnType<typeof setPosts>

export const postReducer=(state=initialState,action:PostActionsType):ResponsePostsType=>{
    switch (action.type){
        case 'POST/SET-POSTS':
            return{...state,items:action.payload.posts}

        default:
            return state
    }

}

//actionCreators

export const setPosts=(posts:PostType[])=>({type:'POST/SET-POSTS',payload: {posts}} as const)

//thunks

export const getPostsTC=():AppThunk=>async (dispatch:AppDispatch)=>{

    try {
        const res = await postsAPI.getPosts()
        dispatch(setPosts(res.data.items))
    }catch (e){
        console.log(e)
    }

}