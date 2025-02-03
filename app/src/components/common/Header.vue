<template>
    <a class="flex items-center" @click.prevent="$router.push('/')" href="javascript:void(0)">
        <img class="logo-image" src="@assets/we.svg" alt="Logo">
        <span class="ms-2 logo-text">{{ $t('Work emergency') }}</span>
    </a>
</template>

<script>
export default {
    name: "HeaderComponent",
};
</script>
