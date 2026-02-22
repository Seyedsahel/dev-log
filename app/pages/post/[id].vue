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
    <h1 class="text-2xl font-bold text-white">{{ post?.title }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post?.content }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post?.date }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post?.tags }}</h1>
    <h1 class="text-2xl font-bold text-white">{{ post?.id }}</h1>
</template>
