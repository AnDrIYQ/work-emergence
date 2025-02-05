<template>
    <input
        type="number"
        ref="input"
        :value="modelValue"
        class="input w-full"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: 'InputNumber',
    props: {
        modelValue: [String, Number],
        numberType: {
            type: String,
            validator: (value) => [
                'integer', 'float',
            ].includes(value)
        },
    },
    emits: ['update:modelValue'],
};
</script>
