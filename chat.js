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

const auth = getAuth();


// サインアップ（新規登録）
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // 登録成功
    console.log(userCredential.user);
  })
  .catch((error) => {
    console.error(error);
  });

// ログイン
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // ログイン成功
    console.log(userCredential.user);
  })
  .catch((error) => {
    console.error(error);
  });

// ログアウト
signOut(auth).then(() => {
  // ログアウト成功
}).catch((error) => {
  console.error(error);
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
