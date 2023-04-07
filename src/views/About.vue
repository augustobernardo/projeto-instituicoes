<template>
    <nav class="navbar custom-bg">
        <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1 title">{{ title }}</span>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Home',
    setup() {
        const route = useRoute()
        const title = route.params.title
        const description = route.params.description

        return {
            title,
            description
        }
    }
})
</script>

