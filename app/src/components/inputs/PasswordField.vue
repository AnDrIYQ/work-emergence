<template>
    <div class="flex">
        <button v-if="canShow" type="button" class="toggle-password-visibility" @click="togglePasswordVisibility">
            <i v-if="isPasswordVisible" class="fi fi-rr-eye-crossed"></i>
            <i v-else class="fi fi-rr-eye"></i>
        </button>

        <input
            ref="input"
            :autocomplete="autocomplete"
            :type="passwordInputType"
            :class="['input', { 'no-radius-right': canGenerate, 'no-radius-left': canShow }]"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <button
            v-if="canGenerate"
            type="button"
            class="generate-new-password"
            @click="generatePassword"
        >
            <i class="fi fi-rr-magic-wand"></i>
        </button>
    </div>
</template>

<script>
import { toRef } from 'vue';
import { copyToClipboard } from '@root/utils';
import passfather from 'passfather';

// Composables
import { usePasswordVisibility } from '@root/composables/show-password.js';

export default {
    name: "PasswordField",
    props: {
        modelValue: String,
        showPassword: Boolean,
        canShow: Boolean,
        canGenerate: Boolean,
    },
    emits: ['update:modelValue', 'update:showPassword', 'password-generated'],
    setup(props, { emit }) {
        const canShowRef = toRef(props, 'canShow');
        const { isPasswordVisible, togglePasswordVisibility, setPasswordVisibility, passwordInputType } = usePasswordVisibility(canShowRef, emit);

        return {
            isPasswordVisible,
            togglePasswordVisibility,
            setPasswordVisibility,
            passwordInputType
        };
    },
    methods: {
        setRandomValueAndCopyIt() {
            const options = {
                length: 12,
                numbers: true,
                symbols: true,
                uppercase: true,
            };
            const newPassword = passfather(options);
            // Set own value
            this.$emit('update:modelValue', newPassword);
            // Copy value
            copyToClipboard(newPassword).then(() => {
                this.$notify.success(this.$t('Згенерований пароль скопійовано в буфер обміну!'));
            });
            // Set own showPassword state
            this.$emit('update:showPassword', true);
            // Emit event about password generating
            this.$emit('password-generated', newPassword);
        },
        generatePassword() {
            if (!this.modelValue) {
                this.setRandomValueAndCopyIt();
                return false;
            }
            if (window.confirm(this.$t('Ви дійсно хочете згенерувати новий пароль?'))) {
                this.setRandomValueAndCopyIt();
            }
        }
    },
    watch: {
        showPassword(newValue) {
            this.setPasswordVisibility(newValue);
        },
        isPasswordVisible(newValue) {
            this.$emit('update:showPassword', newValue);
        },
    }
};
</script>
