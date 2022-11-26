import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './AccumulatedPoint.scss';
import { useSelector } from 'react-redux';
import { selectScore } from '../../features/score/scoreSlice';
import VoucherCard from './VoucherCard/VoucherCard';

const voucherList = [
  {
    name: 'Giảm 50% tối đa 10k tại The Coffee House',
    description: 'Áp dụng cho sinh viên UIT',
    score: 100,
  },
  {
    name: 'Voucher HighLand Coffee 100.000 vnđ',
    description: 'Áp dụng cho đơn hàng trên 200.000 vnđ',
    score: 200,
  },
  {
    name: 'Gmarket giảm 50k cho hóa đơn từ 399k',
    description: 'Áp dụng cho đơn hàng tại Gmarket',
    score: 150,
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
        {voucherList.map(({ name, description, score: point }) => (
          <div className='container'>
            <VoucherCard name={name} description={description} />
            <div className='flow'>
              <div
                className='complete'
                style={{ width: `${(score * 100) / point}%` }}
              ></div>
            </div>
            <button className='button'>Claim</button>
          </div>
        ))}
      </div>
    </div>
  );
}
