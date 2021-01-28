import * as React from 'react';
import { useEffect, useState } from 'react';

const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="d-flex justify-content-center align-items-center">
			
		</div>
	);
};

interface AppProps {}

export default App;
