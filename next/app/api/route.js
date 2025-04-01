import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req){
  
  const { messages } = await req.json();

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

  messages.unshift({
    role: 'system',
    content: `Vous êtes PortfolioGPT, répondant uniquement aux questions basées sur le CV fourni.
CV:
${DATA_RESUME}

Aidez les utilisateurs à en savoir plus sur Eya à partir de son CV.`
  })

  const response = await client.getChatCompletions(model, messages, {
    maxTokens: 128,
  })

  return NextResponse.json({ 
    message: response.choices[0].message.content
   })
}

const DATA_RESUME = `Eya Cherni
Adresse: Montréal, Québec, Canada
Téléphone: +1 (000) 000-0000
Email: chernieya2010@gmail.com

Éducation
Baccalauréat en Génie logiciel [2024 - Présent]
École de technologie supérieure, Montréal

Sciences de la nature [2022 - 2024]
Collège de Maisonneuve, Montréal

Compétences Techniques
Frontend: HTML, CSS, JavaScript
Backend: C, Java, PHP, MySQL, Bash, Assembleur
Outils: VS Code, Microsoft Office, Canva
Plateformes: Azure

Langues
Français: Langue maternelle`