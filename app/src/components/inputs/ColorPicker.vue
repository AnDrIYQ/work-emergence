<template>
    <div class="h-8 flex items-center bg-white border border-gray-300 hover:!border-[var(--secondary)] rounded-md">
        <input type="color" :disabled="disabled" class="p-1 w-full rounded-2xl cursor-pointer focus:input-outline" />
    </div>
</template>

<script>
export default {
    name: "ColorPicker",
    props: {
        modelValue: String,
        disabled: Boolean,
        required: Boolean,
        placeholder: String,
    },
    emits: ['update:modelValue'],
};
</script>
