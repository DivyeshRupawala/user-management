export const fetchUser = async () => {
  try {
    const response = await fetch("https://my.api.mockaroo.com/users?key=093b4d30");
    const data = await response.json();
    return data;
  } catch(e) {

  }
}

export const postUser = async (data) => {	
	const { userId , title, body } = data;
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
									method: 'POST',
									body: JSON.stringify({
									  title: title,
									  body: body,
									  userId: userId
									}),
									headers: {
									  "Content-type": "application/json; charset=UTF-8"
									}
								});
		const data = await response.json();
		return data;
	} catch(e) {

	}
}

