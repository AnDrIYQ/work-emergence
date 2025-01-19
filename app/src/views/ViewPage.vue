<template>
    <auth-layout>
        <base-form
            url="/login"
            :data="model"
        >
            <input type="text" />
        </base-form>
    </auth-layout>
</template>

<script>
import AuthLayout from "@root/layouts/AuthLayout.vue";
import BaseForm from "@root/components/BaseForm.vue";

export default {
    name: 'ViewPage',
    data() {
        return {
            model: {},
        };
    },
    components: {
        AuthLayout,
        BaseForm,
    }
};
</script>
