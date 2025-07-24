import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = process.cwd() + '/src/app/me/posts';

async function fetchPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const fileContents = fs.readFileSync(postsDirectory + '/' + filename, 'utf-8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            ...data,
        };
    });
}

export default fetchPosts;