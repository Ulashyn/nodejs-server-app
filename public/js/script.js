if (window.location.pathname === '/new-post') {
  document.forms['newPost'].onsubmit = function (e) {
    e.preventDefault();
    const formValues = document.forms['newPost'].elements;
    const data = {
      title: formValues['title'].value,
      description: formValues['description'].value,
      content: formValues['content'].value
    };

    fetch('/api/create-post', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res && res.payload && res.payload.statusCode === 400) {
          UIkit.notification({
            message: res.payload.message,
            status: 'warning',
            pos: 'top-right',
            timeout: 3000
          });
        }
        if (res && res._id) {
          window.location.replace('/posts');
        }
      })
      .catch(err => {
        UIkit.notification({
          message: err.message,
          status: 'danger',
          pos: 'top-right',
          timeout: 3000
        });
      });
  }
}