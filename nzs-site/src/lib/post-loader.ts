import showdown from 'showdown';

const converter = new showdown.Converter({ splitAdjacentBlockquotes: true });

class PostLoader {
	static async loadPost(name: string) {
		const files = import.meta.glob('../posts/*.md', {
			as: 'raw'
		});
		console.log(files, name);
		const markdown = await files[`../posts/${name}.md`]();
		return converter.makeHtml(markdown);
	}
}

export default PostLoader;
