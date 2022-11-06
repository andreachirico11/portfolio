const cvUrl = (prodUrl || devUrl) + '/cv';
const emailUrl = (prodUrl || devUrl) + '/email';
const NO_TOKEN = 'No token';
const emailReg = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$');

document.getElementById('token-submit').addEventListener('click', async function () {
  startLoadingBar();
  try {
    const input = document.getElementById('token');
    if (!input.value) {
      openModal('The input is empty', 'You must provide a value!');
      return;
    }
    downloadFile(await fetchFile(input.value));
  } catch (e) {
    if (e.message === NO_TOKEN) {
      openModal('Something went wrong...', 'Your passcode is incorrect');
    } else {
      openModal('Something went wrong...', 'There was an error generating the resume');
    }
  } finally {
    stopLoadingBar();
  }
});

document.getElementById('email-submit').addEventListener('click', async function () {
  const [
    _,
    name,
    email,
    { firstElementChild: message },
    {
      firstElementChild: {
        firstElementChild: { checked: policy },
      },
    },
  ] = this.parentElement.children;
  const [invalid, errMsg] = isFormInvalid(name.value, email.value, message.value, policy);
  if (invalid) {
    openModal('There are errors in the form', errMsg);
    return;
  }
  startLoadingBar();
  try {
    await sendMail(name.value, email.value, message.value, policy);
    openModal('Thank you', "I'll answer ASAP!!!");
    name.value = null;
    email.value = null;
    message.value = null;
  } catch (error) {
    openModal(
      "There was a problem and the mail wasn't sent",
      `Please contact me at ${error.ownerMail}`
    );
  } finally {
    stopLoadingBar();
  }
});

document.getElementById('modal-button').addEventListener('click', closeModal);

function fetchFile(token) {
  return fetch(cvUrl, {
    headers: { token },
  }).then((res) => {
    if (res.status === 401) {
      throw new Error(NO_TOKEN);
    }
    if (res.status !== 200) {
      throw new Error('Unknown http error');
    }
    return res.blob();
  });
}

function sendMail(name, email, message, policy) {
  return fetch(emailUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message, policy }),
  })
    .then((res) => {
      if (res.status === 202) {
        return;
      }
      return res.json();
    })
    .then((e) => {
      if (e) {
        throw e;
      }
    });
}

function downloadFile(blob) {
  const downloader = document.getElementById('downloadAnchor');
  let objUrl;
  try {
    objUrl = URL.createObjectURL(blob);
    downloader.href = objUrl;
    downloader.download = 'Resume Andrea Chirico';
    downloader.click();
  } catch (error) {
    openModal('Something went wrong...', 'The received file is corrupted');
  } finally {
    downloader.href = null;
    downloader.download = null;
    URL.revokeObjectURL(objUrl);
  }
}

function openModal(title, message) {
  document.getElementById('modal-title').innerHTML = title;
  document.getElementById('modal-message').innerHTML = message;
  document.body.classList.add('show-modal');
}

function closeModal() {
  document.body.classList.remove('show-modal');
  document.getElementById('modal-title').innerHTML = '';
  document.getElementById('modal-message').innerHTML = '';
}

function startLoadingBar() {
  document.body.classList.add('show-loading');
}

function stopLoadingBar() {
  document.body.classList.remove('show-loading');
}

function isFormInvalid(name, email, message, policy) {
  let errorMessage = '',
    invalid = false;
  if (!name) {
    errorMessage += '<li>The name field must contain a value</li>';
  }
  if (!email) {
    errorMessage += '<li>The email field must contain a value</li>';
  }
  if (!message) {
    errorMessage += '<li>The message field must contain a value</li>';
  }
  if (!policy) {
    errorMessage += '<li>The privacy policy must be checked</li>';
  }
  if (email && !emailReg.test(email)) {
    errorMessage += '<li>The provided email is invalid</li>';
  }
  if (errorMessage !== '') {
    invalid = true;
  }
  return [invalid, errorMessage];
}
