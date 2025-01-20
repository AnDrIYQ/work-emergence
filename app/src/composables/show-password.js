import { ref, computed } from 'vue';

export function usePasswordVisibility(canShow) {
    const isPasswordVisible = ref(false);

    const togglePasswordVisibility = () => {
        if (canShow.value) {
            isPasswordVisible.value = !isPasswordVisible.value;
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
        passwordInputType,
    };
}
