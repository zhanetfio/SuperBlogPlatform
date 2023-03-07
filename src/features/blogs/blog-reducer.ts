import {blogsAPI} from "../../api/api";
import {AppDispatch, AppThunk} from "../../store/store";

export type BlogType = {
    id: string
    name: string
    websiteUrl: string
    description: string
    createdAt: string
}
const initialState = {
    items: [] as BlogType[],
    pagesCount: 1,
    page: 1,
    pageSize: 1,
    totalCount: 1,

}


export const blogReducer = (state = initialState, action: BlogActionsType): InitialStateType => {
    switch (action.type) {
        case 'BLOG/SET-BLOGS':
            return {...state, items: action.payload.blogs}
      /*  case 'BLOG/SET-BLOG':
            return {...state,items: action.payload.id}*/
        default:
            return state
    }

}
//actionCreators

export const setBlogs = (blogs: BlogType[]) => ({type: 'BLOG/SET-BLOGS', payload: {blogs: blogs}} as const)
/*export const setBlog = (id: BlogType) => ({type: 'BLOG/SET-BLOGS', payload: {id: id}} as const)*/

//thunks

export const getBlogsTC = (): AppThunk => async (dispatch: AppDispatch) => {

    try {
        const res = await blogsAPI.getBlogs()
        dispatch(setBlogs(res.data.items))
    } catch (e) {
        console.log(e)
    }

}
export const getBlogTC = (id:string): AppThunk => async (dispatch: AppDispatch) => {

    try {
        const res = await blogsAPI.getBlog(id)
        dispatch(setBlogs([res.data]))
    } catch (e) {
        console.log(e)
    }

}
// types
export type InitialStateType = typeof initialState

export type BlogActionsType = ReturnType<typeof setBlogs>