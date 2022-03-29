const loadAppFilters = async (uri) => {
    try {
        const settings = {
            method: "GET",
            headers: {
                "Accept": "application/text",
                "Content-Type": "application/json"
            }
        };
        fetch(uri, settings).then(resp => resp.json()).then(response => {
            let render_test = document.querySelector("#render_test");

            console.log(response['collection-products']);
        });
    } catch(e){
        throw new Error(e);
    }
};

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
    return "/?" + url;
}

const onSubmitFilters = (e) => {
    e.preventDefault();
    let uri = getUrlToQuery(e.target);
    loadAppFilters(uri);
};

document.addEventListener("DOMContentLoaded", function (event) {});