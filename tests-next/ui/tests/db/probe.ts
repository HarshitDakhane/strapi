import type { Server } from '../../fixtures';

/**
 * Writes the probe row (POST /api/tests/db/probe). `created: true` means the database didn't
 * have it, so a reset happened before the call.
 */
export const writeProbe = async (server: Server) => {
  const res = await fetch(`${server.url}/api/tests/db/probe`, { method: 'POST' });
  return ((await res.json()) as { created: boolean }).created;
};
