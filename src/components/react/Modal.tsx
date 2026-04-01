import React, {useState} from 'react'
import "../../styles/Modal.css"
import "../../styles/ModalMobile.css"
import CloseButton from './CloseButton';
import Hashtag from './Hashtag';

export interface Media {
    dataPath: string;
    isVideo: boolean;
    caption?: string;
}

interface Props {

    children: React.ReactNode;
    title: string;
    tags?: string[];
    description?: string;
    blogLink?: string;
    media: Media;
    additionalMedia?: Media[];
}

const Modal = ({ title, tags, description, blogLink, media, additionalMedia, children }:Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id="modal-thumbnail" onClick={() => setIsOpen(true)}>
                {children}
            </div>
            {isOpen && <div id="modal-container" onClick={() => setIsOpen(false)}>
                <div id="modal-padding" onClick={(e) => e.stopPropagation()}>
                    <div id="modal-content">
                        <div id="media-container">
                            <div id="main-media">
                                {!media.isVideo ? (
                                    <img src={media.dataPath} />
                                ) : (
                                    <video src={media.dataPath} autoPlay muted loop playsInline preload="auto" />
                                )}
                            </div>
                            {additionalMedia && <div id="additional-media-container">
                                {additionalMedia?.map((item: Media, index) => {
                                    return (
                                        <div key={index} id="additional-media">
                                            {
                                            !item.isVideo ? 
                                                (
                                                    <img src={item.dataPath} />
                                                ) : (
                                                    <video src={item.dataPath} autoPlay muted loop playsInline preload="auto" />
                                                )
                                            }
                                            {item.caption && <p>{item.caption}</p>}
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                        <div id="modal-info-container">
                            <div id="modal-header">
                                <h2 id="title">{title}</h2>
                                <CloseButton width={24} height={24} color='#752d6f' onClick={() => setIsOpen(false)} />
                            </div>
                            <div id="description-container">
                                <div id="description">
                                    <p>{description}</p>
                                </div>
                                {blogLink &&
                                    <div id="link-container">
                                        <a href={blogLink}>{"More >"}</a>
                                    </div>
                                }
                                {tags && 
                                    <div id="hashtag-container">
                                        {tags.map((tag, index) => (
                                            <Hashtag key={index} text={tag} />
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal;