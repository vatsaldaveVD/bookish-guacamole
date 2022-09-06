var customPlanObject = {
  users: userAddonObject.length + 1,
  user_count_text: (userAddonObject.length + 1) + '+ User',
  price: '',
  description: 'Custom',
  image_url: 'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a71bfb65aab748a107a_pricing_emoji_settings.png'
};

document.documentElement.style.setProperty('--no_of_user_addons', userAddonObject.length)
document.documentElement.style.setProperty('--total_user_addons', userAddonObject.length + 1)

userAddonObject.forEach((addonObject, index) => {
  document.getElementById('user-amount-slider').innerHTML += `
      <input type="radio" class="user-addon-input" data-cke-saved-name="user-amount" name="user-addon" id="${addonObject.users}"
          value="${addonObject.users}" required ${index == 0 ? 'checked' : ''} />
        <label for="${addonObject.users}" class="user-addon-label">
          <div class="user-info-container">
            <div class="user-count">${addonObject.user_count_text}</div>
            <div class="user-slider-amount-info-wrapper">
              <div class="user-slider-price">${addonObject.price}</div>
              <div class="user-slider-price-description ${index == 0 ? 'text-gray' : ''}">${addonObject.description}</div>
            </div>
          </div>
        </label>
        `
});
document.getElementById('user-amount-slider').innerHTML += `
      <input type="radio" class="user-addon-input" data-cke-saved-name="user-amount" name="user-addon" id="${customPlanObject.users}"
          value="${customPlanObject.users}" required />
        <label for="${customPlanObject.users}" class="user-addon-label">
          <div class="user-info-container">
            <div class="user-count">${customPlanObject.user_count_text}</div>
            <div class="user-slider-amount-info-wrapper">
              <div class="user-slider-price-description text-gray">${customPlanObject.description}</div>
              <div class="user-slider-price visiblility-hidden">${customPlanObject.price}</div>
            </div>
          </div>
        </label>
        `

let dynamicPictureChange = document.createElement('div');
dynamicPictureChange.setAttribute('id', 'user-amount-pos');
document.getElementById('user-amount-slider').appendChild(dynamicPictureChange);

userAddonObject.forEach((object, index, arrayOfUsers) => {

  // console.log("line 123", (index + 1),
  //   Math.floor(100 / (arrayOfUsers.length + 1)),
  //   Math.ceil((100 / (arrayOfUsers.length + 1)) / 2),
  //   '- Total: ', ((index + 1) * Math.ceil(100 / (arrayOfUsers.length + 1)) - Math.ceil((100 / (arrayOfUsers.length + 1)) / 2)))

  document.body.insertAdjacentHTML("beforeend", `
      <style>
        form #user-amount-slider .user-addon-input:checked:nth-child(${index + (index + 1)})~#user-amount-pos {
          background: url(${object.image_url});
          left: ${((index + 1) * Math.ceil(100 / (arrayOfUsers.length + 1)) - Math.ceil((100 / (arrayOfUsers.length + 1)) / 2)) - Math.ceil((arrayOfUsers.length) / 2 >= index ? 0 : 1)}%;
        }
      </style>`)
})

document.body.insertAdjacentHTML("beforeend", `
    <style>
      form #user-amount-slider .user-addon-input:checked:nth-child(${userAddonObject.length + (userAddonObject.length + 1)})~#user-amount-pos {
          background: url(${customPlanObject.image_url});
          left: ${((userAddonObject.length + 1) * Math.ceil(100 / (userAddonObject.length + 1)) - Math.ceil((100 / (userAddonObject.length + 1)) / 2))}%;
      }
    </style>`)
