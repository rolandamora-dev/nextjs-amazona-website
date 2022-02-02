import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	navbar: {
		'backgroundColor': '#203040',
		'& a': {
			color: '#ffffff',
			marginLeft: 10,
		},
	},
	main: {
		minHeight: '80vh',
	},
	footer: {
		marginTop: 10,
		textAlign: 'center',
	},
	brand: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
	},
	grow: {
		flex: 1,
	},
	section: {
		marginTop: 10,
		marginBottom: 10,
	},
});

export default useStyles;
