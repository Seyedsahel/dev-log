import { posts } from '~/data/posts'
import type { PostType } from '~/types/post';

export default defineEventHandler(async (event)=>{

    const id = Number(event.context.params?.id)
    const post = posts.find(p => p.id === id) as PostType
    return post
})