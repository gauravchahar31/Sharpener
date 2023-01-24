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

                let price = document.createElement('p');
                price.innerHTML = `Price : ${product.price}`;
                price.setAttribute('class', 'card-text');
                innerContainer.appendChild(price);

                let editbutton = document.createElement('a');
                editbutton.setAttribute('class', "btn btn-primary")
                editbutton.setAttribute('href', `/admin/edit:${product.title}`)
                editbutton.innerHTML = "Edit";
                innerContainer.appendChild(editbutton);

                let form = document.createElement('form');
                form.setAttribute('action', `/admin/delete/${product.title}`);
                form.setAttribute('method', `post`);
                innerContainer.appendChild(form);

                let delbutton = document.createElement('button');
                delbutton.setAttribute('class', "btn btn-primary")
                delbutton.setAttribute('type', 'submit');
                delbutton.innerHTML = "Delete";
                form.appendChild(delbutton);
            })
        })
        .catch(err => console.error(err));
})