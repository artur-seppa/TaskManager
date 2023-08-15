<template>
    <div class="box has-text-wieght-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BoxForms"
})
</script>

<style scoped>
.box {
    background-color: #FAF0CA;
}
</style>