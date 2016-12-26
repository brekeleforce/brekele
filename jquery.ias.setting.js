jQuery('document').ready(function($) {
    setup_ajax_pagination();
});
  
function setup_ajax_pagination()
{
jQuery.ias({
 container  : ".main-inner",
  item      : ".post-outer",
  pagination    : ".main-inner .blog-pager",
  next      : ".blog-pager a.blog-pager-older-link",
    history:false,
    loader: "<img src='https://2.bp.blogspot.com/-qTdUB7xPq3k/WGBtraSlFZI/AAAAAAAAAIM/Kv_z_ZYkLnwIY7VmNGibiWXz33-CFKi-gCLcB/s1600/test.gif'/>",
});
}