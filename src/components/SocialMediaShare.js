import React from "react";
import { FacebookShareButton, FacebookIcon,
        TumblrShareButton, TumblrIcon,
        RedditShareButton, RedditIcon,
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon 
    } from 'react-share';

const SocialMediaShare = ({pitch}) => {

    const shareUrl = "https://bigfinishgenerator.surge.sh/";
    const shareQuote = `${pitch} - I generated this boxset idea and had several minutes of entertainment courtesy of the Big Finish Boxset Generator, and you can too.`;
    const shareTitle = "The Big Finish Boxset Generator";

    return ( 
        <aside>
            Share this on your social channels.
            <div className="social-media-share">
        <div className="facebook">
            <FacebookShareButton
            url={shareUrl}
            quote={shareQuote}
            hashtag="#doctorwho"
            >
                <FacebookIcon size={30} />
            </FacebookShareButton>
        </div>
        <div className="tumblr">
            <TumblrShareButton
            url={shareUrl}
            caption={shareQuote}
            tags={["doctorwho", "bigfinish"]}
            title={shareTitle}
            posttype="link"
            >
                <TumblrIcon size={30} />
            </TumblrShareButton>
        </div>
        <div className="reddit">
            <RedditShareButton
            url={shareUrl}
            title={shareTitle}
            >
                <RedditIcon size={30} />
            </RedditShareButton>
        </div>
        <div className="whatsapp">
            <WhatsappShareButton
            url={shareUrl}
            title={shareTitle}
            separator=" "
            >
                <WhatsappIcon size={30} />
            </WhatsappShareButton>
        </div>
        <div className="email">
            <EmailShareButton
            url={shareUrl}
            body={shareQuote}
            subject={shareTitle}
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