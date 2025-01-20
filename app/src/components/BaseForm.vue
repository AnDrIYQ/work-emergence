<template>
    <form
        ref="form"
        :class="[style.form]"
        :method="method"
    >
        <slot />
    </form>
</template>

<script>
import style from '@styles/components/BaseForm.module.css';
import api from "@root/api";

export default {
    name: "BaseForm",
    emits: ['success', 'error', 'sending-start'],
    props: {
        url: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            default: 'POST',
        },
        data: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return { style };
    },
    methods: {
        submit() {
            this.$emit('sending-start');
            const inputs = document.querySelectorAll('input, select');
            const results = Array.from(inputs).map((input) => {
                return input.reportValidity();
            });
            if (!results.some((result) => !result)) {
                api.post(this.url).then((response) => {
                    if (!response) {
                        return false;
                    }
                });
            }
        },
    },
};
</script>
