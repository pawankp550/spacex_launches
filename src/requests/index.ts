import axios from 'axios'
import { Launch } from '../types/launch'

export const getLaunchData = async (offset: number, limit: number): Promise<Launch[] | undefined> => {
  const url = new URL('https://api.spacexdata.com/v3/launches')
  url.searchParams.set('offset', offset?.toString())
  url.searchParams.set('limit', limit?.toString())
  
  try {
    const response = await axios.get<Launch[]>(url.href);
    return response.data;
  } catch (error) {
    console.error('Error fetching launch data:');
  }
};