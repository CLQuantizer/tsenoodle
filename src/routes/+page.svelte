<script lang="ts">
    import {Button} from "$lib/components/ui/button/index";

    const imageLinks = [
        '/tofu.png','/person.png', '/card.png','/3.png','/4.png', "/5.png",
        "/6.png","/8.png","/9.png","/10.png", "12.png","13.png","14.png"
    ]
    const imageAlts = [
        'Tofu','Mr.Tse', 'Restaurant sign','Rice dishes: aubergine, tomato with egg, port with onion',
        'Char siu noodle', 'Front', 'Fried Noodle', 'People queueing', 'Duck Char Siu on rice', 'Sweet and sour prawn',
        "Spicy Wanton","Char siu noodle with Fried Egg","Share with friends!"
    ]
    const socials = [
        {name: 'Facebook', link: 'https://www.facebook.com/tsenoodle'},
        {name: 'TripAdvisor', link: 'https://www.tripadvisor.com/Restaurant_Review-g186361-d17851676-Reviews-Tse_Noodles-Oxford_Oxfordshire_England.html'},
    ]

    const menu = [{"cn":"\u714e\u8089\u9903\u5b50","en":"Grill Pork Dumplings","cat":"app"},{"cn":"\u714e\u83dc\u9903\u5b50","en":"Grill Vege Dumplings","cat":"app"},{"cn":"\u70b8\u6625\u5377","en":"Fried Spring Rolls","cat":"app"},{"cn":"\u70b8\u96f2\u541e","en":"Fried Wanton","cat":"app"},{"cn":"\u8017\u6cb9\u83dc\u82b1","en":"Oyster Sauce Broccoli","cat":"sp"},{"cn":"\u8fa3\u5b50\u96de","en":"Sichuan Chicken Wing Dried Chilli","cat":"sp"},{"cn":"\u9999\u8fa3\u8766\u4ec1","en":"Sichuan Red Peppercorn Deep Fried Spicy King Prawns","cat":"sp"},{"cn":"\u9999\u8fa3\u6392\u9aa8","en":"Sichuan Red Peppercorn Deep Fried Ribs","cat":"sp"},{"cn":"\u6912\u76d0\u5927\u8766","en":"Spicy Salt & Pepper King Prawns","cat":"sp"},{"cn":"\u6912\u76d0\u96de\u7fc5","en":"Spicy Salt & Pepper Chicken Wings","cat":"sp"},{"cn":"\u6912\u76d0\u6392\u9aa8","en":"Spicy Salt & Pepper Ribs","cat":"sp"},{"cn":"\u5495\u54be\u8766","en":"Sweet Sour King Prawns","cat":"sp"},{"cn":"\u5bae\u4fdd\u8766\u98ef","en":"Kung Pao King Prawn Rice","cat":"rice"},{"cn":"\u59dc\u8471\u6cb9\u96de\u98ef","en":"Ginger Scallion Oil Chicken Rice","cat":"rice"},{"cn":"\u8304\u5b50\u725b\u98ef","en":"Sichuan Spicy Beef Aubergine Rice","cat":"rice"},{"cn":"\u9ebb\u5a46\u8c46\u8150\u98ef","en":"Mapo Tofu Rice","cat":"rice"},{"cn":"\u7cd6\u918b\u6392\u9aa8\u98ef","en":"Sweet Sour Ribs Rice","cat":"rice"},{"cn":"\u53c9\u71d2\u98ef","en":"Char Siu Rice (BBQ Pork)","cat":"rice"},{"cn":"\u70e7\u9e2d\u98ef","en":"Roast Duck Rice","cat":"rice"},{"cn":"\u725b\u8169\u98ef","en":"Braised Beef Rice","cat":"rice"},{"cn":"\u7d05\u71d2\u8089\u98ef","en":"Braised Pork Belly Rice","cat":"rice"},{"cn":"\u767d\u98ef","en":"White Rice","cat":"rice"},{"cn":"\u725b\u8089\u9eb5","en":"Aromatic Beef Noodle","cat":"nd"},{"cn":"\u91cd\u6176\u5c0f\u9eb5\uff08\u725b\uff09","en":"Chongqing Spicy beef Noodle","cat":"nd"},{"cn":"\u91cd\u6176\u6392\u9aa8\u9762","en":"Chongqing Spicy Pork Ribs Noodle","cat":"nd"},{"cn":"\u6e05\u6e6f\u6392\u9aa8\u6e6f\u9762","en":"Pork Spareribs Noodle","cat":"nd"},{"cn":"\u96f2\u541e\u9eb5","en":"Prawn Wanton Noodle","cat":"nd"},{"cn":"\u9ebb\u8fa3\u997a\u5b50\u6e6f\u9762","en":"Sichuan Spicy Pork Dumpling Noodle","cat":"nd"},{"cn":"\u8c46\u8150\u83dc\u6e6f\u9eb5","en":"Tofu Noodle","cat":"nd"},{"cn":"\u714e\u96de\u9762","en":"Chicken Noodle","cat":"nd"},{"cn":"\u867e\u997a","en":"Prawn Har Gau Dumplings ","cat":"ds"},{"cn":"\u70e7\u9ea6","en":"Pork & Prawn Siu Mai Dumplings","cat":"ds"},{"cn":"\u7cef\u7c73\u9e21","en":"Chicken in Glutinous Rice Parcels","cat":"ds"},{"cn":"\u53c9\u70e7\u5305","en":"BBQ Pork Buns","cat":"ds"},{"cn":"\u5c0f\u7b3c\u5305","en":"Pork Xiao Long Bao Dumplings","cat":"ds"},{"cn":"\u81d8\u8178\u5305","en":"Chinese Sausage Buns","cat":"ds"},{"cn":"\u5976\u9ec4\u5305","en":"Sweet Egg Yolk Custard Buns","cat":"ds"},{"cn":"\u53ef\u4e50","en":"Coke ","cat":"dk"},{"cn":"\u5065\u6021\u53ef\u4e50","en":"Diet Coke ","cat":"dk"},{"cn":"\u8c46\u5976","en":"Soya Bean Milk","cat":"dk"},{"cn":"\u9178\u6885\u6e6f","en":"Sour Plum Juice","cat":"dk"},{"cn":"\u738b\u8001\u5409","en":"Wong Lo Kut","cat":"dk"},{"cn":"\u9999\u7247\uff08\u70ed\uff09","en":"Hot Jasmine Tea","cat":"dk"},{"cn":"\u714e\u86cb","en":"Fried Egg","cat":"egg"}]
    const rice = menu.filter(item => item.cat === 'rice')
    const nds = menu.filter(item => item.cat === 'nd')
    let randomRice:any;
    let randomNoodle:any;

    const randomRiceDish = () => randomRice = rice[Math.floor(Math.random() * rice.length)];
    const randomNoodleDish = () => randomNoodle = nds[Math.floor(Math.random() * nds.length)]
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-amber-50">
    <div class="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
        <!-- Hero Section -->
        <header class="text-center space-y-4 max-w-2xl">
            <h1 class="text-5xl md:text-6xl font-playfair text-amber-900 tracking-wide">
                Tse Noodle
            </h1>
            <p class="text-lg md:text-xl text-amber-800 font-noto leading-relaxed">
                Authentic Chinese cuisine in the heart of Oxford
                <span class="block text-amber-700">with more than 40 years of history.</span>
            </p>
        </header>

        <!-- Menu Section -->
        <div class="w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-6 shadow-lg">
            <!-- Rice Section -->
            <div class="space-y-4">
                <Button class="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-all duration-300"
                        on:click={randomRiceDish}>
                    Discover a Rice Dish
                </Button>
                {#if randomRice}
                    <div class="text-green-700 font-noto text-lg p-3 bg-green-50 rounded-lg text-center">
                        {randomRice.cn} - {randomRice.en}
                    </div>
                {/if}
                <h2 class="font-playfair text-2xl text-amber-900 border-b-2 border-amber-200 pb-2">Rice Dishes</h2>
                <div class="space-y-2">
                    {#each rice as item}
                        <div class="font-noto hover:bg-amber-50 p-2 rounded transition-colors">
                            <span class="text-amber-900">{item.cn}</span>
                            <span class="block text-amber-700">{item.en}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Noodle Section -->
            <div class="space-y-4">
                <Button class="w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:opacity-90 transition-all duration-300"
                        on:click={randomNoodleDish}>
                    Discover a Noodle Dish
                </Button>
                {#if randomNoodle}
                    <div class="text-green-700 font-noto text-lg p-3 bg-green-50 rounded-lg text-center">
                        {randomNoodle.cn} - {randomNoodle.en}
                    </div>
                {/if}
                <h2 class="font-playfair text-2xl text-amber-900 border-b-2 border-amber-200 pb-2">Noodle Dishes</h2>
                <div class="space-y-2">
                    {#each nds as nd}
                        <div class="font-noto hover:bg-amber-50 p-2 rounded transition-colors">
                            <span class="text-amber-900">{nd.cn}</span>
                            <span class="block text-amber-700">{nd.en}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Gallery Section -->
        <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {#each imageLinks as imageLink, i}
                <div class="overflow-hidden rounded-xl shadow-lg group">
                    <img
                            class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            src={imageLink}
                            alt={imageAlts[i]}
                    />
                </div>
            {/each}
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 justify-center w-full my-6">
            {#each socials as social}
                <Button
                        href={social.link}
                        target="_blank"
                        class="bg-amber-700 hover:bg-amber-800 transition-colors">
                    {social.name}
                </Button>
            {/each}
        </div>

        <!-- Footer -->
        <footer class="text-center space-y-2 text-amber-800 font-noto">
            <p class="text-lg">Opens daily 12:00-21:00</p>
            <p>Find us at 8 Ship St, Oxford OX1 3DA, United Kingdom</p>
        </footer>
    </div>
</div>

<style>
    :global(body) {
        font-family: 'Noto Sans SC', sans-serif;
    }

    .font-playfair {
        font-family: 'Playfair Display', serif;
    }

    .font-noto {
        font-family: 'Noto Sans SC', sans-serif;
    }
</style>