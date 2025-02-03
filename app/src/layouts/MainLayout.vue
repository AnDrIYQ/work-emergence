<template>
    <div class="main-layout">
        <div class="flex card w-full justify-center">
            <div class="max-w-11/12 w-full">
                <slot name="header" />
            </div>
        </div>
        <div class="flex w-full justify-center mt-4">
            <div class="max-w-11/12 w-full">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainLayout"
};
</script>
