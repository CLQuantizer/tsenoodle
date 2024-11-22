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
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-amber-50">
    <div class="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
        <!-- Hero Section -->
        <header class="text-center space-y-4 max-w-2xl">
            <h1 class="text-5xl md:text-6xl font-playfair text-amber-900 tracking-wide">
                Tse Noodle
            </h1>
            <p class="text-lg m:text-base md:text-xl text-amber-800 font-noto leading-relaxed">
                Authentic Chinese cuisine in the heart of Oxford
                <span class="block text-amber-700">with more than 40 years of history.</span>
            </p>
        </header>

        <!-- Tse-AI Section -->
        <div class="w-full max-w-2xl space-y-4 bg-white rounded-xl m:p-4 shadow-lg">
            <h2 class="text-2xl font-playfair text-amber-900 text-center">Ask Tse-AI</h2>
            <div class="flex gap-2 items-center ">
                <input
                        bind:value={userQuery}
                        placeholder={`I'm feeling 「${mood}」...`}
                        class="flex-1 px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        on:keydown={(e) => e.key === 'Enter' && getAiRecommendation()}
                />
                <Button
                        on:click={getAiRecommendation}
                        disabled={isLoading}
                        class="bg-amber-600 hover:bg-amber-700 transition-colors">
                    {isLoading ? 'Thinking...' : 'Ask Tse-AI'}
                </Button>
            </div>
            {#if aiRecommendation}
                <div class="bg-amber-50 p-4 rounded-lg">
                    <p class="text-amber-900 font-noto">{aiRecommendation}</p>
                </div>
            {/if}
        </div>

        <!-- Rest of the components remain the same -->
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
                        <div class="font-noto hover:bg-amber-50 p-1 rounded transition-colors">
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
            <p>Made with ❤️ by Students at <a href="https://www.ox.ac.uk/" target="_blank" class="underline">University of Oxford</a></p>
        </footer>
    </div>
</div>

<style>
    .font-playfair {
        font-family: 'Playfair Display', serif;
    }

    .font-noto {
        font-family: 'Noto Sans SC', sans-serif;
    }
</style>