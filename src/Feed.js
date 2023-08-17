import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FlipMove from "react-flip-move";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        <Post
          key={1}
          displayName="Rakoon_4"
          username="Letrucof"
          verified={<VerifiedUserIcon className="post__badge" />}
          text="Coucou les loulou"
          avatar="https://www.buzzfrance.fr/wp-content/uploads/2022/10/guts-berserk.jpeg"
          image="https://www.numerama.com/wp-content/uploads/2023/06/spider-man-across-the-spider-verse.jpg"
        />
        <Post
          key={1}
          displayName="Bruno Lemaire"
          username="LemaireNude"
          verified={<VerifiedUserIcon className="post__badge" />}
          text="Coucou mes loulous, pour mon groupe WhatsApp de partage nude, les photos ont pris du retard, ça arrive bientôt bisous"
          avatar="https://images.laprovence.com/media/afp/75493c642eb0263f483e7d5f83cd91c74f99bfab.jpg?twic=v1/crop=1200x675@0x90/cover=1960x1103"
          image=""
        />
        <Post
          key={1}
          displayName="Sovon lé animal"
          username="Levert"
          verified=""
          text="Il est illégal de ramasser des oeufs de chat sauvage. Les chats sauvages sont une espèce menacée, 
          et leur population est en déclin. Ramasser leurs oeufs contribue à leur extinction. 
          Si vous voyez des oeufs de chat sauvage, n'y touchez pas et prévenez les autorités."
          avatar="https://www.papillesetpupilles.fr/wp-content/uploads/2013/10/Frites-%C2%A9De-PosiNote-shutterstock.jpg"
          image="https://cdn-s-www.bienpublic.com/images/C5827221-E431-4FC4-A93E-784758297FD5/NW_raw/le-chat-sauvage-fraie-t-il-avec-ses-cousins-domestiques-on-le-saura-sans-doute-bientot-photo-archives-lbp-1480192111.jpg"
        />
        <Post
          key={1}
          displayName="Rakoon_4"
          username="Letrucof"
          verified={<VerifiedUserIcon className="post__badge" />}
          text="Coucou les loulou"
          avatar="https://www.buzzfrance.fr/wp-content/uploads/2022/10/guts-berserk.jpeg"
          image="https://www.numerama.com/wp-content/uploads/2023/06/spider-man-across-the-spider-verse.jpg"
        />
        <Post
          key={1}
          displayName="Rakoon_4"
          username="Letrucof"
          verified={<VerifiedUserIcon className="post__badge" />}
          text="Coucou les loulou"
          avatar="https://www.buzzfrance.fr/wp-content/uploads/2022/10/guts-berserk.jpeg"
          image="https://www.numerama.com/wp-content/uploads/2023/06/spider-man-across-the-spider-verse.jpg"
        />
      </FlipMove>
    </div>
  );
}

export default Feed;
