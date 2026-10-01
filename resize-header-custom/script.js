$(function() {
    // 授業コード
    // ブラウザをスクロール
    // $(window).scroll(() => {
    //     // スクロール量を取得し、300px超えているかチェック
    //     if($(this).scrollTop() > 300) {
    //         // 超えている場合：header要素にsmallクラスを追加
    //         $("header").addClass("small");
    //     } else {
    //         // 超えていない場合：header要素からsmallクラスを削除
    //         $("header").removeClass("small");
    //     }
    // });


    // カスタム
    // opacity（透明度）と visibility（表示/非表示）を使ってフェードアニメーションを制御
    let lastScrollTop = 0;

    $(window).scroll(() => {
        let currentScroll = $(this).scrollTop();

        if(currentScroll > 140) {
            $("header").addClass("small");

            if(currentScroll > lastScrollTop) {
                $("header").addClass("hide");
            } else {
                $("header").removeClass("hide");
            }
        } else {
            $("header").removeClass("small");
            $("header").removeClass("hide");
        }

        lastScrollTop = currentScroll;
    });
});