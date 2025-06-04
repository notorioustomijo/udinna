import { useState } from 'react';
import sterling from '../../assets/images/sterling-logo.svg';
import linkedin from '../../assets/images/linkedin-logo.svg';
import dribbble from '../../assets/images/dribbble-logo.svg';
import udinnaSmall from '../../assets/images/udinna-small_logo.svg';
import udinnaLarge from '../../assets/images/udinna-large_logo.svg';
import xLogo from '../../assets/images/x-logo.svg';
import igLogo from '../../assets/images/ig-logo.svg';
import styles from './HomePage.module.css';

export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            number: '4',
            title: 'Home',
            subtitle: 'Udinna Digital',
            type: 'simple',
        },
        {
            number: '3',
            title: 'Works',
            subtitle: '2023 - 2025',
            description: 'Selected Projects',
            projects: [
                {
                    title: 'Washryte',
                    subtitle: 'Marketing a Laundromat'
                },
                {
                    title: 'Frutta',
                    subtitle: 'Marketing the next big Juice company in Nigeria'
                },
                {
                    title: 'Delight vet',
                    subtitle: 'Branding a vet like no other'
                },
                {
                    title: 'GetPayed',
                    subtitle: 'Creative for a creative payment company'
                },
                {
                    title: 'LandGirl',
                    subtitle: 'Branding a real estate agent with no compare'
                },
                {
                    title: 'OneDrugStore',
                    subtitle: "Designing Nigeria's top online pharmacy"
                },
                {
                    title: 'Healthbanc',
                    subtitle: 'UX/UI Design of a personal health mobile application'
                },
                {
                    title: 'Skydd',
                    subtitle: 'Designing the landing page for the premier insurance agency'
                },
                {
                    title: 'FlashOne',
                    subtitle: 'Marketing the next big deal in Nigeria'
                }
            ],
            type: 'projects'
        },
        {
            number: '2',
            title: 'About',
            subtitle: 'Our story, mission, services and testimonials',
            type: 'simple-v2'
        },
        {
            number: '1',
            title: 'Contact',
            subtitle: '',
            type: 'simple'
        }
    ];
    
    return (
        <section className={styles.homepageWrapper}>
            <section className={styles.leftSection}>
                <div className={styles.topLeft}>
                    <div className={styles.sterlingCallout}>
                        <p className='title fColor-black fSize-14'>
                            Previously worked with
                        </p>
                        <img src={sterling} alt="" className={styles.sterlingLogo}/>
                    </div>
                    <div className={styles.udinnaPitch}>
                        <img src={udinnaSmall} alt="" />
                        <div>
                            <p className='title fColor-black fSize-18'>
                                Udinna Digital
                            </p>
                            <p className='body-text fColor-grey fSize-16'>
                                Crafting your dream brand
                            </p>
                        </div>
                    </div>
                    <h1 className='body-text fColor-grey fSize-24'>
                        We are a Lagos-based <span className={styles.boldenedText}>marketing, product design, </span>
                        and <span className={styles.boldenedText}>software development</span> firm dedicated to 
                        building bold brand identities and digital experiences, blending 
                        strategy, aesthetics and seamless execution.
                    </h1>
                    <div className={styles.headerBtnContainer}>
                        <a href="#contact" className='title fSize-18 fColor-black btn-pry'>
                            Contact
                        </a>
                        <a href="" className='icon-btn'>
                            <img src={xLogo} alt="" />
                        </a>
                        <a href="" className='icon-btn'>
                            <img src={igLogo} alt="" />
                        </a>
                        <a href="" className='icon-btn'>
                            <img src={dribbble} alt="" />
                        </a>
                        <a href="" className='icon-btn'>
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.tableOfContents}>
                    {sections.map((section, index) => (
                        <div 
                            key={index}
                            className={`${styles.contentSection} ${index === activeIndex ? styles.activeSection : ''}`}
                            onClick={() => setActiveIndex(index)}
                            >
                            <h2 className='body-text fSize-88 fColor-black'>{section.number}</h2>

                            {section.type === 'simple' && (
                                <div className={styles.contentHeaderOne}>
                                    <p className='title fSize-18 fColor-black'>{section.title}</p>
                                    {section.subtitle && (
                                        <>
                                            <div className={styles.dividerDot}></div>
                                            <p className='body-text fColor-grey fSize-16'>{section.subtitle}</p>
                                        
                                        </>
                                    )}
                                </div>
                            )}
                            
                            {section.type === 'simple-v2' && (
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>{section.title}</p>
                                    {section.subtitle && (
                                        <p className='body-text fColor-grey fSize-16'>{section.subtitle}</p>
                                    )}
                                </div>
                            )}

                            {section.type === 'projects' && (
                                <div className={styles.contentHeaderThree}>
                                    <div className={styles.contentHeaderThree}>
                                        <div className={styles.contentHeaderOne}>
                                            <p className='title fSize-18 fColor-black'>{section.title}</p>
                                            <div className={styles.dividerDot}></div>
                                            <p className='body-text fColor-grey fSize-16'>{section.subtitle}</p>
                                        </div>
                                        <p className='body-text fSize-16 fColor-grey'>{section.description}</p>
                                    </div>

                                    <div>
                                        {section.projects.map((project, i) => (
                                            <div key={i} className={styles.contentHeaderTwo}>
                                                <p className='title fSize-18 fColor-black'>{project.title}</p>
                                                <p className='body-text fColor-grey fSize-16'>{project.subtitle}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                    
                    
                    {/* <div className={`${styles.contentSection} ${styles.activeSection}`}>
                        <h2 className='body-text fSize-88 fColor-black'>
                            4
                        </h2>
                        <div className={styles.contentHeaderOne}>
                            <p className='title fSize-18 fColor-black'>
                                Home
                            </p>
                            <div className={styles.dividerDot}></div>
                            <p className='body-text fColor-grey fSize-16'>
                                Udinna Digital
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentSection}>
                        <h2 className='body-text fSize-88 fColor-black'>
                            3
                        </h2>
                        <div>
                            <div className={styles.contentHeaderThree}>
                                <div className={styles.contentHeaderOne}>
                                    <p className='title fSize-18 fColor-black'>
                                        Works
                                    </p>
                                    <div className={styles.dividerDot}></div>
                                    <p className='body-text fColor-grey fSize-16'>
                                        2023 — 2025
                                    </p>
                                </div>
                                <p className='body-text fSize-16 fColor-grey'>
                                    Selected Projects
                                </p>
                            </div>
                            <div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        Washryte
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Marketing a Laundromat
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        Frutta
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Marketing the next big Juice company in Nigeria
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        Delight Vet
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Branding a vet like no other
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        GetPayed
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Creative for a creative payment company
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        LandGirl
                                    </p>
                                    <p className='body-text fColor-grey'>
                                        Branding a real estate agent with no compare
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        OneDrugStore
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Designing Nigeria's top online pharmacy
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        Healthbanc
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        UX/UI Design of a personal health mobile application
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        Skydd
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Designing the landing page for the premier insurance agency
                                    </p>
                                </div>
                                <div className={styles.contentHeaderTwo}>
                                    <p className='title fSize-18 fColor-black'>
                                        FlashOne
                                    </p>
                                    <p className='body-text fColor-grey fSize-16'>
                                        Marketing the next big Juice company in Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentSection}>
                        <h2 className='body-text fSize-88 fColor-black'>
                            2
                        </h2>
                        <div className={styles.contentHeaderTwo}>
                            <p className='title fSize-18 fColor-black'>
                                About
                            </p>
                            <p className='body-text fColor-grey fSize-16'>
                                Our story, mission, services and testimonials
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentSection}>
                        <h2 className='body-text fSize-88 fColor-black'>
                            1
                        </h2>
                        <div className={styles.contentHeaderTwo}>
                            <p className='title fSize-18 fColor-black'>
                                Contact
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className={styles.rightSection}>
                <section className={styles.topRight}>
                    <img src={udinnaLarge} alt="" className={styles.udinnaLarge}/>
                    <div className={styles.rightProjectLinkList}>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            Washryte
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            Frutta
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            Delight Vet
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            GetPayed
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            LandGirl
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            OneDrugStore
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            Healthbanc
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            Skydd
                        </a>
                        <a href="" className={`body-text fSize-24 fColor-white ${styles.rightProjectLink}`}>
                            FlashOne
                        </a>
                    </div>
                </section>
                <section>
                    <h4 className='title fSize-56'>
                        Check our latest projects
                    </h4>
                    {/* <img src="" alt="" /> */}
                </section>
            </section>
        </section>
    )
}