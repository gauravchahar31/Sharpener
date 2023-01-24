axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

document.addEventListener('DOMContentLoaded', () => {
    axiosInstance.get('/getProducts')
        .then(res => {
            res.data.forEach(product => {
                let container = document.querySelector('.cardList');

                let newContainer = document.createElement('div');
                newContainer.setAttribute('class', "card")
                container.appendChild(newContainer);

                let imageLink = document.createElement('img');
                imageLink.setAttribute('class', 'card-img-top');
                imageLink.src = product.image;

                newContainer.appendChild(imageLink);

                let innerContainer = document.createElement('div');
                innerContainer.setAttribute('class', "card-body")
                newContainer.appendChild(innerContainer);

                let title = document.createElement('h5');
                title.setAttribute('class', "card-title")
                title.innerHTML = product.title;
                innerContainer.appendChild(title);

                let button = document.createElement('a');
                button.setAttribute('class', "btn btn-primary")
                button.setAttribute('href', "#")
                button.innerHTML = product.price;
                innerContainer.appendChild(button);
            })
        })
        .catch(err => console.error(err));
})