import { Actor } from "./actor";
import { Actorresp } from "./actor";
export interface ActorsResponse {
    message: string;
    total_records: number;
    total_pages: number;
    previous: string;
    next: string;
    results: Actor[];
  }