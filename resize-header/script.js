$(function() {
    // ブラウザをスクロール
    $(window).scroll(() => {
        // スクロール量を取得し、300px超えているかチェック
        if($(this).scrollTop() > 300) {
            // 超えている場合：header要素にsmallクラスを追加
            $("header").addClass("small");
        } else {
            // 超えていない場合：header要素からsmallクラスを削除
            $("header").removeClass("small");
        }
    });
});