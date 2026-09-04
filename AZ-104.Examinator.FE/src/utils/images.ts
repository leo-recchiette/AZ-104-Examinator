const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/** Nome file nudo (es. "q020_pre0.png") -> URL servito dall'API (app.UseStaticFiles su wwwroot/images). */
export function imageUrl(filename: string): string {
  return `${BASE_URL}/images/${filename}`;
}
