import { posts } from '~/data/posts'
import type { PostType } from '~/types/post';

export default defineEventHandler(() => {
    return {posts}
})