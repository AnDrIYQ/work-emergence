import { computed, toRefs } from 'vue';

export function useInputValidation(props) {
    const propsRef = toRefs(props);

    const validity = computed(() => propsRef.modelValue.value ? '' : 'Invalid field value');

    return {
        validity,
    };
}
