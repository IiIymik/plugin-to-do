import doRequests from './requests.js';
console.log("🚀 ~ file: main.js ~ line 2 ~ doRequests", doRequests)
import template from '../templates/partials/contetnt.hbs';

window.onload = async () => {
  const contentWrapper = document.getElementById("contentWrapper");

  const getRequest = await doRequests("GET");
  console.log("🚀 ~ file: main.js ~ line 8 ~ window.onload= ~ getRequest", getRequest)
  if (getRequest) {
    contentWrapper.innerHTML = template({ data: getRequest });
  }
}