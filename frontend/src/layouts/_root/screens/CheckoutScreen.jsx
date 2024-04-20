import React, { useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";

import { FaRegAddressCard, FaMoneyBill, FaIdCard } from "react-icons/fa";

export default function CheckoutScreen() {
	const [activeStep, setActiveStep] = useState(0);
	const [isLastStep, setIsLastStep] = useState(false);
	const [isFirstStep, setIsFirstStep] = useState(false);

	const steps = [
		{ label: "Address", icon: <FaMoneyBill className="h-5 w-5" /> },
		{ label: "Payment Method", icon: <FaRegAddressCard className="h-5 w-5" /> },
		{ label: "Card Information", icon: <FaIdCard className="h-5 w-5" /> },
	];

	const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

	return (
		<div className="w-full px-24 py-4">
			<Stepper
				activeStep={activeStep}
				isLastStep={(value) => setIsLastStep(value)}
				isFirstStep={(value) => setIsFirstStep(value)}
			>
				{steps.map((step, index) => (
					<Step key={step.label} onClick={() => setActiveStep(index)}>
						{step.icon}
						<div className="absolute -bottom-[4.5rem] w-max text-center">
							<Typography
								variant="h6"
								color={activeStep === index ? "blue-gray" : "gray"}
							>
								Step {index + 1}
							</Typography>
							<Typography
								color={activeStep === index ? "blue-gray" : "gray"}
								className="font-normal"
							>
								{step.label}
							</Typography>
						</div>
					</Step>
				))}
			</Stepper>
			<div className="mt-32 flex justify-between">
				<Button onClick={handlePrev} disabled={isFirstStep}>
					Prev
				</Button>
				<Button onClick={handleNext} disabled={isLastStep}>
					Next
				</Button>
			</div>
		</div>
	);
}
