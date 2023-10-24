import { ApiResponseMetadata } from './api-response-metadata.model';
import { ResponseCode } from './responseCode.model';

export interface ApiListResponse<T> {
  item: T[];
  code: ResponseCode;
  message: string;
  totalItemCount: number;
  metadata?: ApiResponseMetadata[];
}
