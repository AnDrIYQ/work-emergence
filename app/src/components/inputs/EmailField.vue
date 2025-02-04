<template>
    <input
        ref="input"
        type="email"
        :value="modelValue"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
import TextField from "@root/components/inputs/TextField.vue";

export default {
    name: "EmailField",
    extends: TextField,
};
</script>

