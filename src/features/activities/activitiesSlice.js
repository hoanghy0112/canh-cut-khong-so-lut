/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initData = [
	{
		title: 'CLEAN UP VIỆT NAM LẦN 4 - ĐẦU CẦU HỒ CHÍ MINH',
		date: new Date('2022-12-04'),
		from: new Date('2022-12-04T15:00:00'),
		to: new Date('2022-12-04T18:00:00'),
		organization: 'Cộng đồng xanh Việt Nam',
		content: 'CLEAN UP VIỆT NAM LẦN 4 dự kiến sẽ tiếp tục càn quét các bãi rác tự phát dọc khắp 63 tỉnh thành để Dọn sạch Việt Nam - Hân hoan đón Tết. Và đồng hành trong lần này sẽ không chỉ còn là các bạn TNV trong nước, mà còn có các bạn TNV ở hơn 20 đầu cầu quốc tế, cùng nhau bảo vệ và lan tỏa tình yêu môi trường. Hãy cùng nhau tạo nên những điều phi thường từ những hành động nhỏ bé nhé',
		thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/315167358_199589039219666_3285440609276437993_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=7QV07gWuusgAX-kCc2Q&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDEf2Jk0Acei35V_gH3Qax-Xam-AlPgxYz_-hTusiXEFA&oe=6386C112'
	},
	{
		title: 'TUYỂN TÌNH NGUYỆN VIÊN HOẠT ĐỘNG NHẶT RÁC',
		//date: '19/11/2022',
		date: new Date('2022-11-19'),
		from: new Date('2022-11-19T08:00:00'),
		to: new Date('2022-11-19T10:00:00'),
		organization: 'Green University DUE',
		content: 'Hoạt động nhặt rác hằng tháng tại Dự án Green University DUE tiếp tục diễn ra. Cùng với sự góp mặt của Quý tài trợ, Dự án phát động và mở đơn đăng ký tuyển tình nguyện viên với mục tiêu nâng cao nhận thức của cộng đồng và kêu gọi cùng hành động vì môi trường xanh tại TP.Đà Nẵng.',
		thumbnail: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315552762_219627263724265_1621223581500786505_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=FdjBFDu-7GIAX8WPebt&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBBwnkiDNwYtmwWUKc138MStIZydv8LFDGYd4lvSAEOYg&oe=6385C446'
	},
	{
		title: 'UIT Green 2022',
		//date: '28/10/2022',
		date: new Date('2022-10-28'),
		from: new Date('2022-10-28T08:00:00'),
		to: new Date('2022-10-28T10:00:00'),
		organization: 'Hội sinh viên Việt Nam, trường Đại học Công Nghệ Thông Tin',
		content: 'Chương trình tình nguyện UIT Green 2022 nhằm mang lại những cảnh quan xanh tại UIT do chính sinh viên UIT thực hiện để tăng cường tinh thần bảo vệ môi trường và phát huy tinh thần tình nguyện xung kích của sinh viên Trường. 🍃🌿 Trong học kì này, UIT Green 2022 sẽ tổ chức xuyên suốt với những hạng mục xanh mang lại cảnh quan xanh, sạch, đẹp cho UIT. 🍃🌿 Rất mong các bạn sinh viên sẽ chung tay vì một UIT Green như ý nghĩa của chương trình này. Các bạn mong muốn tham gia vui lòng đăng ký tại: https://link.uit.edu.vn/UIT-Green-2022',
		thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/313340225_512699274229415_8126099418240907952_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=NavMc6k8V2gAX83zEl-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDmUHKiYDL7kz16q7Cnz4hrk8Y2dHp7iVCsACzJd_AMgw&oe=6385E323',
	},
	{
		title: 'Tuyển tình nguyện viên chương trình UIT Green 2022 🌱🌱',
		date: new Date('2022-03-10'),
		from: new Date('2022-03-10T08:00:00'),
		to: new Date('2022-03-10T10:00:00'),
		organization: 'Đoàn thanh niên - Hội sinh viên, trường Đại học Công Nghệ Thông Tin',
		content: 'Chào mừng 91 năm ngày thành lập Đoàn TNCS Hồ Chí (26/3/1931 - 26/3/2022), Chào mừng tháng Thanh năm 2022. Chương trình tình nguyện UIT Green 2022 nhằm mang lại những cảnh quan xanh tại UIT do chính sinh viên UIT thực hiện để tăng cường tinh thần bảo vệ môi trường và phát huy tinh thần tình nguyện xung kích của sinh viên Trường.',
		thumbnail: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/275562319_4901651603260674_7028156447893836524_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DvwfLhdzddwAX8W5QsD&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDNgjSHVmXcNAXBmUJHn0OIBd6qbBLRl0BFFuPPncX-pQ&oe=6387A802'
	}
]


const initialState = {
	listActivities: initData,
	status: "idle",
	error: null,
};

export const activitiesManagementSlice = createSlice({
	name: "activitiesManagement",
	initialState,
});

export const selectAllActivities = state => state.activitiesManagement


export default activitiesManagementSlice.reducer;
