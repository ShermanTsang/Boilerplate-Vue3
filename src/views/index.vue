<!-- @format -->

<style lang="scss"></style>

<template>
    <div class="p-2">Welcome to Index page!</div>
    {{ array }}
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, onMounted, toRefs } from 'vue'

export default defineComponent({
    name: 'Index',
    setup() {
        const { proxy } = getCurrentInstance()
        const state = reactive({
            text: 'vue',
            array: {},
        })
        onMounted(async () => {
            const res = await proxy.$api('backend').get('/test', { name: 1 })
            state.array = res.data
        })
        return { ...toRefs(state) }
    },
})
</script>
