(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(20).concat([function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(103),o=n(46);n.d(e,"b",(function(){return o.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(i.a)(HTMLElement)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n(43),o=n(159);function r(){}var s=n(32),a=n(37),l=n(52);let c;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.m)(!1),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){!function(){if("function"==typeof o.a)Object(o.a)(r)}()};const d=new Set,h=t=>class extends(Object(l.a)(t)){static get version(){return"23.1.0"}static finalize(){super.finalize();const{is:t}=this;t&&!d.has(t)&&(window.Vaadin.registrations.push(this),d.add(t),window.Vaadin.developmentModeCallback&&(c=a.a.debounce(c,s.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(a.b)(c)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(t,e,n){"use strict";n(5);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(0).c`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,o=document.createElement("template");o.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=0;function o(){}o.prototype.__mixinApplications,o.prototype.__mixinSet;const r=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=i++;return function(i){let o=i.__mixinSet;if(o&&o[n])return i;let r=e,s=r.get(i);if(!s){s=t(i),r.set(i,s);let e=Object.create(s.__mixinSet||o||null);e[n]=!0,s.__mixinSet=e}return s}}},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},,,function(t,e,n){"use strict";n(5);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i=document.createElement("template");i.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(i.content)},,function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return u}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let i=0,o=0;const r=[];let s=0,a=!1;const l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=r.length;for(let e=0;e<t;e++){const t=r[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}r.splice(0,t),o+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},d={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},h={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run(t){a||(a=!0,l.textContent=s,s+=1),r.push(t);const e=i;return i+=1,e},cancel(t){const e=t-o;if(e>=0){if(!r[e])throw new Error("invalid async handle: "+t);r[e]=null}}}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(27);var i=n(105),o=n(44),r=n(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(r.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(r.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(r.a)(this._target).children&&(this._listenSlots(Object(r.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(r.a)(this._target).children&&(this._unlistenSlots(Object(r.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Object(i.a)(e,this._effectiveNodes);for(let e,i=0;i<n.length&&(e=n[i]);i++)for(let n,i=0;i<e.removed.length&&(n=e.removed[i]);i++)t.removedNodes.push(n);for(let i,o=0;o<n.length&&(i=n[o]);o++)for(let n=i.index;n<i.index+i.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let o=!1;return(t.addedNodes.length||t.removedNodes.length)&&(o=!0,this.callback.call(this._target,t)),o}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];s(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];s(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class i{static debounce(t,e,n){return t instanceof i?t._cancelAsync():t=new i,t.setConfig(e,n),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,o.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let o=new Set;function r(t){o.add(t)}function s(){const t=Boolean(o.size);return o.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}const a=()=>{let t;do{t=s()}while(t)}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return h}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=t=>t.test(navigator.userAgent),o=t=>t.test(navigator.platform),r=i(/Android/),s=i(/Chrome/)&&/Google Inc/.test(navigator.vendor);const a=i(/Firefox/),l=o(/^iPad/)||o(/^Mac/)&&navigator.maxTouchPoints>1,c=o(/^iPhone/)||l,d=i(/^((?!chrome|android).)*safari/i),h=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})()},,,function(t,e,n){"use strict";n.d(e,"s",(function(){return o})),n.d(e,"o",(function(){return r})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return a})),n.d(e,"i",(function(){return l})),n.d(e,"n",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return u})),n.d(e,"q",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"h",(function(){return _})),n.d(e,"b",(function(){return f})),n.d(e,"m",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"p",(function(){return y})),n.d(e,"d",(function(){return w})),n.d(e,"r",(function(){return C}));n(27);var i=n(106);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=!window.ShadyDOM||!window.ShadyDOM.inUse,r=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,o&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let s=window.Polymer&&window.Polymer.rootPath||Object(i.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let l=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let c=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let h=window.Polymer&&window.Polymer.legacyOptimizations||!1;let u=window.Polymer&&window.Polymer.legacyWarnings||!1;let p=window.Polymer&&window.Polymer.syncInitialRender||!1;let m=window.Polymer&&window.Polymer.legacyUndefined||!1;let _=window.Polymer&&window.Polymer.orderedComputed||!1;let f=!0;const b=function(t){f=t};let g=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let v=window.Polymer&&window.Polymer.fastDomIf||!1;let y=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let w=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let C=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return u}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=0,o=0,r=[],s=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=r.length;for(let e=0;e<t;e++){let t=r[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}r.splice(0,t),o+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},d={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},h={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run:t=>(a||(a=!0,l.textContent=s++),r.push(t),i++),cancel(t){const e=t-o;if(e>=0){if(!r[e])throw new Error("invalid async handle: "+t);r[e]=null}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class i{constructor(t){this.value=t.toString()}toString(){return this.value}}function o(t){if(t instanceof i)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const r=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof i)return o(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(n)+t[r+1],t[0]),n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s}));n(27),n(26),n(44);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class i{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,o.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof i?t._cancelAsync():t=new i,t.setConfig(e,n),t}}let o=new Set;const r=function(t){o.add(t)},s=function(){const t=Boolean(o.size);return o.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let o=!1;window.addEventListener("keydown",()=>{o=!0},{capture:!0}),window.addEventListener("mousedown",()=>{o=!1},{capture:!0});const r=Object(i.a)(t=>class extends t{get _keyboardActive(){return o}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(160);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=[];let r;function s(t,e,n=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=n&&t.removeAttribute("dir")}function a(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=a();o.forEach(e=>{s(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const l=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),r||(r=i.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),s(this,a(),null))}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),"dir"!==t)return;const i=a(),r=n===i&&-1===o.indexOf(this),l=!n&&e&&-1===o.indexOf(this),c=n!==i&&e===i;r||l?(this.__subscribe(),s(this,i,n)):c&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,e,n){("dir"!==n||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,n)}_attributeToProperty(t,e,n){"dir"!==t||e?super._attributeToProperty(t,e,n):this.dir=""}__subscribe(t=!0){t?o.includes(this)||o.push(this):o.includes(this)&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(t){return i.a.getNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return i.a.setNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",t,e)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(20),o=n(22),r=n(0),s=n(161);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(o.a)(Object(r.a)(i.a)))){static get is(){return"vaadin-button"}static get template(){return i.b`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}}customElements.define(a.is,a)},,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=!1,o=[],r=[];function s(){i=!0,requestAnimationFrame((function(){i=!1,a(o),setTimeout((function(){!function(t){for(let e=0,n=t.length;e<n;e++)l(t.shift())}(r)}))}))}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],n=t[1],i=t[2];try{n.apply(e,i)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,n){i||s(),o.push([t,e,n])}function d(t,e,n){i||s(),r.push([t,e,n])}},function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return O})),n.d(e,"e",(function(){return A})),n.d(e,"d",(function(){return E})),n.d(e,"f",(function(){return P})),n.d(e,"c",(function(){return k}));var i=n(32);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o="string"==typeof document.head.style.touchAction,r="__polymerGesturesHandled",s="__polymerGesturesTouchAction",a=["mousedown","mousemove","mouseup","click"],l=[0,1,4,2],c=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function d(t){return a.indexOf(t)>-1}let h=!1;function u(t){d(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){h=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),m={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function _(t){const e=t.type;if(!d(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!c&&(e=l[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const f={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function b(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function g(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const v=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],y={},w=[];function C(t){const e=v(t);return e.length>0?e[0]:t.target}function x(t){const e=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;const i=n[e];if(!i)return;if(!t[r]&&(t[r]={},"touch"===e.slice(0,5))){const n=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(f.touch.id=n.identifier),f.touch.id!==n.identifier)return;o||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],n=t.type;if("touchstart"===n)f.touch.x=e.clientX,f.touch.y=e.clientY,f.touch.scrollDecided=!1;else if("touchmove"===n){if(f.touch.scrollDecided)return;f.touch.scrollDecided=!0;const n=function(t){let e="auto";const n=v(t);for(let t,i=0;i<n.length;i++)if(t=n[i],t[s]){e=t[s];break}return e}(t);let i=!1;const o=Math.abs(f.touch.x-e.clientX),r=Math.abs(f.touch.y-e.clientY);t.cancelable&&("none"===n?i=!0:"pan-x"===n?i=r>o:"pan-y"===n&&(i=o>r)),i?t.preventDefault():k("track")}}(t)}const a=t[r];if(!a.skip){for(let e,n=0;n<w.length;n++)e=w[n],i[e.name]&&!a[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let n,o=0;o<w.length;o++)n=w[o],i[n.name]&&!a[n.name]&&(a[n.name]=!0,n[e](t))}}function O(t,e,n){return!!y[e]&&(function(t,e,n){const i=y[e],o=i.deps,r=i.name;let s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,n,i=0;i<o.length;i++)e=o[i],p&&d(e)&&"click"!==e||(n=s[e],n||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,x,u(e)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),i.touchAction&&P(t,i.touchAction)}(t,e,n),!0)}function A(t,e,n){return!!y[e]&&(function(t,e,n){const i=y[e],o=i.deps,r=i.name,s=t.__polymerGestures;if(s)for(let e,n,i=0;i<o.length;i++)e=o[i],n=s[e],n&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,x,u(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function E(t){w.push(t);for(let e=0;e<t.emits.length;e++)y[t.emits[e]]=t}function P(t,e){o&&t instanceof HTMLElement&&i.c.run(()=>{t.style.touchAction=e}),t[s]=e}function S(t,e,n){const i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,t.dispatchEvent(i),i.defaultPrevented){const t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function k(t){const e=function(t){for(let e,n=0;n<w.length;n++){e=w[n];for(let n,i=0;i<e.emits.length;i++)if(n=e.emits[i],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function T(t,e,n,i){e&&S(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:t=>k(t)})}function N(t,e,n){if(t.prevent)return!1;if(t.started)return!0;const i=Math.abs(t.x-e),o=Math.abs(t.y-n);return i>=5||o>=5}function I(t,e,n){if(!e)return;const i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,s=o.y-t.y;let a,l=0;i&&(a=o.x-i.x,l=o.y-i.y),S(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:r,dy:s,ddx:a,ddy:l,sourceEvent:n,hover:()=>function(t,e){let n=document.elementFromPoint(t,e),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const o=i;if(i=i.shadowRoot.elementFromPoint(t,e),o===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)})}function z(t,e,n){const i=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),r=C(n||e);!r||m[r.localName]&&r.hasAttribute("disabled")||(isNaN(i)||isNaN(o)||i<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=C(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const n=e.getBoundingClientRect(),i=t.pageX,o=t.pageY;return!(i>=n.left&&i<=n.right&&o>=n.top&&o<=n.bottom)}return!1}(e))&&(t.prevent||S(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}E({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){g(this.info)},mousedown(t){if(!_(t))return;const e=C(t),n=this;b(this.info,t=>{_(t)||(T("up",e,t),g(n.info))},t=>{_(t)&&T("up",e,t),g(n.info)}),T("down",e,t)},touchstart(t){T("down",C(t),t.changedTouches[0],t)},touchend(t){T("up",C(t),t.changedTouches[0],t)}}),E({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,g(this.info)},mousedown(t){if(!_(t))return;const e=C(t),n=this,i=t=>{const i=t.clientX,o=t.clientY;N(n.info,i,o)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&k("tap"),n.info.addMove({x:i,y:o}),_(t)||(n.info.state="end",g(n.info)),e&&I(n.info,e,t),n.info.started=!0)};b(this.info,i,t=>{n.info.started&&i(t),g(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=C(t),n=t.changedTouches[0],i=n.clientX,o=n.clientY;N(this.info,i,o)&&("start"===this.info.state&&k("tap"),this.info.addMove({x:i,y:o}),I(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend(t){const e=C(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),I(this.info,e,n))}}),E({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){_(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){_(t)&&z(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){z(this.info,t.changedTouches[0],t)}})},function(t,e,n){"use strict";n(108),n(53)},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(7),n(30),n(24),n(9),n(14),n(8);var i=n(0),o=n(84),r=n(94),s=n(66);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=i.c`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,l=[s.a,o.a,r.a,a];Object(i.d)("",l,{moduleId:"lumo-input-field-shared-styles"})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(35),o=n(57),r=n(76),s=n(20),a=n(40),l=n(48),c=n(52),d=n(247),h=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends(Object(h.a)(Object(c.a)(Object(l.a)(s.a)))){static get template(){return s.b`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new i.a(this,t=>{this._setTemplateFromNodes(t.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),a.d&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new d.a(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;e&&n>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-t+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.filter(t=>t.localName&&"template"===t.localName)[0]||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&(!this.modeless||t.composedPath().includes(this.$.overlay))&&"Escape"===t.key){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(o.a)(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const t=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(t)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&t&&"none"!==t}_enqueueAnimation(t,e){const n=`__${t}Handler`,i=t=>{t&&t.target!==this||(e(),this.removeEventListener("animationend",i),delete this[n])};this[n]=i,this.addEventListener("animationend",i)}_flushAnimation(t){const e=`__${t}Handler`;"function"==typeof this[e]&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof u&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}get _last(){return this===u.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),u.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=u.__attachedInstances;let e;for(;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(t=>{t.parentNode===this.content&&this.content.removeChild(t)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=Object(r.c)(t,this,{forwardHostProp(t,e){this._instance&&this._instance.forwardHostProp(t,e)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(e.querySelectorAll("style")).reduce((t,e)=>t+e.textContent,"");if(t=t.replace(/:host/g,":host-nomatch"),t){const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,n,i){t!==e?this.template=void 0:n!==i&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,n,i,o){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==n||this._oldModel!==i;this._oldModel=i,this._oldOwner=n;const s=this._oldTemplate!==t;this._oldTemplate=t;const a=this._oldRenderer!==e;this._oldRenderer=e;const l=this._oldOpened!==o;this._oldOpened=o,a&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&s?this._stampOverlayTemplate(t):e&&(a||l||r)&&o&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const n=t.ownerDocument;for(;e&&e!==n&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=u.__attachedInstances.filter(t=>t!==this).pop();if(e){t=e.__zIndex+1}this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(u.is,u)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}},function(t,e,n){"use strict";var i=n(20),o=n(52),r=n(0);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(r.a)(Object(o.a)(i.a))){static get is(){return"vaadin-input-container"}static get template(){return i.b`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}customElements.define(s.is,s);const a=r.c`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`,l=document.createElement("template");l.innerHTML=`<style>${a.toString()}</style>`,document.head.appendChild(l.content)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(7),n(9),n(14),n(8);var i=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=i.c`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;Object(i.d)("",o,{moduleId:"lumo-required-field"})},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(65);var i=n(20),o=n(22),r=n(75),s=n(135),a=n(64),l=n(112),c=n(79),d=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(d.d)("vaadin-text-field",c.a,{moduleId:"vaadin-text-field-styles"});class h extends(Object(l.a)(Object(s.a)(Object(d.a)(Object(o.a)(i.a))))){static get is(){return"vaadin-text-field"}static get template(){return i.b`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new r.a(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new a.a(this.inputElement,this._labelController))}}customElements.define(h.is,h)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(7),n(9),n(14),n(8);var i=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=i.c`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;Object(i.d)("",o,{moduleId:"lumo-overlay"})},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));n(9),n(14);var i=n(0),o=n(68);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=i.c`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;Object(i.d)("",r,{moduleId:"lumo-menu-overlay-core"});const s=i.c`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,a=[o.a,r,s];Object(i.d)("",a,{moduleId:"lumo-menu-overlay"})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),r=Object(i.a)(t=>class extends t{connectedCallback(){if(super.connectedCallback(),o.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,o.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),o.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),0===e.size&&o.unobserve(t)),this.__parent=null}}get _observeParent(){return!1}_onResize(t){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function i(t){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n(226),o=(n(92),n(178),n(27),n(155)),r=n(113),s=n(175),a=n(43),l=n(45),c=n(138);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=Object(s.a)(Object(r.b)(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.n)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,i){this.mutableData=!0}connectedCallback(){Object(c.a)()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});n(87),n(137);var h=n(20),u=n(26),p=n(105),m=n(103);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let _=Object(u.a)(t=>{let e=Object(m.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){let t=Object(p.a)(n,i);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=n.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let i=t[n];e.forEach((t,n)=>{t<i.index||(t>=i.index+i.removed.length?e.set(n,t+i.addedCount-i.removed.length):e.set(n,-1))});for(let t=0;t<i.addedCount;t++){let n=i.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,i)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,i)=>{e==t++&&this.deselect(i)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(h.a);class f extends _{static get is(){return"array-selector"}static get template(){return null}}customElements.define(f.is,f);n(249),n(179),n(46);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const b=Object(i.a)(HTMLElement).prototype},function(t,e,n){"use strict";n(78);var i=n(60),o=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-text-field",i.a,{moduleId:"lumo-text-field-styles"});n(67);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(t,e,n){"use strict";var i=n(68),o=n(0);Object(o.d)("vaadin-overlay",i.a,{moduleId:"lumo-vaadin-overlay"});n(61)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(83);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class o extends i.a{constructor(t,e){super(t,"input",()=>document.createElement("input"),(t,n)=>{t.value&&n.setAttribute("value",t.value),t.type&&n.setAttribute("type",t.type);const i=o._uniqueInputId=1+o._uniqueInputId||0;t._inputId=`${t.localName}-${i}`,n.id=t._inputId,"function"==typeof e&&e(n)})}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return y})),n.d(e,"a",(function(){return w}));n(27);var i=n(155),o=n(113),r=n(43),s=n(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(i.a)(l),d=Object(o.a)(c);const h=Object(i.a)(class{});function u(t,e){for(let n=0;n<e.length;n++){let i=e[n];if(Boolean(t)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(t)i.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const t=i.__polymerReplaced__;t&&Object(s.a)(Object(s.a)(t).parentNode).replaceChild(i,t)}else i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=t,i._showHideChildren&&i._showHideChildren(t)}}class p extends h{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,n)}}_showHideChildren(t){u(t,this.children)}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const m=Object(o.a)(p);function _(t){let e=t.__dataHost;return e&&e._methodHost||e}function f(t,e,n){let i=n.mutableData?m:p;y.mixin&&(i=y.mixin(i));let o=class extends i{};return o.prototype.__templatizeOptions=n,o.prototype._bindTemplate(t),function(t,e,n,i){let o=n.hostProps||{};for(let e in i.instanceProps){delete o[e];let n=i.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:v(e,n)})}if(i.forwardHostProp&&e.__dataHost)for(let e in o)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(o,t,e,n),o}function b(t,e,n,i){let o=n.forwardHostProp;if(o&&e.hasHostProps){const h="template"==t.localName;let u=e.templatizeTemplateClass;if(!u){if(h){let t=n.mutableData?d:c;class i extends t{}u=e.templatizeTemplateClass=i}else{const n=t.constructor;class i extends n{}u=e.templatizeTemplateClass=i}let s=e.hostProps;for(let t in s)u.prototype._addPropertyEffect("_host_"+t,u.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(t,o)}),u.prototype._createNotifyingProperty("_host_"+t);r.g&&i&&function(t,e,n){const i=n.constructor._properties,{propertyEffects:o}=t,{instanceProps:r}=e;for(let t in o)if(!(i[t]||r&&r[t])){const e=o[t];for(let n=0;n<e.length;n++){const{part:i}=e[n].info;if(!i.signature||!i.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,n,i)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),h)l=u,a=s=t,Object.setPrototypeOf(s,l.prototype),new l,a=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,u.prototype);const n=e.hostProps;for(let e in n)if(e="_host_"+e,e in t){const n=t[e];delete t[e],t.__data[e]=n}}}var s,l}function g(t,e){return function(t,n,i){e.call(t.__templatizeOwner,n.substring("_host_".length),i[n])}}function v(t,e){return function(t,n,i){e.call(t.__templatizeOwner,t,n,i[n])}}function y(t,e,n){if(r.n&&!_(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:p)._parseTemplate(t),o=i.templatizeInstanceClass;o||(o=f(t,i,n),i.templatizeInstanceClass=o);const s=_(t);b(t,i,n,s);let a=class extends o{};return a.prototype._methodHost=s,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=i.hostProps,a=a,a}function w(t,e){let n;for(;e;)if(n=e.__dataHost?e:e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(s.a)(e).parentNode;return null}},,function(t,e,n){"use strict";n(7),n(24),n(14),n(8);var i=n(0);Object(i.d)("vaadin-input-container",i.c`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});n(65)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(2).c`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;var o=n(168),r=n(169);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=[o.a,r.a,i]},function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return h})),n.d(e,"h",(function(){return u}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t){return t.indexOf(".")>=0}function o(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function r(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||r(t,e)||s(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let i=t[n].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function h(t,e,n){let i=t,o=d(e);for(let t=0;t<o.length;t++){if(!i)return;i=i[o[t]]}return n&&(n.path=o.join(".")),i}function u(t,e,n){let i=t,o=d(e),r=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(i=i[o[t]],!i)return}i[r]=n}else i[e]=n;return o.join(".")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(26),o=n(49),r=n(133);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=Object(i.a)(t=>class extends(Object(o.a)(Object(r.a)(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(132),o=n(35);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends EventTarget{static generateId(t,e){const n=t||"default",o=Object(i.b)(n)+"Id";return this[o]=1+this[o]||0,`${n}-${e.localName}-${this[o]}`}constructor(t,e,n,i){super(),this.host=t,this.slotName=e,this.slotFactory=n,this.slotInitializer=i,this.defaultId=r.generateId(e,t)}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:n}=this;let i=this.defaultNode;return!i&&n&&(i=n(t),i instanceof Element&&(""!==e&&i.setAttribute("slot",e),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t)}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,n=this.host.shadowRoot.querySelector(e);this.__slotObserver=new o.a(n,t=>{const e=this.node,n=t.addedNodes.find(t=>t!==e);t.removedNodes.length&&t.removedNodes.forEach(t=>{this.teardownNode(t)}),n&&(e&&e.isConnected&&this.host.removeChild(e),this.node=n,n!==this.defaultNode&&(this.initCustomNode(n),this.initNode(n)))})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(7),n(30),n(24),n(14);var i=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=i.c`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;Object(i.d)("",o,{moduleId:"lumo-field-button"})},function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(27);var i=n(47);n.d(e,"a",(function(){return i.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(i.c)()}while(t||e)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));n(27);var i=n(45),o=(n(43),n(35));n(85),n(47);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Element.prototype,s=r.matches||r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector,a=function(t,e){return s.call(t,e)};class l{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new o.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(i.a)(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Object(i.a)(e).parentNode||Object(i.a)(e).host;return e===this.node}getOwnerRoot(){return Object(i.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(i.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(i.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(i.a)(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(i.a)(n).importNode(t,e)}getEffectiveChildNodes(){return o.a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let i,o=0,r=e.length;o<r&&(i=e[o]);o++)i.nodeType===Node.ELEMENT_NODE&&a(i,t)&&n.push(i);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function c(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},configurable:!0})}}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let h=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=l.prototype[e])}),c(t.prototype,["classList"]),h=t,Object.defineProperties(d.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&u(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const i=n[t];if(u(i).getOwnerRoot()===e)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let i=e[n];t[i]=function(){return this.node[i].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},set:function(t){this.node[i]=t},configurable:!0})}}(l.prototype,["textContent","innerHTML","className"]);const u=function(t){if((t=t||document)instanceof h)return t;if(t instanceof d)return t;let e=t.__domApi;return e||(e=t instanceof Event?new d(t):new h(t),t.__domApi=e),e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n(20),o=n(76),r=n(47),s=n(85),a=n(113),l=n(80),c=n(44),d=n(45),h=n(138),u=n(43);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=Object(a.b)(i.a);class m extends p{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!u.p,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),Object(h.a)()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Object(o.c)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(t,e){let n=this.__instances;for(let i,o=0;o<n.length&&(i=n[o]);o++)i.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(l.e)(this.as,e)){let i=t[this.itemsIndexAs];e==this.as&&(this.items[i]=n);let o=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,e);this.notifyPath(o,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=r.a.debounce(this.__renderDebouncer,e>0?c.d.after(e):c.c,t.bind(this)),Object(s.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(s.b)()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),n=this.__calculateLimit(e.length);this.__updateInstances(t,n,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),u.p&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;return this.__filterFn&&(e=e.filter((e,n,i)=>this.__filterFn(t[e],n,i))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n])),e}__calculateLimit(t){let e=t;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),i=Math.max(e-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-n,0),this.__chunkCount),e=Math.min(n+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,n){const i=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let e=this.__instances[o],r=n[o],s=t[r];i[r]=o,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,o),e._setPendingProperty(this.itemsIndexAs,r),e._flushProperties()):this.__insertInstance(s,o,r)}for(let t=this.__instances.length-1;t>=o;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let i=e.children[t];n.appendChild(i)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,n){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,e,n){const i=this.__stampInstance(t,e,n);let o=this.__instances[e+1],r=o?o.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(i.root,r),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),i=n.indexOf("."),o=i<0?n:n.substring(0,i);if(o==parseInt(o,10)){let t=i<0?"":n.substring(i+1);this.__handleObservedPaths(t);let r=this.__itemsIdxToInstIdx[o],s=this.__instances[r];if(s){let n=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(n,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(o.a)(this.template,t)}}customElements.define(m.is,m)},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return u}));var i=n(2),o=n(248),r=n(6),s=n(3);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class a extends r.a{constructor(t){if(super(t),this.it=s.d,t.type!==r.b.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s.d||null==t)return this.ft=void 0,this.it=t;if(t===s.c)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;Object(r.c)(a);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends a{}l.directiveName="unsafeSVG",l.resultType=2;const c=Object(r.c)(l);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function d(t){let e=i.e;if(t){const n=t.cloneNode(!0);n.removeAttribute("id"),e=i.g`${c(n.innerHTML)}`}return e}function h(t){let e=null==t||""===t?i.e:t;return function(t){return Object(o.b)(t,o.a.SVG)||t===i.e}(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=i.e),e}function u(t,e){const n=h(t);Object(i.f)(n,e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n(48),o=n(83);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends o.a{constructor(t){super(t,"error-message",()=>document.createElement("div"),(t,e)=>{this.__updateErrorId(e),this.__updateHasError()})}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}var s=n(165);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class a{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&this.__isGroupField&&(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,n){this.__target&&(n&&Object(s.b)(this.__target,t,n),e&&Object(s.a)(this.__target,t,e))}}
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class l extends o.a{constructor(t){super(t,"helper")}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const n=this.__isNotEmpty(t);n&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(n)}__observeHelper(t){this.__helperObserver=new MutationObserver(t=>{t.forEach(t=>{const e=t.target,n=e===this.node;if("attributes"===t.type)n&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(n||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}var c=n(153),d=n(166);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const h=t=>class extends(Object(d.a)(Object(c.a)(Object(i.a)(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new a(this),this._helperController=new l(this),this._errorController=new r(this),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController),this._labelController.addEventListener("label-changed",t=>{const{hasLabel:e,node:n}=t.detail;this.__labelChanged(e,n)}),this._helperController.addEventListener("helper-changed",t=>{const{hasHelper:e,node:n}=t.detail;this.__helperChanged(e,n)})}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(226),o=n(43);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e,n,i){!function(t,e,n){const i=t._noAccessors,o=Object.getOwnPropertyNames(t);for(let r=0;r<o.length;r++){let s=o[r];if(!(s in n))if(i)e[s]=t[s];else{let n=Object.getOwnPropertyDescriptor(t,s);n&&(n.configurable=!0,Object.defineProperty(e,s,n))}}}(e,t,i);for(let t in r)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function c(t,e){for(const n in e){const i=t[n],o=e[n];t[n]=!("value"in o)&&i&&"value"in i?Object.assign({value:i.value},o):o}}const d=Object(i.a)(HTMLElement);function h(t,e,n){let i;const r={};class d extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let t,e=0;e<i.length;e++)t=i[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(i)for(let t=0;t<i.length;t++)c(e,i[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(i)for(let t,n=0;n<i.length;n++)t=i[n],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=r.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=d.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),o.e&&h(t);const e=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=r.registered,n)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=r.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=r.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=r.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=r.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=r.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let i=r.attributeChanged;if(i)for(let o=0;o<i.length;o++)i[o].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;i=function t(e,n,i){n=n||[];for(let o=e.length-1;o>=0;o--){let r=e[o];r?Array.isArray(r)?t(r,n):n.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&n.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),d.prototype.behaviors=t?t.concat(n):i}const h=e=>{i&&function(t,e,n){for(let i=0;i<e.length;i++)l(t,e[i],n,a)}(e,i,r),l(e,t,r,s)};return o.e||h(d.prototype),d.generatedFrom=t,d}n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u=function(t){let e;return e="function"==typeof t?t:u.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};u.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(d):d;return n=h(t,n,t.behaviors),n.is=n.prototype.is=t.is,n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i={start:"top",end:"bottom"},o={start:"left",end:"right"},r=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?t=t.assignedSlot?t.assignedSlot:t.parentNode:(e.push(t),t=t.host)}return e}(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this._updatePosition,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this._updatePosition,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(t,e){if(this.__removeUpdatePositionEventListeners(),t&&e&&this.__addUpdatePositionEventListeners(),t){const t=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(e=>{this.__margins[e]=parseInt(t[e],10)})),this.setAttribute("dir",t.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return"rtl"===this.getAttribute("dir")}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),e=this.__shouldAlignStartVertically(t);this.style.justifyContent=e?"flex-start":"flex-end";const n=this.__shouldAlignStartHorizontally(t,this.__isRTL),r=!this.__isRTL&&n||this.__isRTL&&!n;this.style.alignItems=r?"flex-start":"flex-end";const s=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(t,s,this.noVerticalOverlap,i,this,e),l=this.__calculatePositionInOneDimension(t,s,this.noHorizontalOverlap,o,this,n);Object.assign(this.style,a,l),this.toggleAttribute("bottom-aligned",!e),this.toggleAttribute("top-aligned",e),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(t,e){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!e&&"start"===this.horizontalAlign||e&&"end"===this.horizontalAlign;return this.__shouldAlignStart(t,n,i,this.__margins,r,this.noHorizontalOverlap,o)}__shouldAlignStartVertically(t){const e=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),o="top"===this.verticalAlign;return this.__shouldAlignStart(t,e,n,this.__margins,o,this.noVerticalOverlap,i)}__shouldAlignStart(t,e,n,i,o,r,s){const a=n-t[r?s.end:s.start]-i[s.end],l=t[r?s.start:s.end]-i[s.start],c=o?a:l;return o===(c>(o?l:a)||c>e)}__calculatePositionInOneDimension(t,e,n,i,o,r){const s=r?i.start:i.end,a=r?i.end:i.start;return{[s]:parseFloat(o.style[s]||getComputedStyle(o)[s])+(e[r?i.start:i.end]-t[n===r?i.end:i.start])*(r?-1:1)+"px",[a]:""}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(7),n(24),n(14),n(8);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(0).c`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`},function(t,e,n){"use strict";n(5);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(0).c`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,o=document.createElement("template");o.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},,,,,,function(t,e,n){"use strict";n(7),n(30),n(24),n(9),n(14),n(8);var i=n(0);Object(i.d)("vaadin-checkbox",i.c`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});n(134)},,function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return m}));n(27);var i=n(43),o=n(26),r=n(131),s=n(106),a=n(107),l=n(155),c=n(158),d=n(157);const h=Object(o.a)(t=>{const e=Object(d.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let n in t){const i=t[n];e[n]="function"==typeof i?{type:i}:i}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Object(c.b)(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=i(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,i(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){Object(c.a)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});var u=n(45);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(o.a)(t=>{const e=h(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):i.e||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let r in t)e=this.prototype,n=r,i=t[r],o=t,i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,i.computed,o)),i.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===i.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===i.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&e._createPropertyObserver(n,i.observer,o[i.observer]),e._addPropertyToAttributeMap(n);var e,n,i,o}static createObservers(t,e){const n=this.prototype;for(let i=0;i<t.length;i++)n._createMethodObserver(t[i],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!i.n||i.a)&&(e=a.a.import(t,"template"),i.n&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i.k,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let i=e[n];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,o){if(!p){const i=e.content.querySelectorAll("style"),s=Object(r.c)(e),a=Object(r.b)(n),l=e.content.firstElementChild;for(let n=0;n<a.length;n++){let i=a[n];i.textContent=t._processStyleText(i.textContent,o),e.content.insertBefore(i,l)}let c=0;for(let e=0;e<s.length;e++){let n=s[e],r=i[c];r!==n?(n=n.cloneNode(!0),r.parentNode.insertBefore(n,r)):c++,n.textContent=t._processStyleText(n.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n),i.r&&p&&i.o){const n=e.content.querySelectorAll("style");if(n){let e="";Array.from(n).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,n?Object(s.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(u.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),i.q&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,n,i){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,i)}static _addTemplatePropertyEffect(t,n,o){return!i.g||n in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,n,o)}}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t,e,n){return{index:t,removed:e,addedCount:n}}function o(t,e,n,o,r,a){let l,c=0,d=0,h=Math.min(n-e,a-r);if(0==e&&0==r&&(c=function(t,e,n){for(let i=0;i<n;i++)if(!s(t[i],e[i]))return i;return n}(t,o,h)),n==t.length&&a==o.length&&(d=function(t,e,n){let i=t.length,o=e.length,r=0;for(;r<n&&s(t[--i],e[--o]);)r++;return r}(t,o,h-c)),r+=c,a-=d,(n-=d)-(e+=c)==0&&a-r==0)return[];if(e==n){for(l=i(e,[],0);r<a;)l.removed.push(o[r++]);return[l]}if(r==a)return[i(e,[],n-e)];let u=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n],o=[];for(;e>0||n>0;){if(0==e){o.push(2),n--;continue}if(0==n){o.push(3),e--;continue}let r,s=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1];r=a<l?a<s?a:s:l<s?l:s,r==s?(s==i?o.push(0):(o.push(1),i=s),e--,n--):r==a?(o.push(3),e--,i=a):(o.push(2),n--,i=l)}return o.reverse(),o}(function(t,e,n,i,o,r){let a=r-o+1,l=n-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(l),c[t][0]=t;for(let t=0;t<l;t++)c[0][t]=t;for(let n=1;n<a;n++)for(let r=1;r<l;r++)if(s(t[e+r-1],i[o+n-1]))c[n][r]=c[n-1][r-1];else{let t=c[n-1][r]+1,e=c[n][r-1]+1;c[n][r]=t<e?t:e}return c}(t,e,n,o,r,a));l=void 0;let p=[],m=e,_=r;for(let t=0;t<u.length;t++)switch(u[t]){case 0:l&&(p.push(l),l=void 0),m++,_++;break;case 1:l||(l=i(m,[],0)),l.addedCount++,m++,l.removed.push(o[_]),_++;break;case 2:l||(l=i(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=i(m,[],0)),l.removed.push(o[_]),_++}return l&&p.push(l),p}function r(t,e){return o(t,0,t.length,e,0,e.length)}function s(t,e){return t===e}},function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i,o,r=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===i){i=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",i="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),i)try{return new URL(t,e).href}catch(e){return t}return o||(o=document.implementation.createHTMLDocument("temp"),o.base=o.createElement("base"),o.head.appendChild(o.base),o.anchor=o.createElement("a"),o.body.appendChild(o.anchor)),o.base.href=e,o.anchor.href=t,o.anchor.href||t}function l(t,e){return t.replace(r,(function(t,n,i,o){return n+"'"+a(i.replace(/["']/g,""),e)+"'"+o}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(27);var i=n(106),o=n(43);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r={},s={};function a(t,e){r[t]=s[t.toLowerCase()]=e}function l(t){return r[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,i){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(i.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(i.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(o.n&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=r,customElements.define("dom-module",c)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(7),n(24),n(9),n(14),n(8);var i=n(0);const o=i.c`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;Object(i.d)("vaadin-button",o,{moduleId:"lumo-button"})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(58),o=n(63),r=n(81);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=t=>class extends(Object(o.a)(Object(r.a)(t))){get _activeKeys(){return[" "]}ready(){super.ready(),Object(i.a)(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Object(i.a)(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&this._setActive(!0)}_onKeyUp(t){super._onKeyUp(t),this._activeKeys.includes(t.key)&&this._setActive(!1)}_setActive(t){this.toggleAttribute("active",t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){this.__userInput=t.isTrusted,this.value=t.target.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(""!==t&&null!=t),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(81),o=n(82),r=n(91),s=n(167);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=t=>class extends(Object(o.a)(Object(s.a)(Object(r.a)(Object(i.a)(t))))){static get properties(){return{autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(32),o=n(37),r=n(167);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=t=>class extends(Object(r.a)(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=o.a.debounce(this._inputDebouncer,i.d.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(t){this._checkInputValue(),super._onInput(t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var i=n(26);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t,e,n,i,o){let r;o&&(r="object"==typeof n&&null!==n,r&&(i=t.__dataTemp[e]));let s=i!==n&&(i==i||n==n);return r&&s&&(t.__dataTemp[e]=n),s}const r=Object(i.a)(t=>class extends t{_shouldPropertyChange(t,e,n){return o(this,t,e,n,!0)}}),s=Object(i.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return o(this,t,e,n,this.mutableData)}});r._mutablePropertyChange=o},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(20),o=n(22),r=n(90);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s={};class a extends(Object(o.a)(i.a)){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=s[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,s[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){return this._icons=this._icons||this.__createIconMap(),{svg:Object(r.a)(this._icons[this.__getIconId(t)]),size:this.size}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(this.name+":","")}__nameChanged(t,e){e&&(s[t]=a.getIconset(e),delete s[e]),t&&(s[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(a.is,a)},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return u}));var i=n(107),o=n(106);function r(t){return i.a.import(t)}function s(t){let e=t.body?t.body:t;const n=Object(o.b)(e.textContent,t.baseURI),i=document.createElement("style");return i.textContent=n,i}function a(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...l(e[t]));return n}function l(t){const e=r(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...h(e));const n=e.querySelector("template");n&&t.push(...c(n,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const n=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let r=i[t],s=r.getAttribute("include");s&&n.push(...a(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(r.textContent=Object(o.b)(r.textContent,e)),n.push(r)}t._styles=n}return t._styles}function d(t){let e=r(t);return e?h(e):[]}function h(t){const e=[],n=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<n.length;t++){let i=n[t];if(i.import){const t=i.import,n=i.hasAttribute("shady-unscoped");if(n&&!t._unscopedStyle){const e=s(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=s(t));e.push(n?t._unscopedStyle:t._style)}}return e}function u(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=p(e[t]);return n}function p(t){let e=r(t);if(e&&void 0===e._cssText){let t=m(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const i=c(t,e);for(let t=0;t<i.length;t++){let e=i[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function m(t){let e="",n=h(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));n(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const i={},o=/-[a-z]/g,r=/([A-Z])/g;function s(t){return i[t]||(i[t]=t.indexOf("-")<0?t:t.replace(o,t=>t[1].toUpperCase()))}function a(t){return i[t]||(i[t]=t.replace(r,"-$1").toLowerCase())}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(63);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=t=>class extends(Object(i.a)(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n(20),o=n(109),r=n(48),s=n(22),a=n(162),l=n(82),c=n(75),d=n(153),h=n(64),u=n(164),p=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class m extends(Object(d.a)(Object(a.a)(Object(l.a)(Object(o.a)(Object(s.a)(Object(p.a)(Object(r.a)(i.a)))))))){static get is(){return"vaadin-checkbox"}static get template(){return i.b`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new c.a(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}),this.addController(this._inputController),this.addController(new h.a(this.inputElement,this._labelController)),this.addController(new u.a(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.\nPlease use <label slot="label"> wrapper or the label property instead.')}_shouldSetActive(t){return"a"!==t.target.localName&&super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}customElements.define(m.is,m)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(111);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=t=>class extends(Object(i.a)(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},_enabledCharPattern:{type:String,observer:"_enabledCharPatternChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_onBlur(t){super._onBlur(t),this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_forwardInputValue(t){super._forwardInputValue(t),this.invalid&&this.validate()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault(),super._onKeyDown(t)}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){const e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){const e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}_enabledCharPatternChanged(t){t&&(this.__enabledCharRegExp=new RegExp(`^${t}$`),this.__enabledTextRegExp=new RegExp(`^${t}*$`))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(32),o=n(37);
/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=document.createElement("div");let s;function a(t,e={}){const n=e.mode||"polite",a=void 0===e.timeout?150:e.timeout;"alert"===n?(r.removeAttribute("aria-live"),r.removeAttribute("role"),s=o.a.debounce(s,i.a,()=>{r.setAttribute("role","alert")})):(s&&s.cancel(),r.removeAttribute("role"),r.setAttribute("aria-live",n)),r.textContent="",setTimeout(()=>{r.textContent=t},a)}r.style.position="fixed",r.style.clip="rect(0px, 0px, 0px, 0px)",r.setAttribute("aria-live","polite"),document.body.appendChild(r)},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n(20),o=n(47),r=n(85),s=n(44),a=n(80),l=n(45),c=n(138),d=n(43),h=n(76);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class u extends i.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(r.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(l.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(l.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Object(c.a)()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Object(l.a)(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Object(l.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Object(l.a)(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Object(l.a)(this).previousSibling!==e[e.length-1])for(let n,i=0;i<e.length&&(n=e[i]);i++)Object(l.a)(t).insertBefore(n,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Object(r.b)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),d.p&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const p=d.c?class extends u{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(d.n&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=e._bindTemplate(this.__template,!0);n.runEffects=(t,e,n)=>{let i=this.__syncInfo;if(this.if)i&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(i.changedProps,e)),t(e,n);else if(this.__instance)if(i||(i=this.__syncInfo={runEffects:t,changedProps:{}}),n)for(const t in e){const e=Object(a.g)(t);i.changedProps[e]=this.__dataHost[e]}else Object.assign(i.changedProps,e)},this.__instance=e._stampTemplate(this.__template,n),Object(l.a)(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Object(h.b)(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends u{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Object(h.c)(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(a.g)(t)]=!0))}})),this.__instance=new this.__ctor,Object(l.a)(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(l.a)(t[0]).parentNode;if(e){e=Object(l.a)(e);for(let n,i=0;i<t.length&&(n=t[i]);i++)e.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(p.is,p)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(43);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o=!1;function r(){if(i.e&&!i.s){if(!o){o=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}},function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let o,r;function s(t){o=(!t||!t.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?o=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=o},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,o=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,r=/@media\s(.*)/},function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var i=n(140);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function r(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function s(t){const e=i.b.test(t)||i.c.test(t);return i.b.lastIndex=0,i.c.lastIndex=0,e}},,,,,,,,function(t,e,n){"use strict";n(73);var i=n(108),o=n(0);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=o.c`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;Object(o.d)("vaadin-password-field-button",[i.a,r],{moduleId:"lumo-password-field-button"});n(30),n(24),n(14);var s=n(60);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=o.c`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;Object(o.d)("vaadin-password-field",[s.a,a],{moduleId:"lumo-password-field"});n(235);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(26),o=n(48),r=n(83);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends r.a{constructor(t){super(t,"label",()=>document.createElement("label"),(t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)})}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const n=this.__hasLabel(e);this.__toggleHasLabel(n)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver(t=>{t.forEach(t=>{const e=t.target,n=e===this.node;if("attributes"===t.type)n&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(n||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const a=Object(i.a)(t=>class extends(Object(o.a)(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new s(this),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return X}));n(27);var i=n(45),o=n(26),r=n(80),s=n(132),a=n(156);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};let c=!1,d=!1;function h(t){(function(){if(!c){c=!0;const t=document.createElement("textarea");t.placeholder="a",d=t.placeholder===t.textContent}return d})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function u(t){let e=t.getAttribute("is");if(e&&l[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function p(t,e){let n=e.parentInfo&&p(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,i=0;t;t=t.nextSibling)if(e.parentIndex===i++)return t}function m(t,e,n,i){i.id&&(e[i.id]=n)}function _(t,e,n){if(n.events&&n.events.length)for(let i,o=0,r=n.events;o<r.length&&(i=r[o]);o++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function f(t,e,n,i){n.templateInfo&&(e._templateInfo=n.templateInfo,e._parentTemplateInfo=i)}const b=Object(o.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(e),n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let i=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(o,e,n)||i,h(o),o.firstChild&&this._parseTemplateChildNodes(o,e,n),o.hasAttributes&&o.hasAttributes()&&(i=this._parseTemplateNodeAttributes(o,e,n)||i),i||n.noted}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let i,o=t.firstChild,r=0;o;o=i){if("template"==o.localName&&(o=u(o)),i=o.nextSibling,o.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)o.textContent+=n.textContent,i=n.nextSibling,t.removeChild(n),n=i;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let s={parentIndex:r,parentInfo:n};this._parseTemplateNode(o,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),o.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,n){let i=t,o=this._parseTemplate(i,e);return(o.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,n){let i=!1,o=Array.from(t.attributes);for(let r,s=o.length-1;r=o[s];s--)i=this._parseTemplateNodeAttribute(t,e,n,r.name,r.value)||i;return i}static _parseTemplateNodeAttribute(t,e,n,i,o){return"on-"===i.slice(0,3)?(t.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:o}),!0):"id"===i&&(n.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let n=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,i=e.content||t.content,o=document.importNode(i,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let r=o.nodeList=new Array(n.length);o.$={};for(let t,i=0,s=n.length;i<s&&(t=n[i]);i++){let n=r[i]=p(o,t);m(0,o.$,n,t),f(0,n,t,e),_(this,n,t)}return o=o,o}_addMethodEventListenerToNode(t,e,n,i){let o=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||t,0,n);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}});var g=n(43);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let v=0;const y=[],w={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},C=/[A-Z]/;function x(t,e,n){let i=t[e];if(i){if(!t.hasOwnProperty(e)&&(i=t[e]=Object.create(t[e]),n))for(let t in i){let e=i[t],n=i[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}else i=t[e]={};return i}function O(t,e,n,i,o,s){if(e){let a=!1;const l=v++;for(let c in n){let d=e[o?Object(r.g)(c):c];if(d)for(let e,r=0,h=d.length;r<h&&(e=d[r]);r++)e.info&&e.info.lastRun===l||o&&!E(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,n,i,e.info,o,s),a=!0)}return a}return!1}function A(t,e,n,i,o,s,a,l){let c=!1,d=e[a?Object(r.g)(i):i];if(d)for(let e,r=0,h=d.length;r<h&&(e=d[r]);r++)e.info&&e.info.lastRun===n||a&&!E(i,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,i,o,s,e.info,a,l),c=!0);return c}function E(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(r.b)(n,t))||!(!e.wildcard||!Object(r.c)(n,t))}return!0}function P(t,e,n,i,o){let r="string"==typeof o.method?t[o.method]:o.method,s=o.property;r?r.call(t,t.__data[s],i[s]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function S(t,e,n){let i=Object(r.g)(e);if(i!==e){return k(t,Object(s.a)(i)+"-changed",n[e],e),!0}return!1}function k(t,e,n,o){let r={value:n,queueProperty:!0};o&&(r.path=o),Object(i.a)(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function T(t,e,n,i,o,s){let a=(s?Object(r.g)(e):e)!=e?e:null,l=a?Object(r.a)(t,a):t.__data[e];a&&void 0===l&&(l=n[e]),k(t,o.eventName,l,a)}function N(t,e,n,i,o){let r=t.__data[e];g.l&&(r=Object(g.l)(r,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,r)}function I(t,e,n,i){let o=t[w.COMPUTE];if(o)if(g.h){v++;const r=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const n=t[w.COMPUTE];let i,{counts:o,ready:r,total:s}=function(t){const e=t.__computeInfo,n={},i=t[w.COMPUTE],o=[];let r=0;for(let t in e){const i=e[t];r+=n[t]=i.args.filter(t=>!t.literal).length+(i.dynamicFn?1:0)}for(let t in i)e[t]||o.push(t);return{counts:n,ready:o,total:r}}(t);for(;i=r.shift();){e.set(i,e.size);const t=n[i];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0==--o[e]&&r.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)L(t,o,s,r,i);let a;for(;a=s.shift();)j(t,"",e,n,a)&&L(a.methodInfo,o,s,r,i);Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;O(t,o,r,n,i);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const z=(t,e,n)=>{let i=0,o=e.length-1,r=-1;for(;i<=o;){const s=i+o>>1,a=n.get(e[s].methodInfo)-n.get(t.methodInfo);if(a<0)i=s+1;else{if(!(a>0)){r=s;break}o=s-1}}r<0&&(r=o+1),e.splice(r,0,t)},L=(t,e,n,i,o)=>{const s=e[o?Object(r.g)(t):t];if(s)for(let e=0;e<s.length;e++){const r=s[e];r.info.lastRun===v||o&&!E(t,r.trigger)||(r.info.lastRun=v,z(r.info,n,i))}};function j(t,e,n,i,o){let r=V(t,e,n,i,o);if(r===y)return!1;let s=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,r,!0):(t[s]=r,!1)}function M(t,e,n,i,o,r,a){n.bindings=n.bindings||[];let l={kind:i,target:o,parts:r,literal:a,isCompound:1!==r.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(o)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let i=l.parts[n];i.compoundIndex=n,D(t,e,l,i,c)}}function D(t,e,n,i,o){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,s={index:o,binding:n,part:i,evaluator:t};for(let n=0;n<r.length;n++){let i=r[n];"string"==typeof i&&(i=W(i),i.wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:R,info:s,trigger:i})}}}function R(t,e,n,i,o,s,a){let l=a[o.index],c=o.binding,d=o.part;if(s&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let i=n[e];e=Object(r.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(l)}else{let r=o.evaluator._evaluateBinding(t,d,e,n,i,s);r!==y&&function(t,e,n,i,o){o=function(t,e,n,i){if(n.isCompound){let o=t.__dataCompoundStorage[n.target];o[i.compoundIndex]=e,e=o.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,o,n,i),g.l&&(o=Object(g.l)(o,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,o,n.target);else{let i=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[w.READ_ONLY]&&e[w.READ_ONLY][i]||e._setPendingProperty(i,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,o)}}(t,l,c,d,r)}}function H(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,r=new Array(o.length);for(let t=0;t<o.length;t++)r[t]=o[t].literal;let s=e.target;n[s]=r,e.literal&&"property"==e.kind&&("className"===s&&(t=Object(i.a)(t)),t[s]=e.literal)}}function F(t,e,n){if(n.listenerEvent){let i=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,i,o){let s,a=t.detail,l=a&&a.path;l?(i=Object(r.i)(n,i,l),s=a&&a.value):s=t.currentTarget[n],s=o?!s:s,e[w.READ_ONLY]&&e[w.READ_ONLY][i]||!e._setPendingPropertyOrPath(i,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,n.target,i.source,i.negate)}))}}function B(t,e,n,i,o,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:r};for(let o,r=0;r<e.args.length&&(o=e.args[r]);r++)o.literal||t._addPropertyEffect(o.rootProperty,n,{fn:i,info:s,trigger:o});return r&&t._addPropertyEffect(e.methodName,n,{fn:i,info:s}),s}function V(t,e,n,i,o){let r=t._methodHost||t,s=r[o.methodName];if(s){let i=t._marshalArgs(o.args,e,n);return i===y?y:s.apply(r,i)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const q=[],U=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function $(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function Y(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:q};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=W(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function W(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(r.g)(e),n.structured=Object(r.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function G(t,e,n){let i=Object(r.a)(t,n);return void 0===i&&(i=e[n]),i}function J(t,e,n,i){const o={indexSplices:i};g.f&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(n+".splices",o),t.notifyPath(n+".length",e.length),g.f&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function K(t,e,n,i,o,r){J(t,e,n,[{index:i,addedCount:o,removed:r,object:e,type:"splice"}])}const X=Object(o.a)(t=>{const e=b(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return w}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Z.length){let t=Z[Z.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[w.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==w.READ_ONLY);let i=x(this,e,!0)[t];i||(i=this[e][t]=[]),i.push(n)}_removePropertyEffect(t,e,n){let i=x(this,e,!0)[t],o=i.indexOf(n);o>=0&&i.splice(o,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,w.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,w.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,w.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,w.COMPUTE)}_setPendingPropertyOrPath(t,e,n,i){if(i||Object(r.g)(Array.isArray(t)?t[0]:t)!==t){if(!i){let n=Object(r.a)(this,t);if(!(t=Object(r.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let i=t.__dataLinkedPaths;if(i){let o;for(let s in i){let a=i[s];Object(r.c)(s,e)?(o=Object(r.i)(s,a,e),t._setPendingPropertyOrPath(o,n,!0,!0)):Object(r.c)(a,e)&&(o=Object(r.i)(a,s,e),t._setPendingPropertyOrPath(o,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(i.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let i=this.__dataHasPaths&&Object(r.d)(t),o=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(i||this[w.NOTIFY]&&this[w.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[w.READ_ONLY]&&this[w.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let i,o=this.__dataHasPaths;this.__dataHasPaths=!1,I(this,e,n,o),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,n,o),this._flushClients(),O(this,this[w.REFLECT],e,n,o),O(this,this[w.OBSERVE],e,n,o),i&&function(t,e,n,i,o){let r,s,a=t[w.NOTIFY],l=v++;for(let s in e)e[s]&&(a&&A(t,a,l,s,n,i,o)||o&&S(t,s,n))&&(r=!0);r&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,i,e,n,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[w.PROPAGATE]&&O(this,this[w.PROPAGATE],t,e,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,n)}_runEffectsForTemplate(t,e,n,i){const o=(e,i)=>{O(this,t.propertyEffects,e,n,i,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,n,i)};t.runEffects?t.runEffects(o,e,i):o(e,i)}linkPaths(t,e){t=Object(r.f)(t),e=Object(r.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(r.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};J(this,Object(r.a)(this,t,n),n.path,e)}get(t,e){return Object(r.a)(e||this,t)}set(t,e,n){n?Object(r.h)(n,t,e):this[w.READ_ONLY]&&this[w.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},i=Object(r.a)(this,t,n),o=i.length,s=i.push(...e);return e.length&&K(this,i,n.path,o,e.length,[]),s}pop(t){let e={path:""},n=Object(r.a)(this,t,e),i=Boolean(n.length),o=n.pop();return i&&K(this,n,e.path,n.length,0,[o]),o}splice(t,e,n,...i){let o,s={path:""},a=Object(r.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?a.splice(e):a.splice(e,n,...i),(i.length||o.length)&&K(this,a,s.path,e,i.length,o),o}shift(t){let e={path:""},n=Object(r.a)(this,t,e),i=Boolean(n.length),o=n.shift();return i&&K(this,n,e.path,0,0,[o]),o}unshift(t,...e){let n={path:""},i=Object(r.a)(this,t,n),o=i.unshift(...e);return e.length&&K(this,i,n.path,0,e.length,[]),o}notifyPath(t,e){let n;if(1==arguments.length){let i={path:""};e=Object(r.a)(this,t,i),n=i.path}else n=Array.isArray(t)?Object(r.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,w.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let i={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,w.OBSERVE,{fn:P,info:i,trigger:{name:t}}),n&&this._addPropertyEffect(e,w.OBSERVE,{fn:P,info:i,trigger:{name:e}})}_createMethodObserver(t,e){let n=Y(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");B(this,n,w.OBSERVE,V,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,w.NOTIFY,{fn:T,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,w.REFLECT,{fn:N,info:{attrName:e}})}_createComputedProperty(t,e,n){let i=Y(e);if(!i)throw new Error("Malformed computed expression '"+e+"'");const o=B(this,i,w.COMPUTE,j,t,n);x(this,"__computeInfo")[t]=o}_marshalArgs(t,e,n){const i=this.__data,o=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:d,literal:h}=t[s];if(!h)if(c){const t=Object(r.c)(a,e),o=G(i,n,t?e:a);d={path:t?e:a,value:o,base:t?Object(r.a)(i,a):o}}else d=l?G(i,n,a):i[a];if(g.f&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return y;o[s]=d}return o}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),i=this.__preBoundTemplateInfo==n;if(!i)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e)if(n=Object.create(n),n.wasPreBound=i,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,i=e.lastChild;n.parent=e,e.lastChild=n,n.previousSibling=i,i?i.nextSibling=n:e.firstChild=n}else this.__templateInfo=n;else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(n)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Z.push(this);let n=super._stampTemplate(t,e);if(Z.pop(),e.nodeList=n.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=n.firstChild;e;e=e.nextSibling)t.push(e)}return n.templateInfo=e,function(t,e){let{nodeList:n,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let o=i[e],r=n[e],s=o.bindings;if(s)for(let e=0;e<s.length;e++){let n=s[e];H(r,n),F(r,t,n)}r.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:n,nextSibling:o,parent:r}=e;n?n.nextSibling=o:r&&(r.firstChild=o),o?o.previousSibling=n:r&&(r.lastChild=n),e.nextSibling=e.previousSibling=null;let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];Object(i.a)(Object(i.a)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,n,i){let o=e._parseTemplateNode.call(this,t,n,i);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=$(e)||" ",M(this,n,i,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,n,i,o,r){let a=this._parseBindings(r,n);if(a){let e=o,r="property";C.test(o)?r="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),r="attribute");let l=$(a);return l&&"attribute"==r&&("class"==o&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(o)),t.setAttribute(o,l)),"attribute"==r&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(o=Object(s.b)(o)),M(this,n,i,r,o,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,i,o,r)}static _parseTemplateNestedTemplate(t,n,i){let o=e._parseTemplateNestedTemplate.call(this,t,n,i);const r=t.parentNode,s=i.templateInfo,a="dom-if"===r.localName,l="dom-repeat"===r.localName;g.j&&(a||l)&&(r.removeChild(t),(i=i.parentInfo).templateInfo=s,i.noted=!0,o=!1);let c=s.hostProps;if(g.c&&a)c&&(n.hostProps=Object.assign(n.hostProps||{},c),g.j||(i.parentInfo.noted=!0));else{let t="{";for(let e in c){M(this,n,i,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return o}static _parseBindings(t,e){let n,i=[],o=0;for(;null!==(n=U.exec(t));){n.index>o&&i.push({literal:t.slice(o,n.index)});let r=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=Y(a),u=[];if(h){let{args:t,methodName:n}=h;for(let e=0;e<t.length;e++){let n=t[e];n.literal||u.push(n)}let i=e.dynamicFns;(i&&i[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:r,negate:s,customEvent:l,signature:h,dependencies:u,event:c}),o=U.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&i.push({literal:e})}return i.length?i:null}static _evaluateBinding(t,e,n,i,o,s){let a;return a=e.signature?V(t,n,i,0,e.signature):n!=e.source?Object(r.a)(t,e.source):s&&Object(r.d)(n)?Object(r.a)(t,n):t.__data[n],e.negate&&(a=!a),a}}}),Z=[]},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(27);var i=n(26),o=n(132),r=n(157);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(i.a)(t=>{const e=Object(r.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(o.b)(t[e]))}static attributeNameForProperty(t){return Object(o.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(27);var i=n(26),o=n(44),r=n(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=o.c,a=Object(i.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let i=this.__data[t],o=this._shouldPropertyChange(t,e,i);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n)),this.__dataCounter--}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,i){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,i)}_attributeToProperty(t,e,n){if(!this.__serializing){const i=this.__dataAttributes,o=i&&i[t]||t;this[o]=this._deserializeValue(e,n||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const i=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(r.a)(t)),void 0===i?t.removeAttribute(n):t.setAttribute(n,i)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));function i(){0}const o=[];function r(t){o.push(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const i=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,o=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function r(t,e){if("function"!=typeof t)return;const n=i.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const s=function(t,e){if(window.Vaadin.developmentMode)return r(t,e)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(o?!function(){if(o){if(Object.keys(o).map(t=>o[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!r((function(){return!0})))}catch(t){return!1}}())},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,n){const{scrollLeft:i}=n;if("rtl"!==e||!t)return i;switch(t){case"negative":return n.scrollWidth-n.clientWidth+i;case"reverse":return n.scrollWidth-n.clientWidth-i;default:return i}}static setNormalizedScrollLeft(t,e,n,i){if("rtl"===e&&t)switch(t){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+i;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-i;break;default:n.scrollLeft=i}else n.scrollLeft=i}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(109),o=n(49),r=n(133);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=t=>class extends(Object(i.a)(Object(r.a)(Object(o.a)(t)))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(26),o=n(63),r=n(163),s=n(110);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=Object(i.a)(t=>class extends(Object(r.a)(Object(o.a)(Object(s.a)(t)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){this._toggleChecked(t.target.checked)}_toggleChecked(t){this.checked=t}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,n)=>{this._delegateAttribute(e,t[n])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,n)=>{this._delegateProperty(e,t[n])})}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i{constructor(t,e,n){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=n,t&&t.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(e=>{e.parentElement===t&&t.removeChild(e)}),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter(t=>!(t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim()));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach(t=>{const n=t.cloneNode(!0);this.__slotTargetClones.push(n),e.appendChild(n),this.__sourceSlotObserver.observe(t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),"function"==typeof this.copyCallback&&this.copyCallback(t)}}},function(t,e,n){"use strict";
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function i(t){return t?new Set(t.split(" ")):new Set}function o(t){return[...t].join(" ")}function r(t,e,n){const r=i(t.getAttribute(e));r.add(n),t.setAttribute(e,o(r))}function s(t,e,n){const r=i(t.getAttribute(e));r.delete(n),0!==r.size?t.setAttribute(e,o(r)):t.removeAttribute(e)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(i.a)(t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(26),o=n(163),r=n(110),s=n(166);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=Object(i.a)(t=>class extends(Object(o.a)(Object(s.a)(Object(r.a)(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`)}_constraintsChanged(...t){this.invalid&&(this._hasValidConstraints(t)?this.validate():this.invalid=!1)}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(2).c`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n(2).c`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`},function(t,e,n){"use strict";n(84),n(69),n(68),n(66),n(11);var i=n(7);n.d(e,"a",(function(){return i.a}));n(30),n(24),n(9),n(14);var o=n(8);n.d(e,"b",(function(){return o.a}));n(95),n(12),n(171)},function(t,e,n){"use strict";n(172),n(5);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=document.createElement("template");i.innerHTML='<vaadin-iconset name="lumo" size="1000">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</vaadin-iconset>',document.head.appendChild(i.content)},function(t,e,n){"use strict";n(114),n(90)},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(35),o=n(20),r=n(22),s=n(70),a=n(0);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends(Object(s.a)(Object(r.a)(Object(a.a)(o.a)))){static get template(){return o.b`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value:()=>[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}],observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(t=>{t.forEach(t=>{"attributes"!==t.type||"colspan"!==t.attributeName&&"hidden"!==t.attributeName||this._updateLayout()})}),this.__childObserver=new i.a(this,e=>{const n=this._getObservableNodes(e.addedNodes),i=this._getObservableNodes(e.removedNodes);n.forEach(e=>{this.__mutationObserver.observe(e,t)}),(n.length>0||i.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(t=>t.nodeType===Node.ELEMENT_NODE&&-1===e.indexOf(t.localName.toLowerCase()))}_naturalNumberOrOne(t){return"number"==typeof t&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return"inherit"!==t&&"normal"!==t&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(void 0!==t.minWidth&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(void 0!==t.labelsPosition&&-1===["aside","top"].indexOf(t.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(n){e&&e!==t?(console.warn(n.message+" Using previously set 'responsiveSteps' instead."),this.responsiveSteps=e):(console.warn(n.message+" Using default 'responsiveSteps' instead."),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){0===t.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;this.responsiveSteps.forEach(e=>{this.$.layout.style.setProperty("background-position",e.minWidth);parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(t=e)}),this.$.layout.style.removeProperty("background-position"),t&&(this._columnCount=t.columns,this._labelsOnTop="top"===t.labelsPosition)}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach(([t,e])=>{this.style.setProperty(t,e)}),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),n=t.direction,i="margin-"+("ltr"===n?"left":"right"),o="margin-"+("ltr"===n?"right":"left"),r=this.offsetWidth;let s=0;Array.from(this.children).filter(t=>"br"===t.localName||"none"!==getComputedStyle(t).display).forEach((t,n,a)=>{if("br"===t.localName)return void(s=0);let l;l=this._naturalNumberOrOne(parseFloat(t.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const c=l/this._columnCount;t.style.width=`calc(${99.9*c}% - ${1-c} * ${e})`,s+l>this._columnCount&&(s=0),0===s?t.style.setProperty(i,"0px"):t.style.removeProperty(i);const d=n+1,h=d<a.length&&"br"===a[d].localName;if(s+l===this._columnCount)t.style.setProperty(o,"0px");else if(h){const n=(this._columnCount-s-l)/this._columnCount;t.style.setProperty(o,`calc(${n*r}px + ${n} * ${e})`)}else t.style.removeProperty(o);s=(s+l)%this._columnCount,"vaadin-form-item"===t.localName&&(this._labelsOnTop?t.setAttribute("label-position","top"):t.removeAttribute("label-position"))})}_onResize(){this._selectResponsiveStep()}}customElements.define(l.is,l)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(26);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=new WeakMap;const r=Object(i.a)(t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return o.has(t)||o.set(t,new Set),o.get(t)}(t);this.slotStyles.forEach(n=>{e.has(n)||(!function(t,e){const n=document.createElement("style");n.textContent=t,e===document?document.head.appendChild(n):e.insertBefore(n,e.firstChild)}(n,t),e.add(n))})}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(27);var i=n(26),o=n(176);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(i.a)(t=>class extends t{_addEventListenerToNode(t,e,n){Object(o.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(o.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return z})),n.d(e,"c",(function(){return j}));n(27);var i=n(44),o=n(47),r=n(43),s=n(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return d.indexOf(t)>-1}let m=!1;function _(t){if(!p(t)&&"touchend"!==t)return a&&m&&r.i?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let f=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const b=[],g={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},v={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let i=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<i.length;t++)e.push(i[t])}}return e}let w=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,i=P(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)b.push(i[t]);else if(n=i[t],g[n.localName]){let n=y(i[t]);for(let t=0;t<n.length;t++)e=e||b.indexOf(n[t])>-1}if(i[t]===O.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function C(t){let e=f?["click"]:d;for(let n,i=0;i<e.length;i++)n=e[i],t?(b.length=0,document.addEventListener(n,w,!0)):document.removeEventListener(n,w,!0)}function x(t){let e=t.type;if(!p(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!u&&(e=h[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function E(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}r.b&&document.addEventListener("touchend",(function(t){if(!r.b)return;O.mouse.mouseIgnoreJob||C(!0),O.mouse.target=P(t)[0],O.mouse.mouseIgnoreJob=o.a.debounce(O.mouse.mouseIgnoreJob,i.d.after(2500),(function(){C(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});const P=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],S={},k=[];function T(t){const e=P(t);return e.length>0?e[0]:t.target}function N(t){let e,n=t.type,i=t.currentTarget.__polymerGestures;if(!i)return;let o=i[n];if(o){if(!t[l]&&(t[l]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(O.touch.id=e.identifier),O.touch.id!==e.identifier)return;a||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)O.touch.x=e.clientX,O.touch.y=e.clientY,O.touch.scrollDecided=!1;else if("touchmove"===n){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;let n=function(t){let e="auto",n=P(t);for(let t,i=0;i<n.length;i++)if(t=n[i],t[c]){e=t[c];break}return e}(t),i=!1,o=Math.abs(O.touch.x-e.clientX),r=Math.abs(O.touch.y-e.clientY);t.cancelable&&("none"===n?i=!0:"pan-x"===n?i=r>o:"pan-y"===n&&(i=o>r)),i?t.preventDefault():D("track")}}(t)}if(e=t[l],!e.skip){for(let n,i=0;i<k.length;i++)n=k[i],o[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let i,r=0;r<k.length;r++)i=k[r],o[i.name]&&!e[i.name]&&(e[i.name]=!0,i[n](t))}}}function I(t,e,n){return!!S[e]&&(function(t,e,n){let i=S[e],o=i.deps,r=i.name,s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,n,i=0;i<o.length;i++)e=o[i],f&&p(e)&&"click"!==e||(n=s[e],n||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,N,_(e)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),i.touchAction&&j(t,i.touchAction)}(t,e,n),!0)}function z(t,e,n){return!!S[e]&&(function(t,e,n){let i=S[e],o=i.deps,r=i.name,s=t.__polymerGestures;if(s)for(let e,n,i=0;i<o.length;i++)e=o[i],n=s[e],n&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,N,_(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function L(t){k.push(t);for(let e=0;e<t.emits.length;e++)S[t.emits[e]]=t}function j(t,e){a&&t instanceof HTMLElement&&i.c.run(()=>{t.style.touchAction=e}),t[c]=e}function M(t,e,n){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Object(s.a)(t).dispatchEvent(i),i.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function D(t){let e=function(t){for(let e,n=0;n<k.length;n++){e=k[n];for(let n,i=0;i<e.emits.length;i++)if(n=e.emits[i],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function R(t,e,n,i){e&&M(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(t){return D(t)}})}function H(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let i=Math.abs(t.x-e),o=Math.abs(t.y-n);return i>=5||o>=5}function F(t,e,n){if(!e)return;let i,o=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,l=0;o&&(i=r.x-o.x,l=r.y-o.y),M(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let o=i;if(i=i.shadowRoot.elementFromPoint(t,e),o===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function B(t,e,n){let i=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),r=T(n||e);!r||v[r.localName]&&r.hasAttribute("disabled")||(isNaN(i)||isNaN(o)||i<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=T(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),i=t.pageX,o=t.pageY;return!(i>=n.left&&i<=n.right&&o>=n.top&&o<=n.bottom)}return!1}(e))&&(t.prevent||M(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}L({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){E(this.info)},mousedown:function(t){if(!x(t))return;let e=T(t),n=this;A(this.info,(function(t){x(t)||(R("up",e,t),E(n.info))}),(function(t){x(t)&&R("up",e,t),E(n.info)})),R("down",e,t)},touchstart:function(t){R("down",T(t),t.changedTouches[0],t)},touchend:function(t){R("up",T(t),t.changedTouches[0],t)}}),L({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,E(this.info)},mousedown:function(t){if(!x(t))return;let e=T(t),n=this,i=function(t){let i=t.clientX,o=t.clientY;H(n.info,i,o)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&D("tap"),n.info.addMove({x:i,y:o}),x(t)||(n.info.state="end",E(n.info)),e&&F(n.info,e,t),n.info.started=!0)};A(this.info,i,(function(t){n.info.started&&i(t),E(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=T(t),n=t.changedTouches[0],i=n.clientX,o=n.clientY;H(this.info,i,o)&&("start"===this.info.state&&D("tap"),this.info.addMove({x:i,y:o}),F(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=T(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),F(this.info,e,n))}}),L({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){x(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){x(t)&&B(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){B(this.info,t.changedTouches[0],t)}})},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var i=n(103),o=n(26),r=n(45);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const s=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]},a=Object(o.a)(t=>{const e=Object(i.a)(t);let n=s(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,n,i){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==n&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Object(r.a)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,n,i)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(76);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o={templatize(t,e){this._templatizerTemplate=t,this.ctor=Object(i.c)(t,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return Object(i.a)(this._templatizerTemplate,t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(113);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o;o=i.a._mutablePropertyChange;const r={properties:{mutableData:Boolean},_shouldPropertyChange(t,e,n){return o(this,t,e,n,this.mutableData)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(72);var i=n(92);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class o{constructor(t){o[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return o.types[t]&&o.types[t][e]}set value(t){var e=this.type,n=this.key;e&&n&&(e=o.types[e]=o.types[e]||{},null==t?delete e[n]:e[n]=t)}get list(){if(this.type){var t=o.types[this.type];return t?Object.keys(t).map((function(t){return r[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}o[" "]=function(){},o.types={};var r=o.types;Object(i.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var i=new o({type:t,key:e});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new o({type:this.type,key:t}).value}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return bt}));var i=n(139);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function r(t){return function t(e,n){let i=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;i=n.substring(t,e.start-1),i=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(i),i=i.replace(d.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let o=e.parsedSelector=e.selector=i.trim();e.atRule=0===o.indexOf(p),e.atRule?0===o.indexOf(u)?e.type=a.MEDIA_RULE:o.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===o.indexOf(h)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let o=e.rules;if(o)for(let e,i=0,r=o.length;i<r&&(e=o[i]);i++)t(e,n);return e}(function(t){let e=new o;e.start=0,e.end=t.length;let n=e;for(let i=0,r=t.length;i<r;i++)if(t[i]===l){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;n=new o,n.start=i+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[i]===c&&(n.end=i+1,n=n.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function s(t,e,n=""){let i="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(h)}(n))for(let t,o=0,r=n.length;o<r&&(t=n[o]);o++)i=s(t,e,i);else i=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(t.selector&&(n+=t.selector+" "+l+"\n"),n+=i,t.selector&&(n+=c+"\n\n")),n}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@";var m=n(140);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _=new Set;function f(t){const e=t.textContent;if(!_.has(e)){_.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function b(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function g(t,e){return t?("string"==typeof t&&(t=r(t)),e&&y(t,e),s(t,i.c)):""}function v(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=r(t.textContent)),t.__cssRules||null}function y(t,e,n,i){if(!t)return;let o=!1,r=t.type;if(i&&r===a.MEDIA_RULE){let e=t.selector.match(m.a);e&&(window.matchMedia(e[1]).matches||(o=!0))}r===a.STYLE_RULE?e(t):n&&r===a.KEYFRAMES_RULE?n(t):r===a.MIXIN_RULE&&(o=!0);let s=t.rules;if(s&&!o)for(let t,o=0,r=s.length;o<r&&(t=s[o]);o++)y(t,e,n,i)}function w(t,e){let n=0;for(let i=e,o=t.length;i<o;i++)if("("===t[i])n++;else if(")"===t[i]&&0==--n)return i;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function C(t){if(void 0!==i.a)return i.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function x(t){return""!==C(t)}var O=n(141);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A=/;\s*/m,E=/^\s*(initial)|(inherit)\s*$/,P=/\s*!important/;class S{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let k=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new S}detectMixin(t){return Object(O.a)(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const o=n[t];b(o)?i.d||(f(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=v(t);return this.transformRules(n,e),t.textContent=g(n),n}transformCustomStyle(t){let e=v(t);return y(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=g(e),e}transformRules(t,e){this._currentElement=e,y(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(m.c,(t,n,i,o)=>this._produceCssProperties(t,n,i,o,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let i=!1;return y(e,e=>{i=i||e===t,i||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=m.b.exec(t);){let i=n[0],o=n[1],r=n.index,s=r+i.indexOf("@apply"),a=r+i.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(o,d);t=`${l}${h}${c}`,m.b.lastIndex=r+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(A,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){let o,r,s;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(o in a)s=e&&e[o],r=[o,": var(",t,"_-_",o],s&&r.push(",",s.replace(P,"")),r.push(")"),P.test(a[o])&&r.push(" !important"),n.push(r.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=E.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,i,o=t.split(";"),r={};for(let t,s,a=0;a<o.length;a++)t=o[a],t&&(s=t.split(":"),s.length>1&&(n=s[0].trim(),i=s.slice(1).join(":"),e&&(i=this._replaceInitialOrInherit(n,i)),r[n]=i));return r}_invalidateMixinEntry(t){if(k)for(let e in t.dependants)e!==this._currentElement&&k(e)}_produceCssProperties(t,e,n,i,o){if(n&&function t(e,n){let i=e.indexOf("var(");if(-1===i)return n(e,"","","");let o=w(e,i+3),r=e.substring(i+4,o),s=e.substring(0,i),a=t(e.substring(o+1),n),l=r.indexOf(",");return-1===l?n(s,r.trim(),"",a):n(s,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(n,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;let r=this._consumeCssProperties(""+i,o),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let h,u,p=[],m=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),d&&!(h in d)&&(m=!0),p.push(`${e}_-_${h}: ${u}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(s=`${t};${s}`),`${s}${p.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin,T.prototype.transformStyle=T.prototype.transformStyle,T.prototype.transformCustomStyle=T.prototype.transformCustomStyle,T.prototype.transformRules=T.prototype.transformRules,T.prototype.transformRule=T.prototype.transformRule,T.prototype.transformTemplate=T.prototype.transformTemplate,T.prototype._separator="_-_",Object.defineProperty(T.prototype,"invalidCallback",{get:()=>k,set(t){k=t}});var N=T;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var I={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z="_applyShimCurrentVersion",L="_applyShimNextVersion",j=Promise.resolve();function M(t){let e=I[t];e&&function(t){t[z]=t[z]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[L]=(t[L]||0)+1}(e)}function D(t){return t[z]===t[L]}function R(t){return!D(t)&&t._applyShimValidatingVersion===t[L]}function H(t){t._applyShimValidatingVersion=t[L],t._validating||(t._validating=!0,j.then((function(){t[z]=t[L],t._validating=!1})))}n(255);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const F=new N;class B{constructor(){this.customStyleInterface=null,F.invalidCallback=M}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{F.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),x(t))return;I[e]=t;let n=F.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&F.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(O.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",i="";return e?e.indexOf("-")>-1?n=e:(i=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,i=t.extends),{is:n,typeExtension:i}}(t),n=I[e];if((!n||!x(n))&&n&&!D(n)){R(n)||(this.prepareTemplate(n,e),H(n));let i=t.shadowRoot;if(i){let t=i.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=g(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new B;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,i){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(O.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=F;var V=n(103),q=n(175),U=n(156),$=n(26);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Y=/:host\(:dir\((ltr|rtl)\)\)/g,W=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,G=/:dir\((?:ltr|rtl)\)/,J=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),K=[];let X=null,Z="";function Q(){Z=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Z)}}function et(){Q(),Z=document.documentElement.getAttribute("dir");for(let t=0;t<K.length;t++)tt(K[t])}const nt=Object($.a)(t=>{J||X||(Q(),X=new MutationObserver(et),X.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(U.a)(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!J&&G.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Y,':host([dir="$1"])'),e=e.replace(W,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(X&&X.takeRecords().length&&et(),K.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=K.indexOf(this);t>-1&&K.splice(t,1)}}}return n.__activateDir=!1,n});n(57);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function it(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?it():window.addEventListener("DOMContentLoaded",it);var ot=n(86),rt=n(176),st=n(47),at=n(44),lt=n(80),ct=n(45);n(27);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const dt=window.ShadyDOM,ht=window.ShadyCSS;function ut(t,e){return Object(ct.a)(t).getRootNode()===e}var pt=n(43),mt=n(177),_t=n(158);let ft=window.ShadyCSS;const bt=Object($.a)(t=>{const e=Object(q.a)(Object(V.a)(t)),n=V.b?e:nt(e),i=Object(mt.b)(n),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,n){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,n,null)}setAttribute(t,e){if(pt.d&&!this._legacyForceObservedAttributes){const n=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,n,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(pt.d&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return pt.d&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Object(_t.b)(this.prototype)),this.__observedAttributes):i.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,n,i){e!==n&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==n&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ct.a)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,n,i),this.attributeChanged(t,e,n)))}attributeChanged(t,e,n){}_initializeProperties(){if(pt.e&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),pt.d&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,n=t.length;e<n;e++){const n=t[e];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let i,o=0;o<n.length&&(i=n[o]);o++){let n=Object.getOwnPropertyDescriptor(e,i);n&&Object.defineProperty(t,i,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=e;let o=n.node||this;return Object(ct.a)(o).dispatchEvent(i),i}listen(t,e,n){t=t||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),o=i.get(t);o||(o={},i.set(t,o));let r=e+n;o[r]||(o[r]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let i=this.__boundListeners&&this.__boundListeners.get(t),o=e+n,r=i&&i[o];r&&(this._removeEventListenerFromNode(t,e,r),i[o]=null)}setScrollDirection(t,e){Object(rt.c)(e||this,o[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ct.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ot.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ot.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ot.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,i=0;n=t[i];i++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ot.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ct.a)(this).contains(t)&&Object(ct.a)(this).getRootNode()===Object(ct.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ct.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!dt||!ht)return null;if(!dt.handlesDynamicScoping)return null;const n=ht.ScopingShim;if(!n)return null;const i=n.scopeForNode(t),o=Object(ct.a)(t).getRootNode(),r=t=>{if(!ut(t,o))return;const e=Array.from(dt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const r=e[t];if(!ut(r,o))continue;const s=n.currentScopeForNode(r);s!==i&&(""!==s&&n.unscopeNode(r,s),n.scopeNode(r,i))}};if(r(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&r(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return ft.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=st.a.debounce(this._debouncers[t],n>0?at.d.after(n):at.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.d.run(t.bind(this),e):~at.c.run(t.bind(this))}cancelAsync(t){t<0?at.c.cancel(~t):at.d.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Object(ot.b)(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(ct.a)(n).setAttribute(t,""),!0):(Object(ct.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,i){i=i||this,this.transform("translate3d("+t+","+e+","+n+")",i)}arrayDelete(t,e){let n;if(Array.isArray(t)){if(n=t.indexOf(e),n>=0)return t.splice(n,1)}else{if(n=Object(lt.a)(this,t).indexOf(e),n>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},,,,,,,,function(t,e,n){"use strict";n(9);var i=n(0);Object(i.d)("vaadin-form-layout",i.c`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});n(173)},function(t,e,n){"use strict";var i=n(20),o=n(53);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends o.a{static get is(){return"vaadin-password-field-button"}static get template(){return i.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(r.is,r);var s=n(46),a=n(83),l=n(174),c=n(67);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const d=s.a`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let h;class u extends(Object(l.a)(c.a)){static get is(){return"vaadin-password-field"}static get template(){if(!h){h=super.template.cloneNode(!0);const t=d.content.querySelector('[part="reveal-button"]');h.content.querySelector('[part="input-field"]').appendChild(t)}return h}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){return[`\n        ${this.localName} [slot="input"]::-ms-reveal {\n          display: none;\n        }\n      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new a.a(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(t,e)=>{e.disabled=t.disabled,e.addEventListener("click",t.__boundRevealButtonClick),e.addEventListener("touchend",t.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),t){const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}else this._setPasswordVisible(!1)}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(u.is,u)},function(t,e,n){"use strict";var i=n(72),o=n(46);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const r=o.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content);var s=document.createElement("style");s.textContent="[hidden] { display: none !important; }",document.head.appendChild(s);n(180);var a=n(92),l=n(86);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(a.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:i.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,,,,,,,,,,function(t,e,n){"use strict";
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function i(t){const e=t.style;if("hidden"===e.visibility||"none"===e.display)return!0;const n=window.getComputedStyle(t);return"hidden"===n.visibility||"none"===n.display}function o(t,e){const n=Math.max(t.tabIndex,0),i=Math.max(e.tabIndex,0);return 0===n||0===i?i>n:n>i}function r(t){const e=t.length;if(e<2)return t;const n=Math.ceil(e/2);return function(t,e){const n=[];for(;t.length>0&&e.length>0;)o(t[0],e[0])?n.push(e.shift()):n.push(t.shift());return n.concat(t,e)}(r(t.slice(0,n)),r(t.slice(n)))}function s(t,e){if(t.nodeType!==Node.ELEMENT_NODE||i(t))return!1;const n=t,o=function(t){if(!function(t){if(t.matches('[tabindex="-1"]'))return!1;if(t.matches("input, select, textarea, button, object"))return t.matches(":not([disabled])");return t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}(n);let r=o>0;o>=0&&e.push(n);let a=[];return a="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children,[...a].forEach(t=>{r=s(t,e)||r}),r}function a(t){return t.getRootNode().activeElement===t}n.d(e,"a",(function(){return c}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const l=[];class c{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,0===this.__focusableElements.length)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");l.push(this),-1===this.__focusedElementIndex&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,l.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(l).pop()&&"Tab"===t.key){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,n=t?-1:1,i=this.__focusedElementIndex;e[(e.length+i+n)%e.length].focus()}get __focusableElements(){return function(t){const e=[];return s(t,e)?r(e):e}(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(a).pop())}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var i=n(3);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:o}=i.a,r={HTML:1,SVG:2},s=(t,e)=>{var n,i;return void 0===e?void 0!==(null===(n=t)||void 0===n?void 0:n._$litType$):(null===(i=t)||void 0===i?void 0:i._$litType$)===e}},function(t,e,n){"use strict";var i=n(255),o=n(141),r=n(139);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new i.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){s.processStyles(),Object(o.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(o.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(o.b)(t,e),flushCustomStyles(){},nativeCss:r.c,nativeShadow:r.d,cssBuild:r.a,disableRuntime:r.b}),window.ShadyCSS.CustomStyleInterface=s;var a=n(131);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i,o=null,r=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){r?r(t):(o||(o=new Promise(t=>{i=t}),"complete"===document.readyState?i():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&i()})),o.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[a])continue;const i=this.getStyleForCustomStyle(n);if(i){const t=i.__appliedElement||i;l&&l(t),n[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},,,,function(t,e){const n=document.createElement("template");n.innerHTML="\n  <style>\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: env(safe-area-inset-top, 0px);\n      --safe-area-inset-right: env(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: env(safe-area-inset-left, 0px);\n    }\n  </style>\n",document.head.appendChild(n.content)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(95),n(9),n(14);var i=n(0);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.d)("vaadin-field-outline",i.c`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});n(74),n(7),n(8);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.d)("vaadin-user-tags-overlay",i.c`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"}),Object(i.d)("vaadin-user-tag",i.c`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});var o=n(20),r=n(52);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(i.a)(Object(r.a)(o.a))){static get is(){return"vaadin-user-tag"}static get template(){return o.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){null!=t&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(s.is,s);var a=n(61),l=n(93);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.d)("vaadin-user-tags-overlay",i.c`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class c extends(Object(l.a)(a.a)){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(c.is,c);var d=n(105),h=n(32),u=n(37);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const p=(t,e)=>new Promise(n=>{const i=()=>{t.removeEventListener(e,i),n()};t.addEventListener(e,i)});class m extends o.a{static get is(){return"vaadin-user-tags"}static get template(){return o.b`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing?this.flashTags(this.__flashQueue.shift()):t&&this.hasFocus?this.opened=!0:!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).filter(e=>e.uid===t.id)[0]}getChangedTags(t,e){const n=e.map(t=>this.getTagForUser(t));return{added:t.map(t=>this.getTagForUser(t)||this.createUserTag(t)),removed:n}}getChangedUsers(t,e){const n=[],i=[];e.forEach(e=>{for(let t=0;t<e.removed.length;t++)i.push(e.removed[t]);for(let i=e.addedCount-1;i>=0;i--)n.push(t[e.index+i])});return{addedUsers:n.filter(t=>!i.some(e=>t.id===e.id)),removedUsers:i.filter(t=>!n.some(e=>t.id===e.id))}}applyTagsStart({added:t,removed:e}){const n=this.wrapper;e.forEach(t=>{t&&(t.classList.add("removing"),t.classList.remove("show"))}),t.forEach(t=>n.insertBefore(t,n.firstChild))}applyTagsEnd({added:t,removed:e}){const n=this.wrapper;e.forEach(t=>{t&&t.parentNode===n&&n.removeChild(t)}),t.forEach(t=>t&&t.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=Object(d.a)(t,this.users);if(0===e.length)return;const{addedUsers:n,removedUsers:i}=this.getChangedUsers(t,e);if(0===n.length&&0===i.length)return;const o=this.getChangedTags(n,i);if(this.__flashQueue.length>0)for(let t=0;t<i.length;t++)if(null===o.removed[t])for(let e=0;e<this.__flashQueue.length;e++)this.__flashQueue[e].some(e=>e.uid===i[t].id)&&this.splice("__flashQueue",t,1);if(this.opened&&this.hasFocus)this.updateTags(t,o);else if(n.length>0&&"hidden"!==document.visibilityState){const e=o.added,n=o.removed;this.updateTagsSync(t,{added:[],removed:n}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",e):this.flashTags(e)}else this.updateTagsSync(t,o)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,n=Array.from(e.children);n.forEach(t=>t.style.display="none"),t.forEach(t=>{e.insertBefore(t,e.firstChild)}),this.flashPromise=new Promise(e=>{p(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=u.a.debounce(this._debounceFlashStart,h.d.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(t=>t.classList.remove("show")),this._debounceFlashEnd=u.a.debounce(this._debounceFlashEnd,h.d.after(this.duration),()=>{const t=()=>{n.forEach(t=>t.style.display="block"),this.flashing=!1,e()};this.hasFocus?t():(p(this.$.overlay,"animationend").then(()=>{t()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const t=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(t)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=u.a.debounce(this._debounceRender,h.d.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),0===t.length&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(m.is,m);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class _ extends(Object(i.a)(Object(r.a)(o.a))){static get is(){return"vaadin-field-outline"}static get template(){return o.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",Boolean(t));const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",n="--_active-user-color";this.style.setProperty(n,e),this._field&&this._field.style.setProperty(n,e)}}customElements.define(_.is,_);var f=n(136);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const b=new WeakMap;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class g{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",t=>{t.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=u.a.debounce(this._mouseDebouncer,h.d.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",t=>{t.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",t=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",t=>{this._hasFocus=!1,this._mouse||(this._debouncer=u.a.debounce(this._debouncer,h.d.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",e=>{e.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((n,i)=>{const{outline:o}=(t=>{if(!b.has(t)){const e=t.tagName.toLowerCase(),n=((t,e)=>{switch(e){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return t.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return t.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return t.shadowRoot.querySelector('[part="radio"]');default:return t}})(t,e);n.style.position="relative",e.endsWith("text-area")&&(n.style.overflow="visible");const i=document.createElement("style");i.textContent='\n      :host([active]) [part="outline"],\n      :host([focus-ring]) [part="outline"] {\n        display: none;\n      }\n    ',t.shadowRoot.appendChild(i);const o=document.createElement("vaadin-field-outline");(n===t?t.shadowRoot:n).appendChild(o),o.setAttribute("context",e),b.set(t,{root:t,target:n,outline:o})}return b.get(t)})(n),r=1===e.length?0:t.map(t=>t.fieldIndex).indexOf(i);o.user=t[r]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent("vaadin-highlight-"+t,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class v extends g{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",t=>this.onFocusIn(t)),t.addEventListener("focusout",t=>this.onFocusOut(t))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class y extends v{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(t=>e.includes(t))[0]}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class w extends g{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",t=>this.onBlur(t),!0),t.addEventListener("opened-changed",t=>this.onOpenedChanged(t)),this.overlay.addEventListener("focusout",t=>this.onOverlayFocusOut(t)),t.addEventListener("focusin",t=>this.onFocusIn(t)),t.addEventListener("focusout",t=>this.onFocusOut(t))}onBlur(t){this.datePicker._fullscreen&&t.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0)}onFocusIn(t){t.relatedTarget!==this.overlay&&(this.blurWhileOpened?this.blurWhileOpened=!1:this.showOutline(this.datePicker))}onFocusOut(t){this.fullscreenFocus||t.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){!0===t.detail.value&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),!1===t.detail.value&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class C extends w{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class x extends v{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class O extends g{constructor(t){super(t);const[e,n]=this.getFields();this.dateObserver=new C(e,t),this.timeObserver=new x(n,t)}getFields(){return this.component.__inputs}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class A extends v{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(t=>e.includes(t))[0]}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class E extends v{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(t=>e.includes(t))[0]}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class P extends v{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&!1===e.detail.value&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class S{get user(){return this._user}set user(t){if(this._user=t,t){const e=t.name+" started editing",{label:n}=this.host;Object(f.a)(n?`${e} ${n}`:e)}}constructor(t){this.host=t,this.user=null,this.users=[]}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&void 0!==t.id){let e;for(let n=0;n<this.users.length;n++)if(this.users[n].id===t.id){e=n;break}void 0!==e&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class k extends HTMLElement{static init(t){if(!t._highlighterController){const e=new S(t);t.setAttribute("has-highlighter",""),e.observer=(t=>{let e;switch(t.tagName.toLowerCase()){case"vaadin-date-picker":e=new w(t);break;case"vaadin-date-time-picker":e=new O(t);break;case"vaadin-select":e=new P(t);break;case"vaadin-checkbox-group":e=new y(t);break;case"vaadin-radio-group":e=new E(t);break;case"vaadin-list-box":e=new A(t);break;default:e=new v(t)}return e})(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}customElements.define("vaadin-field-highlighter",k)},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(7),n(9),n(8);var i=n(0);Object(i.d)("vaadin-app-layout",i.c`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});n(259);var o=n(40);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function r(){if(o.d){const t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;e&&n>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",n-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}r(),window.addEventListener("resize",r);var s=n(35),a=n(57),l=n(20),c=n(48),d=n(22),h=n(247);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends(Object(d.a)(Object(i.a)(Object(c.a)(l.a)))){static get template(){return l.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new h.a(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Object(a.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new s.a(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new s.a(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new s.a(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;0===t?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const t=this.$.navbarTop.getBoundingClientRect(),e=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",t.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",e.height+"px");const n=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",n.width+"px")}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,n=t>e?t+"px":"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",n)}_updateOverlayMode(){const t="true"===this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay");!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{"none"!==this._getCustomPropertyValue("--vaadin-app-layout-transition")?this.$.drawer.addEventListener("transitionend",t,{once:!0}):t()})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){"Escape"===t.key&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t="true"===this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(a.a)(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(u.is,u)},function(t,e,n){"use strict";var i=n(35),o=n(20),r=n(76);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends o.a{static create(t,e){const n=new this;return n.__template=e,n.__component=t,n}static get is(){return"vaadin-template-renderer-templatizer"}constructor(){super(),this.__template=null,this.__component=null,this.__TemplateClass=null,this.__templateInstances=new Set}render(t,e={}){let n=t.__templateInstance;this.__hasTemplateInstance(n)&&this.__isTemplateInstanceAttachedToDOM(n)?this.__updateProperties(n,e):(this.__hasTemplateInstance(n)&&this.__disposeOfTemplateInstance(n),n=this.__createTemplateInstance(e),t.__templateInstance=n,t.innerHTML="",t.appendChild(n.root))}__updateProperties(t,e){t.item===e.item&&t._setPendingProperty("item"),t.__properties=e,t.setProperties(e)}__createTemplateInstance(t){this.__createTemplateClass(t);const e=new this.__TemplateClass(t);return e.__properties=t,this.__templateInstances.add(e),e}__disposeOfTemplateInstance(t){this.__templateInstances.delete(t)}__hasTemplateInstance(t){return this.__templateInstances.has(t)}__isTemplateInstanceAttachedToDOM(t){return 0!==t.children.length&&!!t.children[0].parentElement}__createTemplateClass(t){if(this.__TemplateClass)return;const e=Object.keys(t).reduce((t,e)=>({...t,[e]:!0}),{});this.__TemplateClass=Object(r.c)(this.__template,this,{parentModel:!0,instanceProps:e,forwardHostProp(t,e){this.__templateInstances.forEach(n=>{n.forwardHostProp(t,e)})},notifyInstanceProp(t,e,n){let i;i=e.split(".")[0],i=i[0].toUpperCase()+i.slice(1);const o=`_on${i}PropertyChanged`;this[o]&&this[o](t,e,n)}})}}customElements.define(s.is,s);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends s{static get is(){return"vaadin-template-renderer-grid-templatizer"}_onItemPropertyChanged(t,e,n){if("item"===e)return;if(!Array.isArray(this.__grid.items))return;e=`items.${this.__grid.items.indexOf(t.item)}.${e=e.replace(/^item\./,"")}`,this.__grid.notifyPath(e,n)}_onExpandedPropertyChanged(t,e,n){t.__properties.expanded!==n&&(n?this.__grid.expandItem(t.item):this.__grid.collapseItem(t.item))}_onSelectedPropertyChanged(t,e,n){t.__properties.selected!==n&&(n?this.__grid.selectItem(t.item):this.__grid.deselectItem(t.item))}_onDetailsOpenedPropertyChanged(t,e,n){t.__properties.detailsOpened!==n&&(n?this.__grid.openItemDetails(t.item):this.__grid.closeItemDetails(t.item))}get __grid(){return this.__component.__gridElement?this.__component:this.__component._grid}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function l(t,e,n=s){const i=n.create(t,e),o=(t,e,n)=>{i.render(t,n)};return e.__templatizer=i,o.__templatized=!0,o}function c(t,e,n){const i=t[e];if(i&&!i.__templatized){const e=t.localName;throw new Error(`Cannot use both a template and a renderer for <${e} />.`)}t[e]=n}function d(t,e){if(function(t){t.__suppressTemplateWarning||t.hasAttribute("suppress-template-warning")||(console.warn(`WARNING: <template> inside <${t.localName}> is deprecated. Use a renderer function instead (see https://vaad.in/template-renderer)`),t.__suppressTemplateWarning=!0)}(t),t.__gridElement)return void function(t,e){if(e.matches(".row-details")){c(t,"rowDetailsRenderer",l(t,e,a))}}(t,e);if(t.__gridColumnElement)return void function(t,e){if(e.matches(".header")){return void c(t,"headerRenderer",l(t,e))}if(e.matches(".footer")){return void c(t,"footerRenderer",l(t,e))}if(e.matches(".editor")){return void c(t,"editModeRenderer",l(t,e,a))}c(t,"renderer",l(t,e,a))}(t,e);c(t,"renderer",l(t,e))}function h(t){i.a.getFlattenedNodes(t).filter(t=>t instanceof HTMLTemplateElement).forEach(e=>{e.__templatizer||d(t,e)})}customElements.define(a.is,a),window.Vaadin=window.Vaadin||{},window.Vaadin.templateRendererCallback=t=>{h(t),function(t){t.__templateObserver||(t.__templateObserver=new i.a(t,()=>{h(t)}))}(t)}},,,,,,,,,function(t,e,n){"use strict";n(30);var i=n(108),o=n(0);const r=o.c`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;Object(o.d)("vaadin-drawer-toggle",[i.a,r],{moduleId:"lumo-drawer-toggle"});var s=n(46),a=n(53);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends a.a{static get template(){return s.a`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot>
        <div part="icon"></div>
      </slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(l.is,l)},function(t,e,n){"use strict";n(73);var i=n(60),o=n(0);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=o.c`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;Object(o.d)("vaadin-email-field",[i.a,r],{moduleId:"lumo-email-field"});var s=n(67);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(o.d)("vaadin-email-field",o.c`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class a extends s.a{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email")}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.autocapitalize="off")}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define("vaadin-email-field",a)},function(t,e,n){"use strict";n(7),n(9),n(14),n(8);var i=n(0);Object(i.d)("vaadin-form-item",i.c`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});var o=n(20),r=n(165);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(i.a)(o.a)){static get template(){return o.b`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){Object(r.a)(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Object(r.b)(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];if(t){if(this.__labelNode=t,this.__labelNode.id)this.__labelId=this.__labelNode.id;else{const t=s._uniqueLabelId=1+s._uniqueLabelId||0;this.__labelId=`label-${this.localName}-${t}`,this.__labelNode.id=this.__labelId}this.__fieldNode&&this.__linkLabelToField(this.__fieldNode)}}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn("WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.\nPlease wrap fields with a <vaadin-custom-field> instead.");const e=t.find(t=>!!this.__getValidateFunction(t));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",!1===t)}}customElements.define(s.is,s)},function(t,e,n){"use strict";n(9);var i=n(0);const o=i.c`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;Object(i.d)("vaadin-horizontal-layout",o,{moduleId:"lumo-horizontal-layout"});var r=n(20),s=n(22);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(i.a)(r.a))){static get template(){return r.b`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(a.is,a)},function(t,e,n){"use strict";n(7),n(9),n(14),n(8);var i=n(0);Object(i.d)("vaadin-notification-card",i.c`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});var o=n(20),r=n(2),s=n(248),a=n(40),l=n(22),c=n(71),d=n(10);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class h extends(Object(i.a)(Object(l.a)(o.a))){static get template(){return o.b`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),a.d&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;this.style.bottom=e&&n>t?n-t+"px":"0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class u extends(Object(i.a)(o.a)){static get template(){return o.b`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class p extends(Object(d.a)(Object(l.a)(o.a))){static get template(){return o.b`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(t,e){return Object(s.b)(t)?p._createAndShowNotification(e=>{Object(r.f)(t,e)},e):p._createAndShowNotification(e=>{e.innerText=t},e)}static _createAndShowNotification(t,e){const n=document.createElement(p.is);return e&&Number.isFinite(e.duration)&&(n.duration=e.duration),e&&e.position&&(n.position=e.position),e&&e.theme&&n.setAttribute("theme",e.theme),n.renderer=t,document.body.appendChild(n),n.opened=!0,n.addEventListener("opened-changed",t=>{t.detail.value||n.remove()}),n}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),Object(c.a)(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(t,e,n){if(!n)return;const i=this._oldRenderer!==t;this._oldRenderer=t,i&&(n.innerHTML="",delete n._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return p._container||(p._container=document.createElement("vaadin-notification-container"),document.body.appendChild(p._container)),p._container}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):console.warn("Invalid alignment parameter provided: position="+this.position))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&"none"!==t){const t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}customElements.define(h.is,h),customElements.define(u.is,u),customElements.define(p.is,p)},function(t,e,n){"use strict";n(236),n(5),n(72);var i=n(180),o=n(92),r=n(86);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new i.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var n=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(n){var i=Object(r.a)(t.root||t);return i.insertBefore(n,i.childNodes[0]),t._svgIcon=n}return null},removeIcon:function(t){t._svgIcon&&(Object(r.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(r.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,n){if(t){var i=t.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=i.getAttribute("viewBox")||"0 0 "+e+" "+e,s="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&i.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",r),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=s,o.appendChild(i).removeAttribute("id"),o}return null}}),
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
console.warn("WARNING: Since Vaadin 23.1, using <iron-icon> is deprecated. Please use <vaadin-icon> and '@vaadin/vaadin-lumo-styles/vaadin-iconset.js' instead.");const s=document.createElement("template");s.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(s.content);n(171);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(t,e,n){"use strict";n(9);var i=n(0);const o=i.c`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;Object(i.d)("vaadin-vertical-layout",o,{moduleId:"lumo-vertical-layout"});var r=n(20),s=n(22);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(i.a)(r.a))){static get template(){return r.b`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(a.is,a)},,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(107),o=n(131),r=n(2),s=n(0);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
let a=0;function l(t,e=[],n={}){const i=n.moduleId||"custom-style-module-"+a;a+=1;const o=document.createElement("dom-module");t&&o.setAttribute("theme-for",t);const r=!(!e.length||!n.moduleId),s=[].concat(n.include||[]);0===s.length?o.__allStyles=e:r||(o.__partialStyles=e),o.innerHTML=`\n    <template>\n      ${s.map(t=>`<style include=${t}></style>`)}\n      ${r?`<style>${e.map(t=>t.cssText).join("\n")}</style>`:""}\n    </template>\n  `,o.register(i)}window.Vaadin=window.Vaadin||{},window.Vaadin.styleModules={getAllThemes:function(){const t=i.a.prototype.modules;return Object.keys(t).map(e=>{const n=t[e],i=n.getAttribute("theme-for");return n.__allStyles=n.__allStyles||function(t){return Object(o.c)(t.querySelector("template")).map(t=>Object(r.h)(t.textContent))}(n).concat(n.__partialStyles||[]),{themeFor:i,moduleId:e,styles:n.__allStyles}})},registerStyles:l},s.b&&s.b.length>0&&(s.b.forEach(t=>{l(t.themeFor,t.styles,{moduleId:t.moduleId,include:t.include})}),s.b.length=0)}])]);