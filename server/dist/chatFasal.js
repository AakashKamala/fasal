"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = chat;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const systemPrompt = `
Fasal Blog: AI & IoT in Farming – Key Highlights

1. Horticulture 4.0:
- Uses IoT, AI, and data analytics to optimize Indian horticulture.
- Aims to tackle issues like water scarcity, disease infestation, and climate unpredictability.

2. Micro-Level Technologies:
- IoT Sensors: Reduce water use by 20–30%, detect diseases early.
- Hydroponics: Uses 90% less water, boosts yields by 30%.
- Aeroponics: 95% water saving, increased yield.
- Aquaponics: Recycles fish waste as fertilizer, saves 70% water.
- Nuclear Tech: Enhances yield, pest resistance, and product quality.

3. Macro-Level Technologies:
- Remote Sensing: Prevents up to 15% crop loss.
- Ag-Drones: Reduce pesticide use by 30%.
- Robotics: Cut costs by 15–90%, automate farming tasks.

4. Fasal’s System:
- 12 advanced sensors collect farm-specific data.
- AI processes 52,000+ data points per crop to deliver actionable advice.
- Achievements: Saved 82.8B liters water, reduced chemicals by 1.27L kg, cut GHG by 54,965 MT, up to 50% cost savings.

5. Drip Irrigation (Detailed Guide):
- Delivers water directly to roots, highest efficiency (2-3% water loss).
- Benefits: water, power, labor, fertilizer savings, reduced weed & pest issues.
- Best for: fruits, vegetables, flowers, spices, oilseeds, forest crops.
- Layout: Pump → Control Head → Mainline/Sub-mains → Lateral → Emitters.

6. Disease Management (Chilli & Guava):
- Key diseases: Damping Off, Fruit Rot, Fusarium Wilt, Powdery Mildew, Anthracnose.
- Solutions: Seed treatment (Thiram/Captan), fungicide sprays, crop rotation.
- Fasal: Predicts disease risks, gives site/crop/stage-specific advice using AI.

7. Pest Management:
- Chilli: Thrips, Aphids – managed via intercropping, traps, agro nets, and selective pesticides.
- Guava: Mealybug, Fruit fly – managed via sanitation, traps, and biocontrol agents like ladybird beetles.

8. Crop Cultivation Tips:
- Chilli: Needs loamy soil, 15–35°C, irrigation every 5–10 days.
- Guava: Grows in 23–28°C, best in light sandy loam, irrigated every 7–15 days.
- Use of Fasal improves fruit size, reduces input costs, and increases yield.

9. Fasal's Unique Edge:
- Real-time sensor data + AI-driven insights.
- Weather forecasts (14-day) and microclimate modeling.
- Helps plan irrigation, disease management, and selling strategies.

Using the above information, answer: ... 
`;
const genai_1 = require("@google/genai");
const ai = new genai_1.GoogleGenAI({ apiKey: process.env.AI_KEY });
function chat(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userPrompt = req.body.prompt;
        console.log(userPrompt);
        const response = yield ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `${systemPrompt} ${userPrompt}`,
        });
        console.log(response.text);
        return res.json(response.text);
    });
}
