<script lang="ts">
    let {children} = $props();
</script>

<div class="navbar">
        <a href="/">Home</a>
        <a href="/pages/about">About</a>
        <a href=" ">Projects</a>
        <a href=" ">Misc</a>
        <a href="/pages/changelog">Changelog</a>
</div>

{@render children()}

<div class="footer">
    <a href="https://github.com/MoonriseSunset" target="_blank">Github</a> | © MoonriseSunset 2024 
</div>