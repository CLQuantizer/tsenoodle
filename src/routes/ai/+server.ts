import {z} from "zod";
import {createPrompt, recommendationSchema} from "$lib/AI";
import {json} from "@sveltejs/kit";
import { createWorkersAI } from 'workers-ai-provider';
import {generateObject} from "ai";

export const POST = async ({request, platform}) => {
    const {text} = await request.json();
    const AI = platform?.env?.AI;
    const workerAI = createWorkersAI({ binding: AI });
    const model = workerAI('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {});
    if (!AI) throw new Error("AI is not set");
    try {
        const parse = z.string().safeParse(text);
        let input = 'randomly choose a dish for me';
        if (parse.success) {
            input = parse.data;
        }
        const response = await generateObject({
            model,
            prompt: createPrompt(input),
            system: ' You are a helpful waiter at the Chinese Restaurant \n    ' +
                'Tse-Noodles at the Heart of Oxford with 45 years of stories. \n    ' +
                'Tse is from Hongkong and has been serving the best Chinese food in Oxford.\n    ' +
                'Based what the customer\'s says below, recommend ONE dish from our menu. \n    ' +
                'First respond the name of the dish as "CHINESE(ENGLISH)", ' +
                'and then give a short fun/warm/interesting/positive reason.',
            schema: recommendationSchema
        });
        const {recommendation, reason} = response.object;
        // format the recommendation and the reason
        const rec = `Recommendation: ${recommendation}\n Reason: ${reason}`;
        return json({rec});
    } catch (e) {
        console.error(e);
        return json({error: "Tse-AI is currently down"});
    }
}