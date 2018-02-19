var newDiv = document.createElement("div");
var chatClass = document.createAttribute("class");
var page_id = document.createAttribute("page_id");
var ref = document.createAttribute("ref");
var free_product_match = "฿0.00";
chatClass.value = "fb-customerchat";
page_id.value = "173416783249972";
ref.value = "website_taladtangtang";
newDiv.setAttributeNode(chatClass);
newDiv.setAttributeNode(page_id);
newDiv.setAttributeNode(ref);
$('body').append(newDiv);
window.fbMessengerPlugins = window.fbMessengerPlugins || {
init: function () {
  FB.init({
    appId            : '1678638095724206',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
}, callable: []
};
window.fbAsyncInit = window.fbAsyncInit || function () {
window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
window.fbMessengerPlugins.init();
};
setTimeout(function () {
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
}, 0);

$("a").click(function(e) {
if($('.ecwid-productBrowser-price').text() == free_product_match)console.log("Is Free Product");
});  
// Ecwid.OnPageLoaded.add(function(page) {
//   widgets = Ecwid.getInitializedWidgets();
//   // if storefront widget is present on this page
//   for (i = 0; i < widgets.length ; i++) {
//     if (widgets[i] == "ProductBrowser") {
//       if ('CART' == page.type) {
//         Ecwid.Cart.calculateTotal(function(order) {
//           checkSubtotal(order);
//         });
//       }
//     }
//   }
// });

      
    
