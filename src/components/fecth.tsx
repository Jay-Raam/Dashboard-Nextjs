export default async function fetchData() {

    const response = await fetch ("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

        return await response.json();
  
}
