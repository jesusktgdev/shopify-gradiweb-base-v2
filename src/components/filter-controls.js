import apiInstance from '../services/api';

const serializeForm = (form) => {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};

const getUrlToQuery = (form) => {
    let serialize = serializeForm(form);
    let url = new URLSearchParams(serialize).toString();
    return url;
}

const replaceFilterSection = (selector, newhtml) => {
    const html_render = new DOMParser().parseFromString(newhtml, 'text/html').querySelector(selector);
    document.querySelector(selector).innerHTML = html_render.innerHTML;
};


const onSubmitFilters = async (e) => {
    e.preventDefault();
    let uri = getUrlToQuery(e.target);
    const render = await apiInstance.renderShopifySectionCollection(uri);
    const html = render['collection-products'];
    replaceFilterSection("#list-products", html);
};

const initAppFilter_controls = () => {
    let filter_controls_form = document.querySelector("#filter-controls-form");
    filter_controls_form.addEventListener('submit', (e) => {onSubmitFilters(e)});
};

export { initAppFilter_controls };