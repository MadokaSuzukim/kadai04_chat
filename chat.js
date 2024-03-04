// LINEで共有
document.getElementById('shareOnLine').addEventListener('click', function() {
    var text = encodeURIComponent(document.getElementById('text').value);
    var url = `https://line.me/R/msg/text/?${text}`;
    window.open(url, '_blank');
});

// Twitterで共有
document.getElementById('shareOnTwitter').addEventListener('click', function() {
    var text = encodeURIComponent(document.getElementById('text').value);
    var tweetUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(tweetUrl, '_blank');
});

// 切り替え機能
document.getElementById('fontSize').addEventListener('change', function() {
    const size = this.value;
    document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
    document.body.classList.add(`font-size-${size}`);
});

document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
});

document.getElementById('language').addEventListener('change', function() {
    // 言語設定の変更は、多言語対応が必要です。ここではプレースホルダーとして機能します。
    alert('言語設定を変更しました: ' + this.value);
});

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    // Your Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// サインアップ（新規登録）
document.getElementById('signup').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// ログイン
document.getElementById('login').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// ログアウト
document.getElementById('logout').addEventListener('click', function() {
    signOut(auth).then(() => {
        console.log("ログアウトしました");
    }).catch((error) => {
        console.error(error);
    });
});

// チャットをフィルタリング
document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    // メモのリストをフィルタリングして、検索クエリにマッチするメモのみを表示
    // この部分は使用しているバックエンドやフロントエンドのフレームワークによって異なります
});

// ハンバーガーアイコン
document.getElementById('hamburgerIcon').addEventListener('click', function() {
    var settings = document.getElementById('settings');
    if (settings.style.display === 'none') {
        settings.style.display = 'block';
    } else {
        settings.style.display = 'none';
    }
});

