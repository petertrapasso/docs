/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.2e96fa7e.js",
    "revision": "86ba77044b6a1473b1402b7ae68a3bd4"
  },
  {
    "url": "assets/js/12.63026fb4.js",
    "revision": "5eac7df6811f199296b3927bf5714393"
  },
  {
    "url": "assets/js/13.a8ed1307.js",
    "revision": "4035353b09411aaf610054d9d5118333"
  },
  {
    "url": "assets/js/14.43cae04d.js",
    "revision": "f6cbc002ed5ab25c0f55545163fccbeb"
  },
  {
    "url": "assets/js/15.2166d056.js",
    "revision": "d7cfa1626f801d8cb5471982e7c16463"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.db5b11a0.js",
    "revision": "eed29e24be0a2153f86a6518c81a53e2"
  },
  {
    "url": "assets/js/19.7b53fe4a.js",
    "revision": "7279b0c63fd88e0ba55c1665b828b56e"
  },
  {
    "url": "assets/js/20.cf06f591.js",
    "revision": "2a0fae4ee7e4b70f972369ed24157c2e"
  },
  {
    "url": "assets/js/21.525fe7f9.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.d75f35bc.js",
    "revision": "28294d3c4e80589769e33974d27394d9"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.030b20b3.js",
    "revision": "55a87fcc21fdb617bc888d99aa680c0b"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.63d5aaad.js",
    "revision": "6c50487f24af1bb4389aef71783b2be9"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.9fbef010.js",
    "revision": "dea51d6e08ba423935ceb7688d137358"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.5a2a7a2a.js",
    "revision": "f0519f9a85e1809b31d4addb5aa8ebdb"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.5d2a96e6.js",
    "revision": "fe3aa5d0c99cf2ea92a98e75185a6240"
  },
  {
    "url": "assets/js/6.0779f2ad.js",
    "revision": "af0bd9aacc7e4a4af42da514ef841ea3"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.3da92b4b.js",
    "revision": "2e3b7b7349f5cd7c8be89941b01471fb"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "5f8eeb90804ddd8d804709945bb8c67f"
  },
  {
    "url": "connex/implementation.html",
    "revision": "d0a349e37b3c605ef96370909e51e8b6"
  },
  {
    "url": "connex/index.html",
    "revision": "abf5ae1637f96755f02d9856b55d7a0e"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "e5d284e0e98812fc901e80215ebd78d6"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "421c5ffffe53c5ced39b021a44d2d63a"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "4a4c313e6cab210e818ba98f58b8db50"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "2f201baea6a5559a8116673b19c3cd99"
  },
  {
    "url": "sync/faq.html",
    "revision": "8242cbae7a453d6e5ea3f8c203f5b304"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "958d6a20a98ff10e29a7e4b6dda39f77"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "3889fd9db3b79d989b054f1e99779be4"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "f09a68ed56b204916ab49e8bb6af5632"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "d863ae16040939e5e94f6943632eefc6"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "1c3a745c4b52b7dcfd04a865c0c4dc85"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "d82d3a2aa07bbfcd2dd0b8c7d636be11"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "1cca7ba76e854f5d3f4f539259799a88"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "f0862e10a0e7b30a0a912f0190468979"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "901af89e9229e0b7acf6d9ef98c0a83c"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "ef2dd84505e40678d53421fa9b6c944b"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "e13a12fd3302b2b228ae448236a1a4c4"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "8e1c62fb46a75c5e47ac8aeaf089eaf2"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "16b3a4ded3fe855ff2b4337390e8410b"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "106be39eba1e39261f8c11e38eb1d998"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "ec57c8a92e0648107919dc004fe50009"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "8bcd0dc3dba4f4c57c76330d73db716f"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "f5a35429715bd0c1d0ac96347e967be4"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "4d84f736c1acf826a4c3f2ada3bcfb8b"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "887e0ce82cbab14cd5c9be649b6d9be0"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "a483ace68f5c5194bda43a9a90f899ae"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "5dbe7cc5728f25e5095ba23d7e21a611"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "6047be9eb2d51e0e8fd68d604a394b65"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "decd53ce93ab4985da0408f723d51530"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "6ee774fb0f6aff4991d4efaef213b1dd"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "2e6e88b5f5ff8928852bd1341a10fb89"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "95e08e5af35be9145320c969b1511f6c"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "d72ca696e42d0b611a459de23c15df90"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "05597e9ae1b792dad4a68f3e673f4f5f"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "b61e349aba507cd949e841966bee8301"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "1b085ce5a98004f9e17620bc54e2731b"
  },
  {
    "url": "tutorials/index.html",
    "revision": "cbbf7b8d51a31beff2e5b8c233f22ed2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
