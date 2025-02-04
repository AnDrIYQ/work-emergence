<template>
    <input
        type="text"
        ref="input"
        :value="modelValue"
        class="input w-full"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: 'TextField',
    props: {
        modelValue: String,
    },
    emits: ['update:modelValue'],
};
</script>
