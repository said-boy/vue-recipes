<template>
    <section style="display: grid; place-items: center;">
        <header>
            <Heading />
        </header>
        <form @submit.prevent>
            <div style="display: flex; flex-wrap: wrap; align-items: end; gap: 10px">
                <Calendar title="Mulai" :clear="clear" @date="dateStart" />
                <Calendar title="Selesai" :clear="clear" @date="dateEnd" />
                <InputText title="Aktivitas" :clear="clear" @text="text" />
                <Button @click="addTodos" label="Simpan" />
            </div>
        </form>
        <main style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
            <Content status="Rencana" :todos="todos"/>
            <Content status="Proses" :todos="todos"/>
            <Content status="Selesai" :todos="todos"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </section>
</template>

<script setup>
import Heading from '@/components/Heading.vue'
import Calendar from '@/components/Calendar.vue'
import InputText from '@/components/InputText.vue'
import Button from "primevue/button"
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

import { reactive, ref } from 'vue'

let id = 0

const clear = ref(false)

const newTodo = reactive({
    start: '', finish: '', keterangan: '', status: 'Rencana'
})
const todos = reactive([])

const dateStart = (s) => {
    newTodo.start = s
};

const dateEnd = (e) => {
    newTodo.finish = e
};

const text = (t) => {
    newTodo.keterangan = t
}

function addTodos() {
    todos.push({id: id++, start: newTodo.start, finish: newTodo.finish, keterangan: newTodo.keterangan, status: newTodo.status})
    newTodo.start = '' 
    newTodo.finish = '' 
    newTodo.keterangan = '' 
    clear.value = !clear.value
}


</script>