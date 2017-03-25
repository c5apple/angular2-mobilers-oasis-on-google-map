import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MobilersOasisService } from './mobilers-oasis.service';
import { SearchResponse } from './interface/search-response';

@Injectable()
export class MockMobilersOasisService extends MobilersOasisService {

  mock = {
    'results': [
      {
        'entry_id': 28264,
        'address': '\u5927\u962a\u5e9c\u5927\u962a\u5e02\u5317\u533a\u89d2\u7530\u753a9-29\u65b0\u6885\u7530\u98df\u9053\u8857',
        'latitude': '34.703867972448286',
        'longitude': '135.4983178108894',
        'url_pc': 'http://www.mcdonalds.co.jp/shop/map/map.php?strcode=27050',
        'wireless': 'BB\u30e2\u30d0\u30a4\u30eb\u30dd\u30a4\u30f3\u30c8,\u30bd\u30d5\u30c8\u30d0\u30f3\u30afWi-Fi',
        'powersupply': '\u516c\u5f0f\u306bOK',
        'tel': '0663111267',
        'other': '',
        'tag': '\u30d5\u30a1\u30b9\u30c8\u30d5\u30fc\u30c9,\u30de\u30af\u30c9\u30ca\u30eb\u30c9,\u7528\u9014:\u30ce\u30de\u30c9,\u7528\u9014:\u5145\u96fb,\u96fb\u6e90OK',
        'title': '\u30de\u30af\u30c9\u30ca\u30eb\u30c9 \u65b0\u6885\u7530\u5e97',
        'url_title': 'entry_2606',
        'status': 'open',
        'edit_date': 20150402092253,
        'category': [
          '\u30de\u30af\u30c9\u30ca\u30eb\u30c9',
          '\u30d5\u30a1\u30b9\u30c8\u30d5\u30fc\u30c9'
        ],
        'mo_url': '//oasis.mogya.com/spot/entry_2606',
        'icon': '//oasis.mogya.com/images/design/spot_icon_01_none_[size]px.png',
        'icon_powerframe': '//oasis.mogya.com/images/design/spot_icon_01_ok_[size]px.png'
      },
      {
        'entry_id': 34005,
        'address': '\u5927\u962a\u5e9c\u5927\u962a\u5e02\u5317\u533a\u6885\u75301\u4e01\u76ee',
        'latitude': '34.7000481',
        'longitude': '135.4986902',
        'url_pc': 'http://standard.navitime.biz/lotteria/Spot.act?dnvSpt=S0039.0000133052',
        'wireless': '\u30d5\u30ec\u30c3\u30c4\u30fb\u30b9\u30dd\u30c3\u30c8,docomo Wi-Fi',
        'powersupply': '\u516c\u5f0f\u306bOK',
        'tel': '0663484696',
        'other': '<dl><dt>\u55b6\u696d\u6642\u9593</dt><dd>7:30-22:00</dd>\n<dt>\u7981\u7159\u30fb\u55ab\u7159</dt><dd>\u5206\u7159</dd>\n</dl>\n',
        'tag': '\u30d5\u30a1\u30b9\u30c8\u30d5\u30fc\u30c9,\u30ed\u30c3\u30c6\u30ea\u30a2,\u7528\u9014:\u30ce\u30de\u30c9,\u7528\u9014:\u5145\u96fb,\u96fb\u6e90OK',
        'title': '\u30ed\u30c3\u30c6\u30ea\u30a2 \u30c7\u30a3\u30a2\u30e2\u30fc\u30eb\u5927\u962a\u5e97',
        'url_title': 'entry_8211',
        'status': 'open',
        'edit_date': 20151220170158,
        'category': [
          '\u30ed\u30c3\u30c6\u30ea\u30a2',
          '\u30d5\u30a1\u30b9\u30c8\u30d5\u30fc\u30c9'
        ],
        'mo_url': '//oasis.mogya.com/spot/entry_8211',
        'icon': '//oasis.mogya.com/images/design/spot_icon_03_none_[size]px.png',
        'icon_powerframe': '//oasis.mogya.com/images/design/spot_icon_03_ok_[size]px.png'
      },
      {
        'entry_id': 37525,
        'address': '\u5927\u962a\u5e9c\u5927\u962a\u5e02\u5317\u533a\u6885\u75301-9-20\u5927\u962a\u30de\u30eb\u30d3\u30eb 1F',
        'latitude': '34.6999814',
        'longitude': '135.4971626',
        'url_pc': 'http://www.starbucks.co.jp/store/search/detail.php?id=105',
        'wireless': 'docomo Wi-Fi,\u30d5\u30ec\u30c3\u30c4\u30fb\u30b9\u30dd\u30c3\u30c8,\u30bd\u30d5\u30c8\u30d0\u30f3\u30afWi-Fi,STARBUCKS Wi-Fi,au Wi-Fi,wi2',
        'powersupply': '\u516c\u5f0f\u306bOK',
        'tel': '0663416150',
        'other': '<dl><dt>\u96fb\u8a71\u756a\u53f7</dt><dd>06-6341-6150</dd>\n<dt>\u30a2\u30af\u30bb\u30b9</dt><dd>\u897f\u6885\u7530\u99c5\u30c7\u30a3\u30a2\u30e2\u30fc\u30eb\u5927\u962aD-33\u51fa\u53e3\uff08\u962a\u795e\u672c\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u5fa1\u5802\u7b4b\u7dda\u3001JR\u6771\u897f\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u56db\u3064\u6a4b\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u8c37\u753a\u7dda\uff09 \u5f92\u6b691\u5206<br>\u6771\u6885\u7530\u99c5\u30c7\u30a3\u30a2\u30e2\u30fc\u30eb\u5927\u962aD-33\u51fa\u53e3\uff08\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u8c37\u753a\u7dda\uff09 \u5f92\u6b691\u5206<br>\u6885\u7530\u99c5\u30c7\u30a3\u30a2\u30e2\u30fc\u30eb\u5927\u962aD-33\u51fa\u53e3\uff08\u962a\u795e\u672c\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u5fa1\u5802\u7b4b\u7dda\uff09 \u5f92\u6b691\u5206<br>\u30e1\u30e2\uff1aJR\u5927\u962a\u99c5\u306e\u524d</dd>\n<dt>\u55b6\u696d\u6642\u9593</dt><dd>07:00-26:00<br /></dd>\n</dl>\n',
        'tag': '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9,\u55ab\u8336\u5e97,\u7528\u9014:\u30ce\u30de\u30c9,\u7528\u9014:\u5145\u96fb,\u96fb\u6e90OK',
        'title': '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9 \u5927\u962a\u30de\u30eb\u30d3\u30eb\u5e97',
        'url_title': 'entry_37525',
        'status': 'open',
        'edit_date': 20150918101221,
        'category': [
          '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9',
          '\u55ab\u8336\u5e97'
        ],
        'mo_url': '//oasis.mogya.com/spot/entry_37525',
        'icon': '//oasis.mogya.com/images/design/spot_icon_08_none_[size]px.png',
        'icon_powerframe': '//oasis.mogya.com/images/design/spot_icon_08_ok_[size]px.png'
      },
      {
        'entry_id': 37584,
        'address': '\u5927\u962a\u5e9c\u5927\u962a\u5e02\u5317\u533a\u8336\u5c4b\u753a19-19\u30a2\u30d7\u30ed\u30fc\u30ba\u30bf\u30ef\u30fc 1F',
        'latitude': '34.7085616379747',
        'longitude': '135.498649877551',
        'url_pc': 'http://www.starbucks.co.jp/store/search/detail.php?id=181',
        'wireless': 'docomo Wi-Fi,\u30bd\u30d5\u30c8\u30d0\u30f3\u30afWi-Fi,\u30d5\u30ec\u30c3\u30c4\u30fb\u30b9\u30dd\u30c3\u30c8,STARBUCKS Wi-Fi,au Wi-Fi,wi2',
        'powersupply': '\u516c\u5f0f\u306bOK',
        'tel': '0663763531',
        'other': '<dl><dt>\u96fb\u8a71\u756a\u53f7</dt><dd>06-6376-3531</dd>\n<dt>\u30a2\u30af\u30bb\u30b9</dt><dd>\u6885\u7530\u99c5\u304b\u3063\u3071\u6a2a\u4e01\u53e3\uff08\u962a\u6025\u4eac\u90fd\u7dda\u3001\u962a\u6025\u795e\u6238\u7dda\u3001\u962a\u6025\u5b9d\u585a\u7dda\uff09 \u5f92\u6b695\u5206<br>\u4e2d\u6d25\u99c54\u756a\u51fa\u53e3\uff08\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u5fa1\u5802\u7b4b\u7dda\uff09 \u5f92\u6b697\u5206<br>\u6771\u6885\u7530\u99c5\u30db\u30ef\u30a4\u30c6\u30a3\u3046\u3081\u3060H-28\u51fa\u53e3\uff08\u962a\u6025\u4eac\u90fd\u7dda\u3001\u962a\u6025\u795e\u6238\u7dda\u3001\u962a\u6025\u5b9d\u585a\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u5fa1\u5802\u7b4b\u7dda\u3001\u5927\u962a\u5e02\u55b6\u5730\u4e0b\u9244\u8c37\u753a\u7dda\uff09 \u5f92\u6b699\u5206<br>\u30e1\u30e2\uff1a\u30a2\u30d7\u30ed\u30fc\u30ba\u30bf\u30ef\u30fc1F</dd>\n<dt>\u55b6\u696d\u6642\u9593</dt><dd>07:00-23:00<br /></dd>\n</dl>\n',
        'tag': '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9,\u55ab\u8336\u5e97,\u7528\u9014:\u30ce\u30de\u30c9,\u7528\u9014:\u5145\u96fb,\u96fb\u6e90OK',
        'title': '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9 \u3061\u3083\u3084\u307e\u3061\u30a2\u30d7\u30ed\u30fc\u30ba\u30bf\u30ef\u30fc\u5e97',
        'url_title': 'entry_37584',
        'status': 'open',
        'edit_date': 20160508103308,
        'category': [
          '\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9',
          '\u55ab\u8336\u5e97'
        ],
        'mo_url': '//oasis.mogya.com/spot/entry_37584',
        'icon': '//oasis.mogya.com/images/design/spot_icon_08_none_[size]px.png',
        'icon_powerframe': '//oasis.mogya.com/images/design/spot_icon_08_ok_[size]px.png'
      },
      {
        'entry_id': 38316,
        'address': '\u5927\u962a\u5e02\u5317\u533a\u829d\u7530\u753a1-8-1 \u962a\u6025DD\u30cf\u30a6\u30b9 \uff22\uff11\uff26',
        'latitude': '34.70690851',
        'longitude': '135.4974583',
        'url_pc': 'http://www.seabest.co.jp/location/05.html',
        'wireless': 'FREESPOT',
        'powersupply': '\u516c\u5f0f\u306bOK',
        'tel': '0663713118',
        'other': '<dl><dt>\u96fb\u8a71\u756a\u53f7</dt><dd>06-6371-3118</dd>\n<dt>\u55b6\u696d\u6642\u9593</dt><dd>11:00-23:00 </dd>\n<dt>\u5b9a\u4f11\u65e5</dt><dd>\u7121\u4f11</dd>\n</dl>\n<br />&nbsp;',
        'tag': '\u7528\u9014:\u5145\u96fb,\u7528\u9014:\u30ce\u30de\u30c9,\u96fb\u6e90OK,\u30b7\u30a2\u30c8\u30eb\u30ba\u30d9\u30b9\u30c8,\u55ab\u8336\u5e97',
        'title': '\u30b7\u30a2\u30c8\u30eb\u30ba\u30d9\u30b9\u30c8\u30b3\u30fc\u30d2\u30fc DD\u30cf\u30a6\u30b9\u5e97',
        'url_title': 'entry_38316',
        'status': 'open',
        'edit_date': 20160507180754,
        'category': [
          '\u30b7\u30a2\u30c8\u30eb\u30ba\u30d9\u30b9\u30c8',
          '\u55ab\u8336\u5e97'
        ],
        'mo_url': '//oasis.mogya.com/spot/entry_38316',
        'icon': '//oasis.mogya.com/images/design/spot_icon_10_none_[size]px.png',
        'icon_powerframe': '//oasis.mogya.com/images/design/spot_icon_10_ok_[size]px.png'
      }
    ],
    'status': 'OK'
  };

  public search(n: number, s: number, w: number, e: number, lat?: number, lng?: number): Promise<SearchResponse> {
    return Observable.fromPromise(Promise.resolve(
      new SearchResponse(this.mock))).toPromise();
  }
}
