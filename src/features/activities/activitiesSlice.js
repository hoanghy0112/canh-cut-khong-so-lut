import { createSlice } from "@reduxjs/toolkit";

const initData = [
	{
		title: 'CLEAN UP VIỆT NAM LẦN 4 - ĐẦU CẦU HỒ CHÍ MINH',
		date: new Date('2022-12-04T00:00:00'),
		from: new Date('2022-12-04T15:00:00'),
		to: new Date('2022-12-04T18:00:00'),
		organization: 'Cộng đồng xanh Việt Nam',
		content: 'CLEAN UP VIỆT NAM LẦN 4 dự kiến sẽ tiếp tục càn quét các bãi rác tự phát dọc khắp 63 tỉnh thành để Dọn sạch Việt Nam - Hân hoan đón Tết. Và đồng hành trong lần này sẽ không chỉ còn là các bạn TNV trong nước, mà còn có các bạn TNV ở hơn 20 đầu cầu quốc tế, cùng nhau bảo vệ và lan tỏa tình yêu môi trường. Hãy cùng nhau tạo nên những điều phi thường từ những hành động nhỏ bé nhé',
		thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/315167358_199589039219666_3285440609276437993_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=7QV07gWuusgAX-kCc2Q&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDEf2Jk0Acei35V_gH3Qax-Xam-AlPgxYz_-hTusiXEFA&oe=6386C112'
	},
	{
		title: 'TUYỂN TÌNH NGUYỆN VIÊN HOẠT ĐỘNG NHẶT RÁC',
		//date: '19/11/2022',
		date: new Date('2022-11-19T00:00:00'),
		from: new Date('2022-11-19T08:00:00'),
		to: new Date('2022-11-19T10:00:00'),
		organization: 'Green University DUE',
		content: 'Hoạt động nhặt rác hằng tháng tại Dự án Green University DUE tiếp tục diễn ra. Cùng với sự góp mặt của Quý tài trợ, Dự án phát động và mở đơn đăng ký tuyển tình nguyện viên với mục tiêu nâng cao nhận thức của cộng đồng và kêu gọi cùng hành động vì môi trường xanh tại TP.Đà Nẵng.',
		thumbnail: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315552762_219627263724265_1621223581500786505_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=FdjBFDu-7GIAX8WPebt&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBBwnkiDNwYtmwWUKc138MStIZydv8LFDGYd4lvSAEOYg&oe=6385C446'
	},
	{
		title: 'UIT Green 2022',
		//date: '28/10/2022',
		date: new Date('2022-10-28T00:00:00'),
		from: new Date('2022-10-28T08:00:00'),
		to: new Date('2022-10-28T10:00:00'),
		organization: 'Hội sinh viên Việt Nam, trường Đại học Công Nghệ Thông Tin',
		content: 'Chương trình tình nguyện UIT Green 2022 nhằm mang lại những cảnh quan xanh tại UIT do chính sinh viên UIT thực hiện để tăng cường tinh thần bảo vệ môi trường và phát huy tinh thần tình nguyện xung kích của sinh viên Trường. 🍃🌿 Trong học kì này, UIT Green 2022 sẽ tổ chức xuyên suốt với những hạng mục xanh mang lại cảnh quan xanh, sạch, đẹp cho UIT. 🍃🌿 Rất mong các bạn sinh viên sẽ chung tay vì một UIT Green như ý nghĩa của chương trình này. Các bạn mong muốn tham gia vui lòng đăng ký tại: https://link.uit.edu.vn/UIT-Green-2022',
		thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/313340225_512699274229415_8126099418240907952_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=NavMc6k8V2gAX83zEl-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDmUHKiYDL7kz16q7Cnz4hrk8Y2dHp7iVCsACzJd_AMgw&oe=6385E323',
	},
	{
		title: 'Tuyển tình nguyện viên chương trình UIT Green 2022 🌱🌱',
		date: new Date('2022-03-10T00:00:00'),
		from: new Date('2022-03-10T08:00:00'),
		to: new Date('2022-03-10T10:00:00'),
		organization: 'Đoàn thanh niên - Hội sinh viên, trường Đại học Công Nghệ Thông Tin',
		content: 'Chào mừng 91 năm ngày thành lập Đoàn TNCS Hồ Chí (26/3/1931 - 26/3/2022), Chào mừng tháng Thanh năm 2022. Chương trình tình nguyện UIT Green 2022 nhằm mang lại những cảnh quan xanh tại UIT do chính sinh viên UIT thực hiện để tăng cường tinh thần bảo vệ môi trường và phát huy tinh thần tình nguyện xung kích của sinh viên Trường.',
		thumbnail: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/275562319_4901651603260674_7028156447893836524_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DvwfLhdzddwAX8W5QsD&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDNgjSHVmXcNAXBmUJHn0OIBd6qbBLRl0BFFuPPncX-pQ&oe=6387A802'
	},
	{
		title: '🌍 THƯ MỜI THAM GIA HOẠT ĐỘNG NHẶT RÁC CUỐI TUẦN 🌍',
		date: new Date('2022-11-27T00:00:00'),
		from: new Date('2022-11-27T08:00:00'),
		to: new Date('2022-11-27T12:00:00'),
		organization: 'Chúng Thanh Niên Phật Tử Phật Quang',
		content: 'Nhằm đem lại nguồn năng lượng tích cực sau ngày thứ sáu đen tối (Black Friday) và lan tỏa hình ảnh người Việt Nam văn minh, nói không với rác thải, Hội Yêu Rác tại Hàn Quốc thân mời các bạn trẻ cùng tham gia chương trình nhặt rác vào cuối tuần này nhé ạ! 🍀 Vì lợi ích của hành động nhỏ sẽ mang lại ý nghĩa lớn không chỉ với cá nhân mà còn giúp mọi người sống trong một môi trường trong lành, các bạn nhớ rủ thêm bạn bè và người thân của mình cùng tham gia nhé!',
		thumbnail: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/316681117_665702414995595_2405755193679234883_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0eR9o-av1esAX8FOLZ0&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCiF8ovSVg6wx0KfurwbO7qdtChQOfNB7OzeCQ1g4BL2g&oe=63879FE9'
	},
	{
		title: '🌍 RÁC VÀ TÌNH YÊU 🌍',
		date: new Date('2022-11-27T00:00:00'),
		from: new Date('2022-11-27T19:00:00'),
		to: new Date('2022-11-27T20:00:00'),
		organization: 'Hội Yêu Rác, Đoàn Khoa Thư viện - Thông tin học, trường Đại học KHXH&NV',
		content: 'Sự kiện nhặt rác đầy thú vị và cảm hứng sẽ được tổ chức bởi sự kết hợp từ Hội Yêu Rác, Đoàn Khoa Thư viện - Thông tin học, trường Đại học KHXH&NV và Ban sinh viên Xung Kích khoa Kỹ Thuật Xây Dựng, trường Đại Học Bách Khoa.',
		thumbnail: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/316938311_3243963212523411_2576478278513281043_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=ZtZ254KyF0kAX_o5FUx&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDuVVCHV9_n4wuxqIcuyw_z6OYU8WZVf0_jF2_giBisRQ&oe=63871324'
	},
	{
		title: 'WECHANGE - CHANGE FOR GREEN',
		date: new Date('2022-11-26T00:00:00'),
		from: new Date('2022-11-26T15:00:00'),
		to: new Date('2022-11-26T16:00:00'),
		organization: 'Đoàn khoa Công Nghệ Phần Mềm',
		content: '🌿Chương trình Tình nguyện Thứ 7 - Chủ nhật Xanh quay trở lại rồi mọi người ơi ‼️ ☘️Năm 2022, Wechange - Change For Green là chương trình tình nguyện mang đến cho các bạn sinh viên một sân chơi bổ ích, xây dựng một không gian xanh - sạch - đẹp, mang đến những trải nghiệm thú vị và quan trọng nhất là lan tỏa đến tất cả mọi người về trách nhiệm và tinh thần trong việc bảo vệ môi trường.',
		thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/282226719_5561191017247796_2674669284264980656_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Qab4y6RyzzEAX-HV51a&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCpJFcTL_FXw6msvDzzyQX5w8V83dHIlEl0QF5NwwHFVA&oe=63862B94'
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

export const selectAllActivities = state => state.activitiesManagement.listActivities


export default activitiesManagementSlice.reducer;
