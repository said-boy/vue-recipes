<template>
    <div class="card" @drop="onDrop($event, props.status)" @dragenter.prevent @dragover.prevent>
        <Fieldset :legend="props.status" :toggleable="true">
            <div class="m-0" v-for="todo in getStatus(props.status)" :key="todo.id" draggable="true"
                @dragstart="startDrag($event, todo)">
                <div class="card">
                    <Panel :header="'#'+ todo.id +'  '+formattedDate(todo.start) + ' - ' + formattedDate(todo.finish) +' '" toggleable>
                        <p class="m-0">
                            {{ todo.keterangan }}
                        </p>
                    </Panel>
                </div>
            </div>
        </Fieldset>
    </div>
</template>

<script setup>
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';

const props = defineProps({
    todos: Array,
    status: String
});

const getStatus = (status) => {
    return props.todos.filter((todo) => todo.status == status)
}

function startDrag(evt, item) {
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('itemID', item.id)
}

function onDrop(evt, list) {
    const itemID = evt.dataTransfer.getData('itemID')
    const item = props.todos.find((item) => item.id == itemID)
    item.status = list
}

function formattedDate(fromDate) {
    const date = new Date(fromDate);
    const options = {
        weekday: 'short', // Menampilkan hari dalam format singkat (Misalnya: "Sun")
        day: '2-digit', // Menampilkan tanggal dalam format dua digit (Misalnya: "03")
        month: 'long', // Menampilkan bulan dalam format panjang (Misalnya: "March")
        year: 'numeric', // Menampilkan tahun dalam format numerik empat digit (Misalnya: "2024")
        hour: '2-digit', // Menampilkan jam dalam format dua digit (Misalnya: "00")
        minute: '2-digit', // Menampilkan menit dalam format dua digit (Misalnya: "57")
        hour12: false // Menggunakan format waktu 24 jam (Misalnya: "00:57")
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
}

</script>
