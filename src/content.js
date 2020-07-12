function hideText(strings) {
  const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'span', 'p', 'em', 'a', 'ytd-rich-item-renderer', 'g-accordion-expander', 'g-inner-card'];
  strings.forEach((text) => {
    elements.forEach((element) => {
      $(`${element}:contains("${text}")`).parent().hide();
    });
  });
}

$(document).ready(function () {
  const strings = ['Covid-19', 'COVID-19', 'COVID', 'covid', 'Coronavirus', 'coronavirus'];

  hideText(strings);

  setTimeout(() => {
    hideText(strings);
  }, 2000);
});
