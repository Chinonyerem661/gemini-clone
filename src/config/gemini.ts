// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   Chat,
//   GoogleGenAI,
// } from '@google/genai';
// import mime from 'mime';


// function saveBinaryFile(fileName: string, content: Buffer) {
//   writeFile(fileName, content, 'utf8', (err) => {
//     if (err) {
//       console.error(Error writing file ${fileName}:, err);
//       return;
//     }
//     console.log(File ${fileName} saved to file system.);
//   });
// }

// export default async function main(prompt: string) {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyA_sPSCuqCZgbZo1ic8hFvKGmocmZb1Kzc",
//   });
//   const config = {
//     responseModalities: [
//         'IMAGE',
//         'TEXT',
//     ],
//   };
//   const model = 'gemini-2.5-flash-image';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: prompt,
//         },
//       ],
//     },
//   ];
  

//   const response = await ai.models.generateContent({
//     model,
//     config,
//     contents,
//   });
//   const result = response.text

//   console.log(response.text)
// return response.text;

  
// }

// main

// import dotenv from 'dotenv';
import {
  Chat,
  GoogleGenAI,
} from '@google/genai';
import mime from 'mime';

// Load environment variables
// dotenv.config();

export default async function main(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  
  const config = {
    responseModalities: [
      'IMAGE',
      'TEXT',
    ],
  };
  
  const model = 'gemini-2.5-flash-image';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];
  
  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  
  console.log(response.text);
  return response.text;
}