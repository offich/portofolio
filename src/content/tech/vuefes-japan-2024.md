---
title: vuefes 2024 への参加
---

## キーノート

evan の発表

vite
 - bundler を統一したい
 - unified toolchain is need to eliminate the inconsistency and ineficiency issues


void(0) 会社設立
 - next generation javascript tooling
 - oxc -> resolver transforms minifications
 - rolldown -> deps pre bundling prodction bundling chunks

勉強しないといけないこと
 - rollup plugin
 - esm path resolition
 - typescript isolated declartions dts
 - swc
 - vite

rolldown というツールを作っている

 - vue 3.5 で rolldown branch がある。

## vue と vite で作る UI ライブラリ

zeroheight というデザインツール (storybook みたいなもの)

話を聞いた感想としては、micro frontend を勉強しないといけないとおもった

## AI で行う nuxt 3 移行

aider を使う。

## pinia

vuejs の effect scope について調べる。

https://oxc.rs/

## oxc

https://oxc.rs/
https://rolldown.rs/

parser / linter

test infrastrcuture

rust への興味ももたないといけない。

## vapor

vuejs vapor モード - compile without virtual dom

https://icarusgk.hashnode.dev/vue-3-vapor-mode

仮装 DOM について再び調べる


void(0) の展望
 - いろんなツールの統一化をしている。置き換えとか競合には興味はない
web アプリを作るとに linter parser など隠蔽されたものに注目していくひつようがでてきた
remix, redwhift? , quick

rust が javascript エコシステムに入る理由
 - コスト削減のため

https://voidzero.dev/

https://swc.rs/

javscript はシングルスレッド

rust を学ぶ必要があるの？

## vite のお話

vite maekes up javascript code runnable in browsser throught 3 plugin hooks
resolved hook
load hook
transform hook

vite config is buily by esbuild
dependencies are bulit by esbuild and stored as cache n dev server bootstrap

vite does not build your application on dev server bootstrap, which is why it starts fast

ndex.html is the starting point rom which your application is built

plugin container makes it possible to build on demadn
