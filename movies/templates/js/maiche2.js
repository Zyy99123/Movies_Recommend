/**
 * Created by YAO on 2018/9/12.
 */
;/*!newcar-www:widget/c2b_sale_new/title/title.es6*/
define("newcar-www:widget/c2b_sale_new/title/title.es6",function(){});
;/*!newcar-www:widget/c2b_sale_new/content/content.es6*/
define("newcar-www:widget/c2b_sale_new/content/content.es6",function(t,n,i){var e="MD-c2b_sale_new-content-",o={init:function(t){this.clickFn(t)},handleData:function(){},bind:function(){},clickFn:function(t){$("."+e+"in-txt").on("click",function(n){n.stopPropagation();var i=$(this).offset().left,e=$(this).offset().top+49,o=$(this).attr("id");"js-brand-audi-model"==o?i=($(window).width()-880)/2:("js-short"==o||"js-letter"==o)&&(i=($(window).width()-480)/2+480-380-60-4),t&&t(o,i,e)})},setTxt:function(t,n){$("#"+t).text(n).removeClass(e+"fc-gray")},defaultTxt:function(t,n){$("#"+t).text(n).addClass(e+"fc-gray")}};i.exports={init:function(t){o.init(t)},setTxt:o.setTxt,defaultTxt:o.defaultTxt}});
;/*!newcar-www:widget/c2b_sale_new/mile/mile.es6*/
define("newcar-www:widget/c2b_sale_new/mile/mile.es6",function(e,i,n){var l="MD-c2b_sale_new-mile-",t={init:function(e){t.mileFn(e)},mileFn:function(e){$("#js-mile").on("input keyup",function(){var i=$(this).val();t.clearNoNum(i),t.special_handl_mile(i),e&&e(i)})},clearNoNum:function(e){return""!=e&&"."==e.substr(0,1)&&(e=""),e=e.replace(/^0*(0\.|[1-9])/,"$1"),e=e.replace(/[^\d|^\.]/g,""),e=e.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e=e.replace(/^(\-)*(\d+)\.(\d{1,2}).*$/,"$1$2.$3"),e.indexOf(".")<0&&""!=e&&"0"==e.substr(0,1)&&2==e.length&&(e=e.substr(1,e.length)),e},special_handl_mile:function(e){e>60?!function(){$("#js-mile").val(60);var e=$("."+l+"max-mile-tip");e.show(),setTimeout(function(){e.fadeOut()},500)}():$("#js-mile").val(t.clearNoNum(e))}};n.exports={init:function(e){t.init(e)}}});
;/*!newcar-www:widget/c2b_sale_new/next_btn/next_btn.es6*/
define("newcar-www:widget/c2b_sale_new/next_btn/next_btn.es6",function(e,i,r){var n="MD-c2b_sale_new-next_btn-",t={init:function(e){t.clickEle(e)},clickEle:function(e){$("body").on("click",".js-btn",function(){var i=t.isFill(e.data);return i?(t.formVlidation(e.data),void(e.callback&&e.callback())):!1})},isFill:function(e){var i=!1;return""!=e.cityid&&""!=e.carname&&""!=e.license_date&&""!=e.license_locate&&""!=e.collision_desc&&""!=e.appearance_desc&&""!=e.mileage&&(i=!0),i},btnIActive:function(e){var i=t.isFill(e);i?$(".js-btn").addClass(n+"active"):$(".js-btn").removeClass(n+"active")},formVlidation:function(e){if(""==e.cityid)return t.errorTips("�������в���Ϊ��"),!1;if(""==e.license_locate)return t.errorTips("�������ղ���Ϊ��"),!1;if(""==e.carname)return t.errorTips("Ʒ�Ƴ�ϵ����Ϊ��"),!1;if(""==e.license_date)return t.errorTips("����ʱ�䲻��Ϊ��"),!1;var i=/^\d+(\.\d{1,2})?$/;return""==e.mileage?(t.errorTips("��ʻ��̲���Ϊ��"),!1):i.test(e.mileage)?""==e.license_date?(t.errorTips("����ʱ�䲻��Ϊ��"),!1):""==e.collision_desc?(t.errorTips("������������Ϊ��"),!1):void 0:(t.errorTips("��������ȷ�����"),!1)},errorTips:function(e){var i=$("."+n+"error-tip");i.html(e).show()},clearTxt:function(){var e=$("."+n+"error-tip");e.html("").hide()}};r.exports={init:function(e){t.init(e)},btnIActive:t.btnIActive,errorTips:t.errorTips,clearTxt:t.clearTxt}});
;/*!newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6*/
define("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6",function(require,exports,module){var popupTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="downwrap '+(null==(__t=obj.element)?"":__t)+"\" data-type='"+(null==(__t=obj.element)?"":__t)+"'></div>\n\n\n\n";return __p},app={init:function(){app.blank(),app.changeWindowResize()},handleData:function(){},bind:function(){},close:function(){$(".downwrap").hide()},blank:function(){$(document).on("click",function(n){var o=$(".downwrap");o.is(n.target)||0!==o.has(n.target).length||$(".downwrap").hide()})},popupShow:function(n,o,p,e){$("."+n).length?$("."+n).is(":visible")?$("."+n).hide():$("."+n).show().siblings(".downwrap").hide():($("body").append(popupTmpl({element:n})),$("."+n).append(e),$("."+n).show().siblings(".downwrap").hide()),$("."+n).css({left:o,top:p})},changeWindowResize:function(){$(window).resize(function(){$(".downwrap").hide()})},closeLayer:function(){$(".downwrap").length&&$(".downwrap").hide()}};module.exports={init:function(n){app.init(n)},show:app.show,close:app.close,popupShow:app.popupShow,closeLayer:app.closeLayer}});
;/*!newcar-www:widget/c2b_sale_new/city/city.es6*/
define("newcar-www:widget/c2b_sale_new/city/city.es6",function(require,exports,module){var mid="MD-c2b_sale_new-city-",cityTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='\n<span class="MD-c2b_sale_new-city-title">�ѿ�ͨ����</span>\n<div class="MD-c2b_sale_new-city-drop-content">\n	',obj.data&&0!=obj.data.length&&(__p+="\n		",$.each(obj.data,function(t,n){if(__p+="\n			",n.length){__p+="\n				";for(var t=0;t<n.length;t++)__p+="\n					",__p+=n[t].cityid==obj.value?'\n						<a class="MD-c2b_sale_new-city-item MD-c2b_sale_new-city-active" data-id="'+(null==(__t=n[t].cityid)?"":__t)+'">'+(null==(__t=n[t].cityname)?"":__t)+"</a>\n						":'\n						<a class="MD-c2b_sale_new-city-item " data-id="'+(null==(__t=n[t].cityid)?"":__t)+'">'+(null==(__t=n[t].cityname)?"":__t)+"</a>\n					",__p+="\n				";__p+="\n			"}__p+="\n		"}),__p+="\n	"),__p+="\n</div>\n\n";return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),app={init:function(t){app.clickEle(t)},handleData:function(){},bind:function(){},clickEle:function(t){$("body").on("click","."+mid+"item",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var n=$(this).attr("data-id"),i=$(this).html();t.callback&&t.callback({cityid:n,cityname:i,type:t.type}),popupJs.close()})},showContent:function(t,n,i,_){popupJs.popupShow(t,n,i,cityTmpl(_))}};module.exports={init:function(t){app.init(t)},showContent:app.showContent}});
;/*!newcar-www:widget/c2b_sale_new/car_plate/car_plate.es6*/
define("newcar-www:widget/c2b_sale_new/car_plate/car_plate.es6",function(require,exports,module){var mid="MD-c2b_sale_new-car_plate-",carPlateTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{}){if(__p+='\n<div class="MD-c2b_sale_new-car_plate-plist">\n	',obj.data.length){__p+="\n		";for(var i=0;i<obj.data.length;i++)__p+="\n			",__p+=obj.data[i]==obj.value?'\n				<a href="javascript:void(0);"  class="MD-c2b_sale_new-car_plate-item MD-c2b_sale_new-car_plate-active">'+(null==(__t=obj.data[i])?"":__t)+"</a>\n			":'\n				<a href="javascript:void(0);"  class="MD-c2b_sale_new-car_plate-item">'+(null==(__t=obj.data[i])?"":__t)+"</a>\n			",__p+="	\n		";__p+="\n	"}__p+="	\n</div>\n\n"}return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),app={init:function(a){app.clickEle(a)},clickEle:function(a){$("body").on("click","."+mid+"item",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var e=$(this).attr("data-id"),t=$(this).html();a.callback&&a.callback({id:e,name:t,type:a.type}),popupJs.close()})},showContent:function(a,e,t,n){popupJs.popupShow(a,e,t,carPlateTmpl(n))}};module.exports={init:function(a){app.init(a)},showContent:app.showContent}});
;/*!newcar-www:widget/c2b_sale_new/car_letter/car_letter.es6*/
define("newcar-www:widget/c2b_sale_new/car_letter/car_letter.es6",function(require,exports,module){var mid="MD-c2b_sale_new-car_letter-",carLetterTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{}){if(__p+='\n<div class="MD-c2b_sale_new-car_letter-plist">\n	',obj.data.length){__p+="\n		";for(var i=0;i<obj.data.length;i++)__p+="\n			",__p+=obj.data[i]==obj.value?'\n				<a href="javascript:void(0);"  class="MD-c2b_sale_new-car_letter-item MD-c2b_sale_new-car_letter-active">'+(null==(__t=obj.data[i])?"":__t)+"</a>\n			":'\n				<a href="javascript:void(0);"  class="MD-c2b_sale_new-car_letter-item">'+(null==(__t=obj.data[i])?"":__t)+"</a>\n			",__p+="	\n		";__p+="\n	"}__p+="\n</div>\n"}return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),app={init:function(e){app.clickEle(e)},clickEle:function(e){$("body").on("click","."+mid+"item",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var t=$(this).attr("data-id"),a=$(this).html();e.callback&&e.callback({id:t,name:a,type:e.type}),popupJs.close()})},showContent:function(e,t,a,n){popupJs.popupShow(e,t,a,carLetterTmpl(n))}};module.exports={init:function(e){app.init(e)},showContent:app.showContent}});
;/*!newcar-www:widget/c2b_sale_new/brand_audi_model/brand_audi_model.es6*/
define("newcar-www:widget/c2b_sale_new/brand_audi_model/brand_audi_model.es6",function(require,exports,module){var mid="MD-c2b_sale_new-brand_audi_model-",brandAudiModelTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="MD-c2b_sale_new-brand_audi_model-brand-audi-model">\n	<div class="MD-c2b_sale_new-brand_audi_model-brand-wrap">\n		<span class="MD-c2b_sale_new-brand_audi_model-title">��ѡ��Ʒ��</span>\n		<div class="MD-c2b_sale_new-brand_audi_model-drop-content">\n			<div class="MD-c2b_sale_new-brand_audi_model-letter-box">\n				',obj&&0!=obj.length&&(__p+="\n					",$.each(obj,function(a){__p+='\n						<span class="MD-c2b_sale_new-brand_audi_model-letter">'+(null==(__t=a)?"":__t)+"</span>\n					"}),__p+="	\n				"),__p+='\n			</div>\n			<div class="MD-c2b_sale_new-brand_audi_model-brand-list">\n				',obj&&0!=obj.length&&(__p+="\n					",$.each(obj,function(a,e){if(__p+='\n						<span class="MD-c2b_sale_new-brand_audi_model-letter">'+(null==(__t=n)?"":__t)+'</span>\n						<span class="MD-c2b_sale_new-brand_audi_model-title-letter">'+(null==(__t=a)?"":__t)+"</span>\n						",e.length){__p+="\n							";for(var n=0;n<e.length;n++)__p+='\n								<a href="javascript:void(0);" data-brandid='+(null==(__t=e[n].brandid)?"":__t)+' class="MD-c2b_sale_new-brand_audi_model-item">'+(null==(__t=e[n].brandname)?"":__t)+"</a>\n							";__p+="\n						"}__p+="\n					"}),__p+="\n				"),__p+='\n			</div>\n		</div>	\n	</div>\n	<div class="MD-c2b_sale_new-brand_audi_model-audi-wrap">\n		<span class="MD-c2b_sale_new-brand_audi_model-title">��ѡ��ϵ</span>\n		<div class="MD-c2b_sale_new-brand_audi_model-drop-content MD-c2b_sale_new-brand_audi_model-audi-list">\n			<!-- <span class="MD-c2b_sale_new-brand_audi_model-title-letter">A</span>\n			<a href="javascript:void(0);" data-brandid="5" class="MD-c2b_sale_new-brand_audi_model-item MD-c2b_sale_new-brand_audi_model-active">����</a> -->\n		</div>\n	</div>\n	<div class="MD-c2b_sale_new-brand_audi_model-model-wrap">\n		<span class="MD-c2b_sale_new-brand_audi_model-title">��ѡ��ϵ</span>\n		<div class="MD-c2b_sale_new-brand_audi_model-drop-content MD-c2b_sale_new-brand_audi_model-model-list">\n			<!-- <span class="MD-c2b_sale_new-brand_audi_model-title-letter">A</span>\n			<a href="javascript:void(0);" data-brandid="5" class="MD-c2b_sale_new-brand_audi_model-item">����</a> -->\n		</div>\n	</div>\n</div>\n\n\n\n';return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),objData={},pageData={},app={init:function(a){this.clickEle(a),this.bind(),pageData=a.pageData},bind:function(){this.scrollLetter(),this.clickBrand(),this.clickAudi()},scrollLetter:function(){$(document).on("click","."+mid+"letter ",function(){var a=$(this).index(),e=$("."+mid+"brand-wrap  ."+mid+"brand-list"),n=e.find("."+mid+"title-letter").eq(a).get(0).offsetTop-37;e.animate({scrollTop:n})})},clickBrand:function(){$(document).on("click"," ."+mid+"brand-list  ."+mid+"item ",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var a=$(this).attr("data-brandid"),e=$(this).html();objData.brandid=a,objData.brandname=e,app.getCarAudi(a)})},getCarAudi:function(a){$("."+mid+"model-list").html(""),$.ajax({type:"post",url:pageData.http+"/series/get_sminfo/?source=pc",data:JSON.stringify({sn:pageData.sn,params:{brandid:a,type:"series",ajax:1,city_zg_status:pageData.city_zg_status,location_cityid:pageData.location_cityid}}),success:function(a){if(200==a.error_code){for(var e=a.data.series,n="",i=0;i<e.length;i++)n+='<a href="javascript:void(0);" data-seriesid="'+e[i].tpg_series_id+'" class="'+mid+'item">'+e[i].tpg_series_name+"</a>";$("."+mid+"audi-list").html(n).show()}},error:function(){}})},clickAudi:function(){$(document).on("click"," ."+mid+"audi-list  ."+mid+"item ",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var a=$(this).attr("data-seriesid"),e=$(this).html();objData.audiid=a,objData.audiname=e,app.getCarModel(a)})},getCarModel:function(a){$("."+mid+"model-wrap").show(),$.ajax({type:"post",url:pageData.http+"/series/get_sminfo/?source=pc",data:JSON.stringify({sn:pageData.sn,params:{tpg_seriesid:a,type:"mode",ajax:1}}),success:function(a){if(200==a.error_code){for(var e=a.data.model,n="",i=0;i<e.length;i++){n+='<span class="'+mid+'title-letter">'+e[i].year+"</span>";for(var d=e[i].modellist,t=0;t<d.length;t++)n+='<a href="javascript:void(0);"  \n                            data-year="'+e[i].year+'" \n                            data-modelid="'+d[t].modelid+'" \n                            class="'+mid+'item">'+d[t].modelname+"</a>"}$("."+mid+"model-list").html(n).show()}},error:function(){}})},clickEle:function(a){$("body").on("click","."+mid+"model-list ."+mid+"item",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var e=$(this).attr("data-modelid"),n=$(this).html();objData.modelid=e,objData.modelname=n,objData.year=$(this).attr("data-year").replace("��",""),a.callback&&a.callback({obj:objData,type:a.type}),popupJs.close()})},showContent:function(a,e,n,i){popupJs.popupShow(a,e,n,brandAudiModelTmpl(i))}};module.exports={init:function(a){app.init(a)},showContent:app.showContent}});
;/*!newcar-www:widget/c2b_sale_new/card_time/card_time.es6*/
define("newcar-www:widget/c2b_sale_new/card_time/card_time.es6",function(require,exports,module){var mid="MD-c2b_sale_new-card_time-",carTimeTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{}){__p+='\n<div class="MD-c2b_sale_new-card_time-year-wrap">\n	<span class="MD-c2b_sale_new-card_time-dtitle">��ѡ�����</span>\n	<div class="MD-c2b_sale_new-card_time-drop-content MD-c2b_sale_new-card_time-year-list">\n		';var yearData=obj.data.year_sale;if(__p+="\n		",obj.years){__p+="\n			";var currYear=(new Date).getFullYear();__p+="\n			";for(var i=currYear;i>=+obj.years-1;i--)__p+="\n				",__p+=i==obj.years||obj.years>currYear?'\n					<a href="javascript:void(0);" data-year="'+(null==(__t=i)?"":__t)+'" class="MD-c2b_sale_new-card_time-item MD-c2b_sale_new-card_time-active">'+(null==(__t=i)?"":__t)+"��</a>\n				":'\n					<a href="javascript:void(0);" data-year="'+(null==(__t=i)?"":__t)+'" class="MD-c2b_sale_new-card_time-item">'+(null==(__t=i)?"":__t)+"��</a>	\n				",__p+="			\n			";__p+="\n		"}else{__p+="\n			";for(var i=0;i<yearData.length;i++)__p+="\n				",__p+=3==i?'\n					<a href="javascript:void(0);" data-year="'+(null==(__t=yearData[i])?"":__t)+'" class="MD-c2b_sale_new-card_time-item MD-c2b_sale_new-card_time-active">'+(null==(__t=yearData[i])?"":__t)+"��</a>\n				":'\n					<a href="javascript:void(0);" data-year="'+(null==(__t=yearData[i])?"":__t)+'" class="MD-c2b_sale_new-card_time-item">'+(null==(__t=yearData[i])?"":__t)+"��</a>	\n				",__p+="			\n			";__p+="\n		"}__p+='\n	</div>	\n</div>\n<div class="MD-c2b_sale_new-card_time-month-wrap">\n	<span class="MD-c2b_sale_new-card_time-dtitle">��ѡ���·�</span>\n	<div class="MD-c2b_sale_new-card_time-drop-content MD-c2b_sale_new-card_time-month-list">\n		';var monthData=obj.data.month;__p+="\n		";for(var i=0;i<monthData.length;i++)__p+="\n			",__p+=i+1==obj.months?'\n			<a href="javascript:void(0);" data-month="'+(null==(__t=monthData[i])?"":__t)+'" class="MD-c2b_sale_new-card_time-item MD-c2b_sale_new-card_time-active">'+(null==(__t=monthData[i])?"":__t)+"��</a>\n			":'\n			<a href="javascript:void(0);" data-month="'+(null==(__t=monthData[i])?"":__t)+'" class="MD-c2b_sale_new-card_time-item">'+(null==(__t=monthData[i])?"":__t)+"��</a>\n			",__p+="\n		";__p+="\n	</div>	\n</div>"}return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),objData={year:"",month:""},defaultyear="",app={init:function(a){app.clickEle(a),app.clickYear()},clickYear:function(){$("body").on("click","."+mid+"year-list  ."+mid+"item",function(){$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var a=$(this).attr("data-year");objData.year=a,app.renderMonth(a)})},clickEle:function(a){$("body").on("click","."+mid+"month-list  ."+mid+"item",function(){if($(this).hasClass(mid+"disable"))return!1;$(this).addClass(mid+"active").siblings().removeClass(mid+"active");var e=$(this).attr("data-month");objData.month=e,objData.year||(objData.year=defaultyear),a.callback&&a.callback({obj:objData,type:a.type}),objData.year="",popupJs.close()})},renderMonth:function(a){var e=(new Date).getMonth();parseInt(a)==(new Date).getFullYear()?$("."+mid+"month-wrap a:gt("+e+")").addClass(mid+"disable"):$("."+mid+"month-wrap ."+mid+"item").removeClass(mid+"disable")},showContent:function(a,e,t,i){defaultyear=i.defaultyear,popupJs.popupShow(a,e,t,carTimeTmpl(i)),app.repeatRanderYear(i.years),app.renderMonth(defaultyear),app.selectYearMonth(defaultyear,i.months)},selectYearMonth:function(a,e){if($("."+mid+"year-list").length){$("."+mid+"year-list  ."+mid+"item,."+mid+"month-list  ."+mid+"item").removeClass(mid+"active"),$("."+mid+"year-list  ."+mid+"item[data-year="+a+"]").addClass(mid+"active");var t=(new Date).getMonth();e>t+1?$("."+mid+"month-list  ."+mid+"item[data-month="+(t+1)+"]").addClass(mid+"active"):$("."+mid+"month-list  ."+mid+"item[data-month="+e+"]").addClass(mid+"active")}},repeatRanderYear:function(a){var e=+a,t=(new Date).getFullYear();if($("."+mid+"year-list").length){for(var i="",n=t;n>=e-1;n--)i+=' <a href="javascript:void(0);" data-year="'+n+'" class="'+mid+'item">'+n+"��</a>";$("."+mid+"year-list").html(i)}}};module.exports={init:function(a){app.init(a)},showContent:app.showContent,selectYearMonth:app.selectYearMonth}});
;/*!newcar-www:widget/c2b_sale_new/car_evaluation/car_evaluation.es6*/
define("newcar-www:widget/c2b_sale_new/car_evaluation/car_evaluation.es6",function(require,exports,module){var mid="MD-c2b_sale_new-car_evaluation-",carEvaluationTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{}){if(__p+='<div class="MD-c2b_sale_new-car_evaluation-evaluation js-evaluation">\n	<div class="MD-c2b_sale_new-car_evaluation-downpannel">\n		<div class="MD-c2b_sale_new-car_evaluation-evaluation-wrap">\n			',obj&&obj.length){__p+="\n				";for(var i=0;i<obj.length;i++){if(__p+='\n					<span class="MD-c2b_sale_new-car_evaluation-dtitle">'+(null==(__t=obj[i].title)?"":__t)+"</span>\n					",__p+=0==i?'\n						<ul class="MD-c2b_sale_new-car_evaluation-elist clearfix" id="impact">\n					':1==i?'\n						<ul class="MD-c2b_sale_new-car_evaluation-elist clearfix" id="appear">\n					':'\n						<ul class="MD-c2b_sale_new-car_evaluation-elist clearfix" id="other">\n					',__p+="\n					",obj[i].content&&obj[i].content.length){__p+="\n						";for(var n=0;n<obj[i].content.length;n++){__p+="\n							";var listData=obj[i].content[n];__p+='\n							<li class="MD-c2b_sale_new-car_evaluation-item" data-id="'+(null==(__t=listData.id)?"":__t)+'">'+(null==(__t=listData.title)?"":__t)+"</li>\n						"}__p+="\n					"}__p+="\n					</ul>\n				"}__p+="\n			"}__p+='		\n		</div>\n		<div class="MD-c2b_sale_new-car_evaluation-group-btn">\n			<span class="MD-c2b_sale_new-car_evaluation-btn js-cancel">ȡ��</span>\n			<span class="MD-c2b_sale_new-car_evaluation-btn js-confirm MD-c2b_sale_new-car_evaluation-active">ȷ��</span>\n		</div>\n	</div>\n	<span class="MD-c2b_sale_new-car_evaluation-tips"></span>\n</div>\n'}return __p},popupJs=require("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),evaluationObj={},up=null,app={init:function(a){app.clickEle(a),app.selectItem(),app.selectOther()},clickEle:function(a){$("body").on("click",".js-confirm",function(){var i=[],t=[];if(!evaluationObj.impactid)return app.showTips("��ѡ����ײ����"),!1;if(!evaluationObj.appearid)return app.showTips("��ѡ���������"),!1;var e="";$("#other ."+mid+"item").each(function(a,e){if($(e).hasClass(mid+"active")){var n=$(e).attr("data-id"),s=$(e).text();i.push(n),t.push(s)}}),e=t.length?evaluationObj.impacttxt+","+evaluationObj.appeartxt+","+t.join(","):evaluationObj.impacttxt+","+evaluationObj.appeartxt;var n={type:a.type,collision_desc:evaluationObj.impactid,appearance_desc:evaluationObj.appearid,other_desc:i.join(","),desc:e};a.callback&&a.callback(n),up.hide()})},showContent:function(a,i,t,e){$(".js-evaluation").length||$("body").append(carEvaluationTmpl(a)),app.activeItem(i,t,e),up=new UXPopup({contentId:".js-evaluation",closeId:".js-cancel",contentShowCenter:!0,shadowUseCss:!1,afterShow:function(){},beforeShow:function(){},afterHide:function(){$("#impact ."+mid+"item,#appear ."+mid+"item,#other ."+mid+"item").removeClass(mid+"active"),$("#impact ."+mid+"item,#appear ."+mid+"item,#other ."+mid+"item").removeClass(mid+"gray")}}),popupJs.closeLayer(),up.show()},selectItem:function(){$("body").on("click","#impact ."+mid+"item",function(){if($(this).hasClass(mid+"gray"))return!1;var a=$(this).attr("data-id"),i=$(this).text();evaluationObj.impactid=a,evaluationObj.impacttxt=i,$(this).addClass(mid+"active").siblings().removeClass(mid+"active"),2==a||3==a?$("#appear ."+mid+"item[data-id=1]").addClass(mid+"gray"):$("#appear ."+mid+"item[data-id=1]").removeClass(mid+"gray")}),$("body").on("click","#appear ."+mid+"item",function(){if($(this).hasClass(mid+"gray"))return!1;var a=$(this).attr("data-id"),i=$(this).text();evaluationObj.appearid=a,evaluationObj.appeartxt=i,$(this).addClass(mid+"active").siblings().removeClass(mid+"active"),1==a?$("#impact ."+mid+"item[data-id=1]").siblings().addClass(mid+"gray"):$("#impact ."+mid+"item[data-id=1]").siblings().removeClass(mid+"gray")})},selectOther:function(){$("body").off("click","#other ."+mid+"item"),$("body").on("click","#other ."+mid+"item",function(){$(this).toggleClass(mid+"active")})},showTips:function(a){var i=$("."+mid+"tips");i.text(a).show(),setTimeout(function(){i.fadeOut()},500)},activeItem:function(a,i,t){$("#impact ."+mid+"item,#appear ."+mid+"item,#other ."+mid+"item").removeClass(mid+"active"),$("#impact ."+mid+"item,#appear ."+mid+"item,#other ."+mid+"item").removeClass(mid+"gray"),a&&(2==a||3==a?$("#appear ."+mid+"item[data-id=1]").addClass(mid+"gray"):$("#appear ."+mid+"item[data-id=1]").removeClass(mid+"gray")),i&&(1==i?$("#impact ."+mid+"item[data-id=1]").siblings().addClass(mid+"gray"):$("#impact ."+mid+"item[data-id=1]").siblings().removeClass(mid+"gray")),$("#impact ."+mid+'item[data-id="'+a+'"]').addClass(mid+"active"),$("#appear ."+mid+'item[data-id="'+i+'"]').addClass(mid+"active"),t&&!function(){var a=t.split(",");$("#other ."+mid+"item").each(function(i,t){var e=$(t).attr("data-id");-1!=a.indexOf(e)&&$("#other ."+mid+'item[data-id="'+e+'"]').addClass(mid+"active")})}()}};module.exports={init:function(a){app.init(a)},showContent:app.showContent}});
;/*!newcar-www:widget/c2b_sale_new/login_popup/login_popup.es6*/
define("newcar-www:widget/c2b_sale_new/login_popup/login_popup.es6",function(require,exports,module){var _staticJsCommonUtilEs6=require("newcar-www:static/js/common/util.es6"),_staticJsCommonCustomerEventEnumEs6=require("newcar-www:static/js/common/CustomerEventEnum.es6"),mid="MD-c2b_sale_new-login_popup-",loginPopupTmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="MD-c2b_sale_new-login_popup-inf-popup c2b-login">\n	<span class="MD-c2b_sale_new-login_popup-close"></span>\n	',__p+="z"==obj.type?'\n		<p class="MD-c2b_sale_new-login_popup-titile">������֤</p>\n		<p class="MD-c2b_sale_new-login_popup-small-title">������֤�ֻ����룬�����ύ����</p>\n	':'\n		<p class="MD-c2b_sale_new-login_popup-titile">��������������...</p>\n		<p class="MD-c2b_sale_new-login_popup-small-title">��֤�ֻ��Ż�þ�׼����</p>\n	',__p+='\n	<ul>\n		<li class="MD-c2b_sale_new-login_popup-row">\n			<input type="text" placeholder="������11λ�ֻ�����" class="MD-c2b_sale_new-login_popup-l-inp MD-c2b_sale_new-login_popup-phone" maxlength="11" />\n		</li>\n		<li class="MD-c2b_sale_new-login_popup-row">\n			<input type="text" placeholder="������֤��" class="MD-c2b_sale_new-login_popup-l-inp MD-c2b_sale_new-login_popup-inp-yxm" maxlength="6" />\n			<div class="MD-c2b_sale_new-login_popup-yzm-box">|<input class="MD-c2b_sale_new-login_popup-yzm" value="��ȡ��֤��" readonly="readonly" /></div>\n		</li>\n	</ul>\n	<p class="MD-c2b_sale_new-login_popup-btn-box">\n		<span class="MD-c2b_sale_new-login_popup-error"></span>\n		<span class="MD-c2b_sale_new-login_popup-btn MD-c2b_sale_new-login_popup-yz-btn" >�ύ��֤</span>\n	</p>\n</div>\n';return __p},up=null,time=60,token="",app={init:function(){app.getCode()},showContent:function(n){token=n.token,userToken=n.usertoken,$(".c2b-login").length||$("body").append(loginPopupTmpl(n)),up=new UXPopup({contentId:".c2b-login",closeId:"."+mid+"close",contentShowCenter:!0,shadowUseCss:!1,afterShow:function(){},beforeShow:function(){},afterHide:function(){$("."+mid+"error").html("").hide()}}),up.show(),app.msgFade()},showTips:function(n){var e=$("."+mid+"tips");e.text(n).show(),setTimeout(function(){e.fadeOut()},500)},loginBtn:function(n){$(document).on("click","."+mid+"yz-btn",function(){var e=$("."+mid+"phone").val(),o=$("."+mid+"inp-yxm").val(),p=$("."+mid+"error"),t=/^1[34578][0-9]{9}$/g;return""==e?(app.errorMsg(p,"�ֻ��Ų���Ϊ��"),!1):t.test(e)?""==o?(app.errorMsg(p,"��֤�벻��Ϊ��"),!1):(uxl_track("submit_verify_c2b#tel_num="+e+"/from="+n.from),void $.ajax({type:"post",url:"/login/loginc2b/",data:{mobile:e,password:o,token:token,usertoken:userToken||""},success:function(o){200==o.error_code?(_staticJsCommonUtilEs6.observer.emit(_staticJsCommonCustomerEventEnumEs6.EventEnum.LOGIN_SUCCESS,{mobile:e}),n.data.mobile=e,n.callback(n.data)):app.errorMsg(p,o.error_msg)},error:function(){}})):(app.errorMsg(p,"�ֻ��Ÿ�ʽ����ȷ"),!1)})},errorMsg:function(n,e){n.html(e).show()},msgFade:function(){$("."+mid+"l-inp").on("focus",function(){$("."+mid+"error").html("").hide()})},getCode:function(){$(document).on("click","."+mid+"yzm",function(){var n=/^1[34578][0-9]{9}$/g,e=$("."+mid+"error"),o=$("."+mid+"phone").val();return $("."+mid+"error").html(""),""==o?(app.errorMsg(e,"�ֻ��Ų���Ϊ��"),!1):n.test(o)?void $.ajax({url:"/c2b_car_o/send/",type:"post",data:{mobile:$.trim(o),token:token},success:function(n){1==n.code?app.setTime($("."+mid+"yzm")):app.errorMsg(e,n.msg)},error:function(){app.errorMsg(e,"ϵͳ��æ�����Ժ����ԣ�")}}):(app.errorMsg(e,"�ֻ��Ÿ�ʽ����ȷ"),!1)})},setTime:function(n){return 0==time?(n.attr("disabled",!1),n.val("��ȡ��֤��"),void(time=60)):(n.attr("disabled",!0),n.val(time+"s�����·���"),time--,void setTimeout(function(){app.setTime(n)},1e3))},close:function(){up&&up.hide()}};module.exports={init:function(n){app.init(n)},showContent:app.showContent,close:app.close,loginBtn:app.loginBtn}});
;/*!newcar-www:widget/c2b_sale_new/other_popup/other_popup.es6*/
define("newcar-www:widget/c2b_sale_new/other_popup/other_popup.es6",function(require,exports,module){var mid="MD-c2b_sale_new-other_popup-",otherPopupTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="MD-c2b_sale_new-other_popup-inf-popup MD-c2b_sale_new-other_popup-tip-popup other-popup">\n	<span class="MD-c2b_sale_new-other_popup-close js-close"></span>\n	',"g"==obj.type&&406==obj.code?__p+='\n	<p class="MD-c2b_sale_new-other_popup-titile">����ʧ��</p>\n	<p class="MD-c2b_sale_new-other_popup-small-title">���İ���̫ϡ���ˣ�������ʱ��û��׼���ñ���</p>\n	 ':(403==obj.code||404==obj.code)&&(__p+='\n		<p class="MD-c2b_sale_new-other_popup-titile">��ʾ</p>\n		<p class="MD-c2b_sale_new-other_popup-small-title">����'+(null==(__t=obj.create_time)?"":__t)+"���ύ��һ��"+(null==(__t=obj.carname)?"":__t)+"</p>\n	"),__p+='\n	<p class="MD-c2b_sale_new-other_popup-btn-box">\n		',"g"==obj.type&&406==obj.code?__p+='\n			<a href="javascript:void(0);" class="MD-c2b_sale_new-other_popup-btn MD-c2b_sale_new-other_popup-know js-close">֪����</a>\n		':(403==obj.code||404==obj.code)&&(__p+='\n			<a href="'+(null==(__t=obj.url)?"":__t)+'" class="MD-c2b_sale_new-other_popup-btn MD-c2b_sale_new-other_popup-c-look">����鿴</a>\n		'),__p+="\n	</p>\n</div>";return __p},up=null,app={init:function(){app.clickKnow()},showContent:function(o){$(".other-popup").remove(),$("body").append(otherPopupTmpl(o)),up=new UXPopup({contentId:".other-popup",closeId:".js-close",contentShowCenter:!0,shadowUseCss:!1,afterShow:function(){},beforeShow:function(){},afterHide:function(){}}),up.show()},showTips:function(o){var p=$("."+mid+"tips");p.text(o).show(),setTimeout(function(){p.fadeOut()},500)},errorMsg:function(o,p){o.html(p).show()},hide:function(){up.hide()},clickKnow:function(){$("body").on("click","."+mid+"know",function(){up.hide()})}};module.exports={init:function(o){app.init(o)},showContent:app.showContent,hide:app.hide}});
;/*!newcar-www:widget/c2b_sale_new/c2b_car_message_new/fill_information/fill_information.es6*/
define("newcar-www:widget/c2b_sale_new/c2b_car_message_new/fill_information/fill_information.es6",function(e,t,a){var n=e("newcar-www:static/js/common/util.es6"),c=e("newcar-www:static/js/common/CustomerEventEnum.es6"),i="MD-c2b_sale_new-c2b_car_message_new-fill_information-",o=e("newcar-www:widget/c2b_sale_new/down_popup/down_popup.es6"),r=e("newcar-www:widget/c2b_sale_new/content/content.es6"),s=e("newcar-www:widget/c2b_sale_new/city/city.es6"),l=e("newcar-www:widget/c2b_sale_new/car_plate/car_plate.es6"),d=e("newcar-www:widget/c2b_sale_new/car_letter/car_letter.es6"),_=e("newcar-www:widget/c2b_sale_new/brand_audi_model/brand_audi_model.es6"),u=e("newcar-www:widget/c2b_sale_new/card_time/card_time.es6"),p=e("newcar-www:widget/c2b_sale_new/car_evaluation/car_evaluation.es6"),w=e("newcar-www:widget/c2b_sale_new/login_popup/login_popup.es6"),m=e("newcar-www:widget/c2b_sale_new/other_popup/other_popup.es6"),b=e("newcar-www:widget/c2b_sale_new/mile/mile.es6"),y=e("newcar-www:widget/c2b_sale_new/next_btn/next_btn.es6"),g=["��","��","��","��","��","ԥ","��","��","��","��","��","³","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��"],f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],h={data:null,value:""},j={data:g,value:""},D={data:f,value:""},v={years:"",months:"",data:null,defaultyear:""},k=null,x=null,C={seriesid:"",brandid:"",modeid:"",mileage:"",license_date:"",cityid:"",mobile:"",carname:"",type:"z",collision_desc:"",appearance_desc:"",other_desc:"",license_locate:"",source_type:"pc",market_channel:UrlTool.getUrlParam("channel")||"",user_id:"",cookie_id:$.cookie("XIN_UID_CK")||"",keyword_id:UrlTool.getUrlParam("keywordid")||"",creative_id:UrlTool.getUrlParam("creative")||"",ajax:1},T={"short":"",letter:"",desc:""},I="";pageData={sn:"",http:"",token:"",usertoken:""};var N=1,S={init:function(e){n.observer.on(c.EventEnum.USERINFO_LOAD_SUCCESS,function(e){I=e.user.mobile}),n.observer.on(c.EventEnum.LOGIN_SUCCESS,function(e){I=e.mobile}),o.init(),v.data=e.cardtime,pageData.http=e.http,pageData.sn=e.sn,pageData.token=e.token,pageData.usertoken=e.usertoken,pageData.location_cityid=e.location_cityid,pageData.city_zg_status=e.city_zg_status,C.user_id=e.usertoken,e.c2bocitytag&&(h.value=e.cityid,C.cityid=e.cityid,r.setTxt("js-city",e.cityname)),S.getDefaulePlate(e.cityname),S.bind(),S.handleData(),w.init(),m.init(),b.init(S.getmile),s.init({callback:S.getCityData,type:"js-city"}),l.init({callback:S.getShortData,type:"js-short"}),d.init({callback:S.getLetterData,type:"js-letter"}),_.init({callback:S.getBrandAudiModel,type:"js-brand-audi-model",pageData:pageData}),u.init({callback:S.getCardTime,type:"js-card-time"}),p.init({callback:S.getCarEvaluation,type:"js-evalutation"}),r.init(S.showDomFn),y.init({callback:S.getNextBtn,type:"z",data:C})},handleData:function(){S.randerCityData(),S.randerBrandData(),S.randerEvaluationData()},bind:function(){},randerCityData:function(){$.ajax({type:"post",url:pageData.http+"/c2b_car/get_city_list?source=pc",data:JSON.stringify({sn:pageData.sn,params:{city_group:"letter",ajax:1}}),success:function(e){200==e.error_code&&(h.data=e.data)},error:function(){}})},randerBrandData:function(){$.ajax({type:"post",url:pageData.http+"/brand/get_brand_list/?source=pc",data:JSON.stringify({sn:pageData.sn,params:{ajax:1}}),success:function(e){200==e.error_code&&(k=e.data)},error:function(){}})},randerEvaluationData:function(){$.ajax({type:"post",url:pageData.http+"/c2b_car/get_sale_home?source=pc",data:JSON.stringify({sn:pageData.sn,params:{page:"condition",ajax:1}}),success:function(e){200==e.error_code&&(x=e.data)},error:function(){}})},getDefaulePlate:function(e){$.ajax({type:"post",url:pageData.http+"/c2b_car/get_car_plate?source=pc",data:JSON.stringify({sn:pageData.sn,params:{cityname:e,ajax:1}}),success:function(e){200==e.error_code&&(j.value=e.data.city,D.value=e.data.plate,T.short=e.data.city,T.letter=e.data.plate,C.license_locate=T.short+T.letter,r.setTxt("js-short",e.data.city),r.setTxt("js-letter",e.data.plate))},error:function(){}})},showDomFn:function(e,t,a){switch(e){case"js-city":s.showContent(e,t,a,h);break;case"js-short":l.showContent(e,t,a,j);break;case"js-letter":d.showContent(e,t,a,D);break;case"js-brand-audi-model":_.showContent(e,t,a,k);break;case"js-card-time":if(!C.carname){var n='<span class="totast">��ѡ��Ʒ�Ƴ�ϵ</span>';return $(".totast").length||$("."+i+"fill-content").append(n),$(".totast").show(),setTimeout(function(){$(".totast").fadeOut()},500),!1}u.showContent(e,t,a,v);break;case"js-evalutation":p.showContent(x,C.collision_desc,C.appearance_desc,C.other_desc)}},getCityData:function(e){r.setTxt(e.type,e.cityname),C.cityid=e.cityid,y.btnIActive(C)},getShortData:function(e){T.short=e.name,T.letter&&e.name&&(C.license_locate=T.short+T.letter),r.setTxt(e.type,e.name),y.btnIActive(C)},getLetterData:function(e){T.letter=e.name,T.short&&e.name&&(C.license_locate=T.short+T.letter),r.setTxt(e.type,e.name),y.btnIActive(C)},getBrandAudiModel:function(e){C.brandid=e.obj.brandid,C.seriesid=e.obj.audiid,C.modeid=e.obj.modelid,v.years=e.obj.year,v.months="6";var t=(new Date).getFullYear();C.license_date=(e.obj.year>=t?t:e.obj.year)+"-06",v.defaultyear=e.obj.year>=t?t:e.obj.year,r.setTxt("js-card-time",C.license_date),C.carname=e.obj.brandname+" "+e.obj.audiname+" "+e.obj.modelname,r.setTxt(e.type,C.carname),y.btnIActive(C)},getCardTime:function(e){C.license_date=e.obj.year+"-"+S.dbNumber(e.obj.month),r.setTxt(e.type,C.license_date),v.defaultyear=e.obj.year,v.months=e.obj.month,y.btnIActive(C)},dbNumber:function(e){return e>9?e:"0"+e},getCarEvaluation:function(e){C.collision_desc=e.collision_desc,C.appearance_desc=e.appearance_desc,C.other_desc=e.other_desc,T.desc=e.desc,r.setTxt(e.type,e.desc),y.btnIActive(C)},getmile:function(e){C.mileage=e,y.btnIActive(C)},getNextBtn:function(){uxl_track(I?"sellcar_submit#tel_num="+I+"/from=1":"sellcar_submit#from=1"),I?(C.mobile=I,S.ajaxRequest(C)):(w.showContent({type:"z",token:pageData.token,usertoken:pageData.usertoken}),w.loginBtn({callback:S.ajaxRequest,data:C,from:"1"}))},ajaxRequest:function(e){return N?(N=0,$.cookie("XIN_UID")&&(e.user_id=$.cookie("XIN_UID")),void $.ajax({type:"post",url:pageData.http+"/c2b_car/collect_info?source=pc",data:JSON.stringify({sn:pageData.sn,params:e}),success:function(e){var t={type:"z",code:e.error_code,url:"",create_time:"",carname:"",msg:""};if(w.close(),403==e.error_code){var a=e.data;t.create_time=a.create_time,t.carname=a.carname;var n="type="+a.cluetype+"&clueid="+a.o_collect_info_id+"&c2bo_cityid="+a.cityid;t.url="//"+window.location.host+"/c2b_car_o/appointment?"+n,m.showContent(t)}else if(404==e.error_code){var a=e.data;t.create_time=a.create_time,t.carname=a.carname;var n="type="+a.cluetype+"&clueid="+a.o_collect_info_id+"&c2bo_cityid="+a.cityid;t.url="//"+window.location.host+"/c2b_car_o/success/?"+n,m.showContent(t)}else if(200==e.error_code){var c="/c2b_car_o/appointment?type="+e.data.cluetype+"&clueid="+e.data.o_collect_info_id+"&c2bo_cityid="+e.data.cityid;window.location.href=UrlTool.fixHref(c)}else S.totastTip(e.error_msg);N=1},error:function(){N=1}})):!1},totastTip:function(e){var t='<span class="totast-tip">'+e+"</span>";return $("body").append(t),setTimeout(function(){$(".totast-tip").remove()},500),!1}};a.exports={init:function(e){S.init(e)}}});
;/*!newcar-www:static/js/c2b_quation/popup.js*/
!function(t){function o(t){var o=this;if(t)for(var e in t)c[e]=t[e];for(var e in c)o[e]=c[e];o._init()}function e(t,o){o>=1&&(o/=100);try{t.style.opacity=o}catch(e){}try{t.style.filter="alpha(opacity="+100*o+")"}catch(e){}}function n(){return document.body.scrollHeight+"px"}function i(o){var e=o.offsetHeight,n=document.documentElement.scrollTop||t.pageYOffset||document.body.scrollTop,i=t.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return n+(i-e)/2+"px"}function d(o){var e=o.offsetWidth,n=document.body.scrollLeft,i=t.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return n+(i-e)/2+"px"}function s(t){if(t&&!(t.length<=0)){var o=document.querySelectorAll(t);return!o||o.length<=0?null:o[0]}}var c={contentId:"",closeId:"",shadowId:"",contentShowCenter:!0,shadowUseCss:!1,isShowShadow:!0,shadowClose:!0,beforeShow:function(){},afterShow:function(){},beforeHide:function(){},afterHide:function(){}},l=function(){var t={bind:function(t,o,e,n){"mousewheel"===o&&void 0!==document.mozHidden&&(o="DOMMouseScroll"),t.addEventListener?t.addEventListener(o,e,n):t.attachEvent("on"+o,e)},unbind:function(t,o,e,n){"mousewheel"===o&&void 0!==document.mozHidden&&(o="DOMMouseScroll"),t.removeEventListener?t.removeEventListener(o,e,n):t.detachEvent("on"+o,e)}};return t}(),r=function(t,o){l.bind(t,"click",function(){o.target.hide()},!1)},a=function(){var t={unallowScroll:function(){},allowScroll:function(){}};return t}();o.prototype={constructor:o,isInit:!1,_init:function(){var t=this;try{t.content=s(t.contentId),t.closeId&&r(s(t.closeId),{target:t}),t._getShadow(),t.isInit=!0}catch(o){}},_getShadow:function(){var t=this;if(t.isShowShadow){var o=t.shadowId||"#pop_shadow_div",e=s(o);e||(e=document.createElement("div"),e.id=o.substring(1),s("body").appendChild(e)),t.shadowClose&&r(e,{target:t}),t.shadow=e}},_showShadow:function(){var t=this;t.isShowShadow&&(t.shadow.style.display="block",t.shadow.style.visibility="visible",t.shadowUseCss||(t.shadow.style.position="absolute",t.shadow.style.left=0,t.shadow.style.top=0,t.shadow.style.width="100%",t.shadow.style.zIndex="100",t.shadow.style.backgroundColor="#000",t.shadow.style.height=n(),e(t.shadow,50)))},_hideShadow:function(){var t=this;t.isShowShadow&&(t.shadow.style.display="none")},_showContent:function(){var t=this;t.content.style.display="block",t.content.style.visibility="visible",t.contentShowCenter&&(t.content.style.position="absolute",t.content.style.top=i(t.content),t.content.style.left=d(t.content))},show:function(){var t=this;t.isInit&&(t.beforeShow&&t.beforeShow(),a.unallowScroll(),t._showShadow(),t._showContent(),t.afterShow&&t.afterShow())},hide:function(){var t=this;t.isInit&&(t.beforeHide&&t.beforeHide(),a.allowScroll(),t._hideShadow(),t.content.style.display="none",t.afterHide&&t.afterHide())}},t.UXPopup=o}(window),"undefined"!=typeof module?module.exports=window.UXPopup:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.UXPopup});
;/*!newcar-www:static/entry-js/c2b_car_message_new.es6*/
var _staticJsCommonBusinessUtilEs6=require("newcar-www:static/js/common/businessUtil.es6");$(document).ready(function(){var s={init:function(){_staticJsCommonBusinessUtilEs6.businessUtil.init()}};s.init()});