"undefined"===typeof DlhSoft&&(DlhSoft={assemblies:[],buildReleaseDate:new Date(1,0,1)});DlhSoft.assemblies.push({assembly:"DlhSoft.ProjectData.GanttChart.HTML.Controls.Extras",company:"DlhSoft",product:"Project Data Modern Library",version:"5.1.10.4",copyright:"Copyright \ufffd 2013-2014 DlhSoft",title:"Project Data Gantt Chart HTML Controls Extras",description:"Project Data Gantt Chart related HTML client extra components"});
DlhSoft.buildReleaseDate=function(i,B,p){i=new Date(i,B-1,p);return i>DlhSoft.buildReleaseDate?i:DlhSoft.buildReleaseDate}(2014,1,15);var DlhSoft;
(function(i){(function(i){(function(p){(function(i){i.initialize=function(a,b){return new J(a,b)};var J=function(){function a(b,c){this.control=b;this.settings=c;"undefined"===typeof c&&(c={});this.settings=c;a.initializeSettings(this.settings)}a.prototype.loadXml=function(b){this.importXml(b)};a.prototype.importXml=function(b){var c=this.control,e=c.items,g=c.settings,d=null;if("undefined"!==typeof b&&("undefined"!==typeof b.document&&(b=b.document),"undefined"!==typeof b.getElementsByTagName))d=
b,1!=d.getElementsByTagName("Project").length&&(b=d.body.innerHTML,b=b.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<br>/g,"\n"),d=null);null==d&&(d=(new DOMParser).parseFromString(b.toString(),"text/xml"));var b=[],W=[],i=[],q=[];"undefined"!==typeof this.settings.assignableResources&&this.settings.assignableResources.splice(0,this.settings.assignableResources.length);d=d.getElementsByTagName("Project")[0];if("undefined"!==typeof d){var k,l,s,h;try{var n=d.getElementsByTagName("CalendarUID")[0].childNodes[0].nodeValue,
r,f,x=d.getElementsByTagName("Calendars")[0].getElementsByTagName("Calendar");for(f=0;f<x.length;f++)if(x[f].getElementsByTagName("UID")[0].childNodes[0].nodeValue==n){r=x[f];break}var n=[],u=r.getElementsByTagName("WeekDays")[0].getElementsByTagName("WeekDay");for(f=0;f<u.length;f++)"0"!=u[f].getElementsByTagName("DayWorking")[0].childNodes[0].nodeValue&&"0"!=u[f].getElementsByTagName("DayType")[0].childNodes[0].nodeValue&&n.push(u[f]);n.sort(function(b,a){var c=parseInt(b.getElementsByTagName("DayType")[0].childNodes[0].nodeValue),
d=parseInt(a.getElementsByTagName("DayType")[0].childNodes[0].nodeValue);return c==d?0:c>d?1:-1});var y=n[0];k=parseInt(y.getElementsByTagName("DayType")[0].childNodes[0].nodeValue)-1;l=parseInt(n[n.length-1].getElementsByTagName("DayType")[0].childNodes[0].nodeValue)-1;var m=y.getElementsByTagName("WorkingTimes")[0].getElementsByTagName("WorkingTime");s=a.parseXmlToTimeSpan(m[0].getElementsByTagName("FromTime")[0].childNodes[0].nodeValue);for(f=h=0;f<m.length;f++){var v=a.parseXmlToTimeSpan(m[f].getElementsByTagName("ToTime")[0].childNodes[0].nodeValue);
0==v&&(v=a.dayDuration);h+=v-a.parseXmlToTimeSpan(m[f].getElementsByTagName("FromTime")[0].childNodes[0].nodeValue)}var j;"undefined"!==typeof this.settings.projectInfoLoadingHandler&&(j={sourceElement:d},this.settings.projectInfoLoadingHandler(j))}catch(J){k=1,l=5,s=8*a.hourDuration,h=8*a.hourDuration}g.visibleWeekStart=0;g.visibleWeekFinish=6;g.workingWeekStart=k;g.workingWeekFinish=l;g.visibleDayStart=s;g.visibleDayFinish=s+h;e.splice(0,e.length);try{var D,K,E,A,o,C=d.getElementsByTagName("Tasks")[0].getElementsByTagName("Task");
for(f=0;f<C.length;f++){var t=C[f];if(!(0>=t.getElementsByTagName("Name").length)){var M=parseInt(t.getElementsByTagName("OutlineLevel")[0].childNodes[0].nodeValue)-1;if(!(0>M)){D=t.getElementsByTagName("UID")[0].childNodes[0].nodeValue;K=t.getElementsByTagName("Name")[0].childNodes[0].nodeValue;var N=a.parseXmlToDateTime(t.getElementsByTagName("Start")[0].childNodes[0].nodeValue),O=a.parseXmlToDateTime(t.getElementsByTagName("Finish")[0].childNodes[0].nodeValue),B=parseInt(t.getElementsByTagName("PercentComplete")[0].childNodes[0].nodeValue),
X=p.getOutputDate(c.getCompletedFinish(p.getInputDate(N),B/100,p.getInputDate(O))),Y="1"==t.getElementsByTagName("Milestone")[0].childNodes[0].nodeValue?!0:!1;o={content:K,indentation:M,isExpanded:!0,start:N,finish:O,completedFinish:X,isMilestone:Y};"undefined"!==typeof this.settings.ganttChartItemLoadingHandler&&(j={sourceElement:t,ganttChartItem:o},this.settings.ganttChartItemLoadingHandler(j),o=j.ganttChartItem);b.push(o);i.push({key:D,value:o})}}}var P=d.getElementsByTagName("Resources")[0].getElementsByTagName("Resource");
for(f=0;f<P.length;f++){var F=P[f];if(!(0>=F.getElementsByTagName("Name").length)){D=F.getElementsByTagName("UID")[0].childNodes[0].nodeValue;var w=K=F.getElementsByTagName("Name")[0].childNodes[0].nodeValue;"undefined"!==typeof this.settings.assignableResourceInfoLoadingHandler&&(j={sourceElement:F,resource:w},this.settings.assignableResourceInfoLoadingHandler(j),w=j.resource);W.push(w);q.push({key:D,value:w});"undefined"!==typeof this.settings.assignableResources&&this.settings.assignableResources.push(w)}}var Q=
d.getElementsByTagName("Assignments")[0].getElementsByTagName("Assignment");for(f=0;f<Q.length;f++){var G=Q[f];E=G.getElementsByTagName("TaskUID")[0].childNodes[0].nodeValue;A=a.indexOfKey(i,E);if(!(0>A)){o=i[A].value;var Z=G.getElementsByTagName("ResourceUID")[0].childNodes[0].nodeValue,R=a.indexOfKey(q,Z);if(!(0>R)){var w=q[R].value,S=G.getElementsByTagName("Units")[0].childNodes[0].nodeValue,z="undefined"!==typeof S?parseFloat(S):1,L=w+(1!=z?" ":"")+(1!=z?"["+Math.round(1E4*z)/100+"%]":"");"undefined"!==
typeof this.settings.assignmentInfoLoadingHandler&&(j={sourceElement:G,ganttChartItem:o,resource:w,allocationUnits:z},this.settings.assignmentInfoLoadingHandler(j),w=j.resource,z=j.allocationUnits,L=w+(1!=z?" ":"")+(1!=z?"["+Math.round(1E4*z)/100+"%]":""));o.assignmentsContent="undefined"===typeof o.assignmentsContent||0==o.assignmentsContent.length?L:o.assignmentsContent+", "+L}}}C=d.getElementsByTagName("Tasks")[0].getElementsByTagName("Task");for(f=0;f<C.length;f++)if(t=C[f],E=t.getElementsByTagName("UID")[0].childNodes[0].nodeValue,
A=a.indexOfKey(i,E),!(0>A)){o=i[A].value;var T=t.getElementsByTagName("PredecessorLink");for(k=0;k<T.length;k++){var H=T[k],$=H.getElementsByTagName("PredecessorUID")[0].childNodes[0].nodeValue,U=a.indexOfKey(i,$);if(!(0>U)){var aa=i[U].value,I=parseInt(H.getElementsByTagName("Type")[0].childNodes[0].nodeValue);l=1==I?"":3==I?"SS":0==I?"FF":2==I?"SF":"";var V=H.getElementsByTagName("LinkLag")[0].childNodes[0].nodeValue,ba=(null!=V?parseInt(V):0)/10*a.minuteDuration;l={item:aa,dependencyType:l,lag:ba};
"undefined"!==typeof this.settings.predecessorItemLoadingHandler&&(j={sourceElement:H,ganttChartItem:o,predecessorItem:l},this.settings.predecessorItemLoadingHandler(j),l=j.predecessorItem,o=j.ganttChartItem);"undefined"===typeof o.predecessors&&(o.predecessors=[]);o.predecessors.push(l)}}}for(f=0;f<b.length;f++)e.push(b[f])}catch(ca){}}e=c.getProjectStart();f=new Date;e>f&&(e=f);g.timelineStart=new Date(e.valueOf()-1*a.weekDuration);g.timelineFinish=new Date(e.valueOf()+52*a.weekDuration);g.displayedTime=
e;c.refresh()};a.parseXmlToTimeSpan=function(b){var a,e,g,d,i;d=b.indexOf(":");i=b.lastIndexOf(":");0<d&&(0<i&&i>d&&b.length>i)&&(a=parseInt(b.substr(0,d)),e=parseInt(b.substr(d+1,i)),g=parseInt(b.substr(i+1,b.length)));return 1E3*(3600*a+60*e+g)};a.parseXmlToDateTime=function(b){var a,e,g,d,i,p,q,k,l=b.indexOf("T");q=b.indexOf("-");0<l&&0<q&&(a=parseInt(b.substring(0,q)),k=b.lastIndexOf("-"),0<k&&k>q&&(e=parseInt(b.substring(q+1,k)),l>k&&(g=parseInt(b.substring(k+1,l)))));q=b.indexOf(":");0<l&&0<
q&&(d=parseInt(b.substring(l+1,q)),k=b.lastIndexOf(":"),0<k&&(i=parseInt(b.substring(q+1,k)),b.length>k&&(p=parseInt(b.substring(k+1,b.length)))));return new Date(a,e-1,g,d,i,p)};a.indexOfKey=function(b,a){for(var e=0;e<b.length;e++)if(b[e].key==a)return e;return-1};a.prototype.getXml=function(){return this.getXmlInternal(this.settings.compact)};a.prototype.getXmlInternal=function(b){var c=this.control,e=c.items,g=c.settings,d,i=Math.round((g.visibleDayFinish-g.visibleDayStart)/a.minuteDuration),
B=g.workingWeekFinish-g.workingWeekStart+1,q=c.getProjectStart(),k=c.getAssignedResources();"undefined"===typeof this.settings.assignableResources&&(this.settings.assignableResources=[]);for(d=0;d<k.length;d++)0>this.settings.assignableResources.indexOf(k[d])&&this.settings.assignableResources.push(k[d]);var k=this.settings.assignableResources,l="";for(d=0;7>d;d++){var s=g.workingWeekStart<=d&&g.workingWeekFinish>=d;0<l.length&&(l+="\n");l+=a.applyStringTemplateValues(a.scheduleWeekDayXmlTemplate,
[{key:"DayNumber",value:(d+1).toString()},{key:"IsWorkingDay",value:s?"1":"0"},{key:"WorkingTimes",value:s?a.applyStringTemplateValues(a.scheduleDayWorkingTimesXmlTemplate,[{key:"FromTime",value:a.convertDayTimeToXml(g.visibleDayStart<a.dayDuration?g.visibleDayStart:0)},{key:"ToTime",value:a.convertDayTimeToXml(g.visibleDayFinish<a.dayDuration?g.visibleDayFinish:0)}]):""}])}var s="",h,n,r;for(d=0;d<e.length;d++){0<s.length&&(s+="\n");h=e[d];var f=h.start,x=h.finish,u=c.getItemEffort(h);n=c.getItemCompletedEffort(h);
r=c.getItemTotalEffort(h);var y=c.getItemTotalCompletedEffort(h),m="";if("undefined"!==typeof h.predecessors)for(var v=0;v<h.predecessors.length;v++){0<m.length&&(m+="\n");var j=h.predecessors[v],m=m+this.savePredecessorItem(h,j,a.predecessorXmlTemplate,[{key:"PredecessorIndex",value:(j.item.index+1).toString()},{key:"DependencyType",value:"undefined"===typeof j.dependencyType||""==j.dependencyType||"FinishStart"==j.dependencyType||"FS"==j.dependencyType?1:"StartStart"==j.dependencyType||"SS"==j.dependencyType?
3:"FinishFinish"==j.dependencyType||"FF"==j.dependencyType?0:"StartFinish"==j.dependencyType||"SF"==j.dependencyType?2:-1},{key:"Lag",value:"undefined"!==typeof j.lag?Math.floor(10*(j.lag/a.minuteDuration)):0}])}r=[{key:"Index",value:(h.index+1).toString()},{key:"Index",value:(h.index+1).toString()},{key:"Content",value:(0<h.content.length?h.content:"").toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},{key:"Indentation",value:(h.indentation+1).toString()},{key:"Start",value:a.convertDateToXml(p.getOutputDate(f))},
{key:"Finish",value:a.convertDateToXml(p.getOutputDate(x))},{key:"Duration",value:a.convertTimeSpanToXml(u)},{key:"CompletedDuration",value:a.convertTimeSpanToXml(n)},{key:"Effort",value:a.convertTimeSpanToXml(r)},{key:"CompletedEffort",value:a.convertTimeSpanToXml(y)},{key:"RemainingEffort",value:a.convertTimeSpanToXml(r-y)},{key:"IsMilestone",value:h.isMilestone?1:0},{key:"IsSummary",value:h.hasChildren?1:0},{key:"Cost",value:c.getItemCost(h)},{key:"Completion",value:!h.isMilestone&&0<u?Math.round(100*
c.getItemCompletion(h)):0},{key:"ConstraintDefinition",value:f>q&&!h.hasChildren?"<ConstraintDate>"+a.convertDateToXml(p.getOutputDate(f))+"</ConstraintDate>":""},{key:"PredecessorLinks",value:m}];s+=this.saveGanttChartItem(h,a.taskXmlTemplate,r)}n="";for(d=0;d<k.length;d++)0<n.length&&(n+="\n"),h=k[d],r=[{key:"Index",value:(d+1).toString()},{key:"Index",value:(d+1).toString()},{key:"Name",value:(0<h.length?h:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}],n+=this.saveResourceInfo(h,
a.resourceXmlTemplate,r);f="";for(d=0;d<e.length;d++){0<f.length&&(f+="\n");h=e[d];x=c.getItemAssignments(h);for(u=0;u<x.length;u++)m=x[u],r=c.getItemEffort(h)*m.value,y=c.getItemCompletedEffort(h)*m.value,v=k.indexOf(m.key),r=[{key:"Indexes",value:(h.index*k.length+v+1).toString()},{key:"TaskIndex",value:(h.index+1).toString()},{key:"ResourceIndex",value:(v+1).toString()},{key:"AllocationUnits",value:m.value},{key:"Completion",value:Math.round(100*c.getCompletion(h.start,h.completedFinish,h.finish)).toString()},
{key:"Start",value:a.convertDateToXml(p.getOutputDate(h.start))},{key:"Finish",value:a.convertDateToXml(p.getOutputDate(h.finish))},{key:"Effort",value:a.convertTimeSpanToXml(r)},{key:"CompletedEffort",value:a.convertTimeSpanToXml(y)},{key:"RemainingEffort",value:a.convertTimeSpanToXml(r-y)}],f+=this.saveAssignmentInfo(h,m.key,m.value,a.assignmentXmlTemplate,r)}c=[{key:"ProjectStart",value:a.convertDateToXml(p.getOutputDate(q))},{key:"DayStart",value:a.convertDayTimeToXml(g.visibleDayStart<a.dayDuration?
g.visibleDayStart:0)},{key:"DayFinish",value:a.convertDayTimeToXml(g.visibleDayFinish<a.dayDuration?g.visibleDayFinish:0)},{key:"MinutesPerDay",value:i},{key:"MinutesPerWeek",value:i*B},{key:"ScheduleWeekDays",value:l},{key:"Tasks",value:s},{key:"Resources",value:n},{key:"Assignments",value:f}];c=this.saveProjectInfo(a.projectXmlTemplate,c);"undefined"!==typeof this.settings.spaceSeparated&&this.settings.spaceSeparated&&(c=c.replace(/\n+/g,"\n "));"undefined"!==typeof b&&(c=b?c.replace(/\n/g,""):
c.replace(/\n+/g,"\n"));return c};a.prototype.saveProjectInfo=function(b,c){b=a.applyStringTemplateValues(b,c);if("undefined"!==typeof this.settings.projectInfoSavingHandler){var e={outputXml:b};this.settings.projectInfoSavingHandler(e);b=e.outputXml}return b};a.prototype.saveGanttChartItem=function(b,c,e){c=a.applyStringTemplateValues(c,e);"undefined"!==typeof this.settings.ganttChartItemSavingHandler&&(b={ganttChartItem:b,outputXml:c},this.settings.ganttChartItemSavingHandler(b),c=b.outputXml);
return c};a.prototype.savePredecessorItem=function(b,c,e,g){e=a.applyStringTemplateValues(e,g);"undefined"!==typeof this.settings.predecessorItemSavingHandler&&(b={ganttChartItem:b,predecessorItem:c,outputXml:e},this.settings.predecessorItemSavingHandler(b),e=b.outputXml);return e};a.prototype.saveResourceInfo=function(b,c,e){c=a.applyStringTemplateValues(c,e);"undefined"!==typeof this.settings.resourceInfoSavingHandler&&(b={resource:b,outputXml:c},this.settings.resourceInfoSavingHandler(b),c=b.outputXml);
return c};a.prototype.saveAssignmentInfo=function(b,c,e,g,d){g=a.applyStringTemplateValues(g,d);"undefined"!==typeof this.settings.assignmentInfoSavingHandler&&(b={ganttChartItem:b,resource:c,allocationUnits:e,outputXml:g},this.settings.assignmentInfoSavingHandler(b),g=b.outputXml);return g};a.applyStringTemplateValues=function(b,a){for(var e=0;e<a.length;e++)b=b.replace("{"+a[e].key+"}",a[e].value);return b};a.convertDateToXml=function(a){var c=(a.getMonth()+1).toString(),e=a.getDate().toString(),
g=a.getHours().toString(),d=a.getMinutes().toString(),i=a.getSeconds().toString();return a.getFullYear().toString()+"-"+(1<c.length?c:"0"+c)+"-"+(1<e.length?e:"0"+e)+"T"+(1<g.length?g:"0"+g)+":"+(1<d.length?d:"0"+d)+":"+(1<i.length?i:"0"+i)};a.convertDayTimeToXml=function(b){var c=Math.floor(b/a.hourDuration),e=Math.floor(b/a.minuteDuration-60*c),g=c.toString(),d=e.toString(),b=Math.floor(b/a.secondDuration-60*e-3600*c).toString();return(1<g.length?g:"0"+g)+":"+(1<d.length?d:"0"+d)+":"+(1<b.length?
b:"0"+b)};a.convertTimeSpanToXml=function(b){var c=Math.floor(b/a.hourDuration),e=Math.floor(b/a.minuteDuration-60*c);return"PT"+c+"H"+e+"M"+Math.floor(b/a.secondDuration-60*e-3600*c)+"S"};a.prototype.exportXml=function(a){var c;if("undefined"===typeof a||null==a)a=c=window.open();"undefined"!==typeof a.document&&(a=a.document);a.open("text/html");var e=this.getXmlInternal(!1),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");a.write(e);a.close();return c};
a.initializeSettings=function(){};a.secondDuration=1E3;a.minuteDuration=60*a.secondDuration;a.hourDuration=60*a.minuteDuration;a.dayDuration=24*a.hourDuration;a.weekDuration=7*a.dayDuration;a.projectXmlTemplate="<?xml version='1.0' encoding='UTF-8' standalone='yes'?>\n<Project xmlns='http://schemas.microsoft.com/project'>\n<SaveVersion>14</SaveVersion>\n<ScheduleFromStart>1</ScheduleFromStart>\n<StartDate>{ProjectStart}</StartDate>\n<DefaultStartTime>{DayStart}</DefaultStartTime>\n<DefaultFinishTime>{DayFinish}</DefaultFinishTime>\n<MinutesPerDay>{MinutesPerDay}</MinutesPerDay>\n<MinutesPerWeek>{MinutesPerWeek}</MinutesPerWeek>\n<DurationFormat>7</DurationFormat>\n<WorkFormat>2</WorkFormat>\n<CalendarUID>1</CalendarUID>\n<Calendars>\n<Calendar>\n<UID>1</UID>\n<Name>Standard</Name>\n<IsBaseCalendar>1</IsBaseCalendar>\n<BaseCalendarUID>-1</BaseCalendarUID>\n<WeekDays>\n{ScheduleWeekDays}\n</WeekDays>\n</Calendar>\n</Calendars>\n<Tasks>\n{Tasks}\n</Tasks>\n<Resources>\n{Resources}\n</Resources>\n<Assignments>\n{Assignments}\n</Assignments>\n</Project>";
a.scheduleWeekDayXmlTemplate="<WeekDay>\n<DayType>{DayNumber}</DayType>\n<DayWorking>{IsWorkingDay}</DayWorking>\n{WorkingTimes}\n</WeekDay>";a.scheduleDayWorkingTimesXmlTemplate="<WorkingTimes>\n<WorkingTime>\n<FromTime>{FromTime}</FromTime>\n<ToTime>{ToTime}</ToTime>\n</WorkingTime>\n</WorkingTimes>";a.taskXmlTemplate="<Task>\n<UID>{Index}</UID>\n<ID>{Index}</ID>\n<Active>1</Active>\n<Name>{Content}</Name>\n<Manual>0</Manual>\n<IsNull>0</IsNull>\n<OutlineLevel>{Indentation}</OutlineLevel>\n<Priority>500</Priority>\n<Start>{Start}</Start>\n<Finish>{Finish}</Finish>\n<Duration>{Duration}</Duration>\n<DurationFormat>7</DurationFormat>\n<Work>{Effort}</Work>\n<ActualDuration>{CompletedDuration}</ActualDuration>\n<ActualWork>{CompletedEffort}</ActualWork>\n<RemainingWork>{RemainingEffort}</RemainingWork>\n<Milestone>{IsMilestone}</Milestone>\n<Summary>{IsSummary}</Summary>\n<FixedCost>0</FixedCost>\n<FixedCostAccrual>3</FixedCostAccrual>\n<PercentComplete>{Completion}</PercentComplete>\n<Cost>{Cost}</Cost>\n<ConstraintType>0</ConstraintType>\n{ConstraintDefinition}\n<CalendarUID>-1</CalendarUID>\n<IgnoreResourceCalendar>0</IgnoreResourceCalendar>\n{PredecessorLinks}\n</Task>";
a.predecessorXmlTemplate="<PredecessorLink>\n<PredecessorUID>{PredecessorIndex}</PredecessorUID>\n<Type>{DependencyType}</Type>\n<LinkLag>{Lag}</LinkLag>\n<LagFormat>5</LagFormat>\n</PredecessorLink>";a.resourceXmlTemplate="<Resource>\n<UID>{Index}</UID>\n<ID>{Index}</ID>\n<Name>{Name}</Name>\n<Type>1</Type>\n<IsNull>0</IsNull>\n<CalendarUID>1</CalendarUID>\n</Resource>";a.assignmentXmlTemplate="<Assignment>\n<UID>{Indexes}</UID>\n<TaskUID>{TaskIndex}</TaskUID>\n<ResourceUID>{ResourceIndex}</ResourceUID>\n<Units>{AllocationUnits}</Units>\n<PercentWorkComplete>{Completion}</PercentWorkComplete>\n<Start>{Start}</Start>\n<Finish>{Finish}</Finish>\n<Work>{Effort}</Work>\n<ActualWork>{CompletedEffort}</ActualWork>\n<RemainingWork>{RemainingEffort}</RemainingWork>\n</Assignment>";
return a}();i.Service=J})(p.ProjectSerializer||(p.ProjectSerializer={}))})(i.GanttChartView||(i.GanttChartView={}))})(i.Controls||(i.Controls={}))})(DlhSoft||(DlhSoft={}));
