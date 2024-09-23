function counsel_add(){	//상담을 추가할 때 모든 정보들이 입력되었는지 체크하는 함수
	if(document.querySelector("input[name='std_name_ck']").value!="true"){
		alert("올바른 학번을 입력해주세요.");
		return false;
	}
	else if(document.querySelector("input[name='rsvt_dt']").value==""){
		document.querySelector("input[name='rsvt_dt']").focus();
		alert("상담일자를 선택해주세요.");
	}
	else if(document.querySelector("select[name='hr_se']").value==""){
		document.querySelector("select[name='hr_se']").focus();
		alert("상담시간을 선택해주세요.");
	}
	else if(document.querySelector("select[name='dscsn_knd']").value==""){
		document.querySelector("select[name='dscsn_knd']").focus();
		alert("상담종류를 선택해주세요.");
	}
	else if(document.querySelector("select[name='dscsn_mthd']").value==""){
		document.querySelector("select[name='dscsn_mthd']").focus();
		alert("상담방식을 선택해주세요.");
	}
	else{
		if(confirm("입력하신 정보로 상담을 추가하시겠습니까?")){
			return true;
		}
	}
	return false;
	
}

function stdnt_no_check(std_no){	//학번으로 학생 이름을 불러오는 함수
	if(std_no.length<8){
		alert("학번 8자리를 모두 입력해주세요");
		return false;
	}
	else{	//학번8자리가 입력되었을 시 DB Post 통신으로 학생 이름을 불러옴
		let formData = new FormData(); 
		formData.append('stdnt_no', std_no);
	
		fetch('http://localhost:8080/employee/empy_counsel_add_stdnt_no_ok.do', {
		    method: 'post', 
		    body: formData,  //전송할 데이터 body에 추가
		})
	    .then(res => res.json()) //응답 결과를 json으로 파싱
	    .then(data => {
			if(data.stdnt_name==null){
				document.querySelector("input[name='stdnt_flnm']").value="존재하지 않는 사용자입니다.";
				document.querySelector("input[name='stdnt_flnm']").style.color="#FF0000";
				document.querySelector("input[name='std_name_ck']").value="false";
			}	
			else{
				document.querySelector("input[name='stdnt_flnm']").value=data.stdnt_name;
				document.querySelector("input[name='stdnt_flnm']").style.removeProperty('color');
				document.querySelector("input[name='std_name_ck']").value="true";
			}	
	    })
	    .catch(err => { // 오류 발생시 오류를 담아서 보여줌
	        console.log('Fetch Error', err);
	    });
	}  	
}

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
	var page=firstorlast;
	var url;

	if(firstorlast=='first'){
		page=1;	
	}
	else if(firstorlast=='last'){
		page=document.getElementById("maxpage").value;
	}
	console.log(page);
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

function searchData(){
	
}
