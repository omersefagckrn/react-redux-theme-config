import { useTheme } from './hooks';
import { useAppDispatch } from './redux/store';
import { setTheme } from './redux/theme/themeSlice';

const App = () => {
	const mode = useTheme();
	const appDispatch = useAppDispatch();

	return (
		<div className='flex flex-col space-y-2 min-h-screen dark:bg-black p-4'>
			<div className='text-black dark:text-white'>Aktif Mode: {mode}</div>
			<div className='text-black dark:text-white'>Sistem Mode : {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'}</div>
			<div
				className='cursor-pointer text-white dark:text-black bg-black dark:bg-white w-36 p-2 rounded-lg text-center'
				onClick={() =>
					appDispatch(
						setTheme({
							mode: 'dark'
						})
					)
				}
			>
				Dark Mod
			</div>
			<div
				className='cursor-pointer text-white dark:text-black bg-black dark:bg-white w-36 p-2 rounded-lg text-center'
				onClick={() =>
					appDispatch(
						setTheme({
							mode: 'light'
						})
					)
				}
			>
				Light Mod
			</div>
			<div
				className='cursor-pointer text-white dark:text-black bg-black dark:bg-white w-36 p-2 rounded-lg text-center'
				onClick={() =>
					appDispatch(
						setTheme({
							mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
						})
					)
				}
			>
				System Mod
			</div>
		</div>
	);
};

export default App;
