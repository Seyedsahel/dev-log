<script setup lang="ts">
import { posts } from '~/data/posts'
</script>

<template>
    <div>

         <!-- Hero Section -->
        <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 class="text-5xl font-bold mb-6">
            DevLog
        </h1>

        <p class="text-xl text-gray-400 max-w-2xl">
            A public developer journal to document your journey, share knowledge,
            and grow as an engineer.
        </p>

        <a
            href="#posts"
            class="mt-10 px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-lg"
        >
            Explore Posts
        </a>
        </section>
        
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
