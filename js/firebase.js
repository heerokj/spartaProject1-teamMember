// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2S7LSOie7Hkwi7qtUZhb0E7NZELNHlHg",
    authDomain: "sparta-20ea5.firebaseapp.com",
    projectId: "sparta-20ea5",
    storageBucket: "sparta-20ea5.appspot.com",
    messagingSenderId: "2083080924",
    appId: "1:2083080924:web:9f239364fc43e1dde3c219",
    measurementId: "G-Q2DH9C3X1S"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 게시글 불러오기
const board = collection(db, "board_test");
let docs = await getDocs(query(board, orderBy('date', 'desc')));
docs['docs'].forEach((doc, i) => {
    let id = doc.id;
    let row = doc.data();

    let idx = docs['docs'].length - i;
    let writer = row['writer'];
    let content = row['content'];
    let date = row['date'].toDate('mm/dd');

    let temp_html = `
    <tr>
        <td>${idx}</td>
        <td>${content}</td>
        <td>${writer}</td>
        <td>${(date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getDate()}</td>
        <td class="tablebtns"><button class="updatebtn" value="${id}">수정</button></td>
        <td class="tablebtns"><button class="deletebtn" value="${id}">삭제</button></td>
    </tr>
    `;

    $('#articles').append(temp_html);
});

// 게시글 등록하기
$("#postbtn").click(async function () {
    let writer = $('#writer').val();
    let content = $('#content').val();
    let date = new Date();

    if(writer != "" && content != "") {
        let doc = {
            'writer': writer,
            'content': content,
            'date': date
        };
        await addDoc(board, doc);

        window.location.reload();
    }
    else {
        alert("작성자나 내용에 글을 입력해주세요");
    }
});

// 게시글 수정하기
$('.updatebtn').click(async function () {
    let this_id = $(this).val();
    let content = prompt("수정하실 내용을 입력하세요");

    if (content.length != 0) {
        await updateDoc(doc(db, "board_test", this_id), {
            'content': content
        });

        window.location.reload();
    }
    else {
        alert("수정하실 내용을 입력하지 않아 수정창을 종료합니다");
    }
});

// 게시글 삭제하기
$('.deletebtn').click(async function () {
    let this_id = $(this).val();
    const isDel = confirm("게시글을 삭제하시겠습니까?");

    if (isDel == true) {
        await deleteDoc(doc(db, "board_test", this_id));
        alert("삭제가 완료되었습니다!");
        window.location.reload();
    }
    else {
        alert("삭제가 취소되었습니다");
    }
    
});