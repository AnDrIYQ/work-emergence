<template>
    <v-rating
        :model-value="modelValue"
        :disabled="disabled"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
export default {
    name: "RatingInput",
    props: {
        modelValue: [String, Number],
        disabled: Boolean,
        config: Object,
    },
    emits: ['update:modelValue'],
};
</script>
