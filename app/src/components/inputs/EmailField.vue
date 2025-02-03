<template>
    <input
        ref="input"
        type="email"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
import TextField from "@root/components/inputs/TextField.vue";
import ValidationMixin from "@root/mixins/validation.js";

export default {
    name: "EmailField",
    mixins: [ValidationMixin],
    extends: TextField,
};
</script>

