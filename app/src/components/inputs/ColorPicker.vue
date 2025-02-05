<template>
    <div class="h-8 flex items-center bg-white border border-gray-300 hover:!border-[var(--secondary)] rounded-md">
        <input type="color" :value="modelValue" class="p-1 w-full rounded-2xl cursor-pointer focus:input-outline" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: "ColorPicker",
    props: {
        modelValue: String,
        placeholder: String,
    },
    emits: ['update:modelValue'],
};
</script>
