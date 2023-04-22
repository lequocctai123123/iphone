/*chair=macbook
sofa=ipad
mobile=iphone
wireless=tai nghe
watch= dong ho*/ 

import productImg01 from "../images/iphone-11.jpg";
import productImg02 from "../images/iphone-12.jpg";
import productImg03 from "../images/iphone-13.jpg";
import productImg04 from "../images/iphone-13-promax.jpg";
import productImg05 from "../images/iphone-14.jpg";
import productImg06 from "../images/iphone-14-pro.jpg";
import productImg07 from "../images/iphone-14-promax.jpg";
import productImg08 from "../images/iphone-se.jpeg";

import productImg09 from  "../images/ipad-9.jpg";
import productImg10 from  "../images/ipad-10.jpg";
import productImg11 from  "../images/ipad-air-5.jpg";
import productImg12 from  "../images/ipad-pro-m1.jpeg";

import productImg14 from "../images/macbook-air-m1.jpg";
import productImg15 from  "../images/macbook-air-m2.jpg";
import productImg16 from  "../images/macbook-pro-14.jpg";
import productImg17 from  "../images/macbook-pro-16.jpg";

import productImg19 from  "../images/watch-s3.jpeg";
import productImg20 from  "../images/watch-s5.jpg";
import productImg21 from  "../images/watch-s6.jpg";
import productImg22 from  "../images/watch-s8.jpeg";

import productImg24 from  "../images/airpods-2.jpg";
import productImg25 from  "../images/airpods-3.jpeg";
import productImg26 from  "../images/airpods-max-apple.jpeg";
import productImg23 from  "../images/airpods-pro-wireless.jpg";

