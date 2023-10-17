import { ApiResponseV2Metadata } from './api-response-metadata.model';
import { ResponseCode } from './responseCode.model';

export interface ApiResponse<T> {
  item: T;
  code: ResponseCode;
  message: string;
  totalItemCount: number;
  metadata?: ApiResponseV2Metadata[];
}
