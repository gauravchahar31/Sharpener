axios.defaults.headers.common['X-Auth-Token'] = 'someTokennns';


// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com/posts/'
});


// GET REQUEST
function getTodos() {
 axiosInstance.get('/1/comments')
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/posts/', {
    title: "New Post",
    completed : false
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: "New Post Updated",
    completed : true
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/'),
    axios.post('https://jsonplaceholder.typicode.com/posts/', {
      title: "New Post",
      completed : false
    })
  ])
  .then(axios.spread((todo, posts) => {
      showOutput(posts);
    }))
  .catch(err => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers : {
      authorization : "someToken"
    }
  };
  axios.post('https://jsonplaceholder.typicode.com/posts/', {
    title: "New Post",
    completed : false
  }, config)
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method : 'post',
    url : 'https://jsonplaceholder.typicode.com/posts/',
    data : {
      title: "New Post",
      completed : false
    },
    transformResponse : axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(options)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    cancelToken : source.token
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));
  if(true){
    source.cancel('Rewquest Cancelled');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.url}`)
  return config;
}, error => {
  return Promise.reject(error);
});



// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
