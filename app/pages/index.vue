<script setup lang="ts">
import { usePostStore } from '@/stores/post';

const postStore = usePostStore()

await postStore.fetchPosts()
const {posts} = storeToRefs(postStore)

</script>

<template>
    <div>
      <HomeHeroSection/>
      <section id="posts" class="mx-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <div v-for="post in posts" :key="post.id"  >
            <HomePostItem :post="post"/>
          </div>
        </div>
      </section>
      
    </div>
</template>
