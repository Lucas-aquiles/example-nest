import React from 'react';
import Card from './Card';
import ImageContainer from './ImageContainer';
import Button from './Button';

const PlansIntroduction = ({data, monthlyPlan, annualPlan}: any) => {
  if (!data.isActive) {
    return null;
  }
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };
  return (
    <div>
      <div className="bg-[#00A86B] py-12"> {/* Cambia aquí por el color verde deseado */}
        <div className="mx-auto w-2/4 text-center">
          <h2 className="mb-10 text-3xl font-bold">{data.title}</h2>
          <p className="text-2xl">{data.content}</p>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="m-auto flex w-2/3 justify-center">
          <Card className="m-5 flex h-[30rem] w-[35rem] border-4 border-solid border-[#00A86B] text-center"> {/* Cambia aquí también */}
            <ImageContainer image={image} className="h-[20rem] w-[10rem]" priority />
            <div className="w-[22rem]">
              <h2 className="text-slate-200">{monthlyPlan.planTitle}</h2>
              <p className="text-slate-200"> {monthlyPlan.planDescription} </p>
  
              <h3 className="text-slate-200">${monthlyPlan.planPrice}</h3>
              <h2 className="text-slate-200">{monthlyPlan.planPeriodDescription} CLP</h2>
              <Button>{monthlyPlan.buttonSuscribePlan.buttonText}</Button>
            </div>
          </Card>
          <Card className="m-5 flex h-[30rem] w-[35rem] border-4 border-solid border-[#00A86B] text-center"> {/* Cambia aquí también */}
            <ImageContainer image={image} className="h-[20rem] w-[10rem]" priority />
            <div className="w-[22rem]">
              <h2 className="text-slate-200">{annualPlan.planTitle}</h2>
              <p className="text-slate-200"> {annualPlan.planDescription} </p>
  
              <h3 className="text-slate-200">${annualPlan.planPrice} CLP</h3>
              <h2 className="text-slate-200">{annualPlan.planPeriodDescription}</h2>
              <Button>{annualPlan.buttonSuscribePlan.buttonText}</Button>
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
  
};

export default PlansIntroduction;
