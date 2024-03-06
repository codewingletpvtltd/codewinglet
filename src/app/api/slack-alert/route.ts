import { NextResponse } from 'next/server';
import axios from 'axios';
import { generateSlackFormat } from './utils';

export async function POST(req: Request) {
  const { data } = await req.json();

  const slackMessage = generateSlackFormat({
    title: data.name,
    fullName: data.name,
    email: data.email,
    phone: data.phone,
    projectDetails: data.message,
  });

  axios.post(
    'https://hooks.slack.com/services/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',
    slackMessage
  );

  return NextResponse.json(
    { message: 'Success' },
    {
      status: 200,
    }
  );
}
