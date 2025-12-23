import { redirect } from '@sveltejs/kit';

export function load({params}) {
  const { appId } = params;
  if (!appId || appId.trim() === '') {
    throw new Error('App ID is required');
  }
  redirect(308, `/apps/${appId}/about`);
}