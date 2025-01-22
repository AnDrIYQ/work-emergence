import { ref, computed } from 'vue';

export function usePasswordVisibility(canShow, emit) {
    const isPasswordVisible = ref(false);

    const togglePasswordVisibility = () => {
        if (canShow.value) {
            isPasswordVisible.value = !isPasswordVisible.value;
            emit('update:showPassword', isPasswordVisible.value);
        }
    };

    const setPasswordVisibility = (value) => {
        if (canShow.value) {
            isPasswordVisible.value = value;
            emit('update:showPassword', isPasswordVisible.value);
        }
    };

    const passwordInputType = computed(() => {
        if (!canShow.value) {
            return 'password';
        }
        return isPasswordVisible.value ? 'text' : 'password';
    });

    return {
        isPasswordVisible,
        togglePasswordVisibility,
        setPasswordVisibility,
        passwordInputType,
    };
}
