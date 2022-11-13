import{_ as M,eH as v,r as T,b as x,a as V,f as s,g as l,eK as t,eR as U,u as b,e as i,o as C,eS as L,eT as q,h as A,eP as z,t as c,y as g}from"./index.cd0af491.js";const B={name:"approve",setup(){const{proxy:p}=U(),r=v({applyState:1}),f=v({pageNum:1,pageSize:10,total:0}),a=v([{label:"\u5355\u53F7",prop:"orderNo"},{label:"\u7533\u8BF7\u4EBA",prop:"",formatter(e){return e.applyUser.userName}},{label:"\u4F11\u5047\u65F6\u95F4",prop:"",formatter(e){return b.formateDate(new Date(e.startTime),"yyyy-MM-dd")+"\u5230"+b.formateDate(new Date(e.endTime),"yyyy-MM-dd")}},{label:"\u4F11\u5047\u65F6\u957F",prop:"leaveTime"},{label:"\u4F11\u5047\u7C7B\u578B",prop:"applyType",formatter(e,o,m){return{1:"\u4E8B\u5047",2:"\u8C03\u4F11",3:"\u5E74\u5047"}[m]}},{label:"\u4F11\u5047\u539F\u56E0",prop:"reasons"},{label:"\u7533\u8BF7\u65F6\u95F4",prop:"createTime",width:180,formatter:(e,o,m)=>b.formateDate(new Date(m))},{label:"\u5BA1\u6279\u4EBA",prop:"auditUsers"},{label:"\u5F53\u524D\u5BA1\u6279\u4EBA",prop:"curAuditUserName"},{label:"\u5BA1\u6279\u72B6\u6001",prop:"applyState",formatter:(e,o,m)=>({1:"\u5F85\u5BA1\u6279",2:"\u5BA1\u6279\u4E2D",3:"\u5BA1\u6279\u62D2\u7EDD",4:"\u5BA1\u6279\u901A\u8FC7",5:"\u4F5C\u5E9F"})[m]}]),k=T([]);v({applyType:1,startTime:"",endTime:"",leaveTime:"0\u5929",reasons:""});const h=T(!1);let d=T({});const N=p.$store.state.userInfo,n={remark:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BA1\u6838\u5907\u6CE8",trigger:"change"}]},u=v({remark:""});x(()=>{_()});const _=async()=>{let e={...r,...f,type:"approve"},{list:o,page:m}=await p.$api.getApplyList(e);k.value=o,f.total=m.total},y=e=>{p.$refs[e].resetFields()},D=e=>{f.pageNum=e,getUserList()},w=()=>{h.value=!1,y("dialogForm")};return{queryForm:r,pager:f,columns:a,handleCurrentChange:D,handleReset:y,getApplyList:_,applyList:k,auditForm:u,showDetailModal:h,handleClose:w,rules:n,detail:d,userInfo:N,handleDetail:e=>{let o={...e};o.applyTypeName={1:"\u4E8B\u5047",2:"\u8C03\u4F11",3:"\u5E74\u5047"}[o.applyType],o.time=b.formateDate(new Date(o.startTime),"yyyy-MM-dd")+"\u5230"+b.formateDate(new Date(o.endTime),"yyyy-MM-dd"),o.applyStateName={1:"\u5F85\u5BA1\u6279",2:"\u5BA1\u6279\u4E2D",3:"\u5BA1\u6279\u62D2\u7EDD",4:"\u5BA1\u6279\u901A\u8FC7",5:"\u4F5C\u5E9F"}[o.applyState],d.value=o,h.value=!0},handleApprove:e=>{p.$refs.dialogForm.validate(async o=>{if(o){let m={action:e,remark:u.remark,_id:d.value._id};try{await p.$api.leaveApprove(m),w(),p.$message.success("\u5904\u7406\u6210\u529F"),_(),p.$store.commit("saveNoticeCount",p.$store.state.noticeCount-1)}catch{}}})}}}},I={class:"user-manage"},R={class:"query-form"},E=g("\u67E5\u8BE2"),H=g("\u91CD\u7F6E"),K={class:"base-table"},P=s("div",{class:"action"},null,-1),j=g("\u5BA1\u6838"),G={class:"dialog-footer"},J=g("\u5BA1\u6838\u901A\u8FC7"),O=g("\u9A73\u56DE");function Q(p,r,f,a,k,h){const d=i("el-option"),N=i("el-select"),n=i("el-form-item"),u=i("el-button"),_=i("el-form"),y=i("el-table-column"),D=i("el-table"),w=i("el-pagination"),F=i("el-input"),S=i("el-dialog");return C(),V("div",I,[s("div",R,[l(_,{ref:"form",inline:!0,model:a.queryForm},{default:t(()=>[l(n,{label:"\u5BA1\u6279\u72B6\u6001",prop:"applyState"},{default:t(()=>[l(N,{modelValue:a.queryForm.applyState,"onUpdate:modelValue":r[0]||(r[0]=e=>a.queryForm.applyState=e)},{default:t(()=>[l(d,{value:"",label:"\u5168\u90E8"}),l(d,{value:1,label:"\u5F85\u5BA1\u6279"}),l(d,{value:2,label:"\u5BA1\u6279\u4E2D"}),l(d,{value:3,label:"\u5BA1\u6279\u62D2\u7EDD"}),l(d,{value:4,label:"\u5BA1\u6279\u901A\u8FC7"}),l(d,{value:5,label:"\u4F5C\u5E9F"})]),_:1},8,["modelValue"])]),_:1}),l(n,null,{default:t(()=>[l(u,{type:"primary",onClick:a.getApplyList},{default:t(()=>[E]),_:1},8,["onClick"]),l(u,{onClick:r[1]||(r[1]=e=>a.handleReset("form"))},{default:t(()=>[H]),_:1})]),_:1})]),_:1},8,["model"])]),s("div",K,[P,l(D,{data:a.applyList},{default:t(()=>[(C(!0),V(L,null,q(a.columns,e=>(C(),A(y,{key:e.prop,prop:e.prop,label:e.label,width:e.width,formatter:e.formatter},null,8,["prop","label","width","formatter"]))),128)),l(y,{label:"\u64CD\u4F5C",width:"150"},{default:t(e=>[e.row.curAuditUserName==a.userInfo.userName&&[1,2].includes(e.row.applyState)?(C(),A(u,{key:0,size:"mini",onClick:o=>a.handleDetail(e.row)},{default:t(()=>[j]),_:2},1032,["onClick"])):z("",!0)]),_:1})]),_:1},8,["data"]),l(w,{class:"pagination",background:"",layout:"prev, pager, next",total:a.pager.total,"page-size":a.pager.pageSize,onCurrentChange:a.handleCurrentChange},null,8,["total","page-size","onCurrentChange"])]),l(S,{title:"\u5BA1\u6838",width:"50%",modelValue:a.showDetailModal,"onUpdate:modelValue":r[5]||(r[5]=e=>a.showDetailModal=e),"destroy-on-close":""},{footer:t(()=>[s("span",G,[l(u,{onClick:r[3]||(r[3]=e=>a.handleApprove("pass"))},{default:t(()=>[J]),_:1}),l(u,{onClick:r[4]||(r[4]=e=>a.handleApprove("refuse")),type:"primary"},{default:t(()=>[O]),_:1})])]),default:t(()=>[l(_,{ref:"dialogForm",model:a.auditForm,"label-width":"120px","label-suffix":":",rules:a.rules},{default:t(()=>[l(n,{label:"\u7533\u8BF7\u4EBA"},{default:t(()=>[s("div",null,c(a.detail.applyUser.userName),1)]),_:1}),l(n,{label:"\u4F11\u5047\u7C7B\u578B"},{default:t(()=>[s("div",null,c(a.detail.applyTypeName),1)]),_:1}),l(n,{label:"\u4F11\u5047\u65F6\u95F4"},{default:t(()=>[s("div",null,c(a.detail.time),1)]),_:1}),l(n,{label:"\u4F11\u5047\u65F6\u957F"},{default:t(()=>[s("div",null,c(a.detail.leaveTime),1)]),_:1}),l(n,{label:"\u4F11\u5047\u539F\u56E0"},{default:t(()=>[s("div",null,c(a.detail.reasons),1)]),_:1}),l(n,{label:"\u5BA1\u6279\u72B6\u6001"},{default:t(()=>[s("div",null,c(a.detail.applyStateName),1)]),_:1}),l(n,{label:"\u5BA1\u6279\u4EBA"},{default:t(()=>[s("div",null,c(a.detail.curAuditUserName),1)]),_:1}),l(n,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[l(F,{type:"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6838\u5907\u6CE8",modelValue:a.auditForm.remark,"onUpdate:modelValue":r[2]||(r[2]=e=>a.auditForm.remark=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var Y=M(B,[["render",Q]]);export{Y as default};
