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

  client.on('error', err => console.log('Redis Server Error', err));
  
  await client.connect();

  // const getAsync = promisify(client.get).bind(client);
  // const setAsync = promisify(client.set).bind(client);

  const { filename } = req.query;

  const cacheKey = `lastUpdated:${filename}`;

  // Check for cached data in Redis
  // const cachedData = await getAsync(cacheKey);
  const cachedData = await client.get(cacheKey);

  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData));
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

  console.log(data)

  if (data && data.length > 0) {
    const lastUpdated = data[0].commit.committer.date;
    console.log('Last updated from GitHub:', lastUpdated); // Add this line

    // Cache the data in Redis with an expiry time of 1 hour (3600 seconds)
    await client.set(cacheKey, JSON.stringify(lastUpdated));
    // await setAsync(cacheKey, JSON.stringify(lastUpdated), 'EX', 3600);

    res.status(200).json(lastUpdated);
  } else {
    console.log('Data not found'); // Add this line

    res.status(404).json({ message: 'Not found' });
  }
}
