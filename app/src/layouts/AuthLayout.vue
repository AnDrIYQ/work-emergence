<template>
    <div :class="[style.authWrapper]">
        <div :class="[style.leftPart]">
            <a :class="[style.logo]" href="#">
                <img :class="style.authImage" src="@assets/we.svg" alt="auth-left">
                <span>{{ $t('Work Emergency') }}</span>
            </a>
            <img :class="style.authImage" src="@assets/auth-left.svg" alt="auth-left">
        </div>
        <div :class="[style.contentPart]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import style from '@styles/layouts/AuthLayout.module.css';

export default {
    name: 'AuthLayout',
    data() {
        return { style };
    },
};
</script>
