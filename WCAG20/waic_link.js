$(function(){
	$("body>div:first-child>p:first-child").after("<p>この文書内にあるリンクのうち、「Understanding WCAG 2.0」「Techniques for WCAG 2.0」「How to Meet WCAG 2.0」へのリンクについては、WAIC の公開する日本語版にリンク先を追加しています。WAIC の日本語訳は、 W3C の公開する英語版より内容が古い可能性がありますのでご注意ください。</p>");
	$("a[href*=http]").each(function(){		
		if( $(this).attr('href').indexOf("UNDERSTANDING-WCAG20")!=-1 ){
			var url = $(this).attr('href').replace('http:\/\/www.w3.org\/TR\/UNDERSTANDING-WCAG20','http://waic.jp/docs/UNDERSTANDING-WCAG20');
			var text = $(this).text();
			$(this).after(" <a href='"+url+"' title='"+text+"の日本語訳'>[日本語訳]</a>");
		}		
		if( $(this).attr('href').indexOf("WCAG20-TECHS")!=-1 ){
			var url = $(this).attr('href').replace('http:\/\/www.w3.org\/TR\/WCAG20-TECHS','http://waic.jp/docs/WCAG-TECHS');
			var text = $(this).text();
			$(this).after(" <a href='"+url+"' title='"+text+"の日本語訳'>[日本語訳]</a>");
		}
		if( $(this).attr('href').indexOf("quickref")!=-1 ){
			var url = $(this).attr('href').replace('http:\/\/www.w3.org\/WAI\/WCAG20','http://waic.jp/docs/WCAG20');
			var text = $(this).text();
			$(this).after(" <a href='"+url+"' title='"+text+"の日本語訳'>[日本語訳]</a>");
		}
	});
	$("p.sctxt").css('min-height','4em');
});