const products = [
  {
    id: "01",
    productName: "iPhone 11",
    imgUrl: productImg01,
    category: "mobile",
    price: 421,
    shortDesc:
      "Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
    description:
      "Ở mức cấu hình trên giúp điện thoại chơi game tốt với các tựa game phổ biến hiện nay một cách mượt mà, ổn định. Mọi thao tác trên iPhone mới cũng cho tốc độ phản hồi nhanh mà bạn gần như sẽ không cảm nhận được sự giật lag cho dù có sử dụng trong một thời gian dài.",
    reviews: [
      {
        rating: 4.7,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "iPhone 12",
    imgUrl: productImg02,
    category: "mobile",
    seller : "1",
    price: 632,
    shortDesc:
      "Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.",
    description:
      "Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho iPhone 12 đó là A14 Bionic, được sản xuất trên tiến trình 5 nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên phiên bản tiền nhiệm iPhone 11.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "03",
    productName: "iPhone 13",
    imgUrl: productImg03,
    category: "mobile",
    price: 843,
    shortDesc:
      "Trong khi sức hút đến từ bộ 4 phiên bản iPhone 12 vẫn chưa nguội đi, thì hãng điện thoại Apple đã mang đến cho người dùng một siêu phẩm mới iPhone 13 với nhiều cải tiến thú vị sẽ mang lại những trải nghiệm hấp dẫn nhất cho người dùng.",
    description:
      "Con chip Apple A15 Bionic siêu mạnh được sản xuất trên quy trình 5 nm giúp iPhone 13 đạt hiệu năng ấn tượng, với CPU nhanh hơn 50%, GPU nhanh hơn 30% so với các đối thủ trong cùng phân khúc.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "04",
    productName: "iPhone 13 Pro Max",
    imgUrl: productImg04,
    category: "mobile",
    seller : "1",
    price: 899,
    shortDesc:
      "iPhone 13 Pro Max 1 TB thuộc phân khúc điện thoại cao cấp mà không một iFan nào có thể bỏ qua, với màn hình lớn sắc nét, cấu hình vượt trội, dung lượng lưu trữ khủng, thời gian sử dụng dài, mỗi lần trải nghiệm đều cho bạn cảm giác thỏa mãn đáng ngạc nhiên.",
    description:
      "Để đảm bảo hiệu năng cho iPhone 13 Pro Max, nhà Táo sử dụng con chip Apple A15 Bionic được sản xuất theo tiến trình 5 nm cải tiến, số lượng bóng dẫn lên đến 15.8 nghìn tỷ cho năng lực tính toán và xử lý các tác vụ của điện thoại tăng mạnh. ",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "05",
    productName: "iPhone 14",
    imgUrl: productImg05,
    category: "mobile",
    price: 920,
    shortDesc:
      "Sau bao khoảng thời gian dài chờ đợi thì vào ngày 08/09 chiếc điện thoại iPhone 14 cũng đã chính thức được lộ diện, với hàng loạt thông số kỹ thuật ấn tượng từ camera cho đến hiệu năng cực khủng. Từ ngày 14/10/2022 tại Thế Giới Di Động cũng đã chính thức mở bán tất cả các phiên bản iPhone 14 series để người dùng có thể sớm ngày được trải nghiệm.",
    description:
      "Chiếc điện thoại iPhone mới nhất 2022 này được hoàn thiện với ngoại hình vuông vức khi hai cạnh và các mặt vát phẳng, đây được xem là kiểu thiết kế thời thượng và được cộng đồng người dùng đón nhận rất tích cực kể từ thế hệ iPhone 12 cho đến nay. Máy sẽ có kiểu thiết kế tương đồng thế hệ trước đó với màn hình dạng tai thỏ, các góc bo tròn mềm mại và đi cùng cụm hai camera xếp chéo vô cùng độc đáo.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "06",
    productName: "iPhone 14 Pro",
    imgUrl: productImg06,
    category: "mobile",
    price: 975,
    shortDesc:
      "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series với đầy đủ phiên bản tại Thế Giới Di Động.",
    description:
      "Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay. ",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "07",
    productName: "iPhone 14 Pro Max",
    imgUrl: productImg07,
    category: "mobile",
    price: 999,
    shortDesc:
      "Tại sự kiện ra mắt sản phẩm thường niên diễn ra vào tháng 9/2022, Apple đã trình làng iPhone 14 Pro với những cải tiến về thiết kế màn hình, hiệu năng, sẵn sàng cùng bạn chinh phục mọi thử thách. Giờ đây người dùng đã có thể mua sắm những sản phẩm iPhone 14 từ ngày 14/10/2022 tại Thế Giới Di Động với đầy đủ các phiên bản.",
    description:
      "Thừa hưởng phong cách thiết kế tối giản, hiện đại của thế hệ iPhone 13 series, iPhone 14 Pro vẫn sở hữu cạnh viền vát phẳng và hệ thống camera được bố trí một cách hợp lý trong một cụm hình vuông. Giờ đây cụm tai thỏ quen thuộc đã được loại bỏ và thay thế vào đó là hình notch độc đáo dễ nhận diện.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "08",
    productName: "iPhone SE",
    imgUrl: productImg08,
    category: "mobile",
    price: 669,
    shortDesc:
      "Như vậy là sau bao ngày chờ đợi thì iPhone SE 64GB (2022) cũng đã được giới thiệu tại sự kiện Apple Peek Performance. Thiết bị nổi bật với cấu hình mạnh mẽ, chạy chip hiện đại nhất của Apple hiện tại nhưng giá bán lại rất phải chăng.",
    description:
      "iPhone SE 64GB (2022) vẫn không thay đổi thiết kế nhiều so với phiên bản tiền nhiệm. Máy vẫn có màn hình 4.7 inch, viền màn hình trên và dưới được giữ lại để chứa camera selfie và nút Home huyền thoại. Màn hình iPhone SE 64GB (2022) sẽ sử dụng tấm nền IPS LCD, cho chất lượng hiển thị khá tốt.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "09",
    productName: "iPad 9",
    imgUrl: productImg09,
    category: "sofa",
    price: 532,
    shortDesc:
      "Sau thành công của iPad 8 thì Apple đã tung ra chiếc iPad 9 WiFi Cellular 64GB với những trang bị ngày càng vượt trội và phong cách thiết kế đậm chất iPad 10.2 Series, đây sẽ là mẫu máy tính bảng đáng cân nhắc trong phân khúc giá.",
    description:
      "Máy tính bảng iPad này có khung máy hình chữ nhật kèm với 2 cạnh viền trên dưới quen thuộc. Ở phiên bản này có 2 màu sắc là màu Bạc và màu Xám vô cùng quen thuộc mà vẫn vô cùng thanh lịch mà không kén người dùng. Bạn có thể lựa chọn màu sắc cho phù hợp với phong cách của mình.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "10",
    productName: "iPad 10",
    imgUrl: productImg10,
    category: "sofa",
    price: 600,
    shortDesc:
      "Sau khi trình làng hàng loạt mẫu iPhone vào tháng 09/2022 thì Apple cũng đã tiếp tục giới thiệu series iPad mới cho năm 2022. Trong đó iPad 10 WiFi 64GB là cái tên được hãng chú trọng khá nhiều về việc tối ưu giá thành nhằm giúp người dùng có thể dễ dàng tiếp cận. Máy hỗ trợ hệ điều hành iPadOS 16 cùng con chip Apple A14 Bionic 6 giúp mang lại hiệu năng vượt trội.",
    description:
      "iPad 10 sẽ có một thiết kế khá quen thuộc khi được hoàn thiện với phần vật liệu chủ yếu là kim loại ở phần mặt lưng, các cạnh và hai mặt đều được vát phẳng để mang lại cái nhìn sang trọng. Đi kèm với đó là các góc được bo tròn giúp cho tổng thể máy tính bảng trở nên thanh thoát và hiện đại hơn thay vì vuông vức trông như một cuốn tập.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "11",
    productName: "iPad Air 5",
    imgUrl: productImg11,
    category: "sofa",
    price: 662,
    shortDesc:
      "So với chiếc iPad Air 5 M1 Wifi 64GB thì chiếc iPad Air 5 M1 Wifi Cellular 64GB đã có một điểm khác biệt đáng kể đó là phương thức kết nối khi bạn vừa có thể sử dụng Wifi và vừa sử dụng mạng di động một cách bình thường nhưng vẫn cho một trải nghiệm rất tuyệt vời.",
    description:
      "Máy tính bảng được trang bị một màn hình lớn lên đến 10.9 inch vừa đủ không quá to những cũng không nhỏ cho bạn dễ dàng trải nghiệm, sử dụng. Đi kèm với đó chiếc màn hình Retina IPS LCD này sẽ mang lại cho bạn những trải nghiệm về màu sắc tốt hơn.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "12",
    productName: "iPad Pro M1",
    imgUrl: productImg12,
    category: "sofa",
    price: 700,
    shortDesc:
      "iPad Pro M1 12.9 inch Wifi 128GB (2021) mang một hiệu năng đỉnh cao đến từ vi xử lý Apple M1 và màn hình Liquid Retina XDR tiên tiến cho chất lượng hiển thị đột phá. Apple một lần nữa đưa iPad Pro vượt khỏi giới hạn của một chiếc máy tính bảng.",
    description:
      "Bằng việc trang bị vi xử lý M1 siêu khủng của các dòng máy tính MacBook, giúp cho iPad Pro M1 2021 trở thành chiếc máy tính bảng mạnh mẽ nhất hiện nay (05/2021).",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "14",
    productName: "Macbook Air M1",
    imgUrl: productImg14,
    category: "chair",
    price:799,
    shortDesc:
      "Laptop Apple Air M1 2020 có thiết kế đẹp, sang trọng với CPU M1 độc quyền từ Apple cho hiệu năng đồ họa cao, màn hình Retina hiển thị siêu nét cùng với hệ thống bảo mật tối ưu.",
    description:
      "Chip M1 được Apple thiết kế dành riêng cho MacBook mang đến hiệu năng vượt trội. Thực hiện tốt các tác vụ văn phòng trên các phần mềm như Word, Excel, Powerpoint,... Thiết kế đồ hoạ cũng chuyên nghiệp không kém, cho phép bạn chỉnh sửa hình ảnh với dung lượng lớn, kết xuất 2D mượt mà trên các phần mềm Photoshop, AI, Figma,..Card đồ họa GPU 7 nhân đem lại hiệu suất cao đáng kinh ngạc, đồ họa cao hơn gấp 5 lần, thoả sức sáng tạo nội dung, kết xuất 3D ổn định, render video, phát trực tiếp với chất lượng cao với chất ảnh sắc nét cùng độ phân giải lên đến 4K..",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "15",
    productName: "Macbook Pro M2",
    imgUrl: productImg15,
    category: "chair",
    price: 800,
    shortDesc:
      "Sở hữu thiết kế thanh lịch, sang trọng cùng hiệu năng vượt trội đến từ bộ vi xử lý Apple M2 tân tiến, Macbook Pro M2 hứa hẹn sẽ đáp ứng hoàn hảo cho người dùng sáng tạo, phục vụ tốt cho các nhu cầu thiết kế đồ họa nâng cao.",
    description:
      "MacBook Pro 13 inch là thiết bị đầu tiên được trang bị bộ vi xử lý M2 hoàn toàn mới của Apple. Mặc dù công ty cho biết M1 Pro và M1 Max vẫn sẽ có lợi thế hơn về hiệu suất nhờ có thêm lõi nhưng M2 thể hiện một bước tiến khá lớn so với M1.      ",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "16",
    productName: "MacBook Pro M1 Max",
    imgUrl: productImg16,
    category: "chair",
    price: 1000,
    shortDesc:
      "Khoác lên mình vẻ ngoài mới lạ so với các dòng Mac trước đó, thiết kế màn hình tai thỏ ấn tượng, bắt mắt cùng bộ hiệu năng đỉnh cao M1 Max mạnh mẽ, MacBook Pro 14 inch M1 Max 2021 xứng tầm là chiếc laptop cao cấp chuyên dụng dành cho dân kỹ thuật - đồ họa, sáng tạo nội dung.",
    description:
      "Sức mạnh hiệu năng siêu cấp, đỉnh cao đến từ MacBook M1 Max mang cấu trúc 10 nhân cho tốc độ băng trong lên đến 400 GB/s memory bandwidth nhanh hơn khoảng 70% so với thế hệ tiền nhiệm Apple M1, cung cấp tốc độ xử lý đáng kinh ngạc, giải quyết tối ưu mọi công việc văn phòng như soạn thảo hợp đồng, văn bản trên các phần mềm Word, nhập liệu hay thống kế trên Excel,... đến thiết kế đồ họa, posters, banners, sáng tạo nội dung chuyên nghiệp bằng các công cụ Figma",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "17",
    productName: "Macbook Pro 16",
    imgUrl: productImg17,
    category: "chair",
    price: 800,
    shortDesc:
      "Thật ấn tượng với Apple MacBook Pro 16 M1 Max 2021 mang trên mình bộ áo mới độc đáo, cuốn hút mọi ánh nhìn cùng màn hình tai thỏ lần đầu tiên xuất hiện ở dòng Mac và ẩn bên trong là bộ cấu hình mạnh mẽ tuyệt vời đến từ con chip M1 Max tân tiến.",
    description:
      "MacBook Pro 16 inch với những cải tiến vượt bậc về mặt hiệu năng, hứa hẹn giúp người dùng có trải nghiệm mượt mà trong các tác vụ nặng như chỉnh sửa hình ảnh phức tạp, render video,... hướng đến đối tượng người dùng có nhu cầu sản xuất, sáng tạo nội dung, kỹ thuật, công nghệ chuyên nghiệp.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "19",
    productName: "Apple Watch S3",
    imgUrl: productImg19,
    seller : "1",
    category: "watch",
    price: 400,
    shortDesc:
      "Mua kèm Apple Watch ưu đãi thêm (Tuỳ sản phẩm và không áp dụng khuyến mãi khác của sản phẩm mua kèm)",
    description:
      "Apple Watch S3 GPS 38 mm viền nhôm dây silicone trắng sở hữu màn hình công nghệ OLED kích thước 1.5 inch, độ phân giải 340 x 272 pixels cho khả năng hiển thị rõ ràng, sắc nét. Trang bị khung viền nhôm cứng cáp và mặt kính Ion-X strengthened glass giúp bảo vệ đồng hồ an toàn. Dây đeo silicone có độ bền cao, chống thấm nước, êm nhẹ, mang đến cho bạn cảm giác thoải mái, dễ chịu.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "20",
    productName: "Apple Watch S5",
    imgUrl: productImg20,
    category: "watch",
    price: 500,
    shortDesc:
      "Giảm 10% gói Bảo hiểm rơi vỡ PTI 6 tháng ",
    description:
      "Apple Watch S6 LTE 40mm viền thép dây silicone đen là một trong những dòng đồng hồ được ưa chuộng với thiết kế tinh tế trong từng chi tiết, khung viền được gia công chắc chắn, dây đeo silicone đàn hồi tốt, màn hình sắc nét 1.57 inch hiển thị đủ thông tin. Đây là chiếc đồng hồ hứa hẹn đem đến cho bạn sự hài lòng khi đeo trên tay.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "21",
    productName: "Apple Watch S6",
    imgUrl: productImg21,
    category: "watch",
    price: 676,
    shortDesc:
      "Trong sự kiện ra mắt sản phẩm thường niên vào tháng 9/2022, bên cạnh các sản phẩm điện thoại luôn thu hút sự chú ý của giới công nghệ, Apple cũng trình làng các sản phẩm smartwatch kế nhiệm của dòng Apple Watch S7 mang tên đồng hồ thông minh Apple Watch Series 8.",
    description:
      "Vẫn mang một thiết kế quen thuộc của các thế hệ trước, đồng hồ thông minh Apple Watch S8 LTE 41mm viền thép sở hữu viền màn hình siêu mỏng kết hợp khung chữ nhật bo cong 4 cạnh mang lại diện mạo liền mạch, tinh tế cho chiếc đồng hồ..",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "22",
    productName: "Apple Watch S8",
    imgUrl: productImg22,
    category: "watch",
    price: 600,
    shortDesc:
      "Thu cũ đổi mới tặng thêm 500,000đ.",
    description:
      "Phần mặt đồng hồ được chế tác theo dạng hình chữ nhật tinh tế, tỉ mỉ với các góc được bo tròn mềm mại. Chất liệu kính cường lực Ion-X bền bỉ, cho khả năng chịu lực tốt hơn đến 2.5 lần các dòng đồng hồ sử dụng kính thông thường nhưng khối lượng thì lại nhẹ hơn.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "23",
    productName: "AirPods Pro 2",
    imgUrl: productImg23,
    category: "wireless",
    price: 300,
    shortDesc:
      "Thiết kế tai nghe AirPods Pro 2 gọn nhẹ, kiểu dáng hiện đại",
    description:
      "Về phần thiết kế, nhà Apple vẫn giữ nguyên kiểu dáng quen thuộc của những phiên bản tiền nhiệm trước đó như: Thiết kế gọn nhẹ, đường bo góc tinh tế, gam màu trắng trang nhã bao bọc trọn vẹn tai nghe và hộp sạc.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "24",
    productName: "AirPods Pro 3",
    imgUrl: productImg24,
    category: "wireless",
    price: 350,
    shortDesc:
      "TThiết kế tai nghe nhỏ gọn với màu trắng sang trọng vốn quen thuộc trên các dòng tai nghe Apple. Dạng tai nghe Earbuds cho cảm giác thoải mái khi đeo.",
    description:
      "Tai nghe Bluetooth AirPods 3 Lightning Charge Apple MPNY3 Trắng sở hữu thiết kế gọn nhẹ, màu sắc trang nhã cùng nhiều công nghệ hiện đại đang chờ đón các iFan như: kết nối Bluetooth, Adaptive EQ, Chip Apple H1,...",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "25",
    productName: "AirPods Wireless S2",
    imgUrl: productImg25,
    category: "wireless",
    seller : "1",
    price: 400,
    shortDesc:
      "Thiết kế nhỏ gọn, dễ dàng đem theo bất cứ đâu",
    description:
      "Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22 nổi bật với kiểu dáng gọn gàng, sang trọng và được thiết kế theo dạng In-ear thay vì Earbuds như AirPods 2. Tính năng này cho phép tai nghe chống ồn tốt hơn, khó rớt khi đeo và đặc biệt là êm tai hơn.",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "26",
    productName: "AirPods Max Apple",
    imgUrl: productImg26,
    category: "wireless",
    price: 500,
    shortDesc:
      "Sang trọng với lớp vỏ kim loại sáng bóng, bền bỉ, lựa chọn dễ dàng theo sở thích với màu sắc đa dạng",
    description:
      "Tai Bluetooth AirPods Max Apple MGYH3/ MGYJ3/ MGYL3 dễ dàng cuốn hút bạn ngay từ cái nhìn đầu tiên, với nét sang trọng và cực kỳ tinh tế đến từ sự tối giản trong thiết kế và màu sắc, tạo sự khác biệt ấn tượng với các sản phẩm tai nghe hiện có trên thị trường",
    reviews: [
      {
        rating: 4.3,
        text: "Sản phẩm rất tốt.",
      },
    ],
    avgRating: 4.5,
  },
];

export default products;
