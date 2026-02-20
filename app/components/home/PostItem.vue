<script setup lang="ts">
    import type { PostType } from '~/types/post';
    defineProps<{ post:PostType}>()

</script>
<template>
    <NuxtLink :to="`/post/${post.id}`" class="block">

        <div class="p-8 space-y-6 border rounded-lg shadow-lg border-gray-600 hover:bg-zinc-800 transition">
            <div class="flex flex-row items-center gap-4">
               <img class="h-10 w-10 rounded-full" src="/img/bg.jpeg" alt="" srcset="">
               <span class="text-gray-400">User Name</span>
            </div>
            <h1 class="text-xl font-semibold text-purple-500">{{ post.title }}</h1>
            <p class="text-gray-400 mt-2 text-md">{{ post.content }}</p>
            
            <div class="space-y-1">
                <div class="mt-2 text-sm text-gray-400">
                    <span class="mr-2" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
                </div>
                <div class="text-sm text-gray-400">{{ post.date }}</div>
            </div>
        </div>
    </NuxtLink>
          
       
</template>