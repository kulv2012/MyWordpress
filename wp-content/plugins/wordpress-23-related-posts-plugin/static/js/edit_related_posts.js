(function(d){d.event.props.push("dataTransfer");var C=function(d,l){var m=document.createElement("img"),i={action:d,blog_id:window._wp_rp_blog_id,post_id:window._wp_rp_post_id,request_id:window._wp_rp_request_id,_:+new Date},w=[],q=window._wp_rp_static_base_url+"stats.gif?";if(l)for(var j in l)l.hasOwnProperty(j)&&(i[j]=l[j]);for(x in i)i.hasOwnProperty(x)&&w.push(x+"="+i[x]);q+=w.join("&");m.src=q},z=function(){d("#wp_rp_edit_related_posts").click(function(){var k=window._wp_rp_num_rel_posts,l=window._wp_rp_blog_id,
m=window._wp_rp_post_id,i=!1!==window._wp_rp_remote_recommendations,w=window._wp_rp_admin_ajax_url,q=window._wp_rp_plugin_static_base_url,j=!!window._wp_rp_erp_search,z=!1!==window._wp_rp_promoted_content,H=!1!==window._wp_rp_traffic_exchange,p=0,b={holder:null,wrapper:null,search_form:null,search_input:null,selected_articles_wrap:null,replace_articles_wrap:null,replace_articles_list:null,article_loader:null,article_list:{},articles_to_insert:null,footer:null,save:null},h={},n=[],r={},s=[],D=function(a){a.preventDefault();
C("edit-related-posts-close");b.holder.remove();d("html").css("overflow","visible")},A=function(a){C("edit-related-posts-save");var c=[];d.each(h,function(){});for(var b=0;b<k;b+=1){var e=h[b];e?"own_sourcefeed"===e.type?c.push({ID:e.aid,post_url:e.url,thumbnail:e.thumbnail,post_title:e.title,post_excerpt:e.excerpt||"",post_content:"",post_date:e.date||"",comment_count:e.comments||0,picked:!!e.picked,type:e.type,pos:b}):c.push({ID:!1,pos:b,type:e.type}):c.push({ID:!1,pos:b,type:"empty"})}d.post(w,
{action:"rp_update_related_posts",post_id:m,related_posts:JSON.stringify(c),_wpnonce:window._wp_rp_ajax_nonce},a)},E;E=function(a,c,b,e){var c=window._wp_rp_post_tags&&window._wp_rp_post_tags.join(",")||"",g=window._wp_rp_post_title||"",a=a||!1;if(!c&&!g&&!1===a)b(!1);else{var f={},h=i?2:1,j=function(){h-=1;if(0>=h){var a=[],c={};d.each(["external","internal"],function(b,e){f[e]&&("ok"===f[e].status&&f[e].data)&&d.each(f[e].data.results,function(b,e){if(c[e.url])return!0;c[e.url]=!0;a.push(e)})});
f.external&&"ok"===f.external.status&&(p=f.external.data.settings.num_external_slots);a?b&&a&&b(a):e&&e()}},k=function(a){f["internal"===a.source?"internal":"external"]=a;j()};data={post_id:m,search:a||"",action:"wp_rp_load_articles",count:30};d.ajax({url:window._wp_rp_wp_ajax_url,dataType:"json",data:data,success:function(a){var c=[];d.each(a,function(a,b){c.push({type:"own_sourcefeed",aid:"in_"+b.id,thumbnail:d(b.img).attr("src"),title:b.title,excerpt:b.excerpt,date:b.date,comments:b.comments,url:b.url,
target_url:b.url})});k({status:"ok",source:"internal",data:{results:c}})},error:j});if(i)if(a)j();else{var a={edit_related_posts_request:!0,blog_id:l,post_id:m,tags:c,title:g,search:a||"",pc:z,tX:H},n=setTimeout(j,2E3);d.ajax({url:"http://sre.zemanta.com/content/",dataType:"jsonp",data:a,success:function(a){clearTimeout(n);k(a)}})}}};var y,F=function(a,c,I){b.replace_articles_list.html("");f.render_selector_shadows();n=[];b.article_loader.find(".zem-no-articles").hide();b.article_loader.find(".zem-loader").show();
b.article_loader.show();var e=p;E(c,I,function(c){c&&c.length?(b.article_loader.hide(),n=d.grep(c,function(a){return 0>window.location.href.indexOf(a.url)}),d.each(n,function(a,c){r[c.aid]?(c=r[c.aid],n[a]=c):r[c.aid]=c}),f.article_selector(),e!==p&&f.articles()):(b.article_loader.find(".zem-no-articles").show(),b.article_loader.find(".zem-loader").hide());f.render_selector_shadows();a&&a(!0)},function(){b.article_loader.find(".zem-no-articles").show();b.article_loader.find(".zem-loader").hide();
f.render_selector_shadows();a&&a(!1)})},t=function(a,c,b){a.picked=!0;a.pos=c;h[c]=a;r[a.aid]=a;f.article_li_selected(a);b&&(A(),f.article_selector())},u=function(a,c){delete h[a.pos];a.picked=!1;a.pos=-1;a.elm&&a.elm.html('<div class="droppable" /><span class="notice">Drag post here</span>').attr("draggable",!1).removeClass("external").data("aid",!1);c&&(A(),f.article_selector())},f={article_li_placeholder:function(a,c){a.addClass("external");a.append('<span class="title">'+c.title+"</span>");var b=
d('<a class="open-settings button" target="_blank" href="http://prefs.zemanta.com/dash/'+l+'/?ref=erp">settings</a>');b.bind("click",function(a){a.stopPropagation()});a.append(b)},article_li:function(a,c){a.html('<div class="droppable" />');a.data("aid",c);a.attr("draggable",!0);a.unbind("dragstart").bind("dragstart",function(b){g.drag(b,c,a)});if(c.external)f.article_li_placeholder(a,c);else{var b=d('<img draggable="false" />');b.error(function(){b.unbind("error");var a=parseInt(c.aid.replace("in_"))||
parseInt(30*Math.random()),a=q+"thumbs/"+a%30+".jpg";c.thumbnail=a;b.attr("src",a)});c.thumbnail=c.thumbnail||c.thumbnail_url;b.attr("src",c.thumbnail);a.append(b);a.append('<span unselectable="on" class="title">'+c.title+"</span>");var e=d('<a class="open-article" draggable="false" target="_blank" href="'+c.target_url+'">link out</a>');e.bind("click",function(a){a.stopPropagation()});a.append(e)}},article_li_selector:function(a,c){c.elm=a;f.article_li(a,c);var b=d('<a draggable="false" class="insert overlay" href="#"><div class="txt">insert</div></a>');
b.bind("click",function(a){a.preventDefault();for(a=a=0;a<k-1&&h[a];a+=1);h[a]||t(c,a,!0)});a.append(b)},article_li_selected:function(a){var c=b.article_list[a.pos];a.elm=c;f.article_li(c,a);if(!a.external){var g=d('<a draggable="false" class="remove overlay" href="#"><span class="icon"></span><span class="txt">remove</span></a>');g.bind("click",function(c){c.preventDefault();u(a,!0)});c.append(g)}},article_selector:function(){b.replace_articles_list.html("");var a={};d.each(h,function(c,b){a[b.aid]=
!0});var c=0;d.each(n,function(g,e){if(!a[e.aid]){var h=d("<li />");f.article_li_selector(h,e);b.replace_articles_list.append(h);c+=1}if(30<=c)return!1});f.render_selector_shadows()},render_selector_shadows:function(){var a=b.replace_articles_list.scrollLeft(),c=b.replace_articles_list[0].scrollWidth-b.replace_articles_list.width();0<a?b.replace_articles_list.addClass("scroll-left"):b.replace_articles_list.removeClass("scroll-left");a<c?b.replace_articles_list.addClass("scroll-right"):b.replace_articles_list.removeClass("scroll-right")},
external_placeholders:function(){for(var a=0,c=s.length,a=0;a<p-c;a+=1)s.push(k-p+a);for(a=0;a<p&&a<s.length;a+=1)t({external:!0,type:"external",title:"Cross promotion"},s[a],!1)},articles:function(){f.external_placeholders();d.each(h,function(a,c){c&&(c.aid&&c.picked)&&(a<k?t(c,a,!1):u(c,!1))})},all:function(){f.articles();f.article_selector()}},g={hint_timeout:null,dragged_article:null,ie9_drag_start:function(a){1!==a.which||(a.ctrlKey||a.metaKey)||d(this).get(0).dragDrop&&d(this).get(0).dragDrop()},
drag_hint:function(a){if(!(1!==a.which||a.ctrlKey||a.metaKey)){var a=d(this),c=g.dragged_article||a.data("aid");c&&(g.hint_timeout=setTimeout(function(){!c.picked||c.external?b.wrapper.find("ul.selected li:not(.external)").addClass("drop-hint"):b.wrapper.find("ul.selected li").addClass("drop-hint");c.picked&&!c.external&&b.remove_article_sign.show()},100))}},drag:function(a,c,d){a.dataTransfer.setData("text","wprp_article_"+c.aid);a.dataTransfer.setDragImage?a.dataTransfer.setDragImage(d.get(0),d.outerWidth()/
2,d.outerHeight()/2):a.dataTransfer.addElement&&a.dataTransfer.addElement(d.get(0));g.dragged_article=c;setTimeout(function(){b.wrapper.find("li .droppable").css("z-index",2)},1);g.drag_hint(a)},drop_remove:function(a){a.preventDefault();var c=g.dragged_article;g.dragged_article&&!c.external&&(u(c,!0),g.dragend(a))},drop:function(a){d(this).removeClass("drop");a.preventDefault();var c=g.dragged_article;if(!c)return!1;var b=c.pos,e=1*d(this).data("pos");if(b===e)return!1;var f=h[e];if(!f||!(f.external&&
!c.picked||f.external&&c.external)){var i=c.picked;i&&u(c,!1);f&&(u(f,!1),i&&t(f,b,!1));t(c,e,!0);g.dragend(a)}},dragover:function(a){a.preventDefault();var a=g.dragged_article,c=d(this).data("aid");(!c||!(c.external&&!a.picked||c.external&&a.external))&&d(this).addClass("drop")},dragleave:function(a){a.preventDefault();d(this).removeClass("drop")},dragend:function(){clearTimeout(g.hint_timeout);g.dragged_article=null;b.remove_article_sign.hide();b.wrapper.find("li .droppable").css("z-index",-1);
b.wrapper.find("ul.selected li").removeClass("drop-hint")},init:function(){b.selected_articles_wrap.delegate("li","dragover",g.dragover).delegate("li","dragleave",g.dragleave).delegate("li","drop",g.drop);b.replace_articles_wrap.bind("dragover",g.dragover).bind("dragleave",g.dragleave).bind("drop",g.drop_remove);b.wrapper.delegate("li[draggable=true]","dragstart",g.drag_hint).delegate("li[draggable=true]","dragend",g.dragend).delegate("li[draggable=true]","mousedown",g.drag_hint).delegate("li[draggable=true]",
"mouseup",g.dragend).delegate("li[draggable=true]","mousemove",g.ie9_drag_start)}};y={update:F,render:f.all,init:function(){g.init();b.search_form.bind("submit",function(a){a.preventDefault();a=b.search_input.val();F(null,a,!0)});b.replace_articles_list.bind("scroll",f.render_selector_shadows)}};b.holder=d('<div id="wp_rp_zem_related_posts_holder"></div>');b.wrapper=d('<div id="wp_rp_zem_related_posts_wrap"><div class="selected-header"><h4 class="selected-title">Selected posts</h4><a href="#" class="save button">Save and Close</a></div><div class="selected-content"></div></div>');
b.holder.append(b.wrapper);b.wrapper.bind("click",function(a){a.stopPropagation()});b.save=b.wrapper.find(".save");b.save.bind("click",function(){A(function(){window.location.reload()});return!1});b.selected_articles_wrap=b.wrapper.find(".selected-content");for(var G=d('<ul class="selected" />'),v=0;v<k;v+=1){var B=d('<li><div class="droppable" /><span class="notice">Drag post here</span></li>');B.data("pos",v);b.article_list[v]=B;G.append(B)}b.selected_articles_wrap.append(G);b.replace_articles_wrap=
d('<div id="wp_rp_replace_article_wrap"><div class="remove-article-sign">Drop article here to remove it</div><div class="recommendations-header"><h4 class="recommendations-title">Recommended posts</h4>'+(j?'<form class="search" action="#"><input placeholder="search" class="search" type="text" /><input class="go button" type="submit" value="go" /></form>':'<div class="search notice">Please upgrade the plugin to use search.</div>')+'</div><div class="content"><ul></ul></div><div class="footer"><a href="http://www.zemanta.com/?ref=edit-rp" target="_blank">zemanta.com</a></div></div>');
b.wrapper.append(b.replace_articles_wrap);b.replace_articles_list=b.replace_articles_wrap.find(".content ul");b.article_loader=d('<div class="zem-loader-wrap"><div class="zem-no-articles">No results.</div><div class="zem-loader"><div class="zem-loader-step zem-loader-step-1"></div><div class="zem-loader-step zem-loader-step-2"></div><div class="zem-loader-step zem-loader-step-3"></div></div></div>');b.replace_articles_wrap.append(b.article_loader);b.remove_article_sign=b.replace_articles_wrap.find(".remove-article-sign");
b.search_form=b.replace_articles_wrap.find("form.search");b.search_input=b.replace_articles_wrap.find("input.search");b.footer=b.replace_articles_wrap.find(".footer");b.holder.bind("click",D);d(document).keydown(function(a){27==a.keyCode&&D(a)});d("html").css("overflow","hidden");y.init();(j=d(".wp_rp:first li:not(.wp_rp_special)"))&&j.each(function(a,c){c=d(c);if("own_sourcefeed"==c.data("post-type")){var b={aid:c.data("poid").split("-")[1],url:c.find("a:first").attr("href"),title:c.find("a.wp_rp_title").text(),
excerpt:c.find(".wp_rp_excerpt").text(),comments:parseInt(c.find(".wp_rp_comments_count").text().replace("(","").replace(")",""),10),date:c.find(".wp_rp_publish_date").text(),text_preview:"",published_datetime:"",thumbnail:c.find("img").attr("src"),picked:!0,type:c.data("post-type"),pos:c.data("position")};n.push(b);r[b.aid]=b;h[a]=b}else({promoted:!0,network:!0,external:!0})[c.data("post-type")]&&s.push(a)});y.update();y.render();d("body").append(b.holder);b.replace_articles_wrap.css("width",Math.min(b.holder.width()-
142,Math.max(680,110*k+130))+"px");return!1})};(function l(m,i){i||(i=10,m=0);d("#wp_rp_edit_related_posts").length?z():3E4>m?setTimeout(function(){l(m+i,1.5*i)},i):d(function(){z()})})()})(jQuery);
