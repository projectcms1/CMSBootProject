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


// 모달 상세보기 INPUT
const notice_title = document.getElementById("notice_title");
const notice_number = document.getElementById("notice_number");
const writer_name = document.getElementById("writer_name");
const inq_cnt = document.getElementById("inq_cnt");
const write_date = document.getElementById("write_date");
const ntc_clsf_nm = document.getElementById("ntc_clsf_nm");
const existingOriginName = document.getElementById("atchfile_original_name");
const existingFileName = document.getElementById("atchfile_name");
const ntc_fix_yn = document.getElementById("ntc_fix_yn");

const changeFileDeleteBtn = document.querySelector("#changeFileDeleteBtn");
let is_file_delete = false;
let exFileName = '';

document.querySelectorAll(".notice-modal-button").forEach(function(oneModalButton) {
	oneModalButton.addEventListener("click", function() {
		fetch('./admin_notice_detail/' + this.value, {
			method : "POST",
			headers : { "content-type" : "application/x-www-form-urlencoded" }
		}).then(function(result_data) {
			return result_data.json();
		}).then(function(result_res) {
			makeOpeningModal(result_res);
		}).catch(function() {
			alert("오류가 발생하여 새로고침합니다.");
			location.reload();
		});
	});
});

function makeOpeningModal(detailData) {
	notice_title.value = detailData.ntc_mttr_ttl;
	notice_number.value = detailData.ntc_mttr_sn;
	writer_name.value = detailData.wrtr_nm;
	inq_cnt.value = detailData.inq_cnt;
	write_date.value = detailData.wrt_dt;
	ntc_clsf_nm.value = detailData.ntc_clsf_nm;
	ntc_fix_yn.value = detailData.ntc_fix_yn;
	if (detailData.atch_file_nm != null) {
		document.getElementById("existingFileBlock").style.display = "block";
		existingOriginName.value = detailData.orgnl_atch_file_nm;
		existingFileName.value = detailData.atch_file_nm;
		exFileName = detailData.orgnl_atch_file_nm;
	}
	else {
		document.getElementById("existingFileBlock").style.display = "none";
		existingOriginName.value = '';
		existingFileName.value = '';
		exFileName = '';
	}
	editor.setData(detailData.ntc_cn);
}

// 이미 올라간 첨부파일 핸들링 버튼
changeFileDeleteBtn.addEventListener("click", function() {
	if (is_file_delete) {
		is_file_delete = false;
		changeFileDeleteBtn.innerHTML = "삭제";
		existingOriginName.value = exFileName;
	}
	else {
		is_file_delete = true;
		changeFileDeleteBtn.innerHTML = "취소";
		existingOriginName.value = '';
	}
});

//공지사항 상세정보 수정 기능
document.querySelector("#update_noticedata").addEventListener('click', function() {
	if (confirm("정말로 정보를 수정하시겠습니까?")) {
		document.getElementById("is_file_delete").value = is_file_delete;
		notice_detail_frm.submit();
	}
});