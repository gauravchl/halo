import React from "react";
import styles from "./tweetCard.module.css";

const TweetCard = props => {
  const { tweet } = props;

  return <div className={styles.root}><b>{tweet.who}</b> : {tweet.tweet}</div>;
};

export default TweetCard;
