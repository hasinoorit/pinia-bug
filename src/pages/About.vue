<script setup>
import useTest from '../store/useTest'
const test = useTest()
</script>
<template>
    <h1>About</h1>
    <p>{{ test.foo }}</p>
</template>
