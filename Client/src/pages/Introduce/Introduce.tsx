import img1 from '../../assets/images/introduce-img1.png';
import img2 from '../../assets/images/introduce-img2.png';
import img3 from '../../assets/images/introduce-img3.png';

// import '@fontsource/roboto';

import classNames from 'classnames/bind';

import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('introduce-container')}>
        <div
          className={cx('introduce-title')}
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Xóm nghề đan đát rổ rế truyền thống ở xã Hòa Bình, huyện Chợ Mới
        </div>
        <div className={cx('introduce-item')}>
          <div className={cx('introduce-item-text')}>
            Nghề đan đát Hoà Bình có từ rất lâu rồi, nhiều ông bà làm nghề này
            từ 50-60 năm về trước, các gia đình đan đát rổ rế ở đây tập trung
            chủ yếu ở các khu dân cư xung quanh Nhà thờ Cái Đôi.
          </div>
          <div className={cx('introduce-item-img')}>
            <img src={img1} alt="Description of the image" />
          </div>
        </div>

        <div className={cx('introduce-item')}>
          <div className={cx('introduce-item-img')}>
            <img src={img2} alt="Description of the image" />
          </div>
          <div className={cx('flex-direction')}>
            <p></p>
            Nguồn nguyên liệu chủ yếu xóm nghề sử dụng là các vật liệu có sẵn ở
            địa phương như tre, trúc,...
            <p className={cx('introduce-item-text-source')}>
              (Ảnh: Chị Nê làm nghề đan đát rổ rế ở xã Hòa Bình)
            </p>
          </div>
        </div>

        <div className={cx('introduce-item')}>
          <div className={cx('introduce-item-text')}>
            Xóm nghề chuyên sản xuất các sản phẩm như rổ, rế, xề,... cung cấp
            cho địa phương và một số tỉnh thành khác.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Mỗi sản phẩm của làng nghề đan đát đều toát
            lên cái hồn quê qua sự khéo léo của người thợ. Họ trau chuốt, tỉ mỉ
            đến từng chi tiết, các sản phẩm rất chắc và bền, “tuổi thọ” có thể
            lên đến 5 hoặc 10 năm.
          </div>

          <div className={cx('introduce-item-img')}>
            <img src={img3} alt="Description of the image" />
          </div>
        </div>

        <div className={cx('introduce-achievements')}>
          <div className={cx('introduce-title')}>Thành tích</div>
          <div className={cx('introduce-achievements-sub_title')}>
            Trong 3 năm qua, làng nghề đã đạt được các thành tích nổi trội như:
          </div>
          <div className={cx('introduce-achievements-item-wrap')}>
            <div className={cx('introduce-achievements-item')}>
              <p>Sản lượng</p>
              <h2>45-55</h2>
              <p>Sản phẩm/ ngày</p>
            </div>

            <div className={cx('introduce-achievements-item')}>
              <p>Sản lượng</p>
              <h2>12345</h2>
              <p>Sản phẩm</p>
            </div>

            <div className={cx('introduce-achievements-item')}>
              <p>Xuất khẩu</p>
              <h2>4</h2>
              <p>Quốc gia</p>
            </div>
          </div>
        </div>

        <div className={cx('introduce-contact')}>
          <div className={cx('introduce-title')}>Thông tin liên hệ</div>
          <ul>
            <li>Vựa rổ rế của chị 9 Nê: 0386666707</li>
            <li>
              Mua lẻ hoặc nhờ dẫn đi tìm hiểu xóm đan đát rổ rế Hoà Bình thì
              liên hệ cô Hường: 079 3785626
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
