<script lang="ts">
    import {Button} from "$lib/components/ui/button/index";

    const imageLinks = [
        '/tofu.png','/person.png',
        '/card.png','/3.png','/4.png', "/5.png",
        "/6.png","/7.png","/8.png","/9.png","/10.png",
        "11.png","12.png","13.png","14.png"
    ]
    const socials = [
        {name: 'Facebook', link: 'https://www.facebook.com/tsenoodle'},
        {name: 'TripAdvisor', link: 'https://www.tripadvisor.com/Restaurant_Review-g186361-d17851676-Reviews-Tse_Noodles-Oxford_Oxfordshire_England.html'},
    ]

    const menu = [{"cn":"\u714e\u8089\u9903\u5b50","en":"Grill Pork Dumplings","cat":"app"},{"cn":"\u714e\u83dc\u9903\u5b50","en":"Grill Vege Dumplings","cat":"app"},{"cn":"\u70b8\u6625\u5377","en":"Fried Spring Rolls","cat":"app"},{"cn":"\u70b8\u96f2\u541e","en":"Fried Wanton","cat":"app"},{"cn":"\u8017\u6cb9\u83dc\u82b1","en":"Oyster Sauce Broccoli","cat":"sp"},{"cn":"\u8fa3\u5b50\u96de","en":"Sichuan Chicken Wing Dried Chilli","cat":"sp"},{"cn":"\u9999\u8fa3\u8766\u4ec1","en":"Sichuan Red Peppercorn Deep Fried Spicy King Prawns","cat":"sp"},{"cn":"\u9999\u8fa3\u6392\u9aa8","en":"Sichuan Red Peppercorn Deep Fried Ribs","cat":"sp"},{"cn":"\u6912\u76d0\u5927\u8766","en":"Spicy Salt & Pepper King Prawns","cat":"sp"},{"cn":"\u6912\u76d0\u96de\u7fc5","en":"Spicy Salt & Pepper Chicken Wings","cat":"sp"},{"cn":"\u6912\u76d0\u6392\u9aa8","en":"Spicy Salt & Pepper Ribs","cat":"sp"},{"cn":"\u5495\u54be\u8766","en":"Sweet Sour King Prawns","cat":"sp"},{"cn":"\u5bae\u4fdd\u8766\u98ef","en":"Kung Pao King Prawn Rice","cat":"rice"},{"cn":"\u59dc\u8471\u6cb9\u96de\u98ef","en":"Ginger Scallion Oil Chicken Rice","cat":"rice"},{"cn":"\u8304\u5b50\u725b\u98ef","en":"Sichuan Spicy Beef Aubergine Rice","cat":"rice"},{"cn":"\u9ebb\u5a46\u8c46\u8150\u98ef","en":"Mapo Tofu Rice","cat":"rice"},{"cn":"\u7cd6\u918b\u6392\u9aa8\u98ef","en":"Sweet Sour Ribs Rice","cat":"rice"},{"cn":"\u53c9\u71d2\u98ef","en":"Char Siu Rice (BBQ Pork)","cat":"rice"},{"cn":"\u70e7\u9e2d\u98ef","en":"Roast Duck Rice","cat":"rice"},{"cn":"\u725b\u8169\u98ef","en":"Braised Beef Rice","cat":"rice"},{"cn":"\u7d05\u71d2\u8089\u98ef","en":"Braised Pork Belly Rice","cat":"rice"},{"cn":"\u767d\u98ef","en":"White Rice","cat":"rice"},{"cn":"\u725b\u8089\u9eb5","en":"Aromatic Beef Noodle","cat":"nd"},{"cn":"\u91cd\u6176\u5c0f\u9eb5\uff08\u725b\uff09","en":"Chongqing Spicy beef Noodle","cat":"nd"},{"cn":"\u91cd\u6176\u6392\u9aa8\u9762","en":"Chongqing Spicy Pork Ribs Noodle","cat":"nd"},{"cn":"\u6e05\u6e6f\u6392\u9aa8\u6e6f\u9762","en":"Pork Spareribs Noodle","cat":"nd"},{"cn":"\u96f2\u541e\u9eb5","en":"Prawn Wanton Noodle","cat":"nd"},{"cn":"\u9ebb\u8fa3\u997a\u5b50\u6e6f\u9762","en":"Sichuan Spicy Pork Dumpling Noodle","cat":"nd"},{"cn":"\u8c46\u8150\u83dc\u6e6f\u9eb5","en":"Tofu Noodle","cat":"nd"},{"cn":"\u714e\u96de\u9762","en":"Chicken Noodle","cat":"nd"},{"cn":"\u867e\u997a","en":"Prawn Har Gau Dumplings ","cat":"ds"},{"cn":"\u70e7\u9ea6","en":"Pork & Prawn Siu Mai Dumplings","cat":"ds"},{"cn":"\u7cef\u7c73\u9e21","en":"Chicken in Glutinous Rice Parcels","cat":"ds"},{"cn":"\u53c9\u70e7\u5305","en":"BBQ Pork Buns","cat":"ds"},{"cn":"\u5c0f\u7b3c\u5305","en":"Pork Xiao Long Bao Dumplings","cat":"ds"},{"cn":"\u81d8\u8178\u5305","en":"Chinese Sausage Buns","cat":"ds"},{"cn":"\u5976\u9ec4\u5305","en":"Sweet Egg Yolk Custard Buns","cat":"ds"},{"cn":"\u53ef\u4e50","en":"Coke ","cat":"dk"},{"cn":"\u5065\u6021\u53ef\u4e50","en":"Diet Coke ","cat":"dk"},{"cn":"\u8c46\u5976","en":"Soya Bean Milk","cat":"dk"},{"cn":"\u9178\u6885\u6c64","en":"Sour Plum Juice","cat":"dk"},{"cn":"\u738b\u8001\u5409","en":"Wong Lo Kut","cat":"dk"},{"cn":"\u9999\u7247\uff08\u70ed\uff09","en":"Hot Jasmine Tea","cat":"dk"},{"cn":"\u714e\u86cb","en":"Fried Egg","cat":"egg"}]
    const rice = menu.filter(item => item.cat === 'rice')
    const nds = menu.filter(item => item.cat === 'nd')
    let randomRice:any;
    let randomNoodle:any;

    const randomRiceDish = () => randomRice = rice[Math.floor(Math.random() * rice.length)];
    const randomNoodleDish = () => randomNoodle = nds[Math.floor(Math.random() * nds.length)]
</script>

<div class="container mx-auto flex flex-col justify-center items-center gap-2">
    <div class="text-4xl">Welcome to Tse Noodle</div>
    <div class="my-2">Authentic Chinese cuisine in the heart of Oxford<br>with more than 40 years of history.</div>

    <div class="grid-cols-2 grid gap-2">
        <div class="space-y-1.5">
            <Button on:click={randomRiceDish}>
                Random a rice dish
            </Button>
            {#if randomRice}
                <div class="text-green-700">{randomRice.cn} - {randomRice.en}</div>
            {/if}
            <div class="font-bold">Rice Dishes</div>
            {#each rice as item}
                <div>{item.cn} - {item.en}</div>
            {/each}
        </div>
        <div class="space-y-1.5">
            <Button on:click={randomNoodleDish}>
                Random a noodle dish
            </Button>
            {#if randomNoodle}
                <div class="text-green-700">{randomNoodle.cn} - {randomNoodle.en}</div>
            {/if}

            <div class="font-bold">Noodle Dishes</div>
            {#each nds as nd}
                <div>{nd.cn} - {nd.en}</div>
            {/each}
        </div>
    </div>

    <div class="grid grid-cols-4 gap-2">
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
</div>