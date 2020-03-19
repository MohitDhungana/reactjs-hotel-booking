import React from 'react';

export default function Hero({ chilren, hero }) {
  return <header className={hero}>{chilren}</header>;
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
