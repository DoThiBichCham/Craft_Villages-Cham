import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookSquare,
  faInstagramSquare,
  faFacebookMessenger,
  faYoutubeSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer-background')}>
      <div className={cx('footer-container')}>
        <div className={cx('footer-title')}>CraftVillages</div>
        <div className={cx('footer-content')}>
          <div className={cx('footer-content-item')}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={cx('footer-content-icon')}
            />
            <div className={cx('footer-content-text')}>
              Khu 2, Đ 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT
            </div>
          </div>

          <div className={cx('footer-content-item')}>
            <FontAwesomeIcon
              icon={faPhone}
              className={cx('footer-content-icon')}
            />
            <div className={cx('footer-content-text')}>
              <a href="tel:+842923832663">+84292 3832 663</a>
            </div>
          </div>

          <div className={cx('footer-content-item')}>
            <FontAwesomeIcon
              icon={faAt}
              className={cx('footer-content-icon')}
            />
            <div className={cx('footer-content-text')}>
              <a href="mailto:example@craftvillage.com">
                example@craftvillage.com
              </a>
            </div>
          </div>
        </div>
        <div className={cx('footer-contact')}>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className={cx('footer-contact-icon')}
          />
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className={cx('footer-contact-icon')}
          />
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className={cx('footer-contact-icon')}
          />
          <FontAwesomeIcon
            icon={faYoutubeSquare}
            className={cx('footer-contact-icon')}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className={cx('footer-contact-icon')}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
