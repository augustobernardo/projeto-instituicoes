<template>
    <li class="list-group-item d-flex border-0 rounded-3 justify-content-between align-items-center mb-2 card-custom">
        <div class="d-flex align-items-center">
            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                class="rounded-circle" />
            <div class="ms-3">
                <p class="fw-bold mb-1">{{ titleCard }}</p>
                <p class="text-muted mb-0">{{ localCard }}</p>
            </div>
        </div>
        <router-link :to="route" class="btn btn-link btn-rounded btn-sm">
            <span class="material-icons-round custom-span">
                chevron_right
            </span>
        </router-link>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        route: {
            type: String,
            required: true
        },
        titleCard: {
            type: String,
            required: true
        },
        localCard: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
a {
    font-family: Popins, sans-serif;
    text-decoration: none;
}

.custom-span {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: #000;
}
.custom-span:hover {
    color: #00bd5e;
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
</style>
