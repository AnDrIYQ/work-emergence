<template>
    <auth-layout>
        <h1 style="text-align: center; margin: 0; padding: 16px">404</h1>
        <h2 style="text-align: center; margin: 0">{{ $t('Схоже сторінка не знайдена') }}</h2>
    </auth-layout>
</template>

<script>
import AuthLayout from "@root/layouts/AuthLayout.vue";

export default {
    name: 'NotFound',
    components: {AuthLayout},
};
</script>