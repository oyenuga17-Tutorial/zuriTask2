const fs = require("fs");
const fetch = require("node-fetch")


const valuue = fetch("https://reqres.in/api/users/")
	.then(response => response.json())
	.then(data => {
		const upload = JSON.stringify(data)
		fs.writeFile("./result/post.txt", upload, () => {
			
		})
	});
	




