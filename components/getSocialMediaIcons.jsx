import { socials } from '../constants';

const SocialMediaIcons = () => {
  const getSocialMediaLink = (name) => {
    switch (name) {
      case 'twitter':
        return 'https://twitter.com/';
      case 'linkedin':
        return 'https://linkedin.com/';
      case 'instagram':
        return 'https://instagram.com/';
      case 'facebook':
        return 'https://facebook.com/';
      case 'github':
        return 'https://github.com/';
      case 'behance':
        return 'https://behance.net/';
      case 'dribbble':
        return 'https://dribbble.com/';
      default:
        return '#';
    }
  };

  return (
    <div>
      {socials.map((social) => (
        <a
          key={social.name}
          href={getSocialMediaLink(social.name)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.url}
            alt={social.name}
            className="w-[24px] h-[24px] object-contain cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
