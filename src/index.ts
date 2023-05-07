import pRetry, {AbortError} from 'p-retry';
import fetch from 'node-fetch';

const run = async () => {
  const response = await fetch('https://sindresorhus.com/unicorn');

  // Abort retrying if the resource doesn't exist
  if (response.status === 404) {
    throw new AbortError(response.statusText);
  }

  return response.blob();
};

console.log(await pRetry(run, {retries: 5}));
