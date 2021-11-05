let urlFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let url = document.createElement(`div`);
  object.setAttribute(
    `value`,
    backgroundImage[0].path
  );
  object.setAttribute(
    `placeholder`,
    `tap to paste`
  );
  object.setAttribute(
    `type`,
    `text`
  );
  form.setAttribute(
    `action`,
    `#`
  );
  object
    .addEventListener(
      'click', (evt) =>
        {
          navigator.clipboard.readText()
          .then((result) => {
              object.value = result;
          })
          .catch((error) => {
              //console.log(error);
          });
        },
        {
          passive:
          false
        }
    );

  object.classList.add("urlInput");
  object.classList.add(`imageURL`);
  url.classList.add("background");
  object.classList.add(`text`);
  form.classList.add(`url`);
  form.append(object);
  url.append(form);
  url.id = `url`;
  return url;
};
