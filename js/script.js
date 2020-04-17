$(function () {
	//  object-fit-imagesを呼び出し
	objectFitImages();

	// ハンバーガーメニュー
	$(function () {
		$('#js-hamburgerButton').click(function () {
			$('body').toggleClass('is-navActive');

			if ($(this).attr('aria-expanded') == 'false') {
				$(this).attr('aria-expanded', true);
			} else {
				$(this).attr('aria-expanded', false);
			}
		});
	});

	// ページ内リンクをヘッダーの高さ分ずらしてスクロール遷移
	var headerHight = 75; //ヘッダの高さ
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
		$("html, body").animate({ scrollTop: position }, 550, "swing");
		return false;
	});

	// ナビゲーションのリンクをクリックしたらナビゲーションを隠す
	$(".js-nav-list__item > a").click(function () {
		$("body").removeClass("is-navActive");
		$("#js-hamburgerButton").attr("aria-expanded", false);
	});

	// kvを越えたらヘッダーの背景色変更
	$(window).on("scroll", function () {
		let threshold = $("#kv").outerHeight();
		if ($(this).scrollTop() > threshold) {
			$("body").addClass("is-headerActive");
		} else {
			$("body").removeClass("is-headerActive");
		}
	});
	$(window).trigger("scroll");


});
