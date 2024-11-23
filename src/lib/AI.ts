import ky from 'ky';

const MENU_ITEMS = {
    rice: [
        "宮保蝦飯 (Kung Pao Prawn Rice)",
        "薑蔥油雞飯 (Ginger Scallion Chicken Rice)",
        "茄子牛飯 (Spicy Beef Aubergine Rice)",
        "麻婆豆腐飯 (Mapo Tofu Rice)",
        "糖醋排骨飯 (Sweet Sour Ribs Rice)",
        "叉燒飯 (BBQ Pork Rice)",
        "燒鴨飯 (Roast Duck Rice)",
        "牛腩飯 (Braised Beef Rice)",
        "紅燒肉飯 (Braised Pork Belly Rice)",
        "白飯 (Plain Rice)"
    ],
    noodles: [
        "牛肉麵 (Beef Noodle)",
        "重慶小麵（牛） (Chongqing Spicy Beef Noodle)",
        "重慶排骨麵 (Chongqing Spicy Pork Ribs Noodle)",
        "清湯排骨湯麵 (Pork Spareribs Noodle)",
        "雲吞麵 (Wanton Noodle)",
        "麻辣餃子湯麵 (Sichuan Spicy Dumpling Noodle)",
        "豆腐菜湯麵 (Tofu Vegetable Noodle)",
        "炸雞麵 (Fried Chicken Noodle)"
    ]
};

export const createPrompt = (userInput: string): string => {
    return `You are a helpful waiter at the Chinese Restaurant Tse-Noodles at the Heart of Oxford with 45 years of stories. 
    Tse is from Hongkong and has been serving the best Chinese food in Oxford.
    Based what the customer's says below, recommend ONE dish from our menu. 
    First respond the name of the dish as "CHINESE(ENGLISH)", and then give a short fun/warm/interesting/positive reason.
        Menu:
        Rice Dishes:
        ${MENU_ITEMS.rice.join('\n')}
        
        Noodle Dishes:
        ${MENU_ITEMS.noodles.join('\n')}
        Customer says: "${userInput}"`;
    };

export const makeGeminiRequest = async (prompt: string, apiKey: string) => {
    const response = await ky.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
        {
            json: {contents: [{parts: [{text: prompt}]}]},
            searchParams: {key: apiKey},
            headers: {'Content-Type': 'application/json'}
        }
    );
    return await response.json();
}