<script setup lang="ts">
import { useRoute } from 'vue-router'
import { posts } from '~/data/posts'
import type { PostType } from '~/types/post'

const route = useRoute()
const id = Number(route.params.id)  
const post = posts.find(p => p.id === id) as PostType
</script>

<template>
    <h1 class="text-2xl font-bold text-white">{{ post.title }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post.content }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post.date }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post.tags }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post.id }}</h1>
</template>
