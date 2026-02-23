<script setup lang="ts">
    import type { PostType } from '~/types/post';
    defineProps<{ post:PostType}>()

</script>
<template>
    <NuxtLink :to="`/post/${post.id}`" class="block">

        <div class="h-[21rem] flex flex-col p-8 space-y-6 border rounded-lg shadow-lg border-gray-600
         hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300">
            <div class="flex flex-row items-center gap-4">
               <img class="h-10 w-10 rounded-full" src="/img/bg.jpeg" alt="" srcset="">
               <span class="text-gray-400">User Name</span>
            </div>
            <div class="flex-grow">
                <h1 class="text-xl font-semibold text-purple-500 line-clamp-2 mb-6">{{ post.title }}</h1>
                <p class="text-gray-400 mt-2 text-md line-clamp-2 xl:line-clamp-2">{{ post.content }}</p>   
            </div>
            <div class="space-y-1">
                <div class="mt-2 text-sm text-gray-400">
                    <span class="mr-2" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
                </div>
                <div class="text-sm text-gray-400 mb-4">{{ post.date }}</div>
            </div>
        </div>
    </NuxtLink>
          
       
</template>