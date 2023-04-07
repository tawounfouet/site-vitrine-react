import React from 'react';

const SocialNetwork = () => {
    const anim = (e) => {
        const icons = document.querySelectorAll('.social-network a ');
        // const x = e.nativeEvent.offsetX;
        // const y = e.nativeEvent.offsetY;

        icons.forEach((link) => {
            link.addEventListener('mouseover', (e) => {
                e.target.style.transform = `translate(${e.offsetX - 20}px  ${
                    e.offsetY - 13
                }px)`;
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            });
        });
    };

    return (
        <div className="social-network">
            <ul className="content">
                <li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover"
                        onMouseOver={anim}
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover"
                        onMouseOver={anim}
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover"
                        onMouseOver={anim}
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialNetwork;
