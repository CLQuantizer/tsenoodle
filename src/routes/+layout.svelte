<script>
    import "../app.css";
</script>
<div class="w-full h-full flex flex-col justify-center items-center bg-amber-50">
    <slot />
</div>
<style>
    :global(body) {
        font-family: 'Noto Sans SC', sans-serif;
    }
</style>