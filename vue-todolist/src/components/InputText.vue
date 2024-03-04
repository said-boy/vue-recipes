<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="username" class="font-bold block mb-2">{{ props.title }}</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import InputText from 'primevue/inputtext';

const props = defineProps({
    title: String,
    clear: Boolean
})

const value = ref(null);

const emit = defineEmits(['text'])

watch(() => props.clear, (newClear) => {
    if (newClear) {
        value.value = null; 
    }
})

watch(value, (v) => {
    emit('text', v)
})

</script>
