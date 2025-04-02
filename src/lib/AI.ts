import {z} from "zod";

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
    const today = new Date().getDate();
    return `Today is ${today}.
        Menu:
        Rice Dishes:
        ${MENU_ITEMS.rice.join('\n')}
        
        Noodle Dishes:
        ${MENU_ITEMS.noodles.join('\n')}
        Customer says: "${userInput}"
        Please recommend a dish from the menu.`;
    };

export const recommendationSchema = z.object({
    recommendation: z.string(),
    reason: z.string()
});
