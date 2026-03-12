import logo from '@/assets/securefox-logo.avif';

const FoxBackground = () => {
  return (
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '85vh',
        width: 'auto',
        opacity: 0.07,
        filter: 'grayscale(30%) brightness(1.4)',
        mixBlendMode: 'luminosity',
        pointerEvents: 'none',
        zIndex: 0,
        objectFit: 'cover',
        objectPosition: 'left center',
      }}
    />
  );
};

export default FoxBackground;
