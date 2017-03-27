# もばっぷ (Mobiler's Oases on Google Maps)

[モバイラーズオアシス](https://oasis.mogya.com/)のデータを[Googleマップ](https://www.google.co.jp/maps)に描画します。

## 利用ライブラリ

- [angular-cli](./doc/HOW-TO-ANGULAR-CLI.md)
- [モバイラーズオアシスAPI](https://oasis.mogya.com/blog/API)
- [angular2-google-maps](https://angular-maps.com/)

## 実行方法

1. Google Maps API のキーを取得する
1. app.module.ts を修正する
1. `ng serve` or `ng build`

### 1. Google Maps API キーの取得方法

[developers.google.com](https://developers.google.com/maps/documentation/javascript/) にて取得。
Googleアカウントがないと取得できないので注意。
利用制限や課金などあるので自己責任で。

### 2. app.module.ts の修正方法

```
    AgmCoreModule.forRoot({
      apiKey: 'MY-KEY' // ここに Google Maps API のキーを設定
    })
```

### Enjoy もばっぷ!!
