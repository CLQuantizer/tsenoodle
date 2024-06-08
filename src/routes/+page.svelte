<script lang="ts">
    const imageLinks = [
        '/tofu.png','/person.png',
        '/card.png','/2.png','/3.png','/4.png',
    ]
    const socials = [
        {name: 'Facebook', link: 'https://www.facebook.com/tsenoodle'},
        {name: 'yelp', link: "https://www.yelp.com/biz/tse-noodles-oxford"},
        {name: 'Twitter', link: 'https://twitter.com/tse.noodle'},
    ]
</script>
<div class="text-4xl">Welcome to Tse Noodle</div>
<div>Best Chinese Eatery in the heart of Oxford</div>
<div class="flex gap-1 justify-evenly w-full">
    {#each socials as social}
        <a href={social.link} target="_blank">{social.name}</a>
    {/each}
</div>
<div class="grid grid-cols-2 gap-2">
    {#each imageLinks as imageLink}
        <div>
            <img src={imageLink} alt="Tse Noodle" />
        </div>
    {/each}
</div>
