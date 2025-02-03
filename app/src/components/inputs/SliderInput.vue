<template>
    <v-slider
        :model-value="modelValue"
        :disabled="disabled"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
export default {
    name: "SliderInput",
    props: {
        modelValue: [String, Number],
        disabled: Boolean,
        config: Object,
    },
    emits: ['update:modelValue'],
};
</script>
