import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useBarStateStore = defineStore('bar', {
    state: () => {
        return {
            isBarShow: ref(true)
        }
    }
})
