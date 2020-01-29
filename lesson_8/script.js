/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: "./image/christ.jpg",
    fullview: "./image/christ-the-redeemer-Big.jpg",
    alt: "alt text 1"
  },
  {
    preview: "./image/man-and-woman.jpg",
    fullview: "./image/man-and-woman-Big.jpg",
    alt: "alt text 2"
  },
  {
    preview: "./image/people-inside.jpg",
    fullview: "./image/people-inside-building-Big.jpg",
    alt: "alt text 3"
  },
  {
    preview: "./image/photo-of-cloud.jpg",
    fullview: "./image/photo-of-cloud-Big.jpg",
    alt: "alt text 4"
  },
  {
    preview: "./image/two-men-performs.jpg",
    fullview: "./image/two-men-performs-Big.jpg",
    alt: "alt text 5"
  },
  {
    preview: "./image/woman-wearing.jpg",
    fullview: "./image/woman-wearing-Big.jpg",
    alt: "alt text 6"
  }
];

// console.log(galleryItems);

const refs = {
  preview: document.querySelector(".preview"),
  fullview: document.querySelector(".fullview"),
  imageGallery: document.querySelector(".image-gallery")
};

// console.log(refs.preview);

const createSmallImage = arr => {
  refs.fullview.innerHTML = `<img class='image' src='${galleryItems[0].fullview}'/>`;
  const drawPreview = arr.map(elem => {
    // console.log(elem.preview);

    return `<li class='list_container'><img class='image' src='${elem.preview}'  data-fullview='${elem.fullview}'/></li>`;
  });

  refs.preview.insertAdjacentHTML("beforeend", drawPreview.join(""));
  // console.log(drawPreview);
};

createSmallImage(galleryItems);

const showPreview = evt => {
  if (
    evt.target.nodeName !== "IMG" ||
    Object.keys(evt.target.dataset).length === 0
  ) {
    return;
  }
  // console.log(evt.target);
  // console.log(Object.keys(evt.target.dataset).length);
  const bigImage = evt.target.dataset.fullview;
  const replaceFullview = refs.fullview.firstChild;
  // console.log(replaceFullview);

  replaceFullview.setAttribute("src", `${bigImage}`);
};

refs.imageGallery.addEventListener("click", showPreview);

// const someObj = {
//   name: "Max",
//   age: 18
// };

// console.log(Object.keys(someObj).length);
