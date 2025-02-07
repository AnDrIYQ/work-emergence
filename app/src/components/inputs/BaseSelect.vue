<template>
    <v-select
        :modelValue="selectedOption"
        :allow-empty="allowEmpty"
        :options="options"
        track-by="value"
        label="text"
        @update:modelValue="handleUpdate"
    >
        <template #noOptions>
            <div class="p-2 text-xs">{{ $t('Список порожній') }}</div>
        </template>
        <template #noResult>
            <div class="p-2 text-xs">{{ $t('Нічого не знайдено') }}</div>
        </template>
    </v-select>
    {{ validationText }}
</template>

<script>
import { useInputValidation } from "@composables/input-validation/use-input-validation.js";
import inputValidationMixin from "@composables/input-validation/inputValidationMixin.js";

export default {
    name: "BaseSelect",
    mixins: [
        inputValidationMixin,
    ],
    setup(props) {
        const { validity } = useInputValidation(props);
        return { validationText: validity };
    },
    props: {
        modelValue: [Number, String],
        allowEmpty: Boolean,
        options: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['update:modelValue'],
    computed: {
        selectedOption: {
            get() {
                return this.options.find(option => option.value === this.modelValue) || null;
            },
            set(option) {
                this.$emit('update:modelValue', option?.value || null);
            },
        },
    },
    methods: {
        handleUpdate(option) {
            this.selectedOption = option;
        },
        initializeDefaultValue() {
            if (!this.allowEmpty && !this.selectedOption && this.options.length) {
                const defaultOption = this.options[0];
                this.$emit('update:modelValue', defaultOption.value);
            }
        },
    },
    mounted() {
        this.initializeDefaultValue();
    },
    watch: {
        options: {
            deep: true,
            handler() {
                this.initializeDefaultValue();
            },
        },
    },
};
</script>
