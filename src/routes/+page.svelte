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
    // const items= [
    //     App,煎肉餃子,Grill Pork Dumplings,6.00
    // ]
    // App,煎菜餃子,Grill Vege Dumplings,6.00
    // App,炸春卷,Fried Spring Rolls,5.00
    // App,炸雲吞,Fried Wanton,6.00

</script>
<div class="text-4xl">Welcome to Tse Noodle</div>
<div>Authentic Chinese cuisine in the heart of Oxford</div>
<div class="my-2">
    <Button> See menu (under construction) </Button>
</div>
<div class="grid grid-cols-2 gap-2">
    {#each imageLinks as imageLink}
        <div>
            <img src={imageLink} alt="Tse Noodle" />
        </div>
    {/each}
</div>
<div class="flex gap-1 justify-evenly w-full my-2">
    {#each socials as social}
        <Button href={social.link} target="_blank">{social.name}</Button>
    {/each}
</div>
<div>
    Opens daily 12:00-21:00
</div>
<div>
    Find us at 8 Ship St, Oxford OX1 3DA, United Kingdom
</div>