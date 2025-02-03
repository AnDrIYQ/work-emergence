<template>
    <div class="relative">
        <input
            type="file"
            class="file-input-hidden"
            :id="inputId"
            :disabled="disabled"
            :required="required"
            @change="handleFileChange"
        >
        <label :for="inputId" class="file-label">
            <span class="text-xs w-full break-all text-center">{{ fileName || placeholder || $t('Завантажити файл') }}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: "InputFile",
    props: {
        modelValue: Object,
        disabled: Boolean,
        required: Boolean,
        placeholder: String,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            fileName: null,
        };
    },
    computed: {
        inputId() {
            return `file-input-${this.$.uid}`;
        }
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                console.log(file);
                this.fileName = file.name;
                this.$emit('update:modelValue', file);
            }
        }
    }
};
</script>
