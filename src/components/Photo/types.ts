export type Photo = {
  id: number;
  urls: { regular: string; };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
  alt_description: string;
  created_at: string;
  description: string;
};