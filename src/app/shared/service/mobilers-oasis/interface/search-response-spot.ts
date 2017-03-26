/**
 * スポット情報
 */
export class SearchResponseSpot {
  /** インデックス */
  index: number;
  /** window表示 */
  isOpened: boolean;

  /** モバイラーズオアシス内でユニークなIDです。 */
  entry_id: number;
  /** モバイラーズオアシス内でスポット情報を表示するための文字列です(後述) */
  url_title: string;
  /** 店名 */
  title: string;
  /** 住所 */
  address: string;
  /** 電話番号 */
  tel: string;
  /** 無線LAN */
  wireless: string;
  /** カテゴリ */
  category: string[];
  /** 緯度 */
  latitude: number;
  /** 経度 */
  longitude: number;
  /** 店舗公式サイトのURL */
  url_pc: string;
  /** 電源、Qi、禁煙喫煙などの情報 */
  tag: string;
  /** その他店舗に関する情報(HTML) */
  other: string;
  /** モバイラーズオアシスでの情報ページURL */
  mo_url: string;
  /** (lat,lngを渡した場合のみ)指定した緯度経度からのおおよその距離。km単位です。 */
  distance: number;

  constructor(s: any) {
    if (s.entry_id) { this.entry_id = s.entry_id; }
    if (s.url_title) { this.url_title = s.url_title; }
    if (s.title) { this.title = s.title; }
    if (s.address) { this.address = s.address; }
    if (s.tel) { this.tel = s.tel; }
    if (s.wireless) { this.wireless = s.wireless; }
    if (s.category) { this.category = s.category; }
    if (s.latitude) { this.latitude = Number(s.latitude); }
    if (s.longitude) { this.longitude = Number(s.longitude); }
    if (s.url_pc) { this.url_pc = s.url_pc; }
    if (s.tag) { this.tag = s.tag; }
    if (s.other) { this.other = s.other; }
    if (s.mo_url) { this.mo_url = s.mo_url; }
    if (s.distance) { this.distance = s.distance; }
  }
}
