<template>
    <v-toggle
        :model-value="modelValue"
        :disabled="disabled"
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
        disabled: Boolean,
    },
    emits: ['update:modelValue']
};
</script>
