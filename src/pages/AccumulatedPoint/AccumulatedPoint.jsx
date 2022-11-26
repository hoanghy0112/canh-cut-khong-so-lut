import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './AccumulatedPoint.scss';
import { useSelector } from 'react-redux';
import { selectScore } from '../../features/score/scoreSlice';
import VoucherCard from './VoucherCard/VoucherCard';

const voucherList = [
  {
    name: 'Giảm 20% tối đa 30k tại The Coffee House',
    description: 'Áp dụng cho sinh viên UIT',
    score: 100,
    imgSrc: 'https://bepnha.kingfoodmart.com/wp-content/uploads/2021/10/TentcardKFM_A4-724x1024.jpg'
  },
  {
    name: 'Voucher HighLand Coffee 100.000 vnđ',
    description: 'Áp dụng cho đơn hàng trên 200.000 vnđ',
    score: 200,
    imgSrc: 'https://seagatevietnam.com/wp-content/uploads/2017/03/Voucher-Highland.png'
  },
  {
    name: 'Gift voucher Cộng Caffe',
    description: 'Áp dụng cho đơn hàng trên 400.000 vnd',
    score: 150,
    imgSrc: 'https://vn-test-11.slatic.net/p/deab8d1a67668387193c66f8f5c36567.jpg'
  },
  {
    name: 'Bình giữ nhiệt thép không gỉ Lock & Lock',
    description: 'Bình giữ nhiệt Lock&Lock thiết kế hiện đại, thanh lịch với tông màu bạc sáng đẹp. Dung tích 800 ml, chiều cao 25.5 cm, bạn cầm nắm và di chuyển thoải mái. Vỏ và ruột bình làm từ vật liệu inox độ bền cao, chống oxy hóa, không ám mùi, an toàn cho sức khỏe. ',
    score: 500,
    imgSrc: 'https://cf.shopee.vn/file/158e281c6ca61c724f70d20c22a14018'
  },
  {
    name: 'Túi vải màu trắng Canvas Tempo',
    description: 'Túi vải thân thiện với môi trường',
    score: 200,
    imgSrc: 'https://concung.com/2021/08/51966-74893-large_mobile/tui-vai-mau-trang-canvas-tempo.jpg'
  },
  {
    name: 'Máy lọc không khí kết hợp quạt LG PuriCare AeroTower',
    description: 'Máy lọc không khí kết hợp quạt LG mới bắt giữ 99.97% bụi mịn với bộ lọc HEPA 360° cùng công nghệ UVnano™.',
    score: 5000,
    imgSrc: 'https://www.lg.com/vn/images/may-loc-khong-khi/md07554691/md07554691-350x350.jpg'
  },
];

export default function AccumulatedPoint() {
  const score = useSelector(selectScore);
  return (
    <div className='accumulated-point'>
      <div className='button-group'>
        <h2>
          Your accumulated point <span>{score}</span>{' '}
        </h2>
        <div>
          <PrimaryButton title='Earn more point' />
        </div>
      </div>
      <div className='voucher-group'>
        {voucherList.map(({ name, description, score: scr, imgSrc }) => (
          <div className='container'>
            <div className='img-wrappper'>
              <img src={imgSrc}></img>
            </div>
            <VoucherCard name={name} description={description} />
            <div className='flow'>
              <div
                className='complete'
                style={{ width: `${(score * 100) / scr}%` }}
              ></div>
            </div>
            {score >= scr ? <button className='button'>Claim</button> : <button className='button_none'>Claim</button>}
          </div>
        ))}
      </div>
    </div>
  );
}
