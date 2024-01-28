import axios from 'axios';

export function getData(id) {
  return axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`);
}

export function createMarkup(obj) {
  return `
      <div class="modal-content">
        <img class="modal-img" src="${obj.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${obj.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${obj.rating}</p>

              <div class="ex-rating">
                <div class="ex-rating-body">
                  <div class="ex-rating-active"></div>
                  <div class="ex-rating-items">
                    <input
                      type="radio"
                      class="ex-rating-item"
                      value="1"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="2"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="3"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="4"
                      name="exrating"
                    /><input type="radio" class="ex-rating-item" value="5" name="exrating" />
                  </div>
                </div>
              </div>
          </div>

          <ul class="modal-list">
            <li class="modal-list-item">
              <p class="modal-list-item-name">Target</p>
              <p class="modal-list-item-value">${obj.target}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">${obj.bodyPart}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">${obj.equipment}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">${obj.popularity}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">${obj.burnedCalories}/3 min</p>
            </li>
          </ul>

          <p class="modal-description">${obj.description}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}
