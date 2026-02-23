<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { PostType } from '~/types/post'
import { usePostStore } from '@/stores/post';

const postStore = usePostStore()

const route = useRoute()
const id = Number(route.params.id)  
await postStore.postById(id)
const {post} = storeToRefs(postStore)


</script>

<template>
    <div class="bg-zinc-800/50">
        <LayoutAppNavbar/>
    </div>
    <div class="flex flex-col min-h-screen py-10 items-center">

        <div class="bg-zinc-800/20 shadow-2xl shadow-purple-900/60  min-h-[25rem] flex flex-col px-10 md:px-20 py-10 m-10 md:mx-40 border border-zinc-500/40 border-2 rounded-xl">
            <div class="z-50">

                <div class="flex flex-row items-center gap-4 mb-6">
                   <img class="h-[4rem] w-[4rem] rounded-full" src="/img/bg.jpeg" alt="" srcset="">
                   <span class="text-gray-400 text-xl">User Name</span>
                </div>
                <div class="flex flex-col space-y-2 mb-6">
                    <h1 class="text-xl md:text-3xl font-bold text-purple-500">{{ post?.title }}</h1>
                     <div class="ml-3 text-sm text-gray-400">{{ post?.date }}</div>
                </div>
                <p class="flex-1 text-gray-400 text-md md:text-xl px-2 mb-6">{{ post?.content }}</p>   
    
                <div class="text-md text-gray-400">
                        <span class="mr-2" v-for="tag in post?.tags" :key="tag">#{{ tag }}</span>
                </div>
            </div>

        </div>

    </div>
        
</template>

<!-- <h1 class="text-2xl font-bold text-white">{{ post?.title }}</h1>
        <h1 class="text-2xl font-bold text-white">{{ post?.content }}</h1>
        <h1 class="text-2xl font-bold text-white">{{ post?.date }}</h1>
        <h1 class="text-2xl font-bold text-white">{{ post?.tags }}</h1>
        <h1 class="text-2xl font-bold text-white">{{ post?.id }}</h1> -->
