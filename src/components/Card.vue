<template>
    <li class="list-group-item d-flex border-0 rounded-3 justify-content-between align-items-center mb-2 card-custom">
        <div class="d-flex align-items-center">
            <img :src="imageCard" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
            <div class="ms-3">
                <p class="fw-bold mb-1">{{ titleCard }}</p>
                <p class="text-muted mb-0 description">{{ descriptionCard }}</p>
            </div>
        </div>

        <button class="btn btn-link btn-rounded btn-sm" @click="succesAlert">
            <span class="material-icons-round custom-span">
                volunteer_activism
            </span>
        </button>

    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Swal from 'sweetalert2'
import Image from '../assets/succes.svg'

export default defineComponent({
    name: 'Card',
    props: {
        titleCard: {
            type: String,
            required: true
        },
        descriptionCard: {
            type: String,
            required: true
        },
        imageCard: {
            type: String,
            required: true
        },
    },
    methods: {
        succesAlert() {
            Swal.fire({
                title: 'Obrigado!',
                text: 'Sua doação foi realizada com sucesso!',
                imageUrl: Image,
                imageAlt: 'Sucesso!',
                showConfirmButton: false,
                timer: 2200,
                timerProgressBar: true,
            })
        }
    }
})
</script>

<style scoped>
.custom-span {
    color: #00bd5e;
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.custom-span:hover {
    color: #00a352;
    transition: all 300ms ease;
}

.card-custom {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.card-custom:hover {
    box-shadow: none;
    transition: all 300ms ease;
}

.description {
    font-size: smaller;
}
</style>
