<template>
    <textarea
        :value="modelValue"
        class="w-full"
        rows="4"
        @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
</template>

<script>
import TextField from "@components/inputs/TextField.vue";

export default {
    name: "TextareaField",
    extends: TextField,
};
</script>
