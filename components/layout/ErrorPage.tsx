import {useRouter} from 'next/router';
import {classNames} from '../../lib/functions';
import Button from '../Button';
import ImageContainer from '../ImageContainer';

type ErrorTextsType = Record<
  404 | 500,
  {
    title: string;
    code: string;
    detail: string;
    description?: string;
    buttonText?: string;
    img: {classes: string; src: string};
    className: string;
  }
>;

const errorTexts: ErrorTextsType = {
  404: {
    title: 'Página no encontrada',
    code: 'Error 404',
    detail:
      'Lo sentimos, la página que buscas no existe o no se encuentra disponible. Verifica la dirección y vuelve a intentarlo.',
    buttonText: 'Ir al inicio',
    img: {
      classes: 'h-[150px] w-[225px] lg:h-[262px] lg:w-[393px]',
      src: '/img/ilustration_404.webp',
    },
    className: 'lg:gap-8',
  },
  500: {
    title: 'Ha ocurrido un error',
    code: 'Error 500',
    detail: 'Lo sentimos, estamos presentando problemas que impiden que se muestre el sitio.',
    description: 'Puedes refrescar la página o intentar en unos minutos.',
    img: {
      classes: 'h-[150px] w-[123px] lg:h-[250px] lg:w-[204px]',
      src: '/img/ilustration_500.webp',
    },
    className: 'lg:gap-8',
  },
};

interface ErrorPageProps {
  statusCode: keyof typeof errorTexts;
}

function ErrorPage({statusCode}: ErrorPageProps) {
  const router = useRouter();
  const attr = errorTexts[statusCode];

  return (
    <div
      className={classNames(
        'flex min-h-screen flex-col items-center justify-center gap-8 px-2 lg:flex-row',
        attr.className
      )}
    >
      <ImageContainer
        image={{alt: attr.code, original: attr.img.src}}
        className={classNames(attr.img.classes)}
      />
      <div className="space-y-4 text-center lg:max-w-[670px]">
        <div className="w-full space-y-1">
          <h1 className="text-[32px] font-extrabold">{attr.title}</h1>
          <h3 className="font-extrabold">{attr.code}</h3>
        </div>
        <p className="text-[16px]">
          {attr.detail}
          {attr.description ? (
            <>
              <br />
              <span>{attr.description}</span>
            </>
          ) : null}
        </p>
        {attr.buttonText ? (
          <Button
            className="w-full sm:w-auto"
            size="lg"
            onClick={() => router.push('/')}
            aria-label={attr.buttonText}
          >
            {attr.buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default ErrorPage;
