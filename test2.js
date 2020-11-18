//https://ekb.esplus.ru/feedback/

const validate_fields = (form_data) => {
  for(let [name, value] of form_data) {
    if (!value) {
      return false;
    }
  }
  return true;
}

const getter = () => {
  [...document.forms].forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form_data = new FormData(form); 
      if (validate_fields(form_data)) {
        try {
          const response = await fetch('/restfull_api', {
            method: 'POST',
            body: form_data
          })
        }
        catch(err) {
          console.log(err);
        }
      } else {
        console.log('invalid form');
      }
    })
  })
};

getter();
