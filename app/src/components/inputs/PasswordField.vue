<template>
    <div :class="[style.group]">
        <button v-if="canShow" type="button" :class="[style.togglePasswordVisibility]" @click="togglePasswordVisibility">
            <i v-if="isPasswordVisible" class="fi fi-rr-eye-crossed"></i>
            <i v-else class="fi fi-rr-eye"></i>
        </button>

        <input
            ref="input"
            :type="passwordInputType"
            :class="[textFieldStyle.input]"
            :required="required"
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
import { toRef } from 'vue';
import textFieldStyle from '@styles/components/inputs/TextField.module.css';
import style from '@styles/components/inputs/PasswordField.module.css';

// Composables
import { usePasswordVisibility } from '@root/composables/show-password.js';
import ValidationMixin from "@root/mixins/validation.js";

export default {
    name: "PasswordField",
    mixins: [ValidationMixin],
    props: {
        modelValue: String,
        placeholder: String,
        canShow: Boolean,
        required: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props) {
        const canShowRef = toRef(props, 'canShow');
        const {isPasswordVisible, togglePasswordVisibility, passwordInputType} =
            usePasswordVisibility(canShowRef);

        return {isPasswordVisible, togglePasswordVisibility, passwordInputType};
    },
    data() {
        return {
            textFieldStyle,
            style,
        };
    },
};
</script>
