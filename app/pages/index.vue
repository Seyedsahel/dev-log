<script setup lang="ts">
import { posts } from '~/data/posts'
import type { PostType } from '~/types/post';
</script>

<template>
    <div>
      <HomeHeroSection/>
      <section id="posts" class="mx-4 py-8">
        <div class=" mt-2 grid grid-cols-4 gap-6">
          <div v-for="post in posts" :key="post.id" >
            <HomePostItem :post="post"/>
          </div>
        </div>
      </section>
      
    </div>
</template>
