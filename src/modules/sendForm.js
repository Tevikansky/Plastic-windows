const sendForm = ({
  formId,
  someElem = []
}) => {
  const form = formId;
  const statusBlock = document.createElement('div');
  const statusLoad = document.createElement('div');
  const loadText = "Загрузка..."
  const errorText = "Ошибка..."
  const successText = "Спасибо! Наш менеджер с вами свяжется!"
  const timer = (input) => {
    setTimeout(() => {
      statusBlock.remove();
    }, 5000)

  }


  const validate = (list) => {
    let success = true

    list.forEach((input) => {
      if (
        ((input.name === "fio") && (input.value.length < 2)) ||
        ((input.name === "phone") && ((input.value.length < 18)))) {
        input.style.border = "1px solid red";
        setTimeout(() => {
          input.style.border = " 1px solid #dfdfdf"
        }, 5000)
        success = false
      }
    })
    return success
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('[type=text]')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.style = 'color: grey; text-align: center; padding-top: 3px'

    statusBlock.textContent = loadText

    statusLoad.classList.add("sk-spinner", "sk-spinner-pulse")
    form.append(statusBlock)
    form.append(statusLoad)






    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      
      const element = document.getElementById(elem.name)
      if (element && elem.type === 'input' && (element.textContent !== "" && element.textContent !== '0')) {
        formBody[elem.name] = element.textContent
      } 
    })


    if (validate(formElements)) {
      sendData(formBody).then(data => {

          statusBlock.textContent = successText
          statusLoad.remove()

          formElements.forEach(input => {
   
            input.value = "";

          })
        })
        .catch(error => {

          statusBlock.textContent = errorText
        })
    } else {
      alert('Данные введены неверно!')
      statusLoad.remove()

      statusBlock.textContent = errorText
    }
    timer()
  }

  try {
    if (!form) {
      throw new Error('Верните форму на место!')
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    })
  } catch (error) {
    console.log(error.message)
  }


}

export default sendForm