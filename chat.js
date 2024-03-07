// アファメーション一覧の初期化
let affirmations = [];

$(document).ready(function() {
    // ローカルストレージからアファメーションを取得して表示する
    displayAffirmations();

    // 「追加」ボタンがクリックされたときの処理
    $("#addAffirmation").on("click", function() {
        var newAffirmation = $("#newAffirmation").val();
        addAffirmation(newAffirmation);
    });

    // チャットメッセージの送信イベント
    $("#send").on("click", function () {
        const message = $("#text").val();
        
        // メッセージ内に特定のキーワードが含まれているかチェック
        if (message.includes("アファメーション")) {
            // アファメーション一覧に追加
            affirmations.push(message);
            
            // ローカルストレージにアファメーションを追加
            addAffirmationToLocalStorage(message);
            
            // アファメーション一覧を更新
            updateAffirmations();
        }
        
        // その他の処理...
    });
});

// ローカルストレージにアファメーションを追加する関数
function addAffirmationToLocalStorage(affirmation) {
    // 保存されているアファメーションを取得し、新しいアファメーションを追加
    var affirmationsFromStorage = JSON.parse(localStorage.getItem("affirmations")) || [];
    affirmationsFromStorage.push(affirmation);

    // 更新されたアファメーションをローカルストレージに保存
    localStorage.setItem("affirmations", JSON.stringify(affirmationsFromStorage));
}

// ローカルストレージからアファメーションを取得して表示する関数
function displayAffirmations() {
    // 保存されているアファメーションを取得
    var affirmationsFromStorage = JSON.parse(localStorage.getItem("affirmations")) || [];

    // アファメーション一覧を表示する要素の取得
    const $affirmationList = $("#affirmationList");
    
    // 一覧をクリアしてから再描画
    $affirmationList.empty();
    
    // アファメーション一覧をループして表示
    affirmationsFromStorage.forEach((affirmation, index) => {
        $affirmationList.append(`<div>${index + 1}. ${affirmation}</div>`);
    });
}

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

// アファメーション一覧を更新する関数
function updateAffirmations() {
    // アファメーション一覧を表示する要素の取得
    const $affirmationList = $("#affirmationList");
    
    // 一覧をクリアしてから再描画
    $affirmationList.empty();
    
    // アファメーション一覧をローカルストレージから取得して表示
    displayAffirmations();
}