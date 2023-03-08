class TourItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set tour(tour) {
    this._tour = tour;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
			<style>
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				:host {
					display: block;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
					border-radius: 10px;
					overflow: hidden;
					max-width: 30%;
					margin: 20px auto;
				}
				.image-tour {
					width: 100%;
					max-height: 300px;
					object-fit: cover;
					object-position: center;
				}
				.tour-info {
					padding: 24px;
				}
				.tour-info > h2 {
					font-weight: lighter;
				}
				.tour-info > p {
					margin-top: 10px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 10; /* number of lines to show */
				}
			</style>

			<img class="image-tour" src="${this._tour.image}" alt="Image Tour">
			<div class="tour-info">
				<h2>${this._tour.name_wisata}</h2>
				<p>${this._tour.description}</p>
			</div>
		`;
  }
}

customElements.define('tour-item', TourItem);
