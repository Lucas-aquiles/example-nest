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
    <div className="bg-green-500 py-12">
      <div className="mx-auto w-2/4 text-center">
        <h2 className="mb-10 text-3xl font-bold">{data.title}</h2>
        <p className="text-2xl">{data.content}</p>
      </div>
    </div>
    <div className="w-full bg-black pt-11 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        <Card className="m-8 mx-6 flex h-[32rem] w-full max-w-lg border-4 border-solid border-green-500 text-center transform transition-transform duration-300 hover:scale-110">
          <ImageContainer image={image} className="h-[20rem] w-[10rem] hidden md:block" priority />
          <div className="w-full p-5">
            <h2 className="text-slate-200 text-2xl font-bold">{annualPlan.planTitle}</h2>
            <p className="text-slate-200 font-bold my-5">. {annualPlan.planDescription}</p>
            <h3 className="text-slate-200 my-12 text-3xl font-bold">${annualPlan.planPrice} CLP</h3>
            <h2 className="text-slate-200 my-12 font-bold text-2xl">{annualPlan.planPeriodDescription}</h2>
            <Button>{annualPlan.buttonSuscribePlan.buttonText}</Button>
          </div>
        </Card>
        <Card className="  m-8 mx-6 flex h-[32rem] w-full max-w-lg border-4 border-solid border-green-500 text-center transform transition-transform duration-300 hover:scale-110">
          <ImageContainer image={image} className="h-[20rem] w-[10rem] hidden md:block" priority />
          <div className="w-full p-5">
            <h2 className="text-slate-200 text-2xl font-bold">{monthlyPlan.planTitle}</h2>
            <p className="text-slate-200 font-bold my-5">. {monthlyPlan.planDescription}</p>
            <h3 className="text-slate-200 my-12 text-3xl font-bold">${monthlyPlan.planPrice}</h3>
            <h2 className="text-slate-200 my-12 font-bold text-2xl">{monthlyPlan.planPeriodDescription} CLP</h2>
            <Button>{monthlyPlan.buttonSuscribePlan.buttonText}</Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
  
  

  
  
  );
};
export default PlansIntroduction;