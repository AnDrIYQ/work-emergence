<template>
    <input type="text"
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
    name: 'TextField',
    mixins: [ValidationMixin],
    props: {
        modelValue: String,
        placeholder: String,
        required: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
};
</script>
