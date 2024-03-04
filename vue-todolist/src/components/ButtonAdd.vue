<template>
    <div class="card flex justify-content-center">
        <Button @click="submitButton" label="Simpan" />
    </div>
</template>

<script setup>
import Button from "primevue/button"

const emit = defineEmits(['submit'])

function submitButton(){
    emit("submit", true)
}

</script>