import type { Request, Response } from 'express';

export default function handler(_req: Request, res: Response) {
  res.status(200).json({
    status: 'online',
    platform: 'ESMERALDA INTELIGENTE JAIRRESTAURA',
    motto: 'El conocimiento y las herramientas del mundo esmeraldero al alcance de todos',
    provider: 'Vercel Serverless',
    free: true,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
}
