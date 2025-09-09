import Cta from '../Cta/Cta';
import './Challenge.scss';

function Challenge({ content }) {
  const cssClass = 'Challenge';
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'primary'
  };

  return (
    <div className={cssClass}>
      <h4 className={`${cssClass}-title`}>
        {content.title}
      </h4>
      <p className={`${cssClass}-content p--light`}>
        {content.subtitle}
      </p>
      <ul className={`${cssClass}-icons`}>
        {content.social.map((item) => (
          <li key={item.icon} className={`${cssClass}-social-item`}>
            <Cta type={uiConfig.cta} icon={item.icon} iconType={uiConfig.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenge;