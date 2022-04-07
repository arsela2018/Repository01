
const useWhatsapp = (mobileNumber, message) => {
  let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

  let url = `https://web.whatsapp.com/send?phone=${number}`;

  url += `&text=${encodeURI(message)}&app_absent=0`;

  window.open(url);
};

module.exports = {
  useWhatsapp,
};
