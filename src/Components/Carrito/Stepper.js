import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}))

function getSteps() {
	return ['CONFIRMANDO CARRITO', 'COMPLETA TUS DATOS', 'FINALIZANDO TU COMPRA']
}

export default function HorizontalLinearStepper(props) {
	const { state } = props
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = getSteps()

	React.useEffect(() => {
		if (state === 'datos') {
			setActiveStep(1)
		} else if (state === 'pago') {
			setActiveStep(2)
		} else {
			setActiveStep(0)
		}
	}, [state])

	return (
		<div className={classes.root}>
			<Stepper alternativeLabel activeStep={activeStep}>
				{steps.map((label, index) => {
					return (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					)
				})}
			</Stepper>
		</div>
	)
}
