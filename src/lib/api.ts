interface FetchClient {
  get: (pathname: string) => Promise<Response>;
  post: (pathname: string, body: any) => Promise<Response>;
}

const fetchClient = (options: RequestInit = {}): FetchClient => {
  const appUrl = "http://localhost:3001";

  return {
    get: async (pathname: string) => fetch(`${appUrl}/${pathname}`, options),
    post: async (pathname: string, body: any) => {
      console.log("fetching", `${appUrl}/${pathname}`);
      return fetch(`${appUrl}/${pathname}`, {
        ...options,
        method: "POST",
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },
  };
};

/**
 * Exports
 */

export { fetchClient };
export type { FetchClient };
