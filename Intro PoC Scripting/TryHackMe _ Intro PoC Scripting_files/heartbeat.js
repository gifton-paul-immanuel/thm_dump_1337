const sendHeartbeat=async(_0x33ee02,_0x872b1a)=>{const _0x2a33ee=new Headers();_0x2a33ee['append']('Content-Type','application/json'),_0x2a33ee['append']('CSRF-Token',csrfToken);const _0x330e0d=btoa(JSON['stringify']({'value':_0x872b1a,'timestamp':Date['now'](),'roomCode':_0x33ee02})),_0x4325d3=JSON['stringify']({'payload':_0x330e0d}),_0x326d32={'method':'POST','headers':_0x2a33ee,'body':_0x4325d3,'redirect':'follow'};fetch('/heartbeat',_0x326d32)['catch'](console['error']);};setInterval(()=>{document['hasFocus']()&&errorCode===0x1&&!userCompletedRoom&&sendHeartbeat(roomCode,heartbeatInterval);},heartbeatInterval*0x3e8);