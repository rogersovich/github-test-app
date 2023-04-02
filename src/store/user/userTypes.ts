export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface ParamsUser {
  q: string
  per_page: number
}

export interface ApiResponse {
  total_count: number
  incomplete_results: boolean
  items: User[]
}

export interface FormData {
  q: string;
}