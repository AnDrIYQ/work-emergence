<template>
    <div v-if="title" class="text-xs text-[var(--dark)] mb-2">{{ title }}</div>
    <component ref="input" :is="inputComponent" />
</template>

<script>
import ValidationMixin from "@mixins/validation.js";

// 'text', 'textarea', 'slider',
// 'rating', 'password', 'multiple-select',
// 'number', 'file', 'boolean',
// 'froala', 'email', 'date',
// 'color', 'select'

// Import all input types
import TextField from '@root/components/inputs/TextField.vue';
import TextareaField from '@root/components/inputs/TextareaField.vue';
import SliderInput from '@root/components/inputs/SliderInput.vue';
import RatingInput from '@root/components/inputs/RatingInput.vue';
import PasswordField from "@components/inputs/PasswordField.vue";
import MultipleSelect from "@components/inputs/MultipleSelect.vue";
import InputNumber from "@components/inputs/InputNumber.vue";
import InputFile from "@components/inputs/InputFile.vue";
import InputBoolean from "@components/inputs/InputBoolean.vue";
import FroalaEditor from "@components/inputs/FroalaEditor.vue";
import EmailField from "@components/inputs/EmailField.vue";
import DatePicker from "@components/inputs/DatePicker.vue";
import ColorPicker from "@components/inputs/ColorPicker.vue";
import BaseSelect from "@components/inputs/BaseSelect.vue";

export default {
    name: "InputField",
    mixins: [ValidationMixin],
    props: {
        type: {
            type: String,
            required: true,
            validator: (value) => [
                'text', 'textarea', 'slider',
                'rating', 'password', 'multiple-select',
                'number', 'file', 'boolean',
                'froala', 'email', 'date',
                'color', 'select',
            ].includes(value)
        },
        title: String,
        modelValue: [Object, Array, Number, String, Boolean],
        validation: {
            type: Object,
            default: () => ({
                required: false,
            }),
        },
        inputProps: Object,
        stateProps: Object,
    },
    emits: ['update:modelValue'],
    computed: {
        inputComponent() {
            let componentName = '';
            
            switch(this.type) {
                case 'text':    
                    componentName = 'text-field'; 
                    break;
                case 'textarea':
                    componentName = 'textarea-field'; 
                    break;
                case 'slider':
                    componentName = 'slider-input';
                    break;
                case 'rating':
                    componentName = 'rating-input';
                    break;
                case 'password':
                    componentName = 'password-field';
                    break;
                case 'multiple-select':
                    componentName = 'multiple-select';
                    break;
                case 'number':
                    componentName = 'input-number';
                    break;
                case 'file':
                    componentName = 'input-file';
                    break;
                case 'boolean':
                    componentName = 'input-boolean';
                    break;
                case 'froala':
                    componentName = 'froala-editor';
                    break;
                case 'email':
                    componentName = 'email-field';
                    break;
                case 'date':
                    componentName = 'date-picker';
                    break;
                case 'color':
                    componentName = 'color-picker';
                    break;
                case 'select':
                    componentName = 'base-select';
                    break;
                default:
                    alert(`Unknown input type: ${this.type}`);
                    componentName = 'text-field';
                    break;
            }

            return componentName;
        },
    },
    components: {
        TextField,
        TextareaField,
        SliderInput,
        RatingInput,
        PasswordField,
        MultipleSelect,
        InputNumber,
        InputFile,
        InputBoolean,
        FroalaEditor,
        EmailField,
        DatePicker,
        ColorPicker,
        BaseSelect,
    },
};
</script>
