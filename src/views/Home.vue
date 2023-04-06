<template>
    <h1>Olá, Mundo!</h1>
    <router-view />
</template>

<script lang="ts">

export default {
    name: 'Home',
    data() {
        return {
            message: 'Hello, World!'
        }
    }
}
</script>