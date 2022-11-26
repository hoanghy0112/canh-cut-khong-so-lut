import { useSelector } from 'react-redux';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { selectScore } from '../../features/score/scoreSlice';
import './AccumulatedPoint.scss';
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
          Your accumulated point <span>{score || 0}</span>{' '}
        </h2>
        <div>
          <PrimaryButton title='Earn more point' />
        </div>
      </div>
      <div className='voucher-group'>
        {voucherList.map(({ name, description }) => (
          <VoucherCard name={name} description={description} />
        ))}
      </div>
    </div>
  );
}
