<template>
    <section class="relative min-h-screen bg-[url(/img/bg.jpeg)] bg-cover">
  <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-[10px] border border-slate-800/10 border-8"></div>
  <LayoutAppNavbar/>
  <div id="content" class="relative z-10 flex justify-center items-center min-h-screen">

        <div id="texts" class=" flex flex-col justify-center items-center text-center px-6">
                    
            <h1 class="text-9xl font-bold mb-8 text-purple-500">
                DevLog
            </h1>

            <p class="text-xl font-semibold text-gray-400 max-w-2xl">
                A public developer journal to document your journey, share knowledge,
                and grow as an engineer.
            </p>

            <NuxtLink
                to="/#posts"
                class="mt-10 px-6 py-3  bg-purple-500 hover:bg-slate-500/20 hover:text-gray-400 text-gray-900 transition rounded-lg"
            >
                Explore Posts
            </NuxtLink>

        </div>


  </div>
</section>

  
        
</template>
