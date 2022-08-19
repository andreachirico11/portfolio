const cvUrl = (prodUrl || devUrl) + '/cv';
const NO_TOKEN = 'No token';

document.getElementById('token-submit').addEventListener('click', async function () {
  try {
    const input = document.getElementById('token');
    if (!input.value) {
      alert('missing token');
      throw new Error('missing token');
    }
    const file = await fetchFile(input.value);
    downloadFile(file);
  } catch (e) {
    if (e.message === NO_TOKEN) {
      alert('Missing or wrong token');
    }
    console.error(e);
  }
});

document.getElementById('modal-button').addEventListener('click', toggleModal);

document.getElementById('email-submit').addEventListener('click', toggleModal);

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
  let objUrl;
  try {
    const downloader = document.getElementById('downloadAnchor');
    objUrl = URL.createObjectURL(blob);
    downloader.href = objUrl;
    downloader.download = 'Resume Andrea Chirico';
    downloader.click();
    downloader.href = null;
    downloader.download = null;
    URL.revokeObjectURL(objUrl);
  } catch (error) {
    throw new Error('error downloading');
  } finally {
    URL.revokeObjectURL(objUrl);
  }
}

function toggleModal() {
  document.body.classList.toggle('show-modal');
}
