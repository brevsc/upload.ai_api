import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllPromptsRoute } from "./routes/get_all_prompts";
import { uploadVideoRoute } from "./routes/upload_video";
import { createTranscriptionRoute } from "./routes/create_transcription";
import { generateAICompletionRoute } from "./routes/generate_ai_completion";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333");
  });
