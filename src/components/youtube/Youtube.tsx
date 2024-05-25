import styles from "../../style/youtube.module.scss";
import classNames from "classnames/bind";
import YouTube from 'react-youtube';
import Floating from "./Floating";

const cx = classNames.bind(styles);

const Youtube = () => {
  return (
    <div className={cx("main-container")}>
      <div className={`${cx("youtube-container")} container`}>
        <div className={`${cx("youtube__area")} inner`}>
          <YouTube
            id={cx("player")}
            className={cx("area__container")}
            videoId={"An6LvWQuj_8"}
            
            opts={{
              playerVars: {
                autoplay: 1,
                loop: 1,
                playlist: "An6LvWQuj_8",
              },
            }}
            onReady={(e) => e.target.mute()}
          />
        </div>
        <div className={cx("youtube__cover")} />
      </div>
      <Floating />
    </div>
  );
}

export default Youtube