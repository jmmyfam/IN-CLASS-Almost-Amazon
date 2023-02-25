import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showBookDetails = (obj) => {
  clearDom();
  console.warn(obj);
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  domString = `
  <div class='container d-flex'>
      <div class="card">
        <img class="card-img-top" src=${obj.image} alt=${obj.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${obj.title}</h5>
           <p class="card-text bold">${obj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.price}` : `$${obj.price}`}</p>
          
        </div>
      </div>
      <div id="bookDetail">
       <p class="card-text">${obj.description}<p>
       <div>
  </div>
      `;
  renderToDOM('#store', domString);
};

export default showBookDetails;
