import React from 'react';
import Challenge from '../components/Challenge/Challenge';
import Contact from '../modules/Contact/Contact';
import Cta from '../components/Cta/Cta';
import Hero from '../modules/Hero/Hero';
import Menu from '../modules/Menu/Menu';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';
import Product from '../components/Product/Product';
import './StyleGuide.scss';

function StyleGuide({ content }) {
  const sections = content.styleguide.sections;
  const cssClass = 'StyleGuide';

  // UI config for customizable components
  const uiConfig = {
    nav: 'dark',
    quote: 'primary'
  };

  // Color palette component
  const Colors = (
    <div className={`${cssClass}__colors`}>
      {[
        '$color-white',
        '$color-black',
        '$color-primary',
        '$color-secondary',
        '$color-terciary',
        '$color-cuaternary'
      ].map((item, index) => (
        <span
          key={index}
          className={`${cssClass}__color ${cssClass}__color--${index}`}>
          {item}
        </span>
      ))}
    </div>
  );

  // Typography showcase component
  const Typography = (
    <div className={`${cssClass}__typography subgrid`}>
      <h3 className={`${cssClass}__typography-title`}>Tipografía principal: Arvo Font Family</h3>
      <h5 className={`${cssClass}__typography-title`}>Tipografía secundaria: Open Sans</h5>
      <h1 className={`${cssClass}__typography-heading`}>Ejemplo de título h1</h1>
      <h2 className={`${cssClass}__typography-heading`}>Ejemplo de título h2</h2>
      <h3 className={`${cssClass}__typography-heading`}>Ejemplo de título h3</h3>
      <h3 className={`${cssClass}__typography-heading h3--primary`}>Ejemplo de título h3 primary</h3>
      <h4 className={`${cssClass}__typography-heading`}>Ejemplo de título h4</h4>
      <h4 className={`${cssClass}__typography-heading h4--dark`}>Ejemplo de título h4 dark</h4>
    </div>
  );

  // Grid showcase component
  const Grid = (
    <div className={`${cssClass}__grid subgrid`}>
      {[...Array(12).keys()].map((item, index) => (
        <span
          key={index}
          className={`${cssClass}__column`}>
          {item + 1}
        </span>
      ))}
    </div>
  );

  // CTAs showcase component
  const Ctas = (
    <div className={`${cssClass}__ctas`}>
      <Cta type="primary" label="Primary!" />
      <Cta type="secondary" label="Secondary" />
      <Cta type="terciary" icon="hamburger" iconType="primary" />
      <Cta type="cuaternary" icon="nav" iconType="secondary" />
      <Cta type="cuaternary" icon="facebook" iconType="primary" />
    </div>
  );

  // Components used in the styleguide
  const components = {
    challenge: <Challenge content={content.challenge} />,
    contactbox: <Contact content={content.contact} />,
    hero: <Hero content={content.hero} />,
    menu: <Menu content={content.menu} />,
    nav: <Nav content={content.nav} type={uiConfig.nav} />,
    quote: <Quote content={content.quote} type={uiConfig.quote} />,
    product: <Product content={content.menu.products[0]} />,
    colores: Colors,
    tipografia: Typography,
    grid: Grid,
    botones: Ctas
  };

  // Sections of the styleguide
  const Sections = sections.map((item, index) => (
    <section key={index} className={`${cssClass}__section`}>
      <div className={`${cssClass}__masthead`}>
        <h3 className={`${cssClass}__section-title`}>{item.title}</h3>
        <p className={`${cssClass}__section-subtitle`}>{item.subtitle}</p>
      </div>
      <div className={`${cssClass}__wrapper`}>
        {components[item.title.toLowerCase()]}
      </div>
    </section>
  ));

  // Styleguide markup
  return (
    <div className={cssClass}>
      <h1 className={`${cssClass}__main-title`}>{content.styleguide.title}</h1>
      <div className={`${cssClass}__wrapper grid`}>
        {Sections}
      </div>
    </div>
  );
}

export default StyleGuide;