import { useQuery } from 'react-query';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const GetAllPosts = async () => {
  try {
    const response: AxiosResponse<PostType[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch {
    throw new Error('We encountered an error...');
  }
};

export const useGetAllPosts = () => {
  return useQuery('posts', GetAllPosts);
};
