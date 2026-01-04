export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  timestamp: string;
  path?: string;
}

export interface IErrorResponse {
  success: boolean;
  message: string;
  statusCode: number;
  timestamp: string;
  path?: string;
}
