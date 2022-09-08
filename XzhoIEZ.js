if (!userAddonObject) {
  var userAddonObject = [
    {
      users: 1,
      user_count_text: '1 User',
      price: 129,
      description: 'No Discount',
      slider_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a72258fbb15e1fe68c8_pricing_emoji_person_computer.png',
      card_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a19ed87b013b781ff03_pricing_emoji_person_computer_100x100.png',
      card_plan_excerpt: 'Ideal for Small Agencies looking to Grow'
    },
    {
      users: 2,
      user_count_text: '2 User',
      price: 229,
      description: '5% OFF',
      slider_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a7164bb4e2da7ab51d4_pricing_emoji_car.png',
      card_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a18c43a7f2d6ea5568f_pricing_emoji_car_100x100.png',
      card_plan_excerpt: 'Ideal for Small Agencies looking to Grow'
    },
    {
      users: 3,
      user_count_text: '3 User',
      price: 349,
      description: '10% OFF',
      slider_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a716f7b0e3e50e142f2_pricing_emoji_ship.png',
      card_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a19ed87b0994a81ff02_pricing_emoji_ship_100x100.png',
      card_plan_excerpt: 'Ideal for Small Agencies looking to Grow'
    },
    {
      users: 4,
      user_count_text: '4 User',
      price: 449,
      description: '15% OFF',
      slider_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a7164bb4eb9d4ab51d5_pricing_emoji_plane.png',
      card_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a19bf708f5ff90ce481_pricing_emoji_plane_100x100.png',
      card_plan_excerpt: 'Ideal for Small Agencies looking to Grow'
    },
    {
      users: 5,
      user_count_text: '5 User',
      price: 499,
      description: '20% OFF',
      slider_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a701424853c75b80859_pricing_emoji_rocket.png',
      card_image_url:
        'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a19d53f0e72ddd82e99_pricing_emoji_rocket_100x100.png',
      card_plan_excerpt: 'Ideal for Small Agencies looking to Grow'
    }
  ]
}
if (!customPlanObject) {
  var customPlanObject = {
    users: 0,
    user_count_text: userAddonObject.length + '+ User',
    price: null,
    description: 'Custom',
    slider_image_url:
      'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63158a71bfb65aab748a107a_pricing_emoji_settings.png',
    card_image_url:
      'https://uploads-ssl.webflow.com/62d539593504f114702c1995/63173a193f94a2b1428b8eb6_pricing_emoji_settings_100x100.png',
    card_plan_excerpt: 'Need more than ' + userAddonObject.length + ' User'
  }
}
var link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href =
  'https://cdn.jsdelivr.net/gh/vatsaldaveVD/bookish-guacamole/lfYjxwr.css'
document.getElementsByTagName('head')[0].appendChild(link)

document.documentElement.style.setProperty(
  '--no_of_user_addons',
  userAddonObject.length
)
document.documentElement.style.setProperty(
  '--total_user_addons',
  userAddonObject.length + 1
)

userAddonObject.forEach((addonObject, index) => {
  document.getElementById(
    'user-amount-slider'
  ).innerHTML += `<input type="radio" class="user-addon-input" data-cke-saved-name="user-amount" name="user-addon" id="${
    addonObject.users
  }" value="${addonObject.users}" required ${
    index == 0 ? 'checked' : ''
  } /><label for="${
    addonObject.users
  }" class="user-addon-label"><div class="user-info-container"><div class="user-count">${
    addonObject.user_count_text
  }</div><div class="user-slider-amount-info-wrapper"><div class="user-slider-price">$${
    addonObject.price
  }</div><div class="user-slider-price-description ${
    index == 0 ? 'text-gray' : ''
  }">${addonObject.description}</div></div></div></label>`
})
document.getElementById(
  'user-amount-slider'
).innerHTML += `<input type="radio" class="user-addon-input" data-cke-saved-name="user-amount" name="user-addon" id="${customPlanObject.users}" value="${customPlanObject.users}" required /><label for="${customPlanObject.users}" class="user-addon-label"><div class="user-info-container"><div class="user-count">${customPlanObject.user_count_text}</div><div class="user-slider-amount-info-wrapper"><div class="user-slider-price-description text-gray">${customPlanObject.description}</div><div class="user-slider-price visibility-hidden">${customPlanObject.price}</div></div></div></label>`

let dynamicPictureChange = document.createElement('div')
dynamicPictureChange.setAttribute('id', 'user-amount-pos')
document.getElementById('user-amount-slider').appendChild(dynamicPictureChange)

let sliderStyleTag = document.createElement('style')
userAddonObject.forEach((object, index, arrayOfUsers) => {
  sliderStyleTag.textContent += `form #user-amount-slider .user-addon-input:checked:nth-child(${index +
    (index + 1)})~#user-amount-pos {background: url(${
    object.slider_image_url
  });left: ${(index + 1) * Math.ceil(100 / (arrayOfUsers.length + 1)) -
    Math.ceil(100 / (arrayOfUsers.length + 1) / 2) -
    Math.ceil(arrayOfUsers.length / 2 >= index ? 0 : 1)}%;}`
})
sliderStyleTag.textContent += `form #user-amount-slider .user-addon-input:checked:nth-child(${userAddonObject.length +
  (userAddonObject.length + 1)})~#user-amount-pos {background: url(${
  customPlanObject.slider_image_url
});left: ${(userAddonObject.length + 1) *
  Math.ceil(100 / (userAddonObject.length + 1)) -
  Math.ceil(100 / (userAddonObject.length + 1) / 2)}%;}`
document.body.appendChild(sliderStyleTag)

//Add Change Event Listners
let userAddonSliderButtons = document.getElementsByName('user-addon')
userAddonSliderButtons.forEach((element, index) => {
  element.addEventListener('change', (eventObject) => {
    let userObject, userObjectIndex
    userAddonObject.find((object, index) => {
      if (eventObject.target.id == object.users) {
        userObject = object
        userObjectIndex = index
        return
      }
    })
    if (userObject) {
      document.getElementById('plan-image').src = userObject.card_image_url
      document.getElementById(
        'plan-price-after-discount'
      ).innerHTML = `<sup class="currency-symbol">$</sup>${userObject.price}<span class="plan-period"> For Life</span>`
      if (userObjectIndex != 0) {
        document.getElementById(
          'plan-original-price'
        ).innerHTML = `$${Math.floor(
          (100 * userObject.price) / (100 - 5 * userObjectIndex)
        )}`
      } else {
        document.getElementById('plan-original-price').innerHTML = ''
      }
      document.getElementById('plan-excerpt').innerHTML =
        userObject.card_plan_excerpt
      document.getElementById('get-started-button').innerHTML = 'Get Started'
      document.getElementById('get-started-button').onclick = () => {
        window.open(`${domainName}/payments/stripe?users=${userObject.users}`)
      }
    }
    if (eventObject.target.id == 0) {
      document.getElementById('plan-image').src =
        customPlanObject.card_image_url
      document.getElementById('plan-price-after-discount').innerHTML = ''
      document.getElementById('plan-original-price').innerHTML = ''
      document.getElementById('plan-excerpt').innerHTML =
        customPlanObject.card_plan_excerpt
      document.getElementById('get-started-button').innerHTML =
        'Contact Support'
      document.getElementById('get-started-button').onclick = () => {
        window.HubSpotConversations && window.HubSpotConversations.widget.open()
      }
    }
  })
})
