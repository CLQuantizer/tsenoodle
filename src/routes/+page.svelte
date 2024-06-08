<script lang="ts">
    const imageLinks = [
        'https://www.google.com/imgres?q=tse%20noodle&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069363410755&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Ftsenoodle%2F&docid=0WEAV5Wi2G-d-M&tbnid=tzH9QGQJU3J8CM&vet=12ahUKEwjF1dagy8yGAxWDslYBHQk8ASoQM3oECEoQAA..i&w=949&h=959&hcb=2&ved=2ahUKEwjF1dagy8yGAxWDslYBHQk8ASoQM3oECEoQAA'
    ]
</script>
<div class="text-4xl">Welcome to Tse Noodle</div>
<div class="grid grid-cols-2">
    {#each imageLinks as imageLink}
        <img src={imageLink} alt="Tse Noodle" class="w-1/2 h-1/2"/>
    {/each}
</div>
