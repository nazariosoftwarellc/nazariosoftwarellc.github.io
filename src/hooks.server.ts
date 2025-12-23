import { redirects } from '$lib/redirects';

export async function handle({ event, resolve }) {
  const newPath = redirects[event.url.pathname];
  if (newPath) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: newPath,
      },
    });
  }
  
  return await resolve(event);
}