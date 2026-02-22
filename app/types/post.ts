export interface PostType  {
  id: number;
  userId: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
};


export interface PostListResponse{
  posts: PostType[]
}
