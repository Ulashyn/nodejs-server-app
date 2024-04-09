const url = window.location.pathname;
if (url === '/new-post') {
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
};

if (url.includes('/edit-post/')) {
  document.forms['editPost'].onsubmit = function (e) {
    e.preventDefault();
    const postId = url.substring(url.lastIndexOf('/') + 1);
    const formValues = document.forms['editPost'].elements;
    const data = {
      _id: postId,
      title: formValues['title'].value,
      description: formValues['description'].value,
      content: formValues['content'].value
    };

    fetch('/api/edit-post', {
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
        if (res && res.modifiedCount === 1) {
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
};

if (url.includes('/posts/') && document.getElementById('delete')) {
  UIkit.util.on('#delete', 'click', function (e) {
    const postId = url.substring(url.lastIndexOf('/') + 1);
    e.preventDefault();
    e.target.blur();
    UIkit.modal.confirm('Do you really want to delete the post?').then(function () {
      fetch(`/api/delete-post/${postId}`, {
        method: 'DELETE',
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
          if (res && res.deletedCount === 1) {
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
    }, function () {
      console.log('Rejected.')
    });
  });
};