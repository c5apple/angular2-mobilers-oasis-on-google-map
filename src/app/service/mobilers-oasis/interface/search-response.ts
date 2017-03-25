import { SearchResponseSpot } from './search-response-spot';

/**
 * 電源情報
 */
export class SearchResponse {

  status: string;
  message: string;
  results: SearchResponseSpot[];

  constructor(sr?: any) {
    if (sr.status) {
      this.status = sr.status;
    }
    if (sr.message) {
      this.message = sr.message;
    }
    if (sr.results) {
      this.results = sr.results.map(r => new SearchResponseSpot(r));
    }
  }
}
