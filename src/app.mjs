export function BlocksRenderer(articleBody) {
	let block = [];
	articleBody.map((article) => {
		let temp;
		switch (article.type) {
			case 'heading':
				temp = `<h${article.level}>${article.children[0].text}</h${article.level}>`;
				block.push(temp);
				break;
			case 'list':
				let format = article.format == 'ordered' ? 'ol' : 'ul';
				let listItems = '';
				article.children.map((li) => {
					listItems = listItems + `<li>${li.children[0].text}</li>`;
				});
				temp = `<${format}>${listItems}</${format}>`;
				block.push(temp);
				break;
			case 'quote':
				temp = `<q>${article.children[0].text}</q>`;
				block.push(temp);
				break;
			case 'paragraph':
				temp = `<p>${article.children[0].text}</p>`;
				block.push(temp);
				break;
			case 'image':
        temp = `<img src=${article.image.url} width="100%" height="auto"/>`;
				block.push(temp);
				break;
		}
	});
	return block;
}
