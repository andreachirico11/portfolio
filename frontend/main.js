const cvUrl = (prodUrl || devUrl) + '/cv';
const NO_TOKEN = 'No token';

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
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;
  document.body.classList.add('show-modal');
}

function closeModal() {
  document.body.classList.remove('show-modal');
  document.getElementById('modal-title').textContent = '';
  document.getElementById('modal-message').textContent = '';
}

function startLoadingBar() {
  document.body.classList.add('show-loading');
}

function stopLoadingBar() {
  document.body.classList.remove('show-loading');
}
