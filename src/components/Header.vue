<template>
    <RouterLink to="/" class="flex flex-row items-center">
        <img class="logo" src="../assets/ufe-logo.png" alt="UFE Logo" style="margin-right: 10px;">
        <div class="flex flex-col items-start">
            <div class="text-primary font-bold text-3xl">TIC 409 Advanced OOP</div>
            <div class="text-primary font-bold text-2xl">
                <slot />
            </div>
        </div>
    </RouterLink>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>