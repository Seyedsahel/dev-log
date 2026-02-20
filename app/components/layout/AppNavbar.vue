<script setup lang="ts">

    const route = useRoute()

    const isActive = (path: string) => {
        return route.path === path
    }
    const linkClass = "pb-1 border-b-2 border-transparent text-purple-400 text-xl hover:border-purple-300 hover:text-purple-300 transition"
    const activeLinkClass = "pb-1 border-b-2 border-purple-400 text-purple-300 text-xl"

</script>

<template>
    <nav class="sticky z-10">
        <div class=" mx-auto lg:px-14 py-4 px-4">
            <div class="flex items-center justify-between h-16">

                <div class="flex items-center gap-1 text-purple-400 text-xl font-semibold">
                    <Icon name="tabler:code" class="text-2xl" />
                    DevLog
                </div>

                <div class="hidden md:flex space-x-10">
                    <NuxtLink
                     to="/" 
                     :class="isActive('/') ? activeLinkClass : linkClass"
                     >
                     Home
                    </NuxtLink>
                     <NuxtLink
                     to="/#posts" 
                     :class="isActive('/#posts') ? activeLinkClass : linkClass"
                     >
                     Posts
                    </NuxtLink>
                    <NuxtLink
                     to="/dashboard" 
                     :class="isActive('/dashboard') ? activeLinkClass : linkClass"
                     >
                     Dashboard
                    </NuxtLink>
                </div>

                <div class="flex items-center space-x-1">
                   <NuxtLink
                     to="/login" 
                     :class="linkClass"
                     >
                     Log in
                    </NuxtLink>
                    <Icon name="heroicons:arrow-right-20-solid" class="text-xl text-purple-400" />
                </div>

            </div>
        </div>

    </nav>
</template>
