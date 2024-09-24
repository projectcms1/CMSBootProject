function perpagesizechange(){	//페이지 당 출력 게시물 수를 바꾸는 함수
	var perpage = document.getElementById("per-page");
	var size = perpage.options[perpage.selectedIndex].value;
	var url;
	if(window.location.href.indexOf("?")==-1){	// 현재 URL에 파라미터가 없을 시
		url=window.location.href;
		url+="?size="+size;
	}
	else{// 현재 URL에 파라미터가 있을 시
		url=window.location.href.substring(0, window.location.href.indexOf("?"));	//URL의 파라미터 이전 부분 
		var query=window.location.search.replace("?","").split("&");	//쿼리스트링 각각으로 나누기
		var i=0, count=0, sizecount=0;
		while(i<query.length){
			if(count==0){	//추가되는 첫번째 파라미터일때
				if(query[i].includes("size")){
					url+="?size="+size;
					sizecount++;
					count++;
				}
				else if(query[i].includes("page")){	//출력 사이즈 변경시 페이지는 1이 되기에 추가X
				
				}
				else{	//검색어를 위한 파라미터일 때
					url+="?"+query[i];
					count++;
				}
			}
			else{	//파라미터가 이미 추가 됐을 때
				if(query[i].includes("size")){
					url+="&size="+size;
					sizecount++;
					count++;
				}
				else if(query[i].includes("page")){
					
				}
				else{
					url+="&"+query[i];
					count++;
				}			
			}
			i++;
		}
		if(sizecount==0 && count==0){
			url+="?size="+size;
			sizecount++;
		}
		else if(sizecount==0 && count!=0){
			url+="&size="+size;
			sizecount++;
		}
	}
	location.href=url;
}  	

//페이지 숫자 클릭시 이동(querySelectorAll -> addEventListener로 함수 추가)
var selectedPage = document.querySelectorAll(".selectedPage");
for(let i=0;i<selectedPage.length;i++){		//각각의 페이지 버튼에 페이지 이동을 위한 클릭 이벤트 추가
	selectedPage[i].addEventListener("click",function(event){	
	var page=event.target.innerText;	//클릭된 페이지 버튼의 innerText(페이지 번호)
	var url;
	
	if(window.location.href.indexOf("?")==-1){	// 현재 URL에 파라미터가 없을 시
		url=window.location.href;
		url+="?page="+page;
	}
	else{	// 현재 URL에 파라미터가 있을 시
		url=window.location.href.substring(0, window.location.href.indexOf("?"));	//URL의 파라미터 이전 부분 
		var query=window.location.search.replace("?","").split("&");	//쿼리스트링 각각으로 나누기
		var i=0, count=0, pagecount=0;;
		while(i<query.length){
			if(count==0){	//추가되는 첫번째 파라미터일때
				if(query[i].includes("page")){
					url+="?page="+page;
					pagecount++;
				}
				else{	//출력 사이즈 및 검색어를 위한 파라미터일 때
					url+="?"+query[i];
				}
			}
			else{	//파라미터가 이미 추가 됐을 때
				if(query[i].includes("page")){
					url+="&page="+page;
					pagecount++;
				}
				else{
					url+="&"+query[i];
				}			
			}
			i++;
			count++;
		}
		if(pagecount==0 && count==0){
			url+="?page="+page;
			pagecount++;
		}
		else if(pagecount==0 && count!=0){
			url+="&page="+page;
			pagecount++;
		}
	}
	
	location.href=url;
	
	});
	
}

function firstNlastPage(firstorlast){	//첫번째 또는 마지막 페이지로 이동하는 함수
	var maxpage=document.getElementById("maxpage").value;
	var page=firstorlast;
	var url;

	if(firstorlast=='first'){
		page=1;	
	}
	else if(firstorlast=='last' && maxpage!=0){
		page=maxpage;
	}
	else if(firstorlast=='last' && maxpage==0){
		page=1;
	}

	if(window.location.href.indexOf("?")==-1){	// 현재 URL에 파라미터가 없을 시
		url=window.location.href;
		url+="?page="+page;
	}
	else{	// 현재 URL에 파라미터가 있을 시
		url=window.location.href.substring(0, window.location.href.indexOf("?"));	//URL의 파라미터 이전 부분 
		var query=window.location.search.replace("?","").split("&");	//쿼리스트링 각각으로 나누기
		var i=0, count=0, pagecount=0;;
		while(i<query.length){
			if(count==0){	//추가되는 첫번째 파라미터일때
				if(query[i].includes("page")){
					url+="?page="+page;
					pagecount++;
				}
				else{	//출력 사이즈 및 검색어를 위한 파라미터일 때
					url+="?"+query[i];
				}
			}
			else{	//파라미터가 이미 추가 됐을 때
				if(query[i].includes("page")){
					url+="&page="+page;
					pagecount++;
				}
				else{
					url+="&"+query[i];
				}			
			}
			i++;
			count++;
		}
		if(pagecount==0 && count==0){
			url+="?page="+page;
			pagecount++;
		}
		else if(pagecount==0 && count!=0){
			url+="&page="+page;
			pagecount++;
		}
	}
	
	location.href=url;
}  

function searchData(){	//검색 시 처리하는 함수
	var searchform=document.getElementById("searchForm");
	var searchvalue=searchform.searchValue.value;
	if(searchvalue==null || searchvalue==""){	//검색어가 없을 때, 모든 상담이 검색되도록 함
		location.href=window.location.href;
		return false;
	}
	else{	//검색어가 있을 때, 파라미터로 검색 카테고리와 검색어가 설정됨
		var url=window.location.href.substring(0, window.location.href.indexOf("?"));
		searchform.action=url;
		searchform.submit();		
	}
	
}