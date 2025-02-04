<template>
    <v-toggle
        :model-value="modelValue"
        checked-bg="#62937b"
        :width="35"
        :height="20"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
export default {
    name: "InputBoolean",
    props: {
        modelValue: Boolean,
    },
    emits: ['update:modelValue']
};
</script>
