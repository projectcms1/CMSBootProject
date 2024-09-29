//공지사항 사용자 추가 기능
function add_notice(){
	if(document.querySelector("input[name='emp_flnm']").value==""){
		document.querySelector("input[name='emp_flnm']").focus();
		alert("이름을 입력해주세요.");
	}
	else if(document.querySelector("input[name='brdt']").value==""){
		document.querySelector("input[name='brdt']").focus();
		alert("생년월일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_telno']").value==""){
		document.querySelector("input[name='emp_telno']").focus();
		alert("전화번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_eml_addr']").value==""){
		document.querySelector("input[name='emp_eml_addr']").focus();
		alert("이메일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='entrance_year']").value==""){
		document.querySelector("input[name='entrance_year']").focus();
		alert("입사년도를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_no']").value==""){
		document.querySelector("input[name='edu_crtfct_no']").focus();
		alert("교원 자격증 번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_issu_ymd']").value==""){
		document.querySelector("input[name='edu_crtfct_issu_ymd']").focus();
		alert("교원 자격증 발급일자를 입력해주세요.");
	}
	else if(document.querySelector("select[name='ogdp_inst_nm']").value=="대학선택"){
		document.querySelector("select[name='ogdp_inst_nm']").focus();
		alert("소속기관(단과대학)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='jbgd_nm']").value==""){
		document.querySelector("input[name='jbgd_nm']").focus();
		alert("직급을 입력해주세요.");
	}
	else if(document.querySelector("input[name='mjr']").value==""){
		document.querySelector("input[name='mjr']").focus();
		alert("교직(전공)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='emp_zip']").value==""){
		alert("주소를 검색해주세요.");
	}
	else if(document.querySelector("input[name='emp_daddr']").value==""){
		document.querySelector("input[name='emp_daddr']").focus();
		alert("상세주소를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_bank_nm']").value==""){
		document.querySelector("input[name='dlng_bank_nm']").focus();
		alert("은행명을 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_actno']").value==""){
		document.querySelector("input[name='dlng_actno']").focus();
		alert("계좌번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dpstr_nm']").value==""){
		document.querySelector("input[name='dpstr_nm']").focus();
		alert("예금주를 입력해주세요.");
	}
	else{
		if(confirm("입력하신 정보로 상담을 추가하시겠습니까?")){
			emuser_add_frm.submit();
		}
	}
}

import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	FindAndReplace,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	Indent,
	IndentBlock,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ko.js';

let editor;

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'findAndReplace',
			'selectAll',
			'|',
			'heading',
			'style',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'specialCharacters',
			'horizontalLine',
			'link',
			'insertTable',
			'blockQuote',
			'|',
			'outdent',
			'indent',
			'|',
			'accessibilityHelp'
		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		AccessibilityHelp,
		Autoformat,
		AutoLink,
		Autosave,
		BlockQuote,
		Bold,
		Essentials,
		FindAndReplace,
		GeneralHtmlSupport,
		Heading,
		HorizontalLine,
		Indent,
		IndentBlock,
		Italic,
		Link,
		Paragraph,
		SelectAll,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Style,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		Underline,
		Undo
	],
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	language: 'ko',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	placeholder: 'Type or paste your content here!',
	style: {
		definitions: [
			{
				name: 'Article category',
				element: 'h3',
				classes: ['category']
			},
			{
				name: 'Title',
				element: 'h2',
				classes: ['document-title']
			},
			{
				name: 'Subtitle',
				element: 'h3',
				classes: ['document-subtitle']
			},
			{
				name: 'Info box',
				element: 'p',
				classes: ['info-box']
			},
			{
				name: 'Side quote',
				element: 'blockquote',
				classes: ['side-quote']
			},
			{
				name: 'Marker',
				element: 'span',
				classes: ['marker']
			},
			{
				name: 'Spoiler',
				element: 'span',
				classes: ['spoiler']
			},
			{
				name: 'Code (dark)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-dark']
			},
			{
				name: 'Code (bright)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-bright']
			}
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	translations: [translations]
};

ClassicEditor.create(document.querySelector('#editor'), editorConfig).then(newEditor => {
				editor = newEditor;
			}).catch(error => {
				console.error(error);
			});

document.querySelector("#add_notice_btn").addEventListener("click", function() {
	var editorData = editor.getData();
	if (notice_add_frm.ntc_mttr_ttl.value == "") {
		alert("공지사항 제목을 입력해주세요.");
		notice_add_frm.ntc_mttr_ttl.focus();
	}
	else if (editorData == "") {
		alert("공지 내용을 입력해주세요.");
		document.querySelector(".ck-editor__editable_inline").focus();
	}
	else {
		if (confirm("이대로 등록하시겠습니까?")) {
			notice_add_frm.submit();
		}
	}
});


