import { createClient } from 'redis';
import { promisify } from 'util';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 18555
    }
  });

  await client.connect();

  client.on('error', err => console.log('Redis Server Error', err));
  
  const { filename } = req.query;

  const cacheKey = `lastUpdated:${filename}`;

  const cachedData = await client.get(cacheKey);

  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData));
    client.disconnect();
    return;
  }

  const owner = 'alaney2';
  const repo = 'datadrip';
  const filePath = `data/${filename}`;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&per_page=1`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  const data = await response.json();

  if (data && data.length > 0) {
    const lastUpdated = data[0].commit.committer.date;
    await client.set(cacheKey, JSON.stringify(lastUpdated), 'EX', 60 * 60 * 24);
    res.status(200).json(lastUpdated);
  } else {
    console.log('Data not found');
    res.status(404).json({ message: 'Not found' });
  }
  client.disconnect();
}
