import api from "./api"

export const getAllPost = async (page: number , limit: number) => {
    const resp = await api.get(`/post?.page=${page}& limit=${limit}`)
    return resp.data.data
}