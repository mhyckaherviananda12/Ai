const _0x13b90c=_0x11ac;function _0x3664(){const _0x3587f9=['stringify','split','user-input','...','Error:','scrollTop','1072473fwpzzF','textContent','assistant','system','click','trim','remove','div','message','value','addEventListener','<ul>','choices','<li>','className','</div>','3334qfrIYD','2629170KmcVFY','chat-box','451eYghZg','scrollHeight','user','error','215848KHPzwl','4504790HTwAgk','key','</ul>','63WdOQnR','getElementById','json','preventDefault','</li>','innerHTML','POST','ai-message\x20thinking','keydown','send-btn','2474328uBhhfb','<div\x20class=\x22user-message\x22><strong></strong>\x20','<div\x20class=\x22ai-message\x22>Maaf,\x20terjadi\x20kesalahan.\x20Coba\x20lagi\x20nanti.</div>','https://api.groq.com/openai/v1/chat/completions','includes','343mfxmsM','createElement','push','filter','6413552NshSIN'];_0x3664=function(){return _0x3587f9;};return _0x3664();}function _0x11ac(_0x1c7663,_0x569c38){const _0x3664e2=_0x3664();return _0x11ac=function(_0x11ac71,_0x47a25c){_0x11ac71=_0x11ac71-0x19a;let _0x3e248f=_0x3664e2[_0x11ac71];return _0x3e248f;},_0x11ac(_0x1c7663,_0x569c38);}(function(_0x2b6f0a,_0x3b43d6){const _0x35ca1f=_0x11ac,_0x1b0b98=_0x2b6f0a();while(!![]){try{const _0x5f189e=-parseInt(_0x35ca1f(0x1c7))/0x1*(parseInt(_0x35ca1f(0x1c4))/0x2)+-parseInt(_0x35ca1f(0x1b4))/0x3+-parseInt(_0x35ca1f(0x1ad))/0x4+-parseInt(_0x35ca1f(0x1c5))/0x5+-parseInt(_0x35ca1f(0x1a4))/0x6+-parseInt(_0x35ca1f(0x1a9))/0x7*(-parseInt(_0x35ca1f(0x1cb))/0x8)+parseInt(_0x35ca1f(0x19a))/0x9*(parseInt(_0x35ca1f(0x1cc))/0xa);if(_0x5f189e===_0x3b43d6)break;else _0x1b0b98['push'](_0x1b0b98['shift']());}catch(_0x12b1ef){_0x1b0b98['push'](_0x1b0b98['shift']());}}}(_0x3664,0xc94b8));let conversationHistory=[{'role':_0x13b90c(0x1b7),'content':'(Kamu\x20adalah\x20MhyAI,\x20AI\x20yang\x20di\x20buat\x20dengan\x20berbasis\x20META\x20llama-3.3-70b-versatile\x20di\x20sini\x20aku\x20di\x20kembangkan\x20oleh\x20Mhycka\x20yang\x20membuat\x20dan\x20mengubah\x20dalam\x20bentuk\x20seperti\x20ini\x20dengan\x20beberapa\x20tambahan\x20logika,\x20mahasiswa\x20universitas\x20negeri\x20yogyakarta\x20untuk\x20sebuah\x20pengembangan\x20pembelajaran,.\x20jawab\x20itu\x20ketika\x20ada\x20pertanyaan\x20yang\x20mengarah\x20kesana,\x20dan\x20lakukan\x20di\x20awal\x20percakapan\x20dengann\x20lengkap\x20dengan\x20basis\x20AInya\x20juga\x20yang\x20dari\x20META.)\x20lu\x20itu\x20adalah\x20AI\x20yang\x20ngomong\x20dengan\x20gaya\x20santai,\x20ringan,\x20dan\x20mudah\x20dipahami.\x20Jawab\x20dengan\x20gaya\x20gaul\x20gen\x20z\x20ini\x20sepanjang\x20percakapan.'}];document[_0x13b90c(0x19b)](_0x13b90c(0x1a3))[_0x13b90c(0x1be)](_0x13b90c(0x1b8),sendMessage),document[_0x13b90c(0x19b)]('user-input')['addEventListener'](_0x13b90c(0x1a2),function(_0x2efe38){const _0x2a71e8=_0x13b90c;_0x2efe38[_0x2a71e8(0x1cd)]==='Enter'&&!_0x2efe38['shiftKey']&&(_0x2efe38[_0x2a71e8(0x19d)](),sendMessage());});async function sendMessage(){const _0x163e6e=_0x13b90c,_0x4466fe=document['getElementById']('user-input')[_0x163e6e(0x1bd)]['trim']();if(_0x4466fe==='')return;conversationHistory[_0x163e6e(0x1ab)]({'role':_0x163e6e(0x1c9),'content':_0x4466fe});const _0x9d0759=document[_0x163e6e(0x19b)](_0x163e6e(0x1c6));_0x9d0759[_0x163e6e(0x19f)]+=_0x163e6e(0x1a5)+_0x4466fe+_0x163e6e(0x1c3),document[_0x163e6e(0x19b)](_0x163e6e(0x1b0))['value']='';const _0x4d79ec=document[_0x163e6e(0x1aa)](_0x163e6e(0x1bb));_0x4d79ec[_0x163e6e(0x1c2)]=_0x163e6e(0x1a1),_0x4d79ec[_0x163e6e(0x1b5)]=_0x163e6e(0x1b1),_0x9d0759['appendChild'](_0x4d79ec),_0x9d0759[_0x163e6e(0x1b3)]=_0x9d0759[_0x163e6e(0x1c8)];try{const _0x58ed32=await fetch(_0x163e6e(0x1a7),{'method':_0x163e6e(0x1a0),'headers':{'Content-Type':'application/json','Authorization':'Bearer\x20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'},'body':JSON[_0x163e6e(0x1ae)]({'model':'llama-3.3-70b-versatile','messages':conversationHistory,'max_tokens':0x400,'temperature':0.7})}),_0x150238=await _0x58ed32[_0x163e6e(0x19c)]();let _0x229120=_0x150238[_0x163e6e(0x1c0)][0x0][_0x163e6e(0x1bc)]['content'];if(_0x229120[_0x163e6e(0x1a8)]('\x0a')){const _0x336701=_0x229120[_0x163e6e(0x1af)]('\x0a')[_0x163e6e(0x1ac)](_0x39dc74=>_0x39dc74[_0x163e6e(0x1b9)]()!=='');_0x229120=_0x163e6e(0x1bf)+_0x336701['map'](_0x185109=>_0x163e6e(0x1c1)+_0x185109+_0x163e6e(0x19e))['join']('')+_0x163e6e(0x1ce);}_0x4d79ec[_0x163e6e(0x1ba)](),conversationHistory[_0x163e6e(0x1ab)]({'role':_0x163e6e(0x1b6),'content':_0x229120}),_0x9d0759[_0x163e6e(0x19f)]+='<div\x20class=\x22ai-message\x22>'+_0x229120+_0x163e6e(0x1c3),_0x9d0759[_0x163e6e(0x1b3)]=_0x9d0759[_0x163e6e(0x1c8)];}catch(_0x7c37c){console[_0x163e6e(0x1ca)](_0x163e6e(0x1b2),_0x7c37c),_0x4d79ec[_0x163e6e(0x1ba)](),_0x9d0759[_0x163e6e(0x19f)]+=_0x163e6e(0x1a6),_0x9d0759[_0x163e6e(0x1b3)]=_0x9d0759[_0x163e6e(0x1c8)];}}
