import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SearchResponse } from './interface/search-response';

@Injectable()
export class MobilersOasisService {

  /** エンドポイント */
  protected ep = 'http://oasis.mogya.com/api/v0/search';

  constructor(private http: Http) { }

  /**
   * モバイラーズオアシス 電源情報API
   * @link https://oasis.mogya.com/blog/API
   */
  public search(n: number, s: number, w: number, e: number, lat?: number, lng?: number): Promise<SearchResponse> {
    const url = this.ep + `?n=${n}&w=${w}&s=${s}&e=${e}`;
    return this.http.get(url)
      .toPromise()
      .then((res: Response) => new SearchResponse(res.json()))
      .catch((err: any) => console.error(err));
  }

}
