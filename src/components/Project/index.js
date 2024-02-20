import React, { useEffect, useState } from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
const { name, repo, link, description } = project;
const [imageSrc, setImageSrc] = useState(null);

useEffect(() => {
    const loadImage = async () => {
    try {
        const encodedName = encodeURIComponent(name).replace(/%20/g, '_');
        const imageName = `${encodedName}.png`;
        const { default: img } = await import(`../../assets/images/${imageName}`);
        setImageSrc(img);
    } catch (error) {
        console.error(`Error loading image for ${name}:`, error);
    }
    };

    loadImage();
}, [name]);

return (
    <div className="project" key={name}>
    {imageSrc && (
        <img
            src={imageSrc}
            alt={removeHyphensAndCapitalize(name)}
            className="project-bg"
        />
    )}
    <div className="project-text">
        <h3>
        <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
        <a href={repo} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
        </a>
        </h3>
        <p>{description}</p>
    </div>
    </div>
);
}

export default Project;
