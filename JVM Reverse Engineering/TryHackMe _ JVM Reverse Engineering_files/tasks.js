const colorAnswers={'incorrect':{'text':'red','border':'task-incomplete','icon':'<i\x20class=\x22far\x20fa-circle\x20text-lgray\x22></i>'},'correct':{'text':'hacker-green','border':'task-complete','icon':'<i\x20class=\x22fas\x20fa-check-circle\x22></i>'}};function getCurrentTaskNo(_0x1b3c71){let _0x35f46a=0x1;for(const _0x27b56a of _0x1b3c71){for(const _0x578466 of _0x27b56a['tasksInfo']){if(_0x578466['correct']==![])return _0x35f46a;}_0x35f46a++;}return 0x1;}function renderTasks(){const _0x42f91=getCurrentTaskNo(taskData);let _0x31b898=![],_0x591c57='';for(const _0x503dfd of taskData){_0x591c57+=renderSingleTask(_0x503dfd,_0x42f91);const _0x30c638=_0x503dfd['staticSites']?_0x503dfd['staticSites']['some'](_0x4982b1=>_0x4982b1['autoOpen']):![];if(_0x30c638)_0x31b898=!![];}taskEl['innerHTML']+=_0x591c57,Prism['highlightAll'](),setupMagnificPopup(),setTimeout(function(){currentDeployedIP['length']>0x0&&(replaceText(document['body'],'MACHINE_IP',currentDeployedIP),replaceText(document['body'],'LAB_WEB_URL',formatIPForProxy(currentDeployedIP))),connectionIP['length']>0x0&&replaceText(document['body'],'CONNECTION_IP',connectionIP),setEnterAnswerEvent(),$('[data-toggle=\x22tooltip\x22]')['tooltip']();},0x3e8);if(_0x31b898)startIntroStaticLab();}function openConnModal(){$('#navConnModal')['modal']('toggle');}function viewTaskSites(_0x173a7c){const _0x4f1e62=_0x173a7c['dataset']['taskno'],_0x8c3dbb=taskData['find'](_0x1ff700=>_0x1ff700['taskNo']==_0x4f1e62);for(const _0x37913f of _0x8c3dbb['staticSites']){const _0x465420=('s'+_0x4f1e62+_0x37913f['title'])['replace'](/[^a-zA-Z0-9\.]+/g,'')['slice'](0x0,0xf)['toLowerCase'](),_0x976f51={'instanceId':_0x465420,'url':_0x37913f['url'],'title':_0x37913f['title'],'type':'static-site'};addWebBasedMachine(_0x976f51),initWebBasedMachine(_0x976f51),startIntroStaticLab();}}function handleStaticSites(_0x58b4e4,_0x41668c){let _0xe848f1='';for(const _0x42ce12 of _0x41668c){_0xe848f1='<button\x20class=\x27btn\x20btn-success\x20float-right\x20ml-2\x20mb-2\x27\x20data-taskno=\x22'+_0x58b4e4+'\x22\x20\x20\x20\x20\x20onclick=\x22viewTaskSites(this)\x22><i\x20class=\x22far\x20fa-browser\x20mr-1\x22></i>\x20View\x20Site</button>';if(_0x42ce12['autoOpen']==!![]){const _0x5862fc=('s'+_0x58b4e4+_0x42ce12['title'])['replace'](/[^a-zA-Z0-9\.]+/g,'')['slice'](0x0,0xf)['toLowerCase'](),_0x383f45={'instanceId':_0x5862fc,'url':_0x42ce12['url'],'title':_0x42ce12['title'],'type':'static-site'};addWebBasedMachine(_0x383f45),initWebBasedMachine(_0x383f45);}}return _0xe848f1;}function renderSingleTask(_0x11a549,_0x4c8793){let _0x502b54=!![];const _0x17b098=_0x11a549['taskDesc'],_0xa4444d=_0x11a549['taskNo'];let _0x4ff4b6='';if(errorCodes['includes'](errorCode)&&_0x11a549['questions']['length']>0x0)_0x502b54=![],_0x4ff4b6+=showTasksForViewers(_0x11a549['questions'],_0xa4444d);else{const _0x3a52c1=showTasksForUser(_0x11a549,_0x502b54);_0x4ff4b6+=_0x3a52c1['html'],_0x502b54=_0x3a52c1['allCorrect'];}_0x11a549['questions']['length']==0x0&&(_0x4ff4b6='<h5>No\x20questions\x20have\x20been\x20set..</h5>');let _0x3a5b96;if(_0x11a549['taskType']=='vm'||_0x11a549['taskType']=='THM'){const _0x5ad0ba=!allowDeployment?'disabled':'';_0x3a5b96='<div\x20class=\x27btn-group\x20mb-3\x20ml-3\x20float-right\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x22\x20value=\x22'+_0x11a549['uploadId']+'\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22deploy(this)\x22\x20'+_0x5ad0ba+'><i\x20class=\x22fas\x20fa-play\x20mr-2\x22></i>\x20Start\x20Machine</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';}else{if(_0x11a549['taskType']=='downloadable'){let _0x5a1cd3='';errorCode===0x2&&(_0x5a1cd3='disabled'),_0x3a5b96='<form\x20class=\x27float-right\x27\x20method=\x22post\x22\x20action=\x22/material/deploy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20name=\x22roomCode\x22\x20value=\x22'+roomCode+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=\x27'+_0x11a549['uploadId']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20class=\x22btn\x20btn-primary\x20mb-3\x20ml-3\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x22Download\x22\x20'+_0x5a1cd3+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cloud-download-alt\x20mr-2\x22></i>\x20Download\x20Task\x20Files</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>';}else{if(_0x11a549['taskType']=='static-site')_0x3a5b96=handleStaticSites(_0xa4444d,_0x11a549['staticSites']);else _0x11a549['taskType']=='none'&&(_0x3a5b96='');}}const _0x25416c=_0x502b54?colorAnswers['correct']:colorAnswers['incorrect'];let _0x18b53c='';(_0x3a5b96&&_0x3a5b96['length']>0x0||_0x17b098['length']>0x0)&&(_0x18b53c='<div\x20class=\x27room-task-desc\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-desc-data\x27>'+_0x3a5b96+'\x20'+_0x17b098+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22room-questions-split\x20vertical-align-custom\x20'+_0x25416c['text']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Answer\x20the\x20questions\x20below</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');const _0x21ff39=_0x4c8793==_0x11a549['taskNo']?'show':'';let _0x5dbdbb='';if(_0x11a549['taskType']=='vm'||_0x11a549['taskType']=='THM')_0x5dbdbb='<i\x20class=\x22far\x20fa-server\x20text-lgreen\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20a\x20deployable\x20machine\x22></i>';else{if(_0x11a549['taskType']=='downloadable')_0x5dbdbb='<i\x20class=\x22far\x20fa-download\x20text-lblue\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20a\x20downloadable\x20file\x22></i>';else _0x11a549['taskType']=='static-site'&&(_0x5dbdbb='<i\x20class=\x22far\x20fa-browser\x20text-lgreen\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20website\x22></i>');}const _0x2fce3e='<div\x20class=\x22card\x22\x20id=\x22task-'+_0x11a549['taskNo']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20task-header\x22\x20data-toggle=\x22collapse\x22\x20href=\x22#collapse'+_0x11a549['taskNo']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22card-link\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22task-dropdown-title\x20'+_0x25416c['text']+'\x22>Task\x20'+_0x11a549['taskNo']+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x27task-dropdown-icon\x27>'+_0x25416c['icon']+'</span></span>\x20'+_0x11a549['taskTitle']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><i\x20class=\x22fas\x20fa-chevron-down\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22task-resources\x22>'+_0x5dbdbb+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22collapse'+_0x11a549['taskNo']+'\x22\x20class=\x22collapse\x20'+_0x21ff39+'\x22\x20data-parent=\x22#taskContent\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20'+_0x25416c['border']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x18b53c+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x4ff4b6+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';return _0x2fce3e;}function setTaskColor(_0x1ecd9f,_0x5ce65f){const _0x1853bf=document['querySelector']('#task-'+_0x1ecd9f+'\x20.card-body'),_0x201b16=document['querySelector']('#task-'+_0x1ecd9f+'\x20.task-dropdown-title'),_0x3b5ff8=document['querySelector']('#task-'+_0x1ecd9f+'\x20.task-dropdown-icon'),_0x1cbee4=_0x1853bf['querySelector']('.room-questions-split');_0x1853bf['classList']['remove'](colorAnswers['correct']['border']),_0x1853bf['classList']['remove'](colorAnswers['incorrect']['border']),_0x201b16['classList']['remove'](colorAnswers['correct']['text']),_0x201b16['classList']['remove'](colorAnswers['incorrect']['text']),_0x1cbee4['classList']['remove'](colorAnswers['correct']['text']),_0x1cbee4['classList']['remove'](colorAnswers['incorrect']['text']),_0x3b5ff8['innerHTML']='',_0x5ce65f?(_0x1853bf['className']+='\x20'+colorAnswers['correct']['border'],_0x201b16['className']+='\x20'+colorAnswers['correct']['text'],_0x3b5ff8['innerHTML']=colorAnswers['correct']['icon'],_0x1cbee4['className']+='\x20'+colorAnswers['correct']['text']):(_0x1853bf['className']+='\x20'+colorAnswers['incorrect']['border'],_0x201b16['className']+='\x20'+colorAnswers['incorrect']['text'],_0x3b5ff8['innerHTML']=colorAnswers['incorrect']['icon'],_0x1cbee4['className']+='\x20'+colorAnswers['incorrect']['text']);}function showTasksForUser(_0x124290,_0x46ca1e){let _0x18d83d='';for(const _0x32487b of _0x124290['tasksInfo']){let _0x4caa43='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-success\x20task-answer\x22\x20onclick=\x22answerQuestion(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22far\x20fa-paper-plane\x22></i>\x20Submit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x38fc6f='';_0x32487b['noAnswer']&&(_0x4caa43='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-success\x20task-answer\x22\x20onclick=\x22answerQuestion(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22far\x20fa-paper-plane\x22></i>\x20Completed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x38fc6f='disabled');if(_0x32487b['correct']&&!_0x32487b['noAnswer'])_0x4caa43='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x20task-answer\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Correct\x20Answer\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x38fc6f='disabled';else _0x32487b['correct']?(_0x4caa43='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x20task-answer\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Question\x20Done\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x38fc6f='disabled'):_0x46ca1e=![];let _0x36a879='';typeof _0x32487b['submission']!=='undefined'&&(_0x36a879=sanitiseHTML(_0x32487b['submission']));let _0x38bdd2='';if(_0x32487b['extraPoints']>0x0){const _0x298b84='Extra\x20points\x20upon\x20answering';_0x38bdd2='<span\x20class=\x22badge\x20badge-hacker-green\x20extra-points\x20mr-2\x22\x20data-toggle=\x27tooltip\x27\x20\x20\x20\x20\x20\x20\x20data-html=\x27true\x27\x20title=\x27'+_0x298b84+'\x27>+\x20'+_0x32487b['extraPoints']+'</span>';}let _0x5da8d2='';_0x32487b['hint']['length']!=0x0&&(_0x5da8d2='<div\x20class=\x27room-task-input-hint\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+getHintHtml(_0x32487b['correct'])+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>'),_0x18d83d+='<div\x20class=\x27room-task-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-no\x20vertical-align-custom\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x38bdd2+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-details\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x32487b['question']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22form-control\x20room-answer-field\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22'+_0x32487b['answerDesc']+'\x22\x20value=\x22'+_0x36a879+'\x22\x20'+_0x38fc6f+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0x32487b['questionNo']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0x124290['taskNo']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-answer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x4caa43+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x5da8d2+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}return{'html':_0x18d83d,'allCorrect':_0x46ca1e};}function setupMagnificPopup(){$('#taskContent\x20:not(a)\x20>\x20img')['magnificPopup']({'type':'image','callbacks':{'elementParse':function(_0x1566ba){_0x1566ba['src']=_0x1566ba['el']['attr']('src');}}});}function showTasksForViewers(_0x3c6fa6,_0x32fdf0){let _0x1a4a5c='';return _0x3c6fa6['forEach'](function(_0x35d7b7,_0x2c5651){let _0x353b02='Login\x20to\x20answer..';errorCode===0x3&&(_0x353b02='Join\x20this\x20room');const _0x4a1bf0='<button\x20type=\x22button\x22\x20onclick=\x22quickJoin()\x22class=\x22btn\x20btn-outline-primary\x20task-answer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x353b02+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x26160e='disabled',_0x8116ed='';let _0x4a7341='';_0x35d7b7['hint']['length']!=0x0&&(_0x4a7341='<div\x20class=\x27room-task-input-hint\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+getHintHtml(_0x35d7b7['correct'])+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>'),_0x1a4a5c+='<div\x20class=\x27room-task-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-details\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x35d7b7['question']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22form-control\x22\x20placeholder=\x22'+_0x353b02+'\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x22'+_0x8116ed+'\x22\x20'+_0x26160e+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+(_0x2c5651+0x1)+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0x32fdf0+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-answer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x4a1bf0+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x4a7341+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}),_0x1a4a5c;}function getHintHtml(_0x48d697){let _0x4eeafe='',_0x1b71f8='btn-outline-dorange';return _0x48d697&&(_0x1b71f8='btn-dorange\x20faded'),_0x4eeafe='<button\x20type=\x22button\x22\x20class=\x22btn\x20'+_0x1b71f8+'\x20btn-noline\x20task-hint\x22\x20onclick=\x22getHint(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fal\x20fa-lightbulb\x22></i>\x20Hint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x4eeafe;}