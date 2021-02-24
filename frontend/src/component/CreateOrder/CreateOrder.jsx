
import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import InfoPizza from './StepPizza'
import Confirm from './Confirm'
import { useSelector, useDispatch } from 'react-redux'
import {getAll } from '../../store/action/pizza'

import './index.css'
import Suggestion from './Suggestion';

const steps = [{
    name: 'Massa',
    title: 'Escolha tamanho da Massa',
    prop: 'pasta',
},
{
    name: 'Tamanho',
    title: 'Escolha tamanho da pizza',
    prop: 'size'
},
{
    name: 'Recheio',
    title: 'Escolha o recheio da pizza',
    prop: 'filling',
    maxValue: 3
},
{
    name: 'Borda',
    title: 'Escolha a borda',
    prop: 'edge'
},
{
    name: 'Confirmar Pedido',
    title: 'Confirmar Pedido',
    prop: ''
}];;


const pizzaState = {
    pasta: [],
    size: [],
    filling: [],
    edge: [],
}

export default function CreateOrder() {
    const [activeStep, setActiveStep] = useState(0);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isPizzaDaySelect, setIsPizzaDaySelect] = useState(false)
    const [pizza, setPizza] = useState({ ...pizzaState })
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        dispatch(getAll());
    }, [])



    const handleNext = (activeStep) => {
        const prop = steps[activeStep].prop
        if (!!prop && pizza[prop].length === 0) {
            setIsError(true)
            return
        }
        setIsError(false)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length) {
            handleReset()
        }
    };

    const handleBack = () => {
        if (isPizzaDaySelect === true) {
            handleReset()
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setPizza({ ...pizzaState });
        setIsPizzaDaySelect(false)
        setActiveStep(0);
    };


    const clickSuggestionPizza = () => {
        setIsPizzaDaySelect(true)
        setActiveStep(4)
        setPizza(state.pizzaDay)
    }


    const getInfo = () => {
        const step = steps[activeStep];
        const selectData = (idSelected, isChecked) => {

            if (!isChecked) {
                pizza[step.prop] = pizza[step.prop].filter(id => id !== idSelected);
                setPizza({ ...pizza });
                return;
            }

            if (step.maxValue > 1 && pizza[step.prop].length < step.maxValue) {
                pizza[step.prop].push(idSelected);
                setPizza({ ...pizza });
                return;
            }
            pizza[step.prop] = [idSelected]
            setPizza({ ...pizza });
        }

        switch (activeStep) {
            case 4:
                return <Confirm pizza={pizza} isPizzaDaySelect={isPizzaDaySelect} />;
            case 5:
                return <div className="finish-order">Obrigado por escolher a BrainWeb</div>;
            default:
                return (
                    <>
                        <InfoPizza data={state[step.prop]} maxValue={step.maxValue} values={pizza[step.prop]} changeValueInput={selectData} />
                        {activeStep === 0 && (<Suggestion onClick={clickSuggestionPizza} pizza={state.pizzaDay} />)}
                    </>
                )
        }
    }
    return (
        <div className='container-order'>
            <div className='container-all-order'>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label.name}>
                            <StepLabel>{label.name}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div className="container-body-order">
                    <h3>{steps[activeStep]?.title}</h3>
                    <div className="container-tam-in">
                        {getInfo()}
                    </div>
                </div>

                <div className="footer-order">

                    <div className="select-message-footer">
                        {isError &&
                            'Selecione uma opção para avançar'
                        }
                    </div>

                    {activeStep === steps.length ? (
                        <div>
                            <Button onClick={handleReset}>Fazer outro pedido</Button>
                        </div>
                    ) : (
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className=''
                                >
                                    Voltar
                                    </Button>
                                <Button variant="contained" color="primary" onClick={() => handleNext(activeStep)} >
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                                </Button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}