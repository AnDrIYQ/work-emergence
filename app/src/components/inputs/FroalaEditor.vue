<template>
    <froala :value="modelValue" @update:value="$emit('update:modelValue', $event)">
    </froala>
</template>

<script>
export default {
    name: "FroalaEditor",
    props: {
        modelValue: String,
    },
    emits: ['update:modelValue'],
};
</script>
