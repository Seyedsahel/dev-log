<script setup lang="ts">
import { posts } from '~/data/posts'
</script>

<template>
    <div>
      <HomeHeroSection/>
        <section id="posts">
        <div class="space-y-6 mt-4">
          <div v-for="post in posts" :key="post.id" class="p-4 border rounded-md shadow-sm border-gray-600">
            <h2 class="text-xl font-semibold text-purple-500">{{ post.title }}</h2>
            <p class="text-gray-400 mt-2">{{ post.content }}</p>
            <div class="mt-2 text-sm text-gray-400">
              <span>{{ post.date }}</span>
              <span class="ml-2" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
            </div>
          </div>
        </div>
        </section>
    </div>
</template>
