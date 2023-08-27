import React from "react";
import { FacebookShareButton, FacebookIcon,
        TumblrShareButton, TumblrIcon,
        RedditShareButton, RedditIcon,
        LinkedinShareButton, LinkedinIcon,
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon 
    } from 'react-share';

const SocialMediaShare = () => {
    return ( 
        <aside>
            Share this on your social channels.
            <div className="social-media-share">
        <div className="facebook">
            <FacebookShareButton
            url={"https://bigfinishgenerator.surge.sh/"}
            quote={'I had several minutes of entertainment courtesy of the Big Finish Boxset Generator, and you can too'}
            hashtag="#doctorwho"
            >
                <FacebookIcon size={30} />
            </FacebookShareButton>
        </div>
        <div className="tumblr">
            <TumblrShareButton
            url={"https://bigfinishgenerator.surge.sh/"}
            quote={'I had several minutes of entertainment courtesy of the Big Finish Boxset Generator, and you can too'}
            hashtag="#doctorwho"
            title={"The Big Finish Boxset Generator"}
            >
                <TumblrIcon size={30} />
            </TumblrShareButton>
        </div>
        <div className="reddit">
            <RedditShareButton
            url={"https://bigfinishgenerator.surge.sh/"}
            title={"The Big Finish Boxset Generator"}
            >
                <RedditIcon size={30} />
            </RedditShareButton>
        </div>
        <div className="linked-in">
            <LinkedinShareButton
            source={"https://bigfinishgenerator.surge.sh/"}
            summary={'I had several minutes of entertainment courtesy of the Big Finish Boxset Generator, and you can too'}
            title={"The Big Finish Boxset Generator"}
            >
                <LinkedinIcon size={30} />
            </LinkedinShareButton>
        </div>
        <div className="whatsapp">
            <WhatsappShareButton
            url="https://bigfinishgenerator.surge.sh/"
            title={"The Big Finish Boxset Generator"}
            separator=" "
            >
                <WhatsappIcon size={30} />
            </WhatsappShareButton>
        </div>
        <div className="email">
            <EmailShareButton
            url={"https://bigfinishgenerator.surge.sh/"}
            body={'I had several minutes of entertainment courtesy of the Big Finish Boxset Generator, and you can too'}
            subject="The Big Finish Boxset Generator"
            separator=" "
            >
                <EmailIcon size={30} />
            </EmailShareButton>
        </div>
        </div>
        </aside>
     );
}
 
export default SocialMediaShare;