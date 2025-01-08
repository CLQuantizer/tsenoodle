<script>
    import "../app.css";
    import GitHubCorner from "$lib/client/GitHubCorner.svelte";
</script>

<GitHubCorner href="https://github.com/CLQuantizer/tsenoodle" />
<div class="w-full h-full flex flex-col justify-center items-center bg-amber-50">
    <slot />
</div>

<style>
    :global(body) {
        font-family: 'Noto Sans SC', sans-serif;
    }
</style>