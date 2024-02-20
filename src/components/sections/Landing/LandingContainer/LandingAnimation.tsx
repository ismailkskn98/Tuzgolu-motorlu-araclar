import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC } from 'react';
import animasyon from '../../../../assets/images/landing/animasyon.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/app/store';

const LandingAnimation: FC = () => {
  const { themes } = useSelector((state: RootState) => state.theme);

  return (
    <div className="relative min-h-[600px] flex justify-center items-center">
      <Canvas style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
        <OrbitControls enableZoom={false} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1.1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial attach="material" color={themes === 'light' ? '#497174' : '#393E46'} speed={1} />
        </Sphere>
      </Canvas>
      <img
        src={animasyon}
        alt="tuzgolu moturlu araçlar animasyon"
        className="landing-animasyon-img relative z-10 max-w-[700px]"
      />
    </div>
  );
};

export default LandingAnimation;
