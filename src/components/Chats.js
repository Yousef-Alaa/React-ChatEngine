import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext'
import axios from 'axios';

const Chats = () => {

	let { user } = useAuth()
	let history = useHistory()

	async function handleLogout() {
		await auth.signOut()
		// TODO: Method = replace
		history.push("/")
	}

	async function getFile(url) {
		let response = await fetch(url);
		let data = await response.blob();
		return new File([data], "test.jpg", { type: 'image/jpeg' });
	}

	useEffect(() => {
		console.log(user);
		if (!user) {
			// TODO: Method = replace
			history.push("/")
			return;
		}

		axios.get('https://api.chatengine.io/users/me/',{
				headers: { 
				"project-id": '2c3c3d72-e5ba-4f94-916e-76e159345e0a',
				"user-name": user.email,
				"user-secret": user.uid
		}})
		.then(() => {
			console.log('Done');
		}).catch(() => {
			let formdata = new FormData()
			formdata.append('email', user.email)
			formdata.append('username', user.email)
			formdata.append('secret', user.uid)

			getFile(user.photoURL)
			.then(avatar => {
				formdata.append('avatar', avatar, avatar.name)

				axios.post('https://api.chatengine.io/users/', formdata, {
					headers: { "private-key": '1c8f0654-0ac5-4482-a502-23b787fff33f' }
				})
				.then(() => console.log('Done'))
				.catch(e => console.log('e', e.response))
			})
		})

	}, [user, history])

	if (!user) return 'No User'

    return (
		<div className='chats-page'>
			<div className='nav-bar'>
				<div className='logo-tab'>React ChatApp</div>
				<div onClick={handleLogout} className='logout-tab'>Logout</div>
			</div>

			<ChatEngine 
				height='calc(100vh - 60px)'
				projectID='2c3c3d72-e5ba-4f94-916e-76e159345e0a'
				userName={user.email}
				userSecret={user.uid}
			/>
		</div>
    );
}

export default Chats