interface Comment {
  id: number,
  email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<Comment[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

getData(COMMENTS_URL)
  .then(data => data.forEach(({id, email}) => console.log(`ID: ${id}, Email: ${email}`)))
  .catch(console.error);

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
