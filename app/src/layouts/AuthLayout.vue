<template>
    <div class="auth-wrapper">
        <div class="left-part">
            <a class="logo" href="#">
                <img class="auth-image" src="@assets/we.svg" alt="auth-left">
                <span>{{ $t('Work Emergency') }}</span>
            </a>
            <img class="auth-image" src="@assets/auth-left.svg" alt="auth-left">
        </div>
        <div class="content-part">
            <div class="content-area">
                <img class="auth-image" src="@assets/we.svg" alt="auth-left">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout',
};
</script>
