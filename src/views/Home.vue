<template>
    <!-- Title -->
    <nav class="navbar custom-bg">
        <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1 title">AF SOLIDÁRIO</span>
        </div>
    </nav>

    <!-- Content -->
    <div class="list-instituicoes-header">
        <span id="list-title">
            Faça sua parte,
            <span id="instituicoes">Doe</span>
            agora mesmo!
        </span>
    </div>
    <div class="container">
        <ul class="list-group list-group-light">
            <Card v-for="instituicao in inst" 
                :key="instituicao.id"
                :imageCard="instituicao.image"
                :titleCard="instituicao.title" 
                :descriptionCard="instituicao.description" />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import InstituicoesArray from '../class/InstClass';

const instituicoes = new InstituicoesArray();

export default defineComponent({
    name: 'Home',
    components: {
        Card
    },
    data() {
        return {
            inst: instituicoes.returnInstituicoes()
        }
    }
})

</script>

<style>
.custom-bg {
    background-color: #009c4e;
}

.title {
    font-family: Poppins, sans-serif;
    color: #fff;
}

.title:hover {
    color: #fff;
}

.list-instituicoes-header {
    margin-top: 1.2rem;
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
