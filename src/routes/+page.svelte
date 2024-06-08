<script lang="ts">
    import {Button} from "$lib/components/ui/button/index";

    const imageLinks = [
        '/tofu.png','/person.png',
        '/card.png','/3.png','/4.png',
    ]
    const socials = [
        {name: 'Facebook', link: 'https://www.facebook.com/tsenoodle'},
        {name: 'TripAdvisor', link: 'https://www.tripadvisor.com/Restaurant_Review-g186361-d17851676-Reviews-Tse_Noodles-Oxford_Oxfordshire_England.html'},
    ]
</script>
<div class="text-4xl">Welcome to Tse Noodle</div>
<div>Best Chinese Eatery in the heart of Oxford</div>
<div class="flex gap-1 justify-evenly w-full my-2">
    {#each socials as social}
        <Button href={social.link} target="_blank">{social.name}</Button>
    {/each}
</div>
<div class="grid grid-cols-2 gap-2">
    {#each imageLinks as imageLink}
        <div>
            <img src={imageLink} alt="Tse Noodle" />
        </div>
    {/each}
</div>
<div>
    Find us at 7 Gloucester Green, Oxford, OX1 2DF
</div>