import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faLinkedinIn,
    faGithub,
    faCodepen,
} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => (
    <div className="social-media">
        <a
            href="https://twitter.com/luisr_carrillo"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
            href="https://www.linkedin.com/in/luisr-carrillo/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
            href="https://github.com/luisr-carrillo"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
            href="https://codepen.io/luisr-carrillo/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faCodepen} />
        </a>
    </div>
);

export default SocialMedia;
