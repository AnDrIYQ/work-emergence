<template>
    <div>{{ modelValue }} in some format</div>
    <button type="button" @click="$emit('update:modelValue', 1)">+</button>
</template>

<script>
export default {
    name: "HoarderInput",
    props: {
        modelValue: Object,
    },
    emits: ['update:modelValue'],
};
</script>
