<template>
    <button class="button" type="button" @click="$emit('click')">
        <slot />
    </button>
</template>

<script>
export default {
    name: "UIButton",
    emits: ['click'],
};
</script>
