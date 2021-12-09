import { Options, NewNotion } from "../types";

const API_URL = 'https://mate.academy/students-api/posts';

const request = async (url: string, options: Options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
};

export const getAllNotions = async () => {
  return request(API_URL, {
    method: 'GET'
  });
};

export const createNotion = async (notionBody: NewNotion) => {
  return request(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(notionBody),
  });
};

export const deleteNotion = async (notionId: number) => {
  return request(`${API_URL}/${notionId}`, {
    method: 'DELETE',
  });
};
