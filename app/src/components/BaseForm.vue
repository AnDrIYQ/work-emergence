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
    emits: ['success', 'error', 'sending-start', 'update:isFormDirty'],
    props: {
        url: {
            type: String,
            required: true,
        },
        isFormDirty: {
            type: Boolean,
            default: false,
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
        return {
            style,
        };
    },
    mounted() {
        const form = this.$refs.form;
        form.querySelectorAll('input, select').forEach((element) => {
            element.addEventListener('input', this.handleFieldChange.bind(this));
            element.addEventListener('change', this.handleFieldChange.bind(this));
        });
    },
    methods: {
        handleFieldChange(event) {
            if (event.target.value.trim()) {
                this.$emit('update:isFormDirty', true);
            }
        },
        submit() {
            this.$emit('sending-start');
            const inputs = document.querySelectorAll('input, select');
            const results = Array.from(inputs).map((input) => {
                return input.reportValidity();
            });
            if (!results.some((result) => !result)) {
                api.post(this.url, this.data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then((body) => {
                    this.$emit('success', body);
                }).catch(({ status, errors }) => {
                    for(let error of errors) {
                        this.$notify.error(error, status);
                    }
                    this.$emit('error', { status });
                }).finally(() => {
                    this.$emit('update:isFormDirty', false);
                });
            }
        },
    },
};
</script>
