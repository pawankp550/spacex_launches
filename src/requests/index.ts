import axios from 'axios'
import { Launch } from '../types/launch'

export const getLaunchData = async (): Promise<Launch[] | undefined> => {
  try {
    const response = await axios.get<Launch[]>('https://api.spacexdata.com/v3/launches');
    return response.data;
  } catch (error) {
    console.error('Error fetching launch data:');
  }
};