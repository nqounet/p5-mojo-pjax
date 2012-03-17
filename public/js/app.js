function random(array, num) {
  var a = array;
  var t = {};
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

var satomi = [
  'http://farm7.staticflickr.com/6041/6326770649_3c176e8183_b.jpg',
  'http://farm6.staticflickr.com/5026/5630905589_fa909800f6_b.jpg',
  'http://farm5.staticflickr.com/4041/4635253384_e0a4655ab1_b.jpg',
  'http://farm6.staticflickr.com/5227/5737361986_3db5b2b967_b.jpg',
  'http://farm3.staticflickr.com/2699/4257314189_c28d7be79d_b.jpg',
  'http://farm6.staticflickr.com/5256/5584649566_37535ae3aa_b.jpg',
  'http://farm8.staticflickr.com/7001/6466047681_f27a89ab33_b.jpg',
  'http://farm6.staticflickr.com/5066/5657736914_049fc092eb_b.jpg',
  'http://farm3.staticflickr.com/2379/5818019663_9f953a3f23_b.jpg',
  'http://farm8.staticflickr.com/7166/6466045183_745432c2ac_b.jpg',
  'http://farm7.staticflickr.com/6108/6348331539_5ae919a941_b.jpg',
  'http://farm7.staticflickr.com/6028/5956902090_873fc13154_b.jpg',
  'http://farm6.staticflickr.com/5178/5542598249_5f33328bed_b.jpg',
  'http://farm3.staticflickr.com/2441/3712549178_3097f7ffec_b.jpg',
  'http://farm6.staticflickr.com/5173/5590829908_22a628f7a9_b.jpg',
  'http://farm7.staticflickr.com/6111/6277834997_ac4689501d_b.jpg',
  'http://farm3.staticflickr.com/2216/5736810683_9339911e6c_b.jpg',
  'http://farm7.staticflickr.com/6154/6150567642_df79cc676e_b.jpg',
  'http://farm6.staticflickr.com/5238/5887724062_dd5d8e1f4b_b.jpg',
  'http://farm6.staticflickr.com/5029/5605891097_ed73f899ed_b.jpg',
  'http://farm7.staticflickr.com/6082/6150567772_4cd9dbbcd3_b.jpg',
  'http://farm7.staticflickr.com/6125/5956902140_b8e0a3cf46_b.jpg',
  'http://farm6.staticflickr.com/5061/5581498785_a7513f41b1_b.jpg',
  'http://farm8.staticflickr.com/7039/6864072555_e00ea16b34_b.jpg',
  'http://farm6.staticflickr.com/5057/5415640604_087f73bbc5_b.jpg',
  'http://farm5.staticflickr.com/4090/4982667149_848c2ece20_b.jpg',
  'http://farm7.staticflickr.com/6205/6150015813_74b297e5b6_b.jpg',
  'http://farm6.staticflickr.com/5190/5630906109_47f24390a0_b.jpg',
  'http://farm7.staticflickr.com/6175/6150015661_1a11d86715_b.jpg',
  'http://farm7.staticflickr.com/6003/5956902036_2807886dd5_b.jpg',
  'http://farm6.staticflickr.com/5303/5609375994_9d6a33e8e1_b.jpg',
  'http://farm6.staticflickr.com/5177/5543177636_d5cac7fe53_b.jpg',
  'http://farm6.staticflickr.com/5278/5913395979_ee74422047_b.jpg',
  'http://farm6.staticflickr.com/5302/5657737342_e9462a59cd_b.jpg',
  'http://farm6.staticflickr.com/5061/5595380964_b2b53e6910_b.jpg',
  'http://farm6.staticflickr.com/5017/5508990363_a962905748_b.jpg',
  'http://farm6.staticflickr.com/5264/5612896559_d429b332fe_b.jpg',
  'http://farm6.staticflickr.com/5143/5596705614_0288042fc7_b.jpg',
  'http://farm3.staticflickr.com/2783/4240581237_23409014f3_b.jpg',
  'http://farm3.staticflickr.com/2637/5818586792_5f8e22aef1_b.jpg',
  'http://farm6.staticflickr.com/5061/5582085754_8296f2470e_b.jpg',
  'http://farm6.staticflickr.com/5110/5661155931_2281d90b7a_b.jpg',
  'http://farm6.staticflickr.com/5172/5461316702_4a65ea34b8_b.jpg',
  'http://farm6.staticflickr.com/5022/5631488978_41a7478f17_b.jpg',
  'http://farm6.staticflickr.com/5054/5543178570_d3f98bedbd_b.jpg',
  'http://farm6.staticflickr.com/5106/5616142289_29411d0044_b.jpg',
  'http://farm3.staticflickr.com/2459/3711735431_5e5243c6f6_b.jpg'
];
var slideImages = [];
var temp = random(satomi, 10);
for (var i = 1, l = temp.length; i < l; i++) {
  slideImages.push({
    src: temp[i],
    fade: 3000
  });
}

jQuery( function($) {
  $.vegas
  ('slideshow', {
    backgrounds: slideImages,
    delay: 30000
  })
  ('overlay', {
    opacity: 0.5,
    src:'/vegas/overlays/13.png'
  })
  ;

  // gcp
  prettyPrint();

  // pjax
  $("a.pjax").pjax('#pjaxbody');
});
