<template>
    <input
        type="number"
        ref="input"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="input w-full"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
import ValidationMixin from "@root/mixins/validation.js";

export default {
    name: 'InputNumber',
    mixins: [ValidationMixin],
    props: {
        modelValue: [String, Number],
        placeholder: String,
        required: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
};
</script>
