<template>
    <!-- Title -->
    <nav class="navbar custom-bg">
        <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1 title">AF Solidário</span>
        </div>
    </nav>

    <!-- Content -->
    <div class="list-instituicoes-header">
        <span id="list-title">
            Lista de
            <span id="instituicoes">Instituições</span>
        </span>
    </div>
    <div class="container">
        <ul class="list-group list-group-light">
            <Card route="/about/inst1" titleCard="Instituição 1" localCard="Local 1" />
            <Card route="/about" titleCard="Instituição 2" localCard="Local 2" />
            <Card route="/about" titleCard="Instituição 3" localCard="Local 3" />
            <Card route="/about" titleCard="Instituição 4" localCard="Local 4" />
            <Card route="/about" titleCard="Instituição 5" localCard="Local 5" />
            <Card route="/about" titleCard="Instituição 6" localCard="Local 6" />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Card
    }
})

</script>

<style>
.custom-bg {
    background-color: #00ac56;
}

.title {
    font-family: Poppins, sans-serif;
    color: #fff;
}

.list-instituicoes-header {
    margin-top: 1.5rem;
    margin: 1rem;
}

#list-title {
    font-family: Poppins, sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
}

#instituicoes {
    font-weight: 600;
    color: #03b65c;
}

/* .card-bg-custom {
    background-color: #e9e9e9;
} */

</style>
