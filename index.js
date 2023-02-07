require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function start() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "write a 50 words essay about the history of Spain",
    temperature: 0,
    max_tokens: 1000,
  });
  console.log(response.data.choices[0].text);
}
start();