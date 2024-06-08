<script lang="ts">
    const imageLinks = [
        '/1.png','/2.png','/3.png','/4.png','/5.png','/6.png'
    ]
</script>
<div class="text-4xl">Welcome to Tse Noodle</div>
<div>Best Chinese Eatery in the heart of Oxford</div>
<div class="grid grid-cols-2">
    {#each imageLinks as imageLink}
        <div>
            <img src={imageLink} alt="Tse Noodle" />
        </div>
    {/each}
</div>
