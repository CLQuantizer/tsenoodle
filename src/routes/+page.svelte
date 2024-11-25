<script lang="ts">
    import {Button} from "$lib/components/ui/button/index";
    import {IMAGE_ALTS, IMAGE_LINKS, MENU, SOCIALS} from "$lib/client/constants";
    import ky from 'ky';
    import {onMount} from "svelte";

    const wongKarWaiFilms = [
        "As Tears Go By",
        "Days of Being Wild",
        "Chungking Express",
        "Fallen Angels",
        "Happy Together",
        "In the Mood for Love",
        "My Blueberry Nights",
        "The Grandmaster"
    ];

    let mood = "Chungking Express";
    onMount(() => mood = wongKarWaiFilms[Math.floor(Math.random() * wongKarWaiFilms.length)]);

    const rice = MENU.filter(item => item.cat === 'rice')
    const nds = MENU.filter(item => item.cat === 'nd')
    let randomRice: any;
    let randomNoodle: any;
    let userQuery = '';
    let aiRecommendation = '';
    let isLoading = false;

    const randomRiceDish = () => randomRice = rice[Math.floor(Math.random() * rice.length)];
    const randomNoodleDish = () => randomNoodle = nds[Math.floor(Math.random() * nds.length)];

    async function getAiRecommendation() {
        if (!userQuery.trim()) {
            aiRecommendation = 'Please tell vibe me and then I can shill you.';
            return;
        }

        isLoading = true;
        try {
            const response: { rec: string } = await ky.post('/ai', {
                json: { text: userQuery }
            }).json();
            aiRecommendation = response.rec;
        } catch (error) {
            console.error('Error getting AI recommendation:', error);
            aiRecommendation = "Sorry, Tse-AI's brother OPEN-AI is mean to us today. Please try again later.";
        } finally {
            isLoading = false;
        }
    }
</script>

<svelte:head>
    <title>Tse Noodle - AI-Powered Chinese Restaurant in Oxford</title>
    <meta name="description" content="Experience based Chinese cuisine with AI-powered menu recommendations at Tse Noodle in Oxford. Over 45 years of culinary excellence meets modern technology, featuring Tse-AI, your dish recommendation assistant." />
    <meta name="keywords" content="Chinese restaurant Oxford, Tse Noodle, AI restaurant recommendations, Tse-AI, authentic Chinese food, noodles Oxford, Chinese cuisine, AI-powered dining" />

    <!-- Open Graph tags for social media -->
    <meta property="og:title" content="Tse Noodle - Based Chinese Restaurant in Oxford" />
    <meta property="og:description" content="Meet Tse-AI, your personal menu guide! Experience authentic Chinese cuisine with smart dish recommendations at Oxford's innovative Chinese restaurant. 45+ years of tradition meets AI innovation" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tsenoodle.co.uk" />
    <meta property="og:image" content="https://tsenoodle.co.uk/og-image.png" />

    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tse Noodle - Where AI Meets Authentic Based Chinese Cuisine" />
    <meta name="twitter:description" content="Let Tse-AI guide you through our menu! Traditional Chinese cuisine in Oxford with 45+ years of history, now featuring AI-powered dish recommendations." />
    <meta name="twitter:image" content="https://tsenoodle.co.uk/twitter-card.png" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://tsenoodle.co.uk" />

    <!-- Existing font link -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>


<div class="sm:container m:w-screen mx-auto px-2 py-6 flex flex-col items-center gap-6">
    <!-- Hero Section -->
    <header class="text-center space-y-4">
        <h1 class="text-5xl md:text-6xl font-playfair text-amber-900 tracking-wide">
            Tse Noodle
        </h1>
        <p class="text-lg m:text-base md:text-xl text-amber-800 font-noto leading-relaxed">
            Authentic Chinese cuisine in the heart of Oxford
            <span class="block text-amber-700">with more than 45 years of stories.</span>
        </p>
    </header>

    <!-- Tse-AI Section -->
    <div class="w-full max-w-2xl space-y-4 bg-white rounded-xl m:p-4 shadow-lg">
        <h2 class="text-2xl font-playfair text-amber-900 text-center">Ask Tse-AI</h2>
        <div class="flex gap-2 items-center justify-between">
            <input
                    bind:value={userQuery}
                    placeholder={`I'm feeling 「${mood}」...`}
                    class="p-2 rounded-lg border border-amber-200 m:w-full
                     focus:outline-none focus:ring-2 focus:ring-amber-500"
                    on:keydown={(e) => e.key === 'Enter' && getAiRecommendation()}
            />
            <Button
                    on:click={getAiRecommendation}
                    disabled={isLoading}
                    class="bg-amber-600 hover:bg-amber-700 transition-colors">
                {isLoading ? '...' : 'Ask'}
            </Button>
        </div>
        {#if isLoading}
            <div class="text-center text-amber-900 font-noto">Thinking...</div>
        {/if}
        {#if aiRecommendation}
            <div class="bg-amber-50 p-4 rounded-lg">
                <p class="text-amber-900 font-noto">{aiRecommendation}</p>
            </div>
        {/if}
    </div>

    <!-- Rest of the components remain the same -->
    <div class="w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-6 shadow-lg">
        <!-- Noodle Section -->
        <div class="space-y-4">
            <Button class="w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:opacity-90 transition-all duration-300"
                    on:click={randomNoodleDish}>
                Randomize a Noodle Dish
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
        <!-- Rice Section -->
        <div class="space-y-4">
            <Button class="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-all duration-300"
                    on:click={randomRiceDish}>
                Randomize a Rice Dish
            </Button>
            {#if randomRice}
                <div class="text-green-700 font-noto text-lg p-3 bg-green-50 rounded-lg text-center">
                    {randomRice.cn} - {randomRice.en}
                </div>
            {/if}
            <h2 class="font-playfair text-2xl text-amber-900 border-b-2 border-amber-200 pb-2">Rice Dishes</h2>
            <div class="space-y-2">
                {#each rice as item}
                    <div class="font-noto hover:bg-amber-50 p-1 rounded transition-colors">
                        <span class="text-amber-900">{item.cn}</span>
                        <span class="block text-amber-700">{item.en}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Gallery Section -->
    <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each IMAGE_LINKS as imageLink, i}
            <div class="overflow-hidden rounded-xl shadow-lg group">
                <img
                        class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        src={imageLink}
                        alt={IMAGE_ALTS[i]}
                />
            </div>
        {/each}
    </div>

    <!-- Social Links -->
    <div class="flex gap-4 justify-center w-full my-6">
        {#each SOCIALS as social}
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

<style>
    .font-playfair {
        font-family: 'Playfair Display', serif;
    }

    .font-noto {
        font-family: 'Noto Sans SC', sans-serif;
    }
</style>