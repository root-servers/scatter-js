"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.WALLET_METHODS=void 0;var _ALTERNATES,_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),WALLET_METHODS={disconnect:"disconnect",isConnected:"isConnected",isPaired:"isPaired",addEventHandler:"addEventHandler",removeEventHandler:"removeEventHandler",listen:"listen",getVersion:"getVersion",getIdentity:"getIdentity",getAllAccountsFor:"getAllAccountsFor",getIdentityFromPermissions:"getIdentityFromPermissions",forgetIdentity:"forgetIdentity",updateIdentity:"updateIdentity",authenticate:"authenticate",getArbitrarySignature:"getArbitrarySignature",getPublicKey:"getPublicKey",linkAccount:"linkAccount",hasAccountFor:"hasAccountFor",suggestNetwork:"suggestNetwork",requestTransfer:"requestTransfer",getAvatar:"getAvatar",requestSignature:"requestSignature",createTransaction:"createTransaction",addToken:"addToken"};exports.WALLET_METHODS=WALLET_METHODS;var ALTERNATES=(_ALTERNATES={},(0,_defineProperty2["default"])(_ALTERNATES,WALLET_METHODS.getIdentity,"login"),(0,_defineProperty2["default"])(_ALTERNATES,WALLET_METHODS.getAllAccountsFor,"loginAll"),(0,_defineProperty2["default"])(_ALTERNATES,WALLET_METHODS.forgetIdentity,"logout"),(0,_defineProperty2["default"])(_ALTERNATES,WALLET_METHODS.getIdentityFromPermissions,"checkLogin"),_ALTERNATES),WalletInterface=/*#__PURE__*/function(){function a(b,c,d){(0,_classCallCheck2["default"])(this,a);var e=function(a){return function(){throw console.error("".concat(b," does not support the ").concat(a," method.")),new Error("".concat(b," does not support the ").concat(a," method."))}},f=function(a,b){"undefined"==typeof d[b]&&(d[b]=a?a:e(b)),ALTERNATES[b]&&"undefined"==typeof d[ALTERNATES[b]]&&(d[ALTERNATES[b]]=d[b]?d[b]:e(b))};Object.keys(WALLET_METHODS).map(function(a){return f(c[a],a)})}return(0,_createClass2["default"])(a,null,[{key:"bindBasics",value:function bindBasics(a){a.account=function(b){return a.identity?a.identity.accounts?a.identity.accounts.find(function(a){return a.blockchain===b}):void 0:void 0}}}]),a}();exports["default"]=WalletInterface;