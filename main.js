$(function () {
  $("#button_push").click(function () {
    let inputtarget = parseInt($("#inputtarget").val());
    if (isNaN(inputtarget)) {
      alert("半角数字のみを入力");
      console.log(typeof inputtarget);
      return;
    }
    if (inputtarget < 0) {
      alert("-が入力されています");
      return;
    }
    let tax;

    if ($("#tax-10").prop("checked")) {
      tax = 10;
    } else if ($("#tax-8").prop("checked")) {
      tax = 8;
    }
    //税込価格で計算する
    let total = Math.round(inputtarget * (tax / 100 + 1));
    $("#total").val(total);
  });
});
