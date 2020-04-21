
document.addEventListener('DOMContentLoaded', function(event) {
  // new Glide('glide').mount;
  var rellax = new Rellax('.rellax');

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
});

var mainContainer = document.getElementById('maincontainer');

let myJson = [
  {
  'title': 'Lineworks',
  'images': ['https://s3.amazonaws.com/mk-website-media/wp-content/uploads/2018/10/19001544/Wallpaper-IngridMika-Nixon-1.jpg', 'https://lh3.googleusercontent.com/proxy/iuAAoVF0nunjK4SOx6zlUACSpjCVognDah13xfhBKd7PA7wF7fGE6w5dXr9K1uKqc7UChmv3LERJHiUmN1HiipX_kUQQxNK5hIP5GbjPvFWNQML3ChOvPh3yphdd0w', 'https://images.squarespace-cdn.com/content/v1/55ffe109e4b07406ad1d5bc4/1560258235140-AK9FMI8P41AI3RXWL8GP/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/dft-001.jpg?format=2500w', 'https://i.etsystatic.com/10104889/r/il/860446/1342553961/il_570xN.1342553961_qeuv.jpg','https://i.etsystatic.com/20625642/r/il/fc7bf0/1975898342/il_570xN.1975898342_7kh5.jpg']
},
{
  'title': 'Paintings',
  'images':['https://mymodernmet.com/wp/wp-content/uploads/2019/12/anatastasia-trusova-paintings-3.jpg', 'https://afremov.com/images/product/image_497.jpeg', 'https://www.allartclassic.com/img/author_pictures/Two_Boats_with_Reflections_in_a_Lake.jpg', 'https://afremov.com/images/product/1082831_ACROSS_THE_OCEAN_20x24_2.jpg', 'https://cdn10.bigcommerce.com/s-wovv8wm/products/1028/images/3688/IMG_3213__42721.1560380544.1280.1280.png?c=2']
},
{
  'title':'life drawings',
  'images': ['https://live.staticflickr.com/2673/3680598005_0421a345ce_c.jpg','https://www.lovelifedrawing.com/wp-content/uploads/2019/08/Screenshot-2019-08-08-at-19.54.16-370x200.jpg','https://jenniferperlmuttergallery.com/wp-content/uploads/2019/03/lifedrawing-1080x675.jpg', 'https://www.downtownartery.com/sites/default/files/styles/800px_wide/public/events/posters/life-drawing.jpg?itok=jSdUfHio', 'https://files.northernbeaches.nsw.gov.au/sites/default/files/styles/gi--main-thumbnail/public/images/events/life-drawing-masterclass-johannes-leak/box550-edited.jpg?itok=A0QgUUje']
}

];


for (var i = 0; i < myJson.length; i++){
  makeElement(myJson[i]);
}

function makeElement(incomingJson){
  let newElement = document.createElement('DIV');
  newElement.classList.add('content');


  let title = document.createElement('H2');
  title.innerHTML = incomingJson['title'];
  newElement.appendChild(title);
  title.classList.add('rellax');
  let newparaAtt = document.createAttribute('data-rellax-speed');
  newparaAtt.value = "-0.8";
  title.setAttributeNode(newparaAtt);

  let newGlideElement = document.createElement('DIV');
  newGlideElement.classList.add('glide');
  newElement.appendChild(newGlideElement);

  let newGlideTrack = document.createElement('DIV');
  newGlideTrack.classList.add('glide__track');
  let newAttribute = document.createAttribute('data-glide-el');
  newAttribute.value = "track";
  newGlideTrack.setAttributeNode(newAttribute);

  newGlideElement.appendChild(newGlideTrack);

  let newSlideshow = document.createElement('UL');
  newSlideshow.classList.add("glide__slides");
  newGlideTrack.appendChild(newSlideshow);

  for (var i = 0; i < incomingJson['images'].length; i++){
  let works = document.createElement('IMG');
  let newImgElement = document.createElement('LI');
  works.classList.add('lozad');
  newImgElement.classList.add('glide__slide');
  works.src = 'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  let newimgatt = document.createAttribute('data-src');
  newimgatt.value = incomingJson['images'][i];
  works.setAttributeNode(newimgatt);
  newSlideshow.appendChild(newImgElement);
  newImgElement.appendChild(works);
}
  // let arrows = document.createElement('DIV');
  // let arrowAttribute = document.createAttribute('data-glide-el');
  // arrows.classList.add("glide__arrows");
  // arrowAttribute.value='contols';
  // arrows.setAttributeNode(arrowAttribute);
  // newGlideElement.appendChild(arrows);
  //
  // let button1 = document.createElement('Button');
  // // button1.classList.add("glide__arrow glide__arrow--left");
  // mainContainer.appendChild(newElement);
  // let button1Attribute = document.createAttribute('data-glide-dir');
  // button1Attribute.value= '<';
  // button1.setAttributeNode(button1Attribute);
  // let button2 = document.createElement('Button');
  // button2.classList.add("glide__arrow glide__arrow--right");
  // let button2Attribute = document.createAttribute('data-glide-dir');
  // button2.setAttributeNode(button2Attribute);
  //
  //
  // arrows.appendChild(button1);
  // arrows.appendChild(button2);
  mainContainer.appendChild(newElement);
}
