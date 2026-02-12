// types.ts — Clean file, should produce 0 issues
export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: number;
}

export type SortDirection = "asc" | "desc";

export interface SortOptions {
  field: string;
  direction: SortDirection;
}

export interface FilterOptions {
  field: string;
  operator: "eq" | "ne" | "gt" | "lt" | "contains";
  value: string | number | boolean;
}
