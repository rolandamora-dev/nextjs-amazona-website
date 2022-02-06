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
	form: {
		maxWidth: 800,
		margin: '0 auto',
	},
	navbarButton: {
		color: '#ffffff',
		textTransform: 'initial',
	},
	stepperStyles: {
		backgroundColor: 'transparent',
		marginTop: 20,
	},
});

export default useStyles;
