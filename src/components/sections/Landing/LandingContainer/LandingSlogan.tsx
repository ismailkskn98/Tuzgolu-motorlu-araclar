import { FC } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const title = ['Motorlu Araçlar', 'Yedek Parçalar'];

const LandingSlogan: FC = () => {
  return (
    <div className="text-content text-light-white flex flex-col items-start gap-5 w-2/5">
      <h1 className="landing-title text-8xl">
        <span className="">Tuzgölü</span>
      </h1>
      <h1 className="landing-title text-7xl text-light-orange">
        <Typewriter
          words={title}
          loop={false}
          cursor={true}
          cursorBlinking={false}
          cursorStyle={'_'}
          typeSpeed={120}
          deleteSpeed={100}
          delaySpeed={2000}
        />
      </h1>
      <p className="leading-7 tracking-wide font-medium text-lg">
        <h2 className="text-4xl landing-title mb-5 before:content-['-'] before:text-light-orange">
          YILDIZ’ların üzerinde yükselen değeriniz
        </h2>
        Gerek servisimizde, gerek yolda kalınan durumlarda her türlü bakım, onarım,
        <p>tamirat ve mekanik hizmetleri için güvenle arayabilirsiniz.</p>
      </p>
    </div>
  );
};

export default LandingSlogan;
