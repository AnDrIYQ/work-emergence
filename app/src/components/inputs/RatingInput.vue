<template>
    <v-rating
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
export default {
    name: "RatingInput",
    props: {
        modelValue: [String, Number],
    },
    emits: ['update:modelValue'],
};
</script>
