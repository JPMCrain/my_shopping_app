
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const nodemailer = require('nodemailer');

const server = express();
const port = 3008;

let orderFilePath;

server.use(cors());
server.use(express.json());

const isUserOrderValid = (user) => {
	return user &&
	user.name &&
	user.email &&
	user.number &&
	user.address;
};

	async function sendEmailToSiteHolder(user){
		
		console.log(user);
		// let testAccount = await nodemailer.createTestAccount();	
		
		let transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				 user: 'lizeth.langworth@ethereal.email', 
				 pass: 'qRdGdVCsTRGawdt4uu'
			}
		})

		function createOrderList(user){
			const order =	user.order
			order.map((item) => {
				return `<p>${item.name}</p>`
			})
		}
		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: `${user.email}`, // sender address
			to: 'jpmcrain@gmail.com', // list of receivers
			subject: "ORDER", // Subject line
			text: "order", // plain text body
			html: `<h1>Clients Name: ${user.name}</h1>
				<br/><h2>Clients Contact: ${user.number}</h2>
				<br/><p>Clients Adress: ${user.address}</p>	
				<br/><p>Message: ${user.message}</p>
				<br/><div>${createOrderList(user)}</div>					
			`
		});
		
		console.log("Message sent: %s", info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	
		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

const getOrderFilePath = () => {
	const filePath = './order.json';
	if(!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, '[]');
	}
	return filePath;
};

server.post('/users/order', (req, res) => {
	const user = req.body;
	const email = req.body.email;
  if(isUserOrderValid(user)) {
    const users = JSON.parse(fs.readFileSync(orderFilePath));
		const checkedEmail = users.filter((user)=>{
			return user.email === email;
		});
		if(checkedEmail > 0) {
			res.send({ success: false, reason: 'Email already used'});
		} else {
			sendEmailToSiteHolder(user).catch(console.error);
			users.push(user);
			fs.writeFileSync(orderFilePath, JSON.stringify(users));
			res.send({ success: true });
		}
	} else {
    res.send({ success: false, reason: 'Invaild user'});
  }
});

const onOpened = () => {
	console.log('Server is up and running!');
  orderFilePath = getOrderFilePath();
};


server.listen(port, onOpened);