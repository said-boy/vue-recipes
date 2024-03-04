<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> {{ props.title }} </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" date-format="DD, dd/mm/yy" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Calendar from 'primevue/calendar';

const props = defineProps({
    title: String,
    clear: Boolean
})

const datetime24h = ref(null);

const emit = defineEmits(['date'])

watch(() => props.clear, (newClear) => {
    if (newClear) {
        datetime24h.value = null; 
    }
})

watch(datetime24h, (value) => {
    emit("date", value)
})


</script>
