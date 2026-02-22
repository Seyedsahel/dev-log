import type { PostType } from '~/types/post';
import type { PostListResponse } from '~/types/post';

import { defineStore } from 'pinia';

export const usePostStore = defineStore('post',{
    state: () => ({
        posts: [] as PostType[],
        post: null as PostType|null,
    }),
    actions:{
        async fetchPosts() {
            const res = await $fetch<PostListResponse>(
                '/api/posts/list'
            )
            this.posts = res.posts
            console.log('store',res);
            
            return true
        },

        async postById(id:number){
            const res = await $fetch<PostType>(
                `/api/posts/${id}`
            )
            this.post = res
            return true
        }
    }
})