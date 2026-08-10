(function(){
  const extra={
    en:{atlas:'Atlas',fieldEyebrow:'Field notes / systematic thought',fieldTitle:'Markets are not still.<br><em>Neither are our models.</em>',fieldBody:'We read movement across instruments, regimes and horizons—then build systems that adapt without abandoning discipline.',fieldLink:'Explore our strategies ↗',flowCaption:'Flow / coordinated movement',observeCaption:'Research / patient observation',momentumLabel:'01 / Momentum',relativeLabel:'02 / Relative value',allocationLabel:'03 / Allocation',examLabel:'Examination / 04',examQuote:'“Observe long enough for the exception to reveal the rule.”',cabinetLabel:'IV / Art & science',hongKong:'Hong Kong',globalMandates:'Global mandates',atlasCount:['04 themes','04 plates','01 discipline'],atlasLabels:['Ⅰ / Structure','Ⅱ / Cycles','Ⅲ / Migration','Ⅳ / Scale']},
    'zh-CN':{atlas:'视觉图谱',fieldEyebrow:'市场札记 / 系统化思考',fieldTitle:'市场从不静止，<br><em>模型亦应持续演进。</em>',fieldBody:'我们观察不同资产、市场环境与时间尺度中的运动，并构建能够适应变化、同时坚守纪律的系统。',fieldLink:'了解策略体系 ↗',flowCaption:'资金流 / 协同运动',observeCaption:'研究 / 耐心观察',momentumLabel:'01 / 趋势动量',relativeLabel:'02 / 相对价值',allocationLabel:'03 / 动态配置',examLabel:'研究检验 / 04',examQuote:'“持续观察，直到例外揭示规则的边界。”',cabinetLabel:'IV / 艺术与科学',hongKong:'香港',globalMandates:'全球机构服务',atlasCount:['04 个主题','04 幅图版','01 套纪律'],atlasLabels:['Ⅰ / 结构','Ⅱ / 周期','Ⅲ / 迁徙','Ⅳ / 尺度']},
    'zh-TW':{atlas:'視覺圖譜',fieldEyebrow:'市場札記 / 系統化思考',fieldTitle:'市場從不靜止，<br><em>模型亦應持續演進。</em>',fieldBody:'我們觀察不同資產、市場環境與時間尺度中的運動，並建立能夠適應變化、同時堅守紀律的系統。',fieldLink:'了解策略體系 ↗',flowCaption:'資金流 / 協同運動',observeCaption:'研究 / 耐心觀察',momentumLabel:'01 / 趨勢動量',relativeLabel:'02 / 相對價值',allocationLabel:'03 / 動態配置',examLabel:'研究檢驗 / 04',examQuote:'「持續觀察，直到例外揭示規則的邊界。」',cabinetLabel:'IV / 藝術與科學',hongKong:'香港',globalMandates:'全球機構服務',atlasCount:['04 個主題','04 幅圖版','01 套紀律'],atlasLabels:['Ⅰ / 結構','Ⅱ / 週期','Ⅲ / 遷徙','Ⅳ / 尺度']}
  };
  function applyExtra(lang){const d=extra[lang]||extra.en;document.querySelectorAll('[data-extra-i18n]').forEach(el=>{if(d[el.dataset.extraI18n])el.textContent=d[el.dataset.extraI18n]});document.querySelectorAll('[data-extra-html]').forEach(el=>{if(d[el.dataset.extraHtml])el.innerHTML=d[el.dataset.extraHtml]});document.querySelectorAll('.navlinks a[href="archive.html"]').forEach(el=>el.textContent=d.atlas);const note=document.querySelector('.scene-note');if(note){const label=note.querySelector('span'),quote=note.querySelector('blockquote');if(label)label.textContent=d.examLabel;if(quote)quote.textContent=d.examQuote}const cabinet=document.querySelector('.cabinet-copy>span');if(cabinet)cabinet.textContent=d.cabinetLabel;const meta=document.querySelectorAll('.contact-meta span');if(meta[0])meta[0].textContent=d.hongKong;if(meta[1])meta[1].textContent=d.globalMandates;document.querySelectorAll('.atlas-index span').forEach((el,i)=>{if(d.atlasCount[i])el.textContent=d.atlasCount[i]});document.querySelectorAll('.atlas-portal>span').forEach((el,i)=>{if(d.atlasLabels[i])el.textContent=d.atlasLabels[i]})}
  document.addEventListener('click',e=>{if(e.target.matches('.lang-switcher button'))setTimeout(()=>applyExtra(e.target.dataset.lang),0)});applyExtra(localStorage.getItem('aura-lang')||'en');
})();

/* Shared multilingual navigation for the quantitative laboratory. */
(function(){
  const labels={en:'Quant Lab','zh-CN':'量化实验室','zh-TW':'量化實驗室'};
  function sync(lang){
    document.querySelectorAll('.navlinks').forEach(nav=>{
      let link=nav.querySelector('[href="quant.html"]');
      if(!link){link=document.createElement('a');link.href='quant.html';const atlas=nav.querySelector('[href="archive.html"]');atlas?nav.insertBefore(link,atlas):nav.appendChild(link)}
      link.textContent=labels[lang]||labels.en;
      if(document.body.classList.contains('quant-page'))link.classList.add('active');
    });
  }
  document.addEventListener('click',e=>{if(e.target.matches('.lang-switcher button'))setTimeout(()=>sync(e.target.dataset.lang),0)});
  sync(localStorage.getItem('aura-lang')||'en');
})();
