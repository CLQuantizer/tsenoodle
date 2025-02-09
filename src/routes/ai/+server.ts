import {z} from "zod";
import {createPrompt, makeGeminiRequest} from "$lib/AI";
import {json} from "@sveltejs/kit";
import {AI} from "$env/static/private";

export const POST = async ({request, platform}) => {
    try {
        const {text} = await request.json();
        const parse = z.string().safeParse(text);
        let input = 'randomly choose a dish for me';
        if (parse.success) {
            input = parse.data;
        }
        const prompt = createPrompt(input);
        const result = await makeGeminiRequest(prompt, AI) as any;
        const rec = result.candidates[0].content.parts[0].text;

        console.log(`Input: ${input}`);
        console.log(`Recommended: ${rec}\n`);
        return json({rec});
    } catch (e) {
        console.error(e);
        return json({error: "Tse-AI is currently down"});
    }
}