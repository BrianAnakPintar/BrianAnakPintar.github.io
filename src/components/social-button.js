import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const SocialButton = ({ link, icon: Icon, label }) => {
    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          color: '#fff',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          margin: '0 8px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <Icon width={20} height={20} />
      </a>
    );
};
export default SocialButton;
