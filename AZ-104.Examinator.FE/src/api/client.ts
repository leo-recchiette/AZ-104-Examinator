const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class ApiError extends Error {
  constructor(
    public status: number,
    public body: string,
  ) {
    super(`API ${status}: ${body}`);
  }
}

export async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => ""));
  }
  return res.json() as Promise<T>;
}

/**
 * Come request, ma accetta anche una risposta senza corpo: 204 diventa null invece di far
 * esplodere res.json(). La sessione in corso puo' legittimamente non esserci.
 */
export async function requestOptional<T>(path: string, init?: RequestInit): Promise<T | null> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => ""));
  }
  return res.status === 204 ? null : ((await res.json()) as T);
}

/** Per gli endpoint che rispondono 204 e basta (salvataggio e cancellazione della sessione). */
export async function requestVoid(path: string, init?: RequestInit): Promise<void> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => ""));
  }
}
