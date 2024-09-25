//교직원 사용자 상세보기 정보 중 대학교 내 대학분류, 학과, 전공 데이터
const USER_UNIV = ['대학선택', '공과대학', '사회과학대학', '인문대학', '자연과학대학', '심리상담센터'];
const USER_SCSBJT = ['-', '기계공학과', '정치학과', '철학과', '생물학과', '심리상담센터'];
const USER_MJR = ['-', '기계공학', '정치학', '철학', '생물학', ''];

function makeSelector(selectedUniv) {

	const scsbjtField = document.getElementById("OGDP_SCSBJT");
	const mjrField = document.getElementById("MJR");

	scsbjtField.value = "";
	mjrField.readOnly = true;
	mjrField.value = "";

	USER_UNIV.forEach(function(data, index) {
		if (selectedUniv === data) {
			scsbjtField.value = USER_SCSBJT[index];

			if (selectedUniv === "심리상담센터") {
				mjrField.readOnly = false;
			} else {
				mjrField.readOnly = true;
				mjrField.value = USER_MJR[index];
			}
		}
	});
}



//다음 주소 찾기
 var element_layer = document.getElementById('stlistmod_detail_layer_add');
 function closeDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_layer.style.display = 'none';
 }
 function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('USER_ZIP').value = data.zonecode;
                document.getElementById("USER_ADDR").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("USER_DADDR").focus();

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
        }).embed(element_layer);

        // iframe을 넣은 element를 보이게 한다.
        element_layer.style.display = 'block';

        // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
        initLayerPosition();
    }

    // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
    // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
    // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
 function initLayerPosition(){
        var width = 300; //우편번호서비스가 들어갈 element의 width
        var height = 400; //우편번호서비스가 들어갈 element의 height
        var borderWidth = 5; //샘플에서 사용하는 border의 두께

        // 위에서 선언한 값들을 실제 element에 넣는다.
        element_layer.style.width = width + 'px';
        element_layer.style.height = height + 'px';
        element_layer.style.border = borderWidth + 'px solid';
        // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
 }
//===============다음 주소 끝=============

//학생사용자 상세보기 모달에 값 넣기
document.addEventListener('DOMContentLoaded', function () {
    // 모달 요소 가져오기
    var stuserdetailModal = document.getElementById('stuserdetailModal');

    // 모달이 열릴 때 실행되는 이벤트 리스너 추가
    stuserdetailModal.addEventListener('show.bs.modal', function (event) {
        // 모달을 트리거한 버튼 요소 가져오기
        var button = event.relatedTarget;

        // 버튼의 data- 속성에서 학생 이름 데이터 가져오기
        var st_flnm = button.getAttribute('data-stdnt_flnm');
        var st_no = button.getAttribute('data-stdnt_no');
        var st_eml_addr = button.getAttribute('data-user_eml_addr');
        var st_telno = button.getAttribute('data-user_telno');
        var st_zip = button.getAttribute('data-user_zip');
        var st_addr = button.getAttribute('data-user_addr');
        var st_daddr = button.getAttribute('data-user_daddr');
        var st_photo = button.getAttribute('data-user_photo');
        var st_brdt = button.getAttribute('data-brdt');
        var st_banknm = button.getAttribute('data-dlng_bank_nm');
        var st_bankno = button.getAttribute('data-dlng_actno');
        var st_dpnm = button.getAttribute('data-dpstr_nm');
        var st_unpr = button.getAttribute('data-univ_prd');
        var st_dpun = button.getAttribute('data-ogdp_univ');
        var st_dpsc = button.getAttribute('data-ogdp_scsbjt');
        var st_mjr = button.getAttribute('data-mjr');
        var st_stse = button.getAttribute('data-stdnt_stts_se');
        var st_grd = button.getAttribute('data-std_grade');
        var st_acnt_yn = button.getAttribute('data-acnt_lck_yn');
        var st_regdt = button.getAttribute('data-reg_dt');
        

        // 모달 내의 입력 필드 요소 선택(html의 id)
        var STDNT_NO = stuserdetailModal.querySelector('#STDNT_NO');
        var STDNT_FLNM = stuserdetailModal.querySelector('#STDNT_FLNM');
        var USER_EML_ADDR = stuserdetailModal.querySelector('#USER_EML_ADDR');
        var USER_TELNO = stuserdetailModal.querySelector('#USER_TELNO');
        var USER_ZIP = stuserdetailModal.querySelector('#USER_ZIP');
        var USER_ADDR = stuserdetailModal.querySelector('#USER_ADDR');
        var USER_DADDR = stuserdetailModal.querySelector('#USER_DADDR');
        var USER_PHOTO = stuserdetailModal.querySelector('#USER_PHOTO');
        var BRDT = stuserdetailModal.querySelector('#BRDT');
        var DLNG_BANK_NM = stuserdetailModal.querySelector('#DLNG_BANK_NM');
        var DLNG_ACTNO = stuserdetailModal.querySelector('#DLNG_ACTNO');
        var DPSTR_NM = stuserdetailModal.querySelector('#DPSTR_NM');
        var UNIV_PRD = stuserdetailModal.querySelector('#UNIV_PRD');
        var OGDP_UNIV = stuserdetailModal.querySelector('#OGDP_UNIV');
        var OGDP_SCSBJT = stuserdetailModal.querySelector('#OGDP_SCSBJT');
        var MJR = stuserdetailModal.querySelector('#MJR');
        var STDNT_STTS_SE = stuserdetailModal.querySelector('#STDNT_STTS_SE');
        var STD_GRADE = stuserdetailModal.querySelector('#STD_GRADE');
        var ENTRANCE_YEAR = stuserdetailModal.querySelector('#ENTRANCE_YEAR');
        var ACNT_LCK_YN = stuserdetailModal.querySelector('#ACNT_LCK_YN');
        var REG_DT = stuserdetailModal.querySelector('#REG_DT');
        

        // 입력 필드에 데이터 설정
        if (STDNT_FLNM) {
        	STDNT_FLNM.value = st_flnm;
        }
        if (STDNT_NO) {
        	STDNT_NO.value = st_no;
        }
        if (USER_EML_ADDR) {
        	USER_EML_ADDR.value = st_eml_addr;
        }
        if (USER_TELNO) {
        	USER_TELNO.value = st_telno;
        }
        if (USER_ZIP) {
        	USER_ZIP.value = st_zip;
        }
        if (USER_ADDR) {
        	USER_ADDR.value = st_addr;
        }
        if (USER_DADDR) {
        	USER_DADDR.value = st_daddr;
        }
        if (USER_PHOTO) {
        	USER_PHOTO.value = st_photo;
        }
        if (BRDT) {
        	BRDT.value = st_brdt;
        }
        if (DLNG_BANK_NM) {
        	DLNG_BANK_NM.value = st_banknm;
        }
        if (DLNG_ACTNO) {
        	DLNG_ACTNO.value = st_bankno;
        }
        if (DPSTR_NM) {
        	DPSTR_NM.value = st_dpnm;
        }
        if (UNIV_PRD) {
        	UNIV_PRD.value = st_unpr;
        }
        if (OGDP_UNIV) {
        	OGDP_UNIV.value = st_dpun;
        }
        if (OGDP_SCSBJT) {
        	OGDP_SCSBJT.value = st_dpsc;
        }
        if (MJR) {
        	MJR.value = st_mjr;
        }
        if (STDNT_STTS_SE) {
        	STDNT_STTS_SE.value = st_stse;
        }
        if (STD_GRADE) {
        	STD_GRADE.value = st_grd;
        }
        if (ENTRANCE_YEAR) {
        	ENTRANCE_YEAR.value = st_no.substring(0,4);
        }
        if (ACNT_LCK_YN) {
        	ACNT_LCK_YN.value = st_acnt_yn;
        }
        if (REG_DT) {
        	REG_DT.value = st_regdt;
        }
        
    });
});


