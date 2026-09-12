const seed=[
 {id:"11111111",title:"System Outage in Finance",description:"Finance module is throwing 500 server errors",status:"New",priority:"Urgent"},
 {id:"22222222",title:"Fiori App Slow",description:"Dashboard takes over 10 seconds to load",status:"InProgress",priority:"Medium"},
 {id:"33333333",title:"Printer Connection Lost",description:"Office warehouse printer cannot connect to SAP",status:"Resolved",priority:"Low"}
];
const key="sap-cap-incident-demo-v1";
let incidents=JSON.parse(localStorage.getItem(key)||"null")||structuredClone(seed);
let selectedId=null;
const $=id=>document.getElementById(id);
const save=()=>localStorage.setItem(key,JSON.stringify(incidents));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const label=s=>s==="InProgress"?"In progress":s;
function render(){
 const q=$("search").value.toLowerCase();
 const status=$("statusFilter").value,priority=$("priorityFilter").value;
 const filtered=incidents.filter(i=>(status==="All statuses"||i.status===status)&&(priority==="All priorities"||i.priority===priority)&&(`${i.title} ${i.description} ${i.id}`.toLowerCase().includes(q)));
 $("totalKpi").textContent=incidents.length;
 $("openKpi").textContent=incidents.filter(i=>["New","InProgress"].includes(i.status)).length;
 $("priorityKpi").textContent=incidents.filter(i=>["Urgent","High"].includes(i.priority)).length;
 $("resolutionKpi").textContent=`${Math.round(incidents.filter(i=>["Resolved","Closed"].includes(i.status)).length/incidents.length*100)||0}%`;
 $("incidentRows").innerHTML=filtered.map(i=>`<tr><td><span class="incidentTitle">${esc(i.title)}</span><span class="incidentId">ID ${esc(i.id)}</span></td><td><span class="pill ${i.status.toLowerCase()}">${label(i.status)}</span></td><td><span class="pill ${i.priority.toLowerCase()}">${i.priority}</span></td><td>${esc(i.description)}</td><td><button class="rowAction" data-view="${i.id}">View →</button></td></tr>`).join("");
 $("empty").hidden=filtered.length>0;
 document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>showDetail(b.dataset.view));
}
function showDetail(id){
 const i=incidents.find(x=>x.id===id); if(!i)return; selectedId=id;
 $("detailTitle").textContent=i.title;
 $("detailBody").innerHTML=`<div class="detailGrid"><div><small>Incident ID</small><strong>${esc(i.id)}</strong></div><div><small>Service status</small><span class="pill ${i.status.toLowerCase()}">${label(i.status)}</span></div><div><small>Priority</small><span class="pill ${i.priority.toLowerCase()}">${i.priority}</span></div><div><small>Protocol</small><strong>OData v4</strong></div></div><div class="detailDescription"><small>Description</small><br>${esc(i.description)}</div>`;
 $("closeIncident").disabled=i.status==="Closed";
 $("closeIncident").textContent=i.status==="Closed"?"Incident closed":"Close incident";
 $("detailDialog").showModal();
}
function toast(message){$("toast").textContent=message;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2500)}
$("newIncident").onclick=()=>{$("incidentForm").reset();$("formError").textContent="";$("incidentDialog").showModal()};
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>$("incidentDialog").close());
document.querySelectorAll("[data-detail-close]").forEach(b=>b.onclick=()=>$("detailDialog").close());
$("incidentForm").onsubmit=e=>{
 e.preventDefault();
 let title=$("title").value.trim();
 if(title.length<5){$("formError").textContent="CAP validation: title must be at least 5 characters long.";return}
 const priority=$("priority").value;
 if(priority==="High"&&!title.startsWith("[URGENT]"))title=`[URGENT] ${title}`;
 incidents.unshift({id:crypto.randomUUID().slice(0,8),title,description:$("description").value.trim(),status:$("status").value,priority});
 save();render();$("incidentDialog").close();toast("Incident created through simulated OData service");
};
$("closeIncident").onclick=()=>{
 const i=incidents.find(x=>x.id===selectedId);if(!i||i.status==="Closed")return;
 i.status="Closed";save();render();$("detailDialog").close();toast("closeIncident action completed");
};
["search","statusFilter","priorityFilter"].forEach(id=>$(id).addEventListener(id==="search"?"input":"change",render));
$("resetData").onclick=()=>{incidents=structuredClone(seed);save();render();toast("Demo data restored")};
render();