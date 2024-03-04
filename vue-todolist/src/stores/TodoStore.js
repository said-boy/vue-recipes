import { reactive } from "vue";

let id = 0;
const useTodoStores = reactive([])
const useTodoStore = reactive({
    id, mulai: Date, selesai: Date, keterangan: String
})

const todoStores = {
    useTodoStore: useTodoStore,
    useTodoStores: useTodoStores,
}

export default todoStores