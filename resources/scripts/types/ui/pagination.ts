export type PaginationLink = {
  url: string | null;
  active: boolean;
  label: string;
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export type ResourceCollection<TData> = {
  data: TData[];
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: PaginationMeta;
}

export type PaginationData<TData> = {
  data: TData[];
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
} & PaginationMeta;
