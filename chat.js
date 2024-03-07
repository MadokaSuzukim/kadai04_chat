// アファメーション一覧の初期化
let affirmations = [];

// チャットメッセージの送信イベント
$("#send").on("click", function () {
    const message = $("#text").val();
    
    // メッセージ内に特定のキーワードが含まれているかチェック
    if (message.includes("アファメーション")) { // ここでは "アファメーション" というキーワードを検索する例としています
        // アファメーション一覧に追加
        affirmations.push(message);
        
        // アファメーション一覧を更新
        updateAffirmations();
    }
    
    // その他の処理...
});

// アファメーション一覧を更新する関数
function updateAffirmations() {
    // アファメーション一覧を表示する要素の取得
    const $affirmationList = $("#affirmationList");
    
    // 一覧をクリアしてから再描画
    $affirmationList.empty();
    
    // アファメーション一覧をループして表示
    affirmations.forEach((affirmation, index) => {
        $affirmationList.append(`<div>${index + 1}. ${affirmation}</div>`);
    });
}

// チャットメッセージの送信イベント
$("#send").on("click", function () {
    const message = $("#text").val();
    
    // メッセージ内に特定のキーワードが含まれているかチェック
    if (message.includes("アファメーション")) { // ここでは "アファメーション" というキーワードを検索する例としています
        // アファメーション一覧に追加
        affirmations.push(message);
        
        // アファメーション一覧を更新
        updateAffirmations();
    }
    
    // その他の処理...
});

// アファメーション一覧を更新する関数
function updateAffirmations() {
    // アファメーション一覧を表示する要素の取得
    const $affirmationList = $("#affirmationList");
    
    // 一覧をクリアしてから再描画
    $affirmationList.empty();
    
    // アファメーション一覧をループして表示
    affirmations.forEach((affirmation, index) => {
        $affirmationList.append(`<div>${index + 1}. ${affirmation}</div>`);
    });
}

$(document).ready(function() {
    // ローカルストレージからアファメーションを取得して表示する
    displayAffirmations();

    // 「追加」ボタンがクリックされたときの処理
    $("#addAffirmation").on("click", function() {
        var newAffirmation = $("#newAffirmation").val();
        addAffirmation(newAffirmation);
    });
});

// アファメーションをローカルストレージに追加する関数
function addAffirmation(affirmation) {
    // 保存されているアファメーションを取得し、新しいアファメーションを追加
    var affirmations = JSON.parse(localStorage.getItem("affirmations")) || [];
    affirmations.push(affirmation);

    // 更新されたアファメーションをローカルストレージに保存
    localStorage.setItem("affirmations", JSON.stringify(affirmations));

    // アファメーション一覧を更新して表示
    displayAffirmations();
}

// ローカルストレージからアファメーションを取得して表示する関数
function displayAffirmations() {
    var affirmations = JSON.parse(localStorage.getItem("affirmations")) || [];
    var $affirmationList = $("#affirmationList");
    $affirmationList.empty();
    affirmations.forEach(function(affirmation, index) {
        $affirmationList.append("<div>" + (index + 1) + ". " + affirmation + "</div>");
    });
}