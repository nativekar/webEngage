const copyToClipboard = (element) => {
  try {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Coupon code copied successfully");
  } catch (e) {
    alert("There was an error in copying the coupon code");
  }
};
