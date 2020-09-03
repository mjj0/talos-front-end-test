export interface Post {
  id?: string;
  title: string;
  description: string;
  photoUrl?: string | File;
  tags: string[];
}
