// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const responses = {
  "Pakistan’s official stance on the Gaza conflict":"Pakistan supports a peaceful resolution and advocates for the rights and protection of Palestinian people, urging international cooperation and dialogue to address the humanitarian crisis.",
  "How Pakistan describes its relationship with the MENA region":"The relationship between Pakistan and the MENA region is characterized by strong historical ties, cultural affinity, and mutual cooperation. Pakistan's commitment to Islamic solidarity and its strategic position in South Asia further contribute to a robust partnership with MENA countries, focusing on peace, development, and collaborative progress.",
  "Whether Pakistan engages with international bodies regarding the Gaza conflict":"Yes, Pakistan actively engages with the United Nations, OIC, and other international forums to promote dialogue, peace, and humanitarian efforts in Gaza.",
  "Recent initiatives by Pakistan to support Gaza’s recovery":"Recently, Pakistan has launched educational scholarships for Palestinian students, contributed to the reconstruction of infrastructure, and increased its medical and food aid, reinforcing its commitment to Gaza’s long-term recovery.",
  "Key elements of Pakistan’s policy towards the MENA region":"Pakistan’s policy focuses on promoting peace, stability, and economic cooperation, with a strong emphasis on supporting Palestinian self-determination and sovereignty.",
  "Role Pakistan plays in diplomatic resolutions concerning Gaza":"Pakistan advocates for peace talks, supports international resolutions for ceasefire and humanitarian access, and works with global partners to facilitate dialogue.",
  "How Pakistan’s stance on Gaza reflects its foreign policy principles":"Pakistan's stance is rooted in principles of self-determination, human rights, and justice, reflecting its broader commitment to these values in its foreign policy.",
  "How Pakistan’s inclusive society promotes peaceful coexistence post the Gaza Conflict":"Pakistan's inclusive society, mirroring the diversity in the MENA region, promotes peaceful coexistence. Our harmonious blend of cultures showcases unity in diversity, resonating positively and inspiring cultural understanding in the post-Gaza Conflict era.",
  "How individuals in the MENA region can keep updated about Pakistan’s efforts in Gaza":"Individuals can follow official Pakistani diplomatic channels, attend public diplomacy events, or access information through Pakistan's embassies and cultural centers in the region.",
  "Message Pakistan wants to convey to the international community regarding Gaza":"Pakistan emphasizes the need for a collective and humane approach to resolve the conflict, ensuring the rights and dignity of the Palestinian people, and calls for sustained international commitment to peace and reconstruction in Gaza."
};

function findMatchingQuestion(userMessage: string) {
  for (const question in responses) {
    // You can enhance this comparison logic based on your specific needs
    if (question.toLowerCase().includes(userMessage.toLowerCase())) {
      return question;
    }
  }
  return null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const matchingQuestion = message.length > 0 ? findMatchingQuestion(message) : undefined;
    // Find the response for the given question
    const chatResponse = matchingQuestion ? responses[matchingQuestion] : "Welcome to your diplomatic inquiry assistance. Should your question surpass the information I can provide, please direct further queries to our official support channel at diplomacy@example.com. How may I assist you in your diplomatic endeavors today?";

    res.status(200).json({ message: chatResponse });
  } else {
    res.status(405).end();
  }
}