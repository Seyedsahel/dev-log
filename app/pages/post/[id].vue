<template>
    <h1 class="text-2xl font-bold text-red-600">Post {{ id }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

</script>