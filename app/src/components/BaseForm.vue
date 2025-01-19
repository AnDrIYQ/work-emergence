<template>
    <form
        ref="form"
        :method="method"
    >
        <slot />
    </form>
</template>

<script>
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
    methods: {
        submit() {
            // Needs axios
        },
    },
};
</script>
