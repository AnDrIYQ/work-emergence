<template>
    <v-slider
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
export default {
    name: "SliderInput",
    props: {
        modelValue: [String, Number],
    },
    emits: ['update:modelValue'],
};
</script>
