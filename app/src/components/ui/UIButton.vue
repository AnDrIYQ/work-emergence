<template>
    <button :class="[style.button]" type="button" @click="$emit('click')">
        <slot />
    </button>
</template>

<script>
import style from '@styles/components/ui/UIButton.module.css';

export default {
    name: "UIButton",
    emits: ['click'],
    data() {
        return { style };
    },
};
</script>