//교직원 리스트 페이징 처리
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // 한 페이지당 표시할 행의 수
    const tableBody = document.getElementById('employeeTableBody');
    const pagination = document.getElementById('emlist_paging');
    const totalPagesDisplay = document.getElementById('totalPagesDisplay');

    if (!tableBody) {
        console.error('employeeTableBody 요소를 찾을 수 없습니다.');
        return;
    }

    // 모든 tr 요소를 선택합니다.
    const rows = Array.from(tableBody.getElementsByTagName('tr'));
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    let currentPage = 1;

    // 페이지 표시 함수
    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });

        updatePagination();
    }

    // 페이지 네비게이션 업데이트 함수
    function updatePagination() {
        // 기존 총 페이지 수 표시 제거
        if (totalPagesDisplay.firstChild) {
            totalPagesDisplay.removeChild(totalPagesDisplay.firstChild);
        }

        // 총 페이지 수 표시 추가
        const span = document.createElement('span');
        span.textContent = `총 페이지: ${totalPages}`;
        totalPagesDisplay.appendChild(span);

        // << 버튼 활성화/비활성화
        const firstBtn = document.getElementById('first-page');
        if (currentPage === 1) {
            firstBtn.parentElement.classList.add('disabled');
        } else {
            firstBtn.parentElement.classList.remove('disabled');
        }

        // < 버튼 활성화/비활성화
        const prevBtn = document.getElementById('prev-page');
        if (currentPage === 1) {
            prevBtn.parentElement.classList.add('disabled');
        } else {
            prevBtn.parentElement.classList.remove('disabled');
        }

        // > 버튼 활성화/비활성화
        const nextBtn = document.getElementById('next-page');
        if (currentPage === totalPages) {
            nextBtn.parentElement.classList.add('disabled');
        } else {
            nextBtn.parentElement.classList.remove('disabled');
        }

        // >> 버튼 활성화/비활성화
        const lastBtn = document.getElementById('last-page');
        if (currentPage === totalPages) {
            lastBtn.parentElement.classList.add('disabled');
        } else {
            lastBtn.parentElement.classList.remove('disabled');
        }
    }

    // 버튼 클릭 이벤트 설정
    const firstBtn = document.getElementById('first-page');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const lastBtn = document.getElementById('last-page');

    if (firstBtn && prevBtn && nextBtn && lastBtn) {
        firstBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage !== 1) {
                showPage(1);
            }
        });

        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });

        lastBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage !== totalPages) {
                showPage(totalPages);
            }
        });
    }

    // 초기 페이지 표시
    showPage(1);
});




/*
//학생 사용자 상세정보 수정 기능
function update_stuserdata(){
	stuser_detail_frm.submit();
}


//학생 사용자 추가 기능
function add_stuser(){
	stuser_add_frm.submit();
}
*/

