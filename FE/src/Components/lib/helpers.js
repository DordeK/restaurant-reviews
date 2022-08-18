import axios from 'Components/lib/axios'

export const addRestaurant = async ({e, navigation, location}) => {
    e.preventDefault()
    let formData = new FormData()
    const name = e.target.name.value;
    const menu = e.target.menu.files;
    const rating = e.target.rating.value;
    const images = e.target.images.files;

    for (var i = 0; i < images.length; i++) formData.append('images[]', images[i])
    for (var i = 0; i < menu.length; i++) formData.append('menu[]', menu[i])
    formData.append('ocena', parseInt(rating, 10))
    formData.append('ime', name)
    formData.append('location', JSON.stringify(location))

    const {data, status} = await axios.post('/restaurant', formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     })

     if (status === 201 ){
         navigation(`/restaurant/${data}`)
     }
 }

export function getPics() {
  const imgs = document.querySelectorAll('img');
  const fullPage = document.querySelector('#fullpage');
  const body = document.querySelector('body');

  imgs.forEach(img => {
    img.addEventListener('click', function() {
      body.style.overflow = 'hidden'
      fullPage.style.backgroundImage = 'url(' + img.src + ')';
      fullPage.style.display = 'block';      
    });
  });
}